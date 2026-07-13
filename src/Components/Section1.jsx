import React from 'react'

const Section1 = () => {
  return (
    <div className='section1-container'>
      <div className="section1-content">
        <div className="imgs">
          <img className='img3' src="/imgs/mams4.jpg" alt="chaplain image" />
        </div>
        <div className="text">
          <p className='overhead'>Meet our Chaplain</p>
          <h1>Rev. Mrs. Otobong Umoren</h1>
          <p className='p1'>Rev. Mrs. Otobong Umoren has been the chaplain of our church for several years, bringing wisdom, compassion, and spiritual guidance to our community.</p>
          <p className='p2'>Join us for clear teaching, honest worship, and practical application that helps you grow in faith and follow Christ more fully.</p>
          {/* <div className="section1-actions">
            <button onClick={() => {
              window.location.href = '/about';
            }} className="herobtn">More about the church</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Section1;