import React from 'react'
import styledComponents from 'styled-components'
import MaxiBoxItem from './maxi-box-item'

export default function MaxiBox() {
    return (
        <ProductStyle className="product-wrapper">
            <h2 className="titl-2 product__title">🍟🍔🥤Макси бокс</h2>

            <div className="product__row d-flex">
                <MaxiBoxItem />
                <MaxiBoxItem />
                <MaxiBoxItem />
                <MaxiBoxItem />
                <MaxiBoxItem />
                <MaxiBoxItem />

                
            </div>
        </ProductStyle>
    )
}

const ProductStyle = styledComponents.div`
    &.product-wrapper + &.product-wrapper{
        padding-top: 25px !important;
    }
    .product{
        &__title{
            padding: 25px 0 !important;
        }
        &__row{
            gap: 15px 0px;
            flex-wrap: wrap;
            margin: 0 -24px;
        }
        &__card{
            width: 288px;
            &-title{
                font-size: 1.125rem;
                font-weight: 600;
                margin-bottom: 0.4375rem;
            }
            &-desc{
                color: #48535b;
            }
            &-button{
                border: none;
                outline: none;
                display: flex;
                background-color: #51267d;
                color: #fff;
                padding: 0.75rem 1.5rem;
                border-radius: 1.25rem;
                font-size: .875rem;
                font-weight: 500;
                transition: .15s ease;
                white-space: nowrap;
                line-height: 1.25rem;
                cursor: pointer;
                &:hover{
                    opacity: 0.95;
                }
            }
            
            &-info{
                padding: 0.75rem 1rem 1rem !important;
                & > * + *{
                    margin-top: 0.75rem !important;
                }
            }

        }
        .price-bold{
            font-size: 1.125rem;
            font-weight: 700;
        }
        &__price{
            font-size: .875rem;
        }

    }
`