// src/components/CharacterDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const characters = {
        1: { name: 'Spider-Man', description: 'Friendly neighborhood Spide-Man' },
        2. { name: 'Iron Man', description: 'Genius, billionere, playboy, philantropist' },
        // Add more character details
    };
    const character = characters[id];

    return (
        <div>
            {character ? (
                <>
                  <h1>{character.name}</h1>
                  <p>{character.description}</p>
                </>
            ) : (
              <p>Character not found.</p>
            )}
        </div>

    );
};

export default CharacterDetails;

