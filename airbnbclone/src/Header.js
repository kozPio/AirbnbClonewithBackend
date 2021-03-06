import React, { useState, useEffect } from 'react'
import './scss/Header.scss'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import roomdata from './actions/setingRooms';
import setingInput from './actions/settingInput'
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Header() {

    const [input, setInput] = useState("")
    const history = useHistory();
    const dispatcher = useDispatch()
    const [showMenu, setShowMenu] = useState(false)





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


    useEffect(() => {
        dispatcher(setingInput(input))
    }, [input])


    const onEnter = (e) => {
        if (e.key === "Enter") {
            getLocation()

        }
    }


    const getLocation = () => {

        if (input === '') {
            return
        }
        const location = input;
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

    const toggleMenu = () => {
        const hamburger = document.querySelector('.header__right__btn__burger')
        const nav = document.querySelector('.header__right__mobileNav')
        const menuNav = document.querySelector('.header__right__mobileNav__menu')
        if (!showMenu) {
            hamburger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open')
            setShowMenu(!showMenu)
        } else {
            hamburger.classList.remove('open')
            nav.classList.remove('open');
            menuNav.classList.remove('open')
            setShowMenu(!showMenu)
        }
    }

    return (
        <div className="header">

            <Link to="/">
                <img className="header__logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""></img>
            </Link>
            <div className="header__searchbar">

                <input value={input} type="text" onChange={e => setInput(e.target.value)} onKeyUp={onEnter}></input>
                <IconButton
                    size="small"
                    onClick={getLocation}>
                    <SearchIcon />
                </IconButton>


            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />


            </div>

            <div className="header__right__btn" onClick={toggleMenu}>
                <span className="header__right__btn__burger"></span>

            </div>

            <div className="header__right__mobileNav">
                <div className="header__right__mobileNav__menu">
                    <div className="header__right__mobileNav__tekst">Zostań Gospodarzem</div>
                    <div className="header__right__mobileNav__tekst"> Zmień język </div>
                </div>
            </div>


        </div>
    )
}

export default Header
