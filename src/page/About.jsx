import React from 'react'
import styledComponents from 'styled-components'
import AboutPic from "./../images/about/about.webp"

export default function About() {
  return (
    <AboutStyle className="about">
      <div className="container">
        <div className="row">
          <div className="about__titles col-12">
            <h2 className="title-2">
              О компании
            </h2>
          </div>
          <div className="col-12">
            <div className="about__imageholder">
              <img src={AboutPic} alt="Error" />
            </div>
          </div>
          <div className="col-9 about__content">
            <p>
              Компания была основана в феврале 2005 года в Ташкенте. На сегодняшний момент у компании 14 филиалов в Ташкенте.
            </p>
            <p>
              Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей.
            </p>
            <p>
              Ежедневно в MaxWay заказывают большое количество самых разных людей. И мы стараемся увеличивать как число посетителей, так и число филиалов. С каждым приготовленным блюдом мы оттачиваем детали фирменных рецептов и ищем идеальный баланс цены и качества, чтобы и дальше оставаться вашим любимым брендом.
            </p>
            <p>
              Если вдруг вы столкнулись с плохим обслуживанием или низким качеством приготовленной еды с нашей стороны, обязательно напишите нам на <a href="#!" className='about__link'>@maxwaymasterfood_bot</a> . Мы с радостью принимаем как положительные, так и отрицательные отзывы. Жалоба гостя – подарок, благодаря которому нам есть куда расти.
            </p>
          </div>
        </div>
      </div>
    </AboutStyle>
  )
}

const AboutStyle = styledComponents.section`
  padding: 32px 0;
  & > * > * > * + *{
    margin-top: 1.5rem;
  }
  .about{
    
    &__imageholder{
      border-radius: .75rem;
      overflow: hidden;
    }
    &__link{
      color: #51267d;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
    &__content{
      font-size: 1rem;
      line-height: 1.5rem;
      padding-right: 60px;
    }
  }
`
