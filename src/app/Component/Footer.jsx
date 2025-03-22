import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMailOpen } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import { FaCalculator } from "react-icons/fa";



function Footer() {
  return (
    <>


      <footer className="footer py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h5 className="section-title">About | Us</h5>
              <p>Shree Siddhanath Science Campus, established in 2033 BS in Kanchanpur, is a constituent campus of Tribhuvan University.</p>
              <p><strong> <LuMapPin className='t' /> Address:</strong> Mahendranagar,<br /> Kanchanpur, Nepal</p>
              <p><strong> <FaPhoneVolume className='t' /> Phone:</strong> 099-521304 / 099-521220</p>
              <p><strong>  <CgMailOpen className='t' /> Email:</strong> <a href="mailto:info@snsc.edu.np">info@snsc.edu.np</a></p>
            </div>
            <div className="col-lg-3">
              <h5 className="section-title">News | Notice</h5>
              <div>
                <p className='t'>Class routine of <br /> Bsc.CSIT 2nd sem</p>
                <p> <GoClock className='t' /> 13 May 2024</p>
              </div>
              <div>
                <p className='t'> बिदा बारे सूचना</p>
                <p> <GoClock className='t' /> 10 Apr 2024</p>
              </div>
            </div>

            <div className="col-lg-3">
              <h5 className="section-title">Useful Links</h5>
              <ul className='t'>
                <li><a href="#">News</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Life at SNSC</a></li>
                <li><a href="#">Study Materials</a></li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h5 className="section-title">SNSC Events</h5>
              <div>
                <p className='t'>B.Sc. भर्ना २०८० सम्बन्धी <br /> अत्यन्त जरुरी सूचना</p>
                <p><FaCalculator className='t' /> 13 Dec 2023</p>
              </div>
              <p className='t'>Opportunity of IT <br /> students in Nepal and <br /> Workshop on being a <br />Developer </p>
              <p><FaCalculator className='t' /> 09 May 2019</p>
            </div>
          </div>
        </div>
      </footer>

      <section className='m p-3 text-white'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>COPYRIGHT © 2025 SIDDHANATH SCIENCE CAMPUS POWERED BY NEEM INFOSYS</p>

            </div>
            <div className="col-lg-6">
              <p className='text-end'>About Us / Contact Us / SNSC Gallery</p>
            </div>
          </div>
        </div>
      </section>
      

    </>
  )
}

export default Footer
