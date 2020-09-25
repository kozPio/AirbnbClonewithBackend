import React from 'react';
import Home from './Home'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchResults from './SearchResults'
import Footer from './Footer';
import RoomPage from './RoomPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />

          <Switch>

            <Route path="/search/room">
              <RoomPage />
            </Route>
            <Route path="/search">
              <SearchResults />
            </Route>

            <Route path="/">
              <Home />

            </Route>


          </Switch>

          <Footer />
        </Router>

      </header>
    </div>
  );
}

export default App;
