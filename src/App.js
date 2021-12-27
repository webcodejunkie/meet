import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';

import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import { Container, Navbar } from 'react-bootstrap';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    displayOverlay: 'overlayInfo',
  }

  componentDidMount() {
    const { numberOfEvents } = this.state;

    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = async (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location
        });
      }
    });
  }

  updateNumberOfEvents = async (e) => {
    const newEventNum = e.target.value ? parseInt(e.target.value) : 32;
    if (newEventNum < 1 || newEventNum > 32) {
      this.setState({
        numberOfEvents: 0
      });
    } else {
      this.setState({
        numberOfEvents: newEventNum
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  }

  hideOverlay = () => {
    this.setState({
      displayOverlay: 'hideOverlayInfo'
    });
  }


  render() {
    return (
      <Container fluid className='d-flex app'>
        { /*HEADER*/}
        <header className='header'>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt="site-logo"
                  src="https://via.placeholder.com/30"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Meet App
              </Navbar.Brand>
              <Navbar.Text>
                <p>
                  Bringing you events easily since 2020..
                </p>
              </Navbar.Text>
            </Container>
          </Navbar>
        </header>
        { /*HEADER — END*/}

        { /* OVERLAY MENU */}
        <div className={this.state.displayOverlay}>
          <section className='overlayHeader'>
            <h1> Welcome to Meet! The Serverless Function, Cloud Computing, Application Build with React! </h1>
            <p>Jump right into the fun! <br /> For more information on how to get started. Visit the Meet GitHub</p>
            <a target='_blank' rel='noreferrer' href='https://github.com/webcodejunkie/meet'>Meet GitHub</a>
          </section>

          <section className='overlayCloseButton'>
            <div className='onExitButton' onClick={this.hideOverlay}>╳</div>
          </section>
        </div>
        { /* OVERLAY MENU — END */}

        { /* FILTER SEARCH */}
        <section className='text-input'>
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} events={this.state.events} />
          <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={this.state.numberOfEvents} />
        </section>
        { /* FILTER SEARCH — END */}

        { /* EVENTS */}
        <section className='eventListAll'>
          <EventList events={this.state.events} />
        </section>
        { /* EVENTS — END */}

        { /* FOOTER */}
        <footer className='footerbar'>
          <div>
            <h6>Copyright @ MeetApp</h6>
          </div>
        </footer>
        { /* FOOTER — END */}
      </Container>
    );
  }
}

export default App;
