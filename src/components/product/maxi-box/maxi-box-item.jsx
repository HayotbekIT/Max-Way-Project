import React from 'react'
import MaxBox from "./../../../images/product/maxi-box.webp"

export default function MaxiBoxItem() {
    return (
        <div className="product__card">
            <div className="product__imagholder">
                <img src={MaxBox} alt="Error" />
            </div>
            <div className="product__card-info">
                <h3 className="product__card-title">Макси Бокс Традиция</h3>
                <p className="product__card-desc">
                    Информация: клаб-сендвич с курицей, картофель-фри, кола...
                </p>
                <div className="product__card-wrap d-flex justify-content-between">
                    <p className="product__price">
                        <b className="price-bold">32 000</b>
                        <span>сум</span>
                    </p>
                    <button type='button' className='product__card-button' >Добавить</button>
                </div>
            </div>

        </div>
    )
}
