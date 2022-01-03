
import React from 'react';
import { EventDashboard } from '../../featured/events/eventDashboard/EventDashboard';
import NavBar from '../../featured/nav/NavBar';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Container>
    <EventDashboard />
    </Container>
    </div>
  );
}

export default App;
