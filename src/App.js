import React, { Component } from 'react';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

import './css/animations.css';
import './App.css';
import './nprogress.css';

import WelcomeScreen from './WelcomeScreen';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { ErrorAlert, SuccessAlert, WarningAlert } from './Alert';

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
    show: false,
    errorText: '',
    successMessage: '',
    offlineList: '',
    filtersResetMessage: '',
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

  // Functions For Offcanvas Component
  handleClose = () => {
    this.setState({
      show: false,
      successMessage: `We found you ${(this.state.events).length} events in ${this.state.currentLocation}!`,
      filtersResetMessage: '',
    });
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  }

  onResetList = () => {
    this.setState({
      currentLocation: 'all',
      successMessage: '',
      numberOfEvents: 32,
      filtersResetMessage: 'Filters Reset!',
      errorText: '',
    });
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className='app' />
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
        <div className={this.state.displayOverlay}>
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
          <Button className='findEventButton' variant="light" onClick={this.handleShow}>
            Find A Event
          </Button>
          <SuccessAlert text={this.state.successMessage} />
          <Offcanvas show={this.state.show} onHide={this.handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Search</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='sidebarMenu'>
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} events={this.state.events} />
              <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={this.state.numberOfEvents} />
              <ErrorAlert text={this.state.errorText} />
              <Button onClick={this.handleClose} >Search</Button>
              <SuccessAlert text={this.state.filtersResetMessage} />
              <Button onClick={this.onResetList} variant='warning'>Reset Filters</Button>
            </Offcanvas.Body>
          </Offcanvas>
        </section>
        { /* FILTER SEARCH — END */}

        { /* EVENTS */}
        {!navigator.onLine ? (<WarningAlert text='Oh no! You are offline :(' />) : (<WarningAlert text='' />)}
        {await getEvents() ? (<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>)
          :
          (
            <section className='eventListAll'>
              <EventList events={this.state.events} />
            </section>
          )}
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
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </Container>
    );
  }
}

export default App;
