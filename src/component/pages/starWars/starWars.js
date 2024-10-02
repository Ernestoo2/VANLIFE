import React from "react"

export default function StarWars() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    async function fetchStarWarsData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors appropriately (e.g., display an error message to the user)
        }
    }

    const url = 'https://swapi.dev/api/people/1';

    fetchStarWarsData(url)
        .then(data => setStarWarsData(data))
        .catch(error => {
            console.error('Error fetching Api: ', error)
            // Handle errors if the fetch fails
        });


    React.useEffect(function () {
        const url = `https://swapi.dev/api/people/${count}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
            .catch(error => {
                console.error('Error fetching Api:', error);
                // Optionally display an error message to the user here
            });
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}


