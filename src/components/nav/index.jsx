import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import Logo from '../logo'

export default function Navigation() {
    return (
        <NavStyle className='nav'>
            <div className="container">
                <div className="row">
                    <div className="nav__left d-flex align-items-center col-md-6">
                        <Logo />
                        <div className="nav-bar">
                            <Link to="/menu" className="nav__link">Меню</Link>
                            <Link to="/filials" className="nav__link">Филиалы</Link>
                            <Link to="/about" className="nav__link">O нас</Link>
                            <Link to="/contact" className="nav__link">Контакты</Link>
                        </div>
                    </div>
                    <div className="nav__right col-md-6 d-flex flex-grow-1 align-items-center justify-content-between">
                        <a className="location d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="icon-desc">
                                <p>Доставка или Заказ с собой</p>
                                <p>Выберите способ получения</p>
                            </div>
                        </a>
                        <a className="lang">
                            <div className="icon-holder">
                                <i className="fa-sharp fa-solid fa-globe"></i>
                            </div>
                        </a>
                        <a className="buy d-flex align-items-center">
                            <div className="icon-holder">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="icon-desc">
                                0 сум
                            </div>
                        </a>
                        <a className="account">
                            <div className="icon-holder">
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </NavStyle>
    )
}

const NavStyle = styledComponents.nav`
    .nav{
        &__link{
            text-decoration: none;
        }
        &__left{
            column-gap: 20px;
        }
        &__link{
            font-size: 18px;
            text-decoration: none;
            width: 85px;
            text-align: center;
            transition: .2s ease-in-out;
            color: #000;
        }
        &__link:hover{
            font-weight: 600;
            color: #000;
          
        }
        &__right{
            & > *{
                flex-shrink: 0;
            }
            a{
                color: #000;
                
                &.buy, &.location{
                    column-gap: 10px !importand;
                    text-decoration: none;
                    column-gap: 20px;
                }
                
            }
            .icon-holder{
                color: #51267d;
                background-color: #f1eff4;
                padding: 6px;
                border-radius: 50%;
                width: 36px;
                text-align: center
            }
        }
    }
`
