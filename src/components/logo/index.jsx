import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from "./../../images/logo/logo.webp"

export default function Logo() {
    return (
        <Link to="/" className="logo">
            <img src={Logo1} alt="Logo" />
        </Link>
    )
}
