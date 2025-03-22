import React from 'react'
import { TfiRulerPencil } from "react-icons/tfi";


function page() {
  return (
    <>
   <section className='py-5'>
  <div className="container mt-5">
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-md-4">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <div className="icon"><TfiRulerPencil />
            </div>
            <h5 className="card-title">BSC. CSIT</h5>
            <p className="card-text">Get all the essential study materials needed here.</p>
            <a href="#" className="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col-md-4">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <div className="icon"><TfiRulerPencil />
            </div>
            <h5 className="card-title">BIT</h5>
            <p className="card-text">Get all the essential study materials needed here.</p>
            <a href="#" className="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col-md-4">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <div className="icon"><TfiRulerPencil />
            </div>
            <h5 className="card-title">BSC. PHYSICS</h5>
            <p className="card-text">Get all the essential study materials needed here.</p>
            <a href="#" className="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="col-md-4 py-5">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <div className="icon"><TfiRulerPencil />
            </div>
            <h5 className="card-title">BSC. CHEMISTRY</h5>
            <p className="card-text">Get all the essential study materials needed here.</p>
            <a href="#" className="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
      {/* Card 5 */}
      <div className="col-md-4 py-5">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <div className="icon"><TfiRulerPencil />
            </div>
            <h5 className="card-title">BSC. BIOLOGY</h5>
            <p className="card-text">Get all the essential study materials needed here.</p>
            <a href="#" className="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-5">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <div className="icon"><TfiRulerPencil />
            </div>
            <h5 className="card-title">MSC. MATHEMATICS</h5>
            <p className="card-text">Get all the essential study materials needed here.</p>
            <a href="#" className="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

    </>
  )
}

export default page
