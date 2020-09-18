import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import OnlineExpiriences from './OnlineExpiriences';

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="card__container">
                <Card
                    image="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Atrakcje online"
                    description="Wyjątkowe zajęcia prowadzone przez gospodarzy z całego świata"
                />
                <Card
                    image="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Wyjątkowe miejsca na pobyt"
                    description="Domy, które są czymś więcej niż tylko miejscem do spania"

                />
                <Card
                    image="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Całe domy"
                    description="Wygodne prywatne miejsca na pobyt z rodziną lub znajomymi" />

            </div>
            <div className="online__expiriences">
                <OnlineExpiriences />
            </div>


        </div>

    )
}

export default Home


