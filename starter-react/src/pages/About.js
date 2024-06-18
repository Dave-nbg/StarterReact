// src/pages/Home.js
import React from 'react';
import Weather from "./Weather";
// import Weather2 from "./Weather2";

function About() {
    return (
        <div>
            <h2>about Pagina</h2>
            <p>Welkom op de startpagina!</p>
            <Weather/>
            {/*<Weather2/>*/}
        </div>
    );
}

export default About;
