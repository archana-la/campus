import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { CgMailOpen } from "react-icons/cg";
import { MdOutlinePhoneAndroid } from "react-icons/md";


function page() {
    return (
        <>
            <section>
                <div>
                    <img className='p' src="https://www.snsc.edu.np/images/background/snsc_bg_all.JPG" alt="" />
                    <h2 className='r border-bottom'>Contact Us</h2>
                    <p className='rr'> <FaGreaterThan />
                        Contact</p>
                </div>
            </section>

            <section className='children'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="contact-box">
                                <div className="row">
                                    <div className="col-lg-5 contact-info">
                                        <h4>Quick Contact</h4>
                                        <p>If you have any questions simply use the following contact details.</p>
                                        <p><strong> <LuMapPin className='tt'/> ADDRESS:</strong><br /> Mahendranagar, Kanchanpur, <br /> Nepal</p>
                                        <p><strong> <CgMailOpen className='tt' /> EMAIL:</strong><br /> info@snsc.edu.np</p>
                                        <p><strong> <MdOutlinePhoneAndroid className='tt' />  PHONE:</strong><br /> 099521304 <br /> 099521220</p>
                                    </div>
                                    <div className="col-lg-7 contact-form">
                                        <h4>Get In Touch</h4>
                                        <form>
                                            <div className="mb-3 d-flex gap-4">
                                                <input type="text" className="form-control" placeholder="Your Name" required />
                                                <input type="email" className="form-control" placeholder="Your Email id" required />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Phone" required />
                                            </div>
                                            <div className="mb-3">
                                                <textarea className="form-control" placeholder="Your Message" rows={4} required defaultValue={""} />
                                            </div>
                                            <div className="mb-3">
                                                <input type="checkbox" required /> I'm not a robot
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        <section>
            <iframe className='w-100 h' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.0930967063396!2d80.18174711447418!3d28.95496307616656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ac034ff40c2d%3A0xe96c4f3984d9dc84!2sSiddhanath%20Science%20Campus%2C%20Bhimdatta%2010400!5e0!3m2!1sen!2snp!4v1599564866937!5m2!1sen!2snp"  frameborder="0"></iframe>
       {/* <img src="" alt="" />. */}
        </section>
        </>
    )
}

export default page
