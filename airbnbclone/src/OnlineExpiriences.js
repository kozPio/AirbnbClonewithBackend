import React from 'react';
import './scss/OnlineExpiriences.scss';
import { Button } from '@material-ui/core';

function OnlineExpiriences() {
    return (
        <div className="onlineExpiriences">
            <div className="header__exp">
                <div className="header__expText">
                    <h1>Atrakcje online z Broadwayu</h1>
                    <p>Dołącz do interaktywnych występów na żywo i rozmów z osobami pracującymi na Broadwayu i nie tylko. Wszystko bez wychodzenia z domu.</p>
                </div>

                <Button>Zobacz wszystkie</Button>
            </div>
            <div className="left">
                <img src="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=1200" alt="" ></img>
                <p >Dzień z życia tancerki w Las Vegas</p>
            </div>
            <div className="topRightbox1">
                <img src="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=480" alt="" />
                <p >Rozkoszuj się wieczorem pełnym muzyki i dobrych fluidów</p>
            </div>
            <div className="topRightbox2">
                <img src="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=480" alt="" />
                <p >Noc magii i czytania w myślach</p>
            </div>
            <div className="bottomRight">
                <img src="https://a0.muscache.com/im/pictures/d88db0e7-ef5b-49c6-ae07-af3525ac252f.jpg?im_w=1200" alt="" />
                <p >Weż udział w musicalu na żywo</p>
            </div>

        </div>
    )
}

export default OnlineExpiriences
