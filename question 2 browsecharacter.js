// src/components/BrowseCharacters.js
import React from 'react';
import {Link} from 'react-router-dom';

const BrowseCharacters = () => {
    const character = [
        {id: 1, name: 'Spider-Man'},
        {id: 2, name: 'Iron Man'},
        // Add more characters
    ];

    return (
        <div>
            <h1>Browse Characters</h1>
            <u1>
                {characters.map((char) => (
                    <li key={char.id}>
                        <Link to={`/character/${char.id}`}>{char.name}</Link>
                    </li>

                ))}
            </u1>
        </div>       
    );
};

export default BrowseCharacters;
