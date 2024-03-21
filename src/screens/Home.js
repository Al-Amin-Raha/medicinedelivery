import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

export default function Home() {
    const [mediCat, setMediCat] = useState([])
    const [mediItems, setMediItems] = useState([])
    const loadFoodItems = async () => {
        let response = await fetch("http://localhost:5000/api/auth/mediData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        });
        response = await response.json()
        // console.log(response[1][0].CategoryName)
        setMediItems(response[0])
        seMediCat(response[1])
    }

    useEffect(() => {
        loadMediItems()
    }, [])










    return (
        <div>
            <div> <Navbar /> </div>
            <div >
                <Carousal />
            </div>
            <div className='m-3'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div> <Footer /> </div>



        </div>
    )
}
