import React from "react";

export const PokeGif: React.FC<any> = ({ image, name, id }: any) => {
    return (

        <ul key={id}>{name}</ul>

    )
}