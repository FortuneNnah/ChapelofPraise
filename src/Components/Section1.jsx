import React from 'react'

const Section1 = () => {
  return (
    <section className='section1-container' aria-labelledby="gospel-heading">
      <div className="section1-content">
        <div className="imgs">
          <img className='img1' src="/imgs/mams1.jpg" alt="Pastor delivering sermon during Sunday worship"  />
          <img className='img2' src="/imgs/mams4.jpg" alt="Congregation participating in worship service" />
        </div>
        <div className="text">
          <p className='overhead'>work of the church</p>
          <h2 id="gospel-heading">We Preach The Gospel In Every Sermon</h2>
          <p className='p1'>Every message points to Jesus and invites people to trust God's grace for everyday life, transformation, and spiritual growth.</p>
          <p className='p2'>Join us for clear teaching, honest worship, and practical application that helps you grow in faith and follow Christ more fully. Our sermons are designed to challenge, encourage, and equip you for a deeper walk with God.</p>
          {/* <button>ABout the church</button> */}
        </div>

      </div>
    </section>
  )
}

export default Section1;