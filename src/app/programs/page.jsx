import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";


function page() {

    return (
        <>

            <section>
                <div>
                    <img className='p' src="https://www.snsc.edu.np/images/background/snsc_bg_all.JPG" alt="" />
                    <h2 className='r border-bottom'>Bsc.Physics</h2>
                    <p className='rr'> Bachelor <FaGreaterThan /> Bsc.Physics
                    </p>
                </div>
            </section>

            <section className='py-2'>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card p-3 shadow-sm">
                                <h3 className="text-dark py-2">Course Introduction</h3>
                                <p>
                                    B.Sc Physics is a four-year annual program of Tribhuvan University. Tribhuvan University started 4 years Bachelor of Science in Physics (B.Sc Physics) from 2012 AD. </p>
                                <p>  Physics is one of the most fundamental of all sciences and is the basis of our scientific knowledge of the physical world. It seeks to explain the behavior of matter, time, and space in the universe and covers phenomena ranging from subnuclear interactions to cosmological events like the Big Bang. The traditional B.Sc. degree in Physics is centered on understanding scientific fundamentals and it is through this basic approach that advances in scientific knowledge and technological innovations have been made.
                                </p>
                            </div>
                            <div className="card p-4 mt-4 shadow-sm">
                                <h4 className="text-dark">B.Sc. Physics at SNSC</h4>
                                <p>Job prospects <br />
                                    A Physics graduate has research strengths in many frontier areas including nanoscience, quantum information <br />technology, optical and magnetic materials, and biophysics.
                                    <br />  Careers (1) <br />
                                    Physicists and Astronomers</p>
                            </div>
                            <div className="card p-4 mt-4 shadow-sm">
                                <h4 className="text-dark py-2">Eligibility for Admission</h4>
                                <p>Any candidates who have completed 10+ 2 or equivalent securing minimum 'C' grade in all subjects of  Grade 11 and 12 with 200 Full Marks of Mathematics are eligible for admission in Bachelor of Science (B.Sc) in Physics program of Tribhuvan University.

                                </p>
                            </div>
                            <div className="card p-4 mt-4 shadow-sm">
                                <h4 className="text-dark py-2">Curriculum Structure</h4>
                                <h3 className='sc'>B.Sc. Physics First Year </h3>
                                <p className='sc'>MECHANICS (50)</p>
                                <p className='sc'>Course Contents:</p>
                                <ul>
                                    <li>Review of Laws of Motion</li>
                                    <li>Linear and Angular Momentum</li>
                                    <li>Gravitational Potentials and Fields</li>
                                    <li> Dynamics of Rigid Bodies </li>
                                    <li> Harmonic Oscillator </li>
                                    <li>  Wave Motion </li>
                                    <li> Elasticity </li>
                                    <li> Fluid Mechanics </li>
                                </ul>
                                <div>
                                    <h3 className='sc'>THERMODYNAMICS (35) </h3>
                                    <p className='sc'>COURSE CONTENTS:</p>
                                    <ul>
                                        <li>Thermodynamic Fundamental Concepts </li>
                                        <li>  Laws of Thermodynamics and Their Application </li>
                                        <li>  Thermodynamic Relations </li>
                                        <li>  Concept of Ideal and Real Gases </li>
                                        <li>  Production of Low Temperature </li>
                                        <li>  Transport Phenomenon </li>
                                        <li>   Black Body Radiation</li>
                                    </ul>
                                    <div>
                                        <h3 className='sc'>ELECTRICITY AND MAGNETISM (50) </h3>
                                        <p className='sc'>COURSE CONTENTS:</p>
                                        <ul>
                                            <li>.Elementary Vector Analysis </li>
                                            <li>  Electrostatic Potential and Field </li>
                                            <li>  Electric Fields in Dielectrics </li>
                                            <li>   Magnetic Fields of Moving Charges </li>
                                            <li>  Magnetic Properties and Fields </li>
                                            <li>  Electromagnetic Inductions </li>
                                            <li>  Varying Currents </li>
                                            <li>   Alternating Current Circuit </li>
                                            <li>  Maxwell's Electromagnetic Equations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className='border-bottom  py-2'>Search</h5>
                            <div className="search-bar mb-4">
                                <form className="d-flex me-5 mt-3" role="search" >
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="search" placeholder="Enter Your keywords" aria-label="Search" />
                                        <button className="btn btn-dark" type="submit">search
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card p-3 shadow-sm">
                                <h5 className="text-dark">Events</h5>
                                <div className="event">
                                    <h6><span className="t">13 Dec</span></h6>
                                    <p> <span><GoClock className='t' /> 10 | <FaMapMarkerAlt className='t' /> mnr 18</span> </p>
                                    <p>B.Sc. भर्ना २०८० सम्बन्धी अति जरुरी <br /> सूचना</p>
                                </div>
                                <div className="event">
                                    <h6><span className="date-box">09 May</span></h6>
                                    <p> <GoClock className='t' />11:00 A.M | <FaMapMarkerAlt className='t' /> Megha Hall</p>
                                    <p>Opportunity of IT students in Nepal <br /> and Workshop on being a Developer</p>
                                </div>
                            </div>
                            <div className="card p-3 mt-4 shadow-sm">
                                <h5 className="text-dark">News | Notice</h5>
                                <p><GoClock className='t' /> 13 May 2024</p>
                                <p>Class routine of <br /> Bsc.CSIT 2nd sem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     
        
        </>
    )
}

export default page
