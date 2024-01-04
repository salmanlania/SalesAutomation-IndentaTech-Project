import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import './Login.css'

export default function Login() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="container">
                <h2>Log in</h2>
                <p>
                    Need an account? <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/signup')}>Create an account</span>
                </p>
                <form method="post">
                    <div className="form-group">
                        <label htmlFor="Email1">Email</label>
                        <div className="icon-input">
                            <svg className="icon" width={20} height={20} viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22 4H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM2 6l10 7 10-7V8L12 15 2 8V6zm2 10v2h16v-2L12 13 4 16z"
                                />
                            </svg>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                name="email"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <div className="icon-input">
                            <svg
                                className="icon"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18C7.59 20 4 16.41 4 12S7.59 4 12 4s8 3.59 8 8-3.59 8-8 8zm1-11h-2V7h2v2zm0 4h-2v-2h2v2z"
                                    fill="currentColor"
                                />
                            </svg>
                            <input type="password" className="form-control" name="password" />
                        </div>
                    </div>
                    <div className="one-line mb-2">
                        <div className="checkbox">
                            <label style={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                    defaultValue="remember-me"
                                />{" "}
                                <span>Remember me</span>
                            </label>
                        </div>
                        <a className="forgot" href="#">
                            Forgot password?
                        </a>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="buttons" name="create">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <Outlet />
        </div>
    )
}
