import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { GoClock } from "react-icons/go";


function page() {
  return (
    <>
    <section>
        <div>
            <img className='p' src="https://www.snsc.edu.np/images/background/snsc_bg_all.JPG" alt="" />
            <h2 className='r border-bottom'>News|Notice</h2>
            <p className='rr'> Information <FaGreaterThan /> News|Notice
            </p>
        </div>
       </section>

      <section className='yy p-3'>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-10 news-item d-flex">
             <img className='z' src="https://www.snsc.edu.np/storage/news/445_2nd%20sem%20routine.jpeg" alt="" />
              <div className="news-content">
                <p className="news-date border-bottom">  <GoClock className='t' /> 13 May 2024 | <span className="news-category">News/Notice</span></p>
                <h4 className="news-title">Class routine of Bsc.CSIT 2nd sem</h4>
                <p className="news-description">Class routine of Bsc.CSIT 2nd sem</p>
              </div>
            </div>
            <div></div>
            <div className="col-md-10 news-item d-flex">
            <img className='z' src="https://www.snsc.edu.np/storage/news/150_12901.jpeg" alt="" />
              <div className="news-content">
                <p className="news-date border-bottom"> <GoClock className='t' /> 10 Apr 2024 | <span className="news-category">News/Notice</span></p>
                <h4 className="news-title">विदा बारे सूचना</h4>
                <p className="news-description">विदा बारे सूचना</p>
              </div>
            </div>
            <div></div>
            <div className="col-md-10 news-item d-flex">
            <img className='z' src="https://www.snsc.edu.np/storage/news/445_2nd%20sem%20routine.jpeg" alt="" />
              <div className="news-content">
                <p className="news-date border-bottom"> <GoClock className='t' /> 04 Apr 2024 | <span className="news-category">News/Notice</span></p>
                <h4 className="news-title">हार्दिक श्रद्धाञ्जली !</h4>
                <p className="news-description">हार्दिक श्रद्धाञ्जली</p>
              </div>
            </div>
            <div></div>
            <div className="col-md-10 news-item d-flex">
            <img className='z' src="https://www.snsc.edu.np/storage/news/801_11291.jpeg" alt="" />
              <div className="news-content">
                <p className="news-date border-bottom"> <GoClock className='t' /> 22 Mar 2024 | <span className="news-category"> News|Notice</span></p>
                <h4 className="news-title">छात्रवृति सम्बन्धि सूचना</h4>
                <p className="news-description"> छात्रवृति सम्बन्धि सूचना</p> 
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page
