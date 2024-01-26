import React from 'react'
import './firstcomponent.styles.css'

const Firstcomponent = () => {
  return (
    <div className="container">
      <h2 className='text-center'>What is Puppy Culture?</h2>
      <div className="main1 d-flex">
        <div className="img1 col-md-6" >
          <img src="https://ucarecdn.com/07808bbc-1df5-43c7-bbb7-d796d2932bc1/-/format/auto/-/preview/3000x3000/-/quality/lighter/about-page_illustrations_german-shephard_600px.jpg"
            height='475px'
            width='475px'
            alt="dogs" />
        </div>
        <div className="para1 col-md-6">
          <br />
          <br />
          <br />
          On the top level, Puppy Culture is a
          <b> socialization <br /> and training program</b>
          specifically developed for puppies, from birth through the end of their critical socialization period. <br />
          <br />
          It includes age appropriate protocols and lessons laid out in an organized format. <br />
          <br />
          The program consists of videos, books and a Workbook, but that really does not get to the “why” of Puppy Culture, or what makes it different!
        </div>
      </div>
      <h2 className='text-center'>The Why of Puppy Culture</h2>
      <div className="main2 d-flex">
        <div className="para2 col-md-6">
          <br /> <br />
          Puppy Culture is based on the premise that the puppy always <br />
          leads the learning, and puppies learn best by appropriate <br />
          experiences at the appropriate time. <br />
          <br />
          So what we are doing is teaching you to observe the puppy, and, <br />
          based on the behavioral markers you see, serve the puppy the <br />
          experience or lesson that is optimal for him at that moment in
          <br /> time.
        </div>
        <div className="img2 col-md-6">
          <img src="https://ucarecdn.com/9852ac05-43f9-4b15-977e-e58d3711b348/-/format/auto/-/preview/3000x3000/-/quality/lighter/about-page_illustrations_socialization_600px.jpg"
            height='475px'
            width='475px'
            alt="dog" />
        </div>
      </div>
    </div>
  )
}

export default Firstcomponent;