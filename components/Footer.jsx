import React from 'react'

const Footer = () => {
    const date = new Date()
    let year = date.getFullYear()

    return (
        <div
            className='text-gray-500 font-semibold container mx-auto text-center'
        >
            Copyright {year}, Quiz - aymenjdily
        </div>
    )
}

export default Footer