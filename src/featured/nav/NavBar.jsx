import React from 'react';

import { Container, Menu, MenuItem, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function NavBar() {
  return(
      <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
              <img src="./assests/logo.png" alt="logo" />  
              Revent Items
            </Menu.Item>
            <Menu name='Events' />
            <Menu.Item>
              <Button positive inverted content='Create Event'/>
            </Menu.Item>
            <Menu.Item>
              <Button positive inverted content='Login'/>
              <Button positive inverted content='Register' style={{marginLeft:"0.5em"}}/>
            </Menu.Item>

        </Container>
      </Menu>
  )
}