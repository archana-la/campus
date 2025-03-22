import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";

function page() {
    return (
        <>
        <section>
           <div>
               <img className='p' src="https://www.snsc.edu.np/images/background/snsc_bg_all.JPG" alt="" />
               <h2 className='r border-bottom'>Alumni</h2>
               <p className='rr'> <FaGreaterThan />
               Alumni</p>
           </div>
          </section>

            <section>
                <div className="container mt-4">
                    <div className="p-3">
                        <h3 className="text-center">Please Fill the Form Below for Alumni Register.</h3>
                        <form>
                           
                            <div className="mb-3">
                                <label className="form-label">Profile:</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="row g-3">
                                <div className="col-lg-12">
                                    <input type="text" className="form-control" placeholder="Full Name *" required />
                                </div>
                
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" placeholder="Address *" required />
                                </div>
                                <div className="col-lg-4">
                                    <input type="email" className="form-control" placeholder="Email Address *" required />
                                </div>
                                <div className="col-lg-4">
                                    <input type="tel" className="form-control" placeholder="Contact Number *" required />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" placeholder="Current Position *" required />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" placeholder="Current Organization *" required />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" placeholder="Facebook URL" />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" placeholder="LinkedIn URL" />
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-select">
                                        <option selected>Select your stream*</option>
                                        <option value="science">Science</option>
                                        <option value="commerce">Commerce</option>
                                        <option value="arts">Arts</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" placeholder="Your batch e.g. 2014 Batch" />
                                </div>
                                <div className="col-lg-12">
                                    <textarea className="form-control" rows={3} placeholder="Your Message" defaultValue={""} />
                                </div>
                               
                                <div className="col-lg-12">
                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" id="robotCheck" />
                                        <label className="form-check-label" htmlFor="robotCheck">I'm not a robot</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center mt-3">
                                    <button type="submit" className="btn btn-primary">Submit Form</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
