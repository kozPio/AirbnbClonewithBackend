import React, { useEffect } from 'react'
import { useGoogleMaps } from "react-hook-google-maps";
import { useSelector } from 'react-redux';
import './GoogleMap.css';





const GoogleMap = ({ location }) => {

    const room = useSelector(state => state.rooms)

    const mapStyles = {
        width: 350,
        height: 500,
        top: '15vh'
    };

    const { ref, map, google } = useGoogleMaps(

        'AIzaSyCLKFKkSLV6CyHjnVu5QwzdtDjLBJklBQU',

        {
            center: { lat: location.lat, lng: location.lng },
            zoom: 12,
        },
    );


    useEffect(() => {
        if (map) {
            map.setCenter({ lat: room[0].latLong.lat, lng: room[0].latLong.lon })
        }

    }, [room]);


    if (map) {
        if (room) {
            room.forEach((room,) => {
                let html = `${room.title} <br> <b>${room.price}`
                let marker = new google.maps.Marker({ position: { lat: room.latLong.lat, lng: room.latLong.lon }, map: map, title: room.title });
                let infoWindow = new google.maps.InfoWindow()
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(html);
                    infoWindow.open(map, marker);
                });


            })
        }

    }

    return <div id="mapId" ref={ref} style={mapStyles} />;
};





export default GoogleMap;
    //apiKey: 'AIzaSyCLKFKkSLV6CyHjnVu5QwzdtDjLBJklBQU'

