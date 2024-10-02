import React from "react";
import Joke from "./jokes";
import jokes from "./jokes.json";


export default function JokesApp() {
    const jokeElements = jokes.map(jokes => {
        return <Joke setup={jokes.setup} punchline={jokes.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}