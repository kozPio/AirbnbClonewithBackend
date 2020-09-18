import React from 'react';
import './SearchResults.css';
import ResultCard from './ResultCard';
import { useSelector } from 'react-redux';
import GoogleMap from './GoogleMap'


function SearchResults() {

    const room = useSelector(state => state.rooms)



    return (

        <div className="searchResults">
            <div className="searchResults__upperBody">
                {room ? <h1>{`${room && room[0].location} - pobyty`}</h1> : <h1>Niestety w podanej lokalizacji nie ma dostępnych pobytów</h1>}
                <div className="searchResults__resultCard">

                    {room && room.map((room, index) => (
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
                    ))}

                </div>
            </div>
            <div className="searchResults__map"> {room && <GoogleMap location={{ lat: room[0].latLong.lat, lng: room[0].latLong.lon }} />}</div>
        </div>
    )
}

export default SearchResults;




