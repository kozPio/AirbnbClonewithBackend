import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './RoomPage.css'
import StarIcon from '@material-ui/icons/Star';
import ResultCard from './ResultCard'

function RoomPage() {
    const room = useSelector(state => state.rooms)
    const roomIndex = useSelector(state => state.curentIndex)
    const [oldIndex, setOldIndex] = useState(null);


    useEffect(() => {
        if (room) {
            document.getElementById(`${roomIndex}`).classList.add("resultCard__hide")
            setOldIndex(roomIndex)
            if (oldIndex) {
                document.getElementById(`${oldIndex}`).classList.remove("resultCard__hide")
            }
        }

    }, [roomIndex])


    return (
        <div>

            {room && (<div className="roomPage"><h2 className="roomPage__title">{room[roomIndex].title}</h2>
                <div className="roomPage__headinfo">
                    <StarIcon className="roomPage__starIcon" />
                    <p>{(room[roomIndex].rating === '0' || room[roomIndex].rating === null) ? '4' : room[roomIndex].rating / 2}</p>
                    <p>{room[roomIndex].location}</p>

                </div>

                <div className="roomPage__imagesContainer">
                    <div className="roomPage__image1 imageHover"><img src={room[roomIndex].images[0].medium} alt="" /></div>
                    <div className="roomPage__image2 imageHover"><img src={room[roomIndex].images[1].medium} alt="" /></div>
                    <div className="roomPage__image3 imageHover"><img src={room[roomIndex].images[2].medium} alt="" /></div>
                    <div className="roomPage__image4 imageHover"><img src={room[roomIndex].images[3].medium} alt="" /></div>
                    <div className="roomPage__image5 imageHover"><img src={room[roomIndex]?.images[4].medium} alt="" /></div>
                </div>
                <div className="roomPage__bottomInfo">
                    <p className="roomPage__price">Cena za jedną noc {room[roomIndex].price}</p>
                    <p>Liczba gości: {(room[roomIndex].guests === "0" || room[roomIndex].guests === null) ? '2' : room[roomIndex].guests}</p>
                </div>


                <div className="roomPage__description"><div className="roomPage__descriptionTitle">{room[roomIndex].title}</div>{room[roomIndex].description}</div>
                {room && <h2 className="roomPage__otherResultsHeader">Inne mieszkania w okolicy</h2>}
                <div className="roomPage__otherResults"> {room && room.map((room, index) => (


                    <ResultCard
                        index={index}
                        key={index}
                        location={room.location}
                        guests={room.guests}
                        image={room.images[0].small}
                        description={room?.title}
                        rating={room.rating}
                        price={room.price}
                        toCenter={room.toCenter}
                    />



                ))} </div>
            </div>)}

        </div>
    )
}

export default RoomPage

