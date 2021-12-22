import React from "react";
import '../App.css'

export const PokeGif: React.FC<any> = ({ name, base_experience, image }) => {
    return (
        <body>
            <section>
                <div className="container">
                    <div className="card">
                        <div className="content">
                            <img className="imgBx" src={image} alt="img" />
                            <div className="contentBx" >
                                <h3>{name}<br />
                                    <span>{base_experience}</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="*"  >Read More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </body>
    )
}