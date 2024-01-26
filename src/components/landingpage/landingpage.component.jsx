import './landingpage.styles.css';
import React from 'react'

const Landingpage = () => {
  return (
    <div className="card">
      <div className="cards">
        <div className="card1  mt-3">
          <br />
          <h1>Why Puppy <br /> Culture?</h1>
          <a href="/Whypuppyculture?"><img src="https://ucarecdn.com/1ab48c8c-38f4-4517-a620-1bbad0ee4f42/-/format/auto/-/preview/3000x3000/-/quality/lighter/logo-transparent_R_500px.png" alt=""
            height='250px'
            width='270px'
          /></a>
          <br />
          <br />

          <button className='b1'><a href="/Whypuppyculture?">LEARN MORE</a></button>
          
        </div>
        <div className="card1  mt-3">
          <br />
          <h1>Shop Our  <br /> Products!</h1>
          <a href="shop/">
          <img src="https://ucarecdn.com/265cf088-4e94-4a15-beb0-13037433a9f4/-/format/auto/-/preview/3000x3000/-/quality/lighter/New-Home-Page-Product-Banner.png" alt=""
            height='250px'
            width='370px' />
          </a>
          <br />
          <br />
          
          <button className='b1'><a href="shop/">SHOP</a></button>
        </div>
        <div className="card1  mt-3">
          <br />
          <h1>What Should I <br /> Buy?</h1>
          <a href="/c3">
          <img src="https://ucarecdn.com/f30178c9-e915-4d20-8578-a3539ef6a549/-/format/auto/-/preview/3000x3000/-/quality/lighter/New-Banner-WIPC.png" alt=""
            height='250px'
            width='370px' />
          </a>
          <br />
          <br />
          
          <button className='b1'><a href="/c3">LEARN MORE</a></button>
          <br />
        </div>
      </div>
      <div className="box2">
        <div className="card13 mt-3">
          <br />
          <h1>Madcap University</h1>
          <a href="/c4">
          <img className="c13" src="https://ucarecdn.com/4514d3ab-f9f4-44de-9572-83327ff41064/-/format/auto/-/preview/3000x3000/-/quality/lighter/madcap_university_logo_800.png"
            alt=""
            height='250px'
            width='370px' />
          </a>
          <br />
          <br />
          <button className='b1'><a href="/c4">LEARN MORE</a></button>

        </div>

      </div>
      <br />
    </div>
  )
}

export default Landingpage