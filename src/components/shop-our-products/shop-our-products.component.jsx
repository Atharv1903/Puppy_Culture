import BOOKSCOLLECTIONS from '../../assets/BOOK-Collections.jpg';
import DVDBUNDLESCOLLECTIONS from '../../assets/DVD-Bundles-Collections.jpeg';
import DVDCOLLECTIONS from '../../assets/DVD-Collections.jpeg';
import GEARCOLLECTIONS from '../../assets/GEAR-Collections.jpg';
import GIFTCARDCOLLECTIONS from '../../assets/GIFT-Card-Collections.jpg';
import POSTERCOLLECTIONS from '../../assets/Posters-Collections.jpg';
import VODBUNDLESCOLLECTIONS from '../../assets/VOD-Bundles-Collections.jpg';
import VODCOLLECTIONS from '../../assets/VOD-Collections.jpeg';
import './shop-our-products.styles.scss';
//import {Link} from 'react-router-dom';
//import Dvds from '../dvdcomp/dvds.components[1]';

const ShopOurProducts =() =>{
    return(
        <div className='card-container'>
            
            <div>
                <a href="/shop/1"><img src={DVDCOLLECTIONS} width={359.99} height={359.99} /></a>
                {/* <a><Link to = {<Dvds/>}><img src={DVDCOLLECTIONS} width={359.99} height={359.99} /></Link></a> */}
            </div>

            <div>
                <a href='https://shoppuppyculture.com/collections/dvd-bundles'><img src={DVDBUNDLESCOLLECTIONS} width={359.99} height={359.99}/></a>
            </div>
    
            <div>
                <a href='https://shoppuppyculture.com/collections/buy-video-on-demand'><img src={VODCOLLECTIONS} width={359.99} height={359.99}/></a>  
            </div>
           
            <div>
                <a href='https://shoppuppyculture.com/collections/bundles'><img src={VODBUNDLESCOLLECTIONS} width={359.99} height={359.99}/></a>
            </div>

            <div>
               <a href='https://shoppuppyculture.com/collections/books-1'> <img src={BOOKSCOLLECTIONS} width={359.99} height={359.99}/></a>    
            </div>

            <div>
               <a href='https://shoppuppyculture.com/collections/buy-gear'> <img src={GEARCOLLECTIONS} width={359.99} height={359.99}/></a>
            </div>
    
            <div>
               <a href='https://shoppuppyculture.com/collections/books'><img src={POSTERCOLLECTIONS} width={359.99} height={359.99}/></a>
            </div>
    
            <div>
                <a href='https://shoppuppyculture.com/collections/gift-cards'><img src={GIFTCARDCOLLECTIONS} width={359.99} height={359.99}/></a>   
            </div>
            
        </div>
        
    );
}

export default ShopOurProducts;
