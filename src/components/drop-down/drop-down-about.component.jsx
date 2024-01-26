import React from 'react';
import {  Dropdown } from 'react-bootstrap';

function DropdownAbout() {
 return (

  <div>
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic" className='caret-up'>
          About
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/Whypuppyculture?"> Puppy Culture</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/pages/about-our-founder">Our Founder, Jane</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
  </div>
    
 );
}

export default DropdownAbout;