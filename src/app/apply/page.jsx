import React from 'react'

function page() {
    return (
        <>
            <section>
                <div className="container-fluid bg-overlay">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="form-box p-4 shadow-lg">
                            <div className="text-center">
                                <img src="https://www.snsc.edu.np/images/logo-snsc.png" alt="Siddhanath Science Campus" className="logo" />
                                <h4 className="mt-2">Please Fill the Form Below.</h4>
                                <form>
                                <input type="text" className="form-control" placeholder="Full Name *" required />
                                </form>
                            </div>
                            <form>
                                <div className="row py-3">
                                    <div className="col-md-4 mb-3">
                                        <input type="text" className="form-control" placeholder="Address *" required />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <input type="email" className="form-control" placeholder="Email Address *" required />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <input type="text" className="form-control" placeholder="Contact Number *" required />
                                    </div>
                                </div>
                                <p className="mb-2">Choose your course:</p>
                                <div className="mb-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="course" id="bit" defaultValue="BIT" />
                                        <label className="form-check-label" htmlFor="bit">BIT</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="course" id="bsc-physics" defaultValue="B.Sc. Physics" />
                                        <label className="form-check-label" htmlFor="bsc-physics">B.Sc. Csit</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="course" id="bsc-physics" defaultValue="B.Sc. Physics" />
                                        <label className="form-check-label" htmlFor="bsc-physics">B.Sc. Physics</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="course" id="bsc-chemistry" defaultValue="B.Sc. Chemistry" />
                                        <label className="form-check-label" htmlFor="bsc-chemistry">B.Sc. Chemistry</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="course" id="bsc-biology" defaultValue="B.Sc. Biology" />
                                        <label className="form-check-label" htmlFor="bsc-biology">B.Sc. Biology</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="course" id="msc-physics" defaultValue="M.Sc. Physics" />
                                        <label className="form-check-label" htmlFor="msc-physics">M.Sc. Physics</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" rows={3} placeholder="Any notes..." defaultValue={""} />
                                </div>
                                <div className="text-center mb-3">
                                    <div className="captcha-box">
                                        <input type="checkbox" required /> I'm not a robot
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Submit Form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
