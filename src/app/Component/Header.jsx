import Link from 'next/link'
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { CgMailOpen } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";


function Header() {
  return (
    <>
      <header className='p-3 b border-bottom'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <a className='p-2 text-white c'><FaPhoneVolume />
              099-521304 / 099-521220</a>
                <a className='p-2 text-white c'> | <LuMapPin /> Kanchanapur, Nepal </a> 
                <a className='p-2 text-white c'> | <CgMailOpen />
                info@snsc.edu.np </a>
            </div>
            <div className="col-lg-6 text-end">
              <a className='p-3 text-white c'><FaFacebookF />
              </a>
              <a className='p-3 text-white c'><FaTwitter />
              </a>
              <a className='p-3 text-white c'><FaLinkedinIn />
              </a>
              <a className='p-3 text-white c'><AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
      </header>


      <nav className="navbar navbar-expand-lg a">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className='g rounded' src="https://www.snsc.edu.np/images/Siddhanath-Science-Campus-website.png" alt="" />
          </a>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" href="/">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/programs">PROGRAMS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/information">INFORMATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="download">DOWNLOAD</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/materials">MATERIALS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/gallery">GALLERY</Link>
              </li>
               
              <li className="nav-item">
                <Link className="nav-link text-light" href="/alumni">ALUMNI</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/contact">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light  rounded d" href="/apply">APPLY Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
