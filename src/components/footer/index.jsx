import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import Logo from '../logo'

export default function Footer() {
    return (
        <FooterStyle className="footer">
            <div className="container">
                <div className="footer__content d-flex align-items-center">
                    <Logo />
                    <div className="footer__nav-bar d-flex flex-grow-1 justify-content-center">
                        <Link to="/filials" className='footer__nav-link'>Филиалы</Link>
                        <Link to="/about" className='footer__nav-link'>O нас</Link>
                        <Link to="/contact" className='footer__nav-link'>Контакты</Link>
                    </div>
                </div>
                <div className="footer__copyright d-flex align-items-center justify-content-between">
                    <p className='copyright'>
                        © Delever 2020 - 2023 Все права защищены
                    </p>
                    <div className="footer__social d-flex align-items-center">
                        <a href="#!" className="social__link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#!" className="social__link">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#!" className="social__link">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

const FooterStyle = styledComponents.footer`

    &.footer{
        margin-top: 25px;
        padding: 32px 0;
        border-top: 1px solid #eef0f2;
        
    }
    .footer{
        &__nav-bar{
            column-gap: 20px;
        }
        &__nav-link{
            text-decoration: none;
            color: #000;
        }
        &__copyright{
            margin-top: 25px;
            padding: 32px 0;
            border-top: 1px solid #eef0f2;
        }
        &__social{
            column-gap: 15px;
            a{
                color: #808080;
            }
        }
    }

`
