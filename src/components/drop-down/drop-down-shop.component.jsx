import React from 'react';
import { Dropdown } from 'react-bootstrap';

function DropdownShop() {
 
 return (

  <div>
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic" className='caret-up'>
          Shop
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="https://shoppuppyculture.com/collections/all">All</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/collections/buy-dvds2">DVDS</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/collections/dvd-bundles">DVD Bundels</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/collections/buy-video-on-demand">Video On Demand</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/collections/bundles">Video On Demand Bundles</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/collections/books-1">Books</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/products/puppy-fitness-poster">Posters</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/collections/buy-gear">Gear</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/products/gift-cards">Gift Cards</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/pages/madcap-university-courses">Courses</Dropdown.Item>
      
        </Dropdown.Menu>
      </Dropdown>
  </div>
    
 );
}

export default DropdownShop;