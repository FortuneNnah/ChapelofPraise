import React from 'react'

const Section1 = () => {
  return (
    <div className='section1-container'>
      <div className="section1-content">
        <div className="imgs">
          <img className='img1' src="src/assets/mams1.jpg" alt=""  />
          <img className='img2' src="src/assets/mams2.jpg" alt="" />
        </div>
        <div className="text">
          <p className='overhead'>work of the church</p>
          <h1>We Preach The Gospel In Every Sermon</h1>
          <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed consequatur, natus dignissimos tempora ne.</p>
          <p className='p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, debitis pariatur quae quidem ratione consectetur dicta. Dolorum, eligendi? Asperiores ducimus perspiciatis doloribus natus ea molestiae dolores dignissimos recusandae similique tempora.</p>
          {/* <button>ABout the church</button> */}
        </div>

      </div>
    </div>
  )
}

export default Section1;