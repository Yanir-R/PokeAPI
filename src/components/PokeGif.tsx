import React from "react";

export const PokeGif: React.FC<any> = ({ url, name }: any) => {
    return (

        <ul key={url}>{name}</ul>

    )
}