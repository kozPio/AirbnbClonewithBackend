import React from 'react'
import './Card.css'

function Card({ image, title, description }) {
    return (
        <div className="card">
            <img className="image" src={image} width="720" height="300" alt=""></img>
            <div className="card__info">
                <p className="title">{title}</p>
                <p className="description">{description}</p>

            </div>


        </div>
    )
}

export default Card
