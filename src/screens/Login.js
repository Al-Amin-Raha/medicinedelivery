import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const [creadentials, setcreadentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ email: creadentials.email, password: creadentials.password })

        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials")
        }
        if (json.success) {
            navigate("/")
        }


    }
    const onChange = (event) => {
        setcreadentials({ ...creadentials, [event.target.name]: event.target.value })
    }
    return (
        <div><>
            <div className='container'>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={creadentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Please enter a valid email address .</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={creadentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/createuser" className='m-3 btn btn-danger'>Are you a new user? </Link>
                </form>


            </div>
        </></div>
    )
}
