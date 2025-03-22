import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";

function page() {
    return (
        <>
            <section>
                <div>
                    <img className='p' src="https://www.snsc.edu.np/images/background/snsc_bg_all.JPG" alt="" />
                    <h2 className='r border-bottom'>Download</h2>
                    <p className='rr'> <FaGreaterThan />
                        Download</p>
                </div>
            </section>

            <section className='py-3'>
                <div className="container mt-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>File Description</th>
                                <th>View</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </section>


        </>
    )
}

export default page
