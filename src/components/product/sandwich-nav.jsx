import React from 'react'
import styledComponents from 'styled-components'

export default function SandwichNav() {
  return (
    <SandwichNavStyle className='product-nav d-flex justify-content-between'>
        <a href="#!" className="product__button active">🍟🍔🥤Макси бокс</a>
        <a href="#!" className="product__button">🥪Клаб-сэндвич</a>
        <a href="#!" className="product__button">🌯Лаваш</a>
        <a href="#!" className="product__button">🌮Шаурма</a>
        <a href="#!" className="product__button">🍱Донар кебаб</a>
        <a href="#!" className="product__button">🫔Шаурма Баггет (хагги)</a>
        <a href="#!" className="product__button">🍔Бургеры</a>
        <a href="#!" className="product__button">🌭Хот-дог</a>
    </SandwichNavStyle>
  )
}


const SandwichNavStyle = styledComponents.div`
    padding: 32px 0 16px;
    overflow: hidden;
    column-gap: 8px;
    & > *{
        flex-shrink: 0;
    }
    .product{
        &__button{
            text-decoration: none;
            padding: 12px 16px;
            color: #000;
            font-size: 18px;
            border-radius: 6px;
            &:hover, &.active{
                color: #51267d;
                background: #f1eff4;
            }
        }
    }
`
