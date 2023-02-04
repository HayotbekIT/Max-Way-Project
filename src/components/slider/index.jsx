import React from 'react'
import styledComponents from 'styled-components'
import SlideItem from "../../images/slider/slide1.webp"

export default function Slider() {
    return (
        <SliderStyle className='slider-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={SlideItem} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={SlideItem} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={SlideItem} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon slider-arrow" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon slider-arrow" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SliderStyle>
    )
}


const SliderStyle = styledComponents.section`
    .carousel-item.active{
        border-radius: 20px;
        overflow:hidden;
        img{
            height: 100%;
            object-fit:cover;
            object-postion: center;
        }
    }
`