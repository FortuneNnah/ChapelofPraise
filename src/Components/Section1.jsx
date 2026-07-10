import React from 'react'

const Section1 = () => {
  return (
    <div className='section1-container'>
      <div className="section1-content">
        <div className="imgs">
          <img className='img1' src="/imgs/mams1.jpg" alt=""  />
          <img className='img2' src="/imgs/mams4.jpg" alt="" />
        </div>
        <div className="text">
          <p className='overhead'>Meet our Chaplain</p>
          <h1>We Preach The Gospel In Every Sermon</h1>
          <p className='p1'>Every message points to Jesus and invites people to trust God’s grace for everyday life.</p>
          <p className='p2'>Join us for clear teaching, honest worship, and practical application that helps you grow in faith and follow Christ more fully.</p>
          {/* <button>ABout the church</button> */}
        </div>

      </div>
    </div>
  )
}

export default Section1;