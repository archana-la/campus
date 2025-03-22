import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";


function page() {
  return (
   <>
   <section>
    <div>
        <img className='p' src="https://www.snsc.edu.np/images/background/snsc_bg_all.JPG" alt="" />
        <h2 className='r border-bottom'>Gallery</h2>
        <p className='rr'> <FaGreaterThan />
        Gallery</p>
    </div>
   </section>

  <section className='x p-3'>
  <div className="container text-center mt-4">
  <h2 className="gallery-title text-light">Photo Gallery</h2>
  <div className="btn-group mt-3">
    <button className="btn btn-primary">Annual Function</button>
    <button className="btn btn-primary">ECA</button>
    <button className="btn btn-primary">Events</button>
    <button className="btn btn-primary">SNSC</button>
  </div>
  <div className="row  mt-4">
    <div className="col-lg-3 col-sm-6 d-flex  mb-3 ">
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/eca6.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/annual2.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/annual3.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/annual1.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/annual4.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc7.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/eca2.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/eca3.JPG" alt="" />
    </div>
  </div>
  <div className="col-lg-3 col-sm-6 d-flex mb-3 ">
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/eca3.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/eca6.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc4.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/eca8.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc8.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc9.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc2.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc11.JPG" alt="" />
    </div>
    <div className="col-lg-3 col-sm-6 d-flex mb-3 ">
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc4.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc6.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc10.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/annual1.JPG" alt="" />
     <img className='i p-1' src="https://www.snsc.edu.np/images/photo/snsc12.JPG" alt="" />
    </div>
</div>

</section> 

<section className='p-5'>
<div className="container">
  <h2 className='text-center'>Video Gallery</h2>
  <div className="row">
    <div className="col-lg-5">
     <img className='sr' src="https://www.snsc.edu.np/images/background/snsc_bg2.JPG" alt="" />
    </div>
    <div className="col-lg-7"></div>
  </div>
</div>
</section>
   </>
  )
}

export default page
