import React from 'react'
import MaxiBox from './maxi-box'
import Sandwich from './sandwich'
import SandwichNav from './sandwich-nav'

export default function Product() {
    return (
        <section className='product-section'>

            <div className="container">
                <div className="row">
                    <SandwichNav />
                    <MaxiBox />
                    <Sandwich />
                </div>
            </div>
        </section>
    )
}