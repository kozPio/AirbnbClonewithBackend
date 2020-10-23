# AirbnbClonewithBackend
Full app with frontend and backend


# This is a clone of airbnb website

It is build with MERN (MangoDb, Express, React with hooks, and Node) and Google Maps are also Implemented to show the rooms on the map

# Functionality

Database contains most of the big cities from Poland ( Wrocław, Warszawa, Gdańsk, Opole, Kraków, etc..) there are around 20 room results for every location available.

You can type Name of the location in the search bar (First letter needs to be Upper Case and polish letters when applicable are not replacable example: Wrocław here l will not replace ł)

I hid the password to my database for security resons  so if you want to check those functions you can check deployed app here: https://airbnb-clone-c8ee4.web.app
or connect your own database and uplode a sample (database for one city ) from the airbnbCloneApi/backendAIRBNB/rooms.data.json. You will also need to change the url for fetching the data from the api to localhost if you will run the api on you localhost (the url is both in banner component and header component)

When you' ve got your search results you can click on any room and page for that room will be displayed with picutres, price,discription if availble(some data in db don't have one) and list of other rooms in the chosen location (excluding the currently displayed one)  when you click on one of the rooms in other rooms section curently displayed room will change to the one you clicked on and it will disapear from the other rooms also the room that was displayed before will now be included in the other rooms list.


You will also have to relace the apiKey for Google Maps (it is located in the GoogleMap component)

# Api

App is fetching the data from the api deployed on heroku. Data is being filtered by name of the location. 

#Author and Disclaimers

The author of this clone is  Piotr Kozłowski.

This web app is based on the airbnb and it serves only presentational purposes.



#Just testing git

#lests see if this works