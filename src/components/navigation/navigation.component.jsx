import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
// import SearchIcon from '../../assets/search-icon.svg';
import DropdownAbout from '../drop-down/drop-down-about.component.jsx';
import DropdownShop from '../drop-down/drop-down-shop.component.jsx';
import DropdownUsefulInformation from '../drop-down/drop-down-useful-inforamation.component.jsx';
import SearchIcon from '../search/search.component.jsx';
import './navigation.styles.scss';
import Search from '../../assets/search-icon.svg';
// import ShopOurProducts from '../shop-our-products/shop-our-products.component.jsx';
import GetStarted from '../get-started/get-started.component.jsx';


const Navigation  =() =>{
  
  return(
    
    
    
  <div className='middle'>
    <nav>
        <Link  className='navbar-logo' to='/'>
          <img src={Logo} width={120} height={90.24}/>
        </Link>
    <div>
      
      <ul id='navbar' >
      <li className='get'>  
        <GetStarted />
      </li>
      <li className='shop'>
      
        <DropdownShop/>
       
      </li>
      <li className='info'>
        <DropdownUsefulInformation/>
      </li>
      <li className='about'>
        <DropdownAbout/>
       
      </li>
      <li>
        <Link to='/search'>
          <img src={Search}/>
        </Link>
      {/* <SearchIcon/> */}
      </li>
      
    </ul>
    </div>
    </nav>
    {/* <div>
      <ShopOurProducts/>
    </div> */}
    {/* <div><ShopOurProductHome/></div> */}
  
  </div>

   
  )
}

export default Navigation;