const mongoose = require('mongoose');
const express = require('express');
const Rooms = require('./api/rooms/rooms');

const app = express();
const port = process.env.PORT || 8080;


const zl = "z\u0142"

mongoose.connect(`mongodb+srv://PIotr:${process.env.MOONGODB_KEY}@cluster0.wvtpe.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});




app.use(express.json({
    limit: '50mb'
}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res) => res.send('Hello Naz'))

app.get('/up', (req, res) => res.send('Updated'))


app.get('/test', (req, res) => {
    Rooms.find({
        location: "Opole",
        price: "121 z\u0142"

    }, (err, rooms) => {
        if (err) {
            res.status('500').send(err)
        } else {
            res.status('200').send(rooms)
        }
    })
})

app.post('/api/rooms', (req, res) => {
    let dbRooms = [];
    let rooms = req.body;

    rooms.forEach((room) => {

        dbRooms.push({
            title: room.name,
            images: room.images,
            location: room.location.level3,
            toCenter: room.locationTrailHeading.toCenterShort,
            price: room.price.perNight,
            // price: (room.analyticsSnowPlow.offer.pricePerNight * 2) + ' ' + zl,
            guests: room.persons,
            description: room.description.object.content,
            rating: room.analytics.rating,
            extras: room.analytics.amenities,
            latLong: room.geoLocation
        })
    });
    Rooms.create(dbRooms, (err, rooms) => {
        if (err) {
            res.status('500').send(err);
        } else {
            res.status(200).send(rooms);
        }
    })

    // res.send(dbRooms)


})


app.get('/api/rooms', (req, res) => {
    let location = req.query.location;
    Rooms.find({
        location: location
    }, (err, rooms) => {
        if (err) {
            res.status('500').send(err)
        } else {
            res.status('200').send(rooms)
        }
    })
})


app.delete('/api/rooms', (req, res) => {
    Rooms.deleteMany({}, (err) => {
        res.status(200).send(err);
    })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))