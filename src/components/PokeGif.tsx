import React from "react";

export const PokeGif: React.FC<any> = ({ name, base_experience, image }) => {
    return (
        <div>
            <ul>{name}</ul>
            <ul>{base_experience}</ul>
            <img src={image} alt="img" />

        </div>
    )
}