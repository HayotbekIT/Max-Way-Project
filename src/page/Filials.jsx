import React from 'react'
import styledComponents from 'styled-components'

export default function Filials() {
  return (
    <BranchesStyle className='branches'>
      <div className="container">
        <div className="branches__top d-flex justify-content-between align-items-center">
          <h2 className="title-2">Филиалы</h2>
          <div className="branches__buttons">
            <button className="branches__button">Список</button>
            <button className="branches__button">Карта</button>
          </div>
        </div>
      </div>
    </BranchesStyle>
  )
}

const BranchesStyle = styledComponents.div`

  &.branches{
    padding: 32px 0;
  }
  .branches{
    &__button{
      outline: none;
      border: none;
      width: 9rem;
      text-align: center;
      padding-top: 0.625rem;
      padding-bottom: 0.625rem;
      background: #f1eff4;
      color: #48535b;
      border-radius: 1.375rem;
      &:hover{
        background: #51267d;
        color: #fff;
      }
      
      &s {
        & > * + *{
          margin-left: 10px;
        }
      }
    }
  }

`