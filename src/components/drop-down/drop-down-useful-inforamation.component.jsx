import React from 'react';
import {  Dropdown } from 'react-bootstrap';

function DropdownUsefulInformation() {
 return (

  <div>
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic" className='caret-up'>
          Useful Information
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/c4">Madcap University</Dropdown.Item>
          <Dropdown.Item href="https://madcapuniversity.com/blogs/articles-and-product-reviews"> Articles on Madcap University</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/pages/podcasts">Podcasts</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/pages/keep-informed"> Community</Dropdown.Item>
          <Dropdown.Item href="https://shoppuppyculture.com/pages/promote"> Promote</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
  </div>
    
 );
}

export default DropdownUsefulInformation;