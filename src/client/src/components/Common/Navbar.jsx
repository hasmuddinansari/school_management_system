import React from 'react'

const nav_items = ["Home", "Records", "Exams"]
export default function Navbar() {
    return (
        <div className="navbar bg-dark text-white">
            {nav_items.map(item=>{
            return <div className="navbar-item">{item}</div>
            })}
        </div>
    )
}
