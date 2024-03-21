import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://cdn.shopify.com/s/files/1/0442/4921/9239/products/Paracetamol-generic-500mg-pain-relief-fever-medicine-pharmacy-pack-front.jpg?v=1619620306" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Paracetamol</h5>
                        <p className="card-text">500mg/660mg</p>
                        <div className='container w-100 '>
                            <select className='m-2 h-100 bg-success rounded '>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (<option key={i + 1} value={i + 1}> {i + 1} </option>)
                                    })
                                }
                            </select>
                            <select className='m-2 h-100 bg-success rounded '>
                                <option value="half"> 500mg </option>
                                <option value="full"> 600mg </option>
                            </select>
                            <div className='d-inline h-100 fs-5'>Total price </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
