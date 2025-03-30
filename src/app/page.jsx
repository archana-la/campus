
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

function page() {
  return (
    <>
      <section>
        <div>
          <img className='w-100 j' src="" alt="" />
          <h1 className='aa'>"Welcome to Siddhanath  <br /> Science Campus"</h1>
          <p className='ab'>"It is offering B.Sc CSIT, BIT, B.Sc and M.Sc in Physics program, you're  <br />  guaranteed to find something that's right for you. "</p>
        </div>
      </section>

      <section className='l p-3'>
        <div className="container text-center mt-5">
          <h2 className="mb-4">Our Programs</h2>
          <div className="row">

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/csit.jpeg" alt="" />
                <div className="card-body">
                  <p className="card-text">BSc. CSIT</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/bit_feature.JPG" alt="" />
                <div className="card-body">
                  <p className="card-text">BIT</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/physics.jpeg" alt="" />
                <div className="card-body">
                  <p className="card-text">BSc. Physics</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/biology_feature.jpeg" alt="" />
                <div className="card-body">
                  <p className="card-text">BSc. Biology</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/chemistry_feature.jpeg" alt="" />
                <div className="card-body">
                  <p className="card-text">BSc. Chemistry</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/bsc_feature.JPG" alt="" />
                <div className="card-body">
                  <p className="card-text">BSc. Mathematics</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/msc_phy.JPG" alt="" />
                <div className="card-body">
                  <p className="card-text">MSc. Physics</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="card">
                <img className='cc' src="https://www.snsc.edu.np/images/our-services/bio_feature.JPG" alt="" />
                <div className="card-body">
                  <p className="card-text">MSc. Mathematics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3">
              <h2 className="stat-number">25526</h2>
              <p className="stat-label">Happy Students</p>
            </div>
            <div className="col-lg-3">
              <h2 className="stat-number">7</h2>
              <p className="stat-label">Approved Courses</p>
            </div>
            <div className="col-lg-3">
              <h2 className="stat-number">56</h2>
              <p className="stat-label">Certified Teachers</p>
            </div>
            <div className="col-lg-3">
              <h2 className="stat-number">31000</h2>
              <p className="stat-label">Graduate Students</p>
            </div>
          </div>
        </div>
      </section>

      <section className='f p-2'>
        <div className="container my-5">
          <h2 className="text-center">News &amp; Events</h2>
          <div className="row mt-4">
            <div className="col-lg-8">
              <h4>News</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="card news-card">
                    <div className="position-relative">
                      <span className="badge bb position-absolute top-0 start-0 p-3">10 Apr<br /><small>2024</small></span>
                      <img src="https://www.snsc.edu.np/storage/news/445_2nd%20sem%20routine.jpeg" alt="" />
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">Class routine of BSc.CSIT 2nd sem</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card news-card">
                    <div className="position-relative">
                      <span className="badge bb position-absolute top-0 start-0 p-3">10 Apr<br /><small>2024</small></span>
                      <img src="https://www.snsc.edu.np/storage/news/445_2nd%20sem%20routine.jpeg" alt="" />
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">विदा बारे सूचना</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card news-card">
                    <div className="position-relative">
                      <span className="badge bb position-absolute top-0 start-0 p-3">04 Apr<br /><small>2024</small></span>
                      <img src="https://www.snsc.edu.np/storage/news/445_2nd%20sem%20routine.jpeg" alt="" />
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">हार्दिक श्रद्धाञ्जली !</h6>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary mt-3">View All</button>
            </div>
            <div className="col-lg-4">
              <h4>Events</h4>
              <div className="event-item">
                <div className="date-box">
                  <span>13</span>
                  <small>DEC</small>
                </div>
                <div>
                  <small> <FaMapMarkerAlt className='t' />
                    Mnr 18</small>
                  <p className="mb-0 py-2"><strong>B.Sc. भर्ना 2080 सम्बन्धी अत्यन्त जरुरी <br /> सूचना</strong></p>

                </div>
              </div>
              <div className="event-item">
                <div className="date-box">
                  <span>09</span>
                  <p>MAY</p>
                </div>
                <div>
                  <small> <FaMapMarkerAlt className='t' />Megha Hall</small>
                  <p className="mb-0 py-2"><strong>Opportunity of IT students in Nepal <br /> and Workshop on being a Developer</strong></p>
                </div>
              </div>
              <button className="btn  mt-3">View All</button>
            </div>
          </div>
        </div>
      </section>


      <section className='u p-5'>
        <div className="container testimonial-section">
          <h2 className='v'>What People Are Saying</h2>
          <p className='v'><em>Education is power, One Campus serving all</em></p>
          <p className='v'><strong>"Educating all students to achieve today and tomorrow in a global community and economy"</strong></p>
          <div className="row mt-5">
            {/* First Testimonial */}
            <div className="col-lg-6">
              <div className="testimonial-box">
                <p>I like the friendly atmosphere here and the fact that the lecturers and staff are close to the students. Lecturers take the time to explain subject areas that pose problems. They are very kind, patient and supportive toward students who need help.
                  The lecturers are also very motivational. This encourages me to be enthusiastic to learn and to attend each class. This has helped me to develop a positive attitude towards my studies.</p>
                <div className="d-flex align-items-center">
                  <img src="https://www.snsc.edu.np/storage/testimonial/SS2.jpg" alt="" />
                  <div className="ms-3">
                    <strong>Arjun Poudel</strong><br />
                    <span className='t'>NASA Scientist</span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            {/* Second Testimonial */}
            <div className="col-lg-6">
              <div className="testimonial-box">
                <p>Even though Siddhanath Science Campus in Mahendranager, Kanchanpur is thousands of miles away from my home, it is the college I choose. This is not only because I want to increase my knowledge about science and especially IT, but I am able to meet and make more friends who come from different backgrounds and cultures.
                  Although the campus is not big, the friendliness of the staff and other students and the interesting social activities are definitely more than expected.Though I am alone in MNR without my family members, I feel what I have achieved so far is really worth it. With tasty cuisines, a peaceful atmosphere, and hospitable people, I will definitely miss all these after I complete my studies at SNSC.</p>
                <div className="d-flex align-items-center">
                  <img src="https://www.snsc.edu.np/storage/testimonial/SS3.jpg" alt="" />
                  <div className="ms-3">
                    <strong>Yubi Shrestha</strong><br />
                    <span className='t'>Department Head MOI</span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='zz'>
        <div className="container-fluid banner">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-6">
              <h2 className="text-white">Subscribe To Our Newsletter for getting quick Information.</h2>
              <div className='card'>
                <form className="newsletter-form">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                    <input type="email" className="form-control" placeholder="Your Email Address" />
                    <button className="btn btn-primary">SUBSCRIBE</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <img className='ll' src="https://www.snsc.edu.np/images/500x542.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page
