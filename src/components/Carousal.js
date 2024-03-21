import React from 'react'

export default function Carousal() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain ! important" }}>
            <div className="carousel-inner" id='carousel'>
                <div className='carousel-caption position-absolute' style={{ zIndex: "10" }}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img src="https://epsilon.aeon.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/idea_sized-kendal-l4ikccachoc-unsplash.jpg" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />
                </div>
                <div className="carousel-item">
                    <img src="https://images.squarespace-cdn.com/content/v1/558bc22ce4b0574c94d31c79/1499690882802-HD5D99I6GB6D1QO16YEL/Health+and+Medicine.jpg?format=1500w" className="d-block w-100 " alt="..." style={{ filter: 'brightness(30%)' }} />
                </div>
                <div className="carousel-item">
                    <img src="https://economictimes.indiatimes.com/thumb/msid-77562369,width-1200,height-900,resizemode-4,imgsize-51396/healthcare.jpg?from=mdr" className="d-block w-100 " alt="..." style={{ filter: 'brightness(30%)' }} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
