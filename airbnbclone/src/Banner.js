import React, { useState } from 'react'
import './scss/Banner.scss'
import { Button } from '@material-ui/core';
import SearchDate from './SearchDate';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import roomdata from './actions/setingRooms';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false)
    const dispatcher = useDispatch();


    const assignRoomData = (rooms) => {
        let listOfRooms = [];
        rooms.forEach((room, index) => {
            let roomdata = {
                title: room.title,
                images: room.images,
                location: room.location,
                toCenter: room.toCenter,
                price: room.price,
                guests: room.guests,
                description: room.description,
                rating: room.rating,
                extras: room.extras,
                latLong: room.latLong
            }
            listOfRooms.push(roomdata)


        })

        dispatcher(roomdata(listOfRooms));


    }

    const getLocation = () => {
        const location = 'Wrocław'
        const API_URL = `https://airbnbrequestget.herokuapp.com/api/rooms?location=${location}`;
        fetch(API_URL)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(response.status)
                }
            }).then((data) => {
                if (data.length > 0) {
                    assignRoomData(data)
                }
            })


        history.push('/search');

    }

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <SearchDate />}


                <Button

                    onClick={() => setShowSearch(!showSearch)}
                    className="banner__searchButton"
                    variant="outlined">{showSearch ? "Ukryj" : "Szukaj Daty"}</Button>

            </div>

            <div className="banner__left">
                <h2>Bliskie podróże są teraz na czasie</h2>
                <h5>Nie musisz wyjeżdżać daleko, żeby odkryć nieznane skarby.</h5>
                <Button onClick={getLocation}>Odkrywaj okolicę</Button>
            </div>
        </div>
    )
}

export default Banner
