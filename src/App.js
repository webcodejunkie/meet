import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

import './css/animations.css';
import './App.css';
import './nprogress.css';

import WelcomeScreen from './WelcomeScreen';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { ErrorAlert, SuccessAlert, WarningAlert } from './Alert';
import EventGenre from './EventGenre';

import { Container, Navbar, Offcanvas, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    showWelcomeScreen: undefined,
    displayOverlay: 'overlayInfo',
    showSearch: false,
    showMetrics: false,
    errorText: '',
    successMessage: '',
    filtersResetMessage: '',
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events,
            locations: extractLocations(events)
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEventsBack = async () => {
    this.setState({
      locations: 'all'
    });
  }

  updateEvents = async (location) => {
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
  // update the number of events ultilzing the NumberOfEvents Component
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
    if (newEventNum === 0 || newEventNum > 32) {
      this.setState({
        errorText: 'Please choose a number not less then 0.',
      });
    } else {
      return this.setState({
        errorText: ''
      });
    }
  }

  // Function For Overlay Menu on Website Start
  hideOverlay = () => {
    this.setState({
      displayOverlay: 'hideOverlayInfo'
    });
  }

  // Open metrics menu
  handleShowMetrics = () => {
    this.setState({
      showMetrics: true,
    });
  }

  // Close metrics menu
  handleCloseMetrics = () => {
    this.setState({
      showMetrics: false,
    });
  }

  // Close search sidebar menu
  handleCloseSearch = () => {
    this.setState({
      showSearch: false,
      successMessage: `We found you ${(this.state.events).length} events in ${this.state.currentLocation}!`,
      filtersResetMessage: '',
    });
  }

  // Show search sidebar menu
  handleShowSearch = () => {
    this.setState({
      showSearch: true,
    });
  }

  // Reset Filters for searching events
  onResetFilters = () => {
    this.setState({
      currentLocation: 'all',
      successMessage: '',
      numberOfEvents: 32,
      filtersResetMessage: 'Filters Reset!',
      errorText: '',
    });
  }
  // Reset the number of events back to default 
  onResetEvents = () => {
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events,
          locations: extractLocations(events),
          successMessage: 'Got you the full list of events!'
        });
      }
    });
  }

  render() {
    const { events, locations, numberOfEvents, showWelcomeScreen, displayOverlay, showSearch, showMetrics, errorText, successMessage, filtersResetMessage } = this.state;

    if (showWelcomeScreen === undefined) return <div className='app' />
    return (
      <Container fluid className='d-flex app'>

        { /*HEADER*/}
        <header className='header'>
          <Navbar bg='primary' variant='dark'>
            <Container>
              <Navbar.Brand href='#home' onClick={this.onResetList}>
                <img
                  alt='site-logo'
                  src='https://via.placeholder.com/30'
                  width='30'
                  height='30'
                  className='d-inline-block align-top'
                />{' '}
                Meet App
              </Navbar.Brand>
              <Navbar.Text>
                <p className='navbarHeaderText'>
                  Bringing you events easily since 2020..
                </p>
              </Navbar.Text>
            </Container>
          </Navbar>
        </header>
        { /*HEADER — END*/}

        { /* OVERLAY MENU */}
        <div className={displayOverlay}>
          <section className='overlayHeader'>
            <h1>The Serverless Function, Cloud Computing, Application Build with React! </h1>
            <p>Jump right into the fun! <br /> For more information on how to get started. Visit the Meet GitHub</p>
            <a target='_blank' rel='noreferrer' href='https://github.com/webcodejunkie/meet'>Meet GitHub</a>
          </section>

          <section className='overlayCloseButton'>
            <div className='onExitButton' onClick={this.hideOverlay}>╳</div>
          </section>
        </div>
        { /* OVERLAY MENU — END */}

        { /* FILTER SEARCH */}
        <section className='filtersTab'>
          <SuccessAlert text={successMessage} />
        </section>
        <Container className='d-flex flex-row justify-content-center filterButtons'>
          <button className='eventButtons findEventButton' onClick={this.handleShowSearch}>Find A Event</button>
          <button className='eventButtons' onClick={this.handleShowMetrics}>Metrics</button>
          <button className='eventButtons' onClick={this.onResetEvents}>All Events</button>
        </Container>
        <Offcanvas show={showSearch} onHide={this.handleCloseSearch}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='sidebarMenu'>
            <CitySearch locations={locations} updateEvents={this.updateEvents} events={events} />
            <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={numberOfEvents} />
            <ErrorAlert text={errorText} />
            <Button variant='warning' onClick={this.onResetFilters}>Reset Filters</Button>
            <SuccessAlert text={filtersResetMessage} />
            <Button onClick={this.handleCloseSearch}>Search</Button>
          </Offcanvas.Body>
        </Offcanvas>
        { /* FILTER SEARCH — END */}

        { /* Metrics — Data Visualization */}

        <Offcanvas show={showMetrics} onHide={this.handleCloseMetrics} placement='top'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Metrics</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='d-flex justify-content-center'>
            <div className='data-vis-wrapper'>
              <h2>City Events Chart</h2>
              <ResponsiveContainer height={400}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20, }}>
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="stature" />
                  <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
              <h2>What's Popular?</h2>
              <EventGenre events={events} />
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        { /* Metrics — Data Visualization — END */}

        { /* EVENTS */}
        {!navigator.onLine ? (<WarningAlert text='Oh no! You are offline :(' />) : (<WarningAlert text='' />)}
        <section className='eventListAll'>
          <EventList events={events} />
        </section>
        { /* EVENTS — END */}

        <div className='movingBallOne ballOne'></div>
        <div className='movingBallTwo ballTwo'></div>
        <div className='movingBallThree ballThree'></div>
        <div className='movingBallFour ballFour'></div>
        { /* FOOTER */}
        <footer className='footerbar'>
          <div>
            <h6>Copyright @ MeetApp</h6>
          </div>
        </footer>
        { /* FOOTER — END */}
        <WelcomeScreen showWelcomeScreen={showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </Container>
    );
  }
}

export default App;
