import React from 'react';
import Search from '../../assets/search-icon.svg';
import './search.styles.scss';
const  SearchIcon=()=> {

    return (

        <div class="input-group rounded">
        <a href='https://shoppuppyculture.com/search?q=&options%5Bprefix%5D=last'>
            <img src={Search} />
        </a>
        </div>

    );
  };
  

export default SearchIcon;
