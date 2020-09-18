import React from 'react'
import './ResultCard.css'
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import setRoomIndex from './actions/setingIndex'
import { useDispatch } from 'react-redux'

function ResultCard({ image, description, rating, price, toCenter, index }) {

    const [showRedHeart, setShowRedHeart] = useState(false)
    const history = useHistory();
    const dispatcher = useDispatch()

    const getRoomPage = () => {
        dispatcher(setRoomIndex(index))
        history.push('/search/room')
    }

    return (
        <div id={index} className="resultCard" onClick={getRoomPage}>

            <img src={image} alt="" />
            <Button
                onClick={() => setShowRedHeart(!showRedHeart)} >
                {<FavoriteIcon className={!showRedHeart ? "resultCard__heartGray" : "resultCard__heartRed"} />}
            </Button>
            <div className="resultCard__ratingWstar">
                <p className="resultCard__rating">{(rating === '0' || rating === null) ? '4' : rating / 2}</p>
                <StarIcon className="resultCard__star" />
            </div>
            <p className="resultCard__description">{description}</p>
            {toCenter !== '' ? <p className="resultCard__toCenter">{toCenter}</p> : null}
            <p className="resultCard__price">{price}/noc</p>
        </div>
    )
}

export default ResultCard


