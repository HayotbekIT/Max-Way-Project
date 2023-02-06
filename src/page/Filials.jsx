import React from 'react'
import styledComponents from 'styled-components'
import BranchesItem from '../components/branches'

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
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />
        <BranchesItem />

      </div>
    </BranchesStyle>
  )
}

const BranchesStyle = styledComponents.div`

  &.branches{
    padding: 32px 0;
    & > * >.branches__item + .branches__item{
      margin-top: 1.5rem;
    }
  }
  .branches{
    &__top{
      padding-bottom: 1.5rem;
    }
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
    &__item{
      padding: 1rem 1.25rem;
      background: #fff;
      box-shadow: 0 0 12px rgba(0,0,0,.04);
      padding: 1rem;
      border-radius: .75rem;
      &-title{
        font-size: 1.25rem;
        &s{
          & > * + *{
            margin-top: 6px !important;
          }
        }
      }
      &-time{
        color: rgb(90, 197, 58);
      }
      &-top{
        border-bottom: 1px solid #eaeaea;
        padding-bottom: .75rem;
      }
      &-bottom{
        padding-top: .75rem;
        &__title{
          color: grey;
        }
        &__text{
          font-size: .875rem;
          text-decoration: none;
          color: #000;
        }
      }
    }  
  }
  }

`