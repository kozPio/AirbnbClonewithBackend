import { DateRangePicker } from 'react-date-range';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './scss/SearchDate.scss'
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import roomdata from './actions/setingRooms';


function SearchDate() {

    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const inputValue = useSelector(state => state.input)
    const dispatcher = useDispatch()




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

        if (inputValue === '') {
            return
        }
        const location = inputValue;
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
            }).then(() => {
                history.push('/search');
            })

    }



    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />

            <h2>Liczba Gości
                <PeopleIcon />
            </h2>
            <input min={0}
                defaultValue={2}
                type="number" />
            <Button onClick={getLocation}>Szukaj w Airbnb</Button>

        </div>



    )
}

export default SearchDate
