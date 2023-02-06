import React from 'react'

export default function BranchesItem() {
  return (
    <div className='col-6 branches__item'>
      <div className="branches__item-top d-flex ">
        <div className="branches__item-titles">
          <h3 className="title-3 branches__item-title">
            MAX WAY RISOVIY
          </h3>
          <p className="subtitle">Узбекистан, Ташкент, Алтынкульская улица, 10</p>
        </div>

        <div className="branches__item-time d-flex flex-grow-1 justify-content-end">Открыт до 03:00</div>
      </div>
      <div className="branches__item-bottom d-flex">
        <div className="branches__item-work__time">
          <div className="branches__item-bottom__title">
            График работы:
          </div>
          <p className="branches__item-bottom__text">
            Пн-Вс: 09:00-03:00
          </p>
        </div>
        <div className="branches__item-contact d-flex flex-grow-1 align-items-end flex-column">
          <div className="branches__item-bottom__title">
            Телефон:
          </div>
          <a href='#!' className="branches__item-bottom__text">
            +998712005400
          </a>
        </div>
      </div>


    </div>
  )
}
