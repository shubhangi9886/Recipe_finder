import React from 'react';


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipes_box">
            <img className="image" src={image} alt="" />
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
        </div>
    );
};

export default Recipe;