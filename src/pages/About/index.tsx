import { IdcardOutlined, NotificationOutlined, PhoneOutlined } from '@ant-design/icons';
import { ReactElement } from 'react';
import './styles.scss'

export function AboutPage(): ReactElement {
  return (
    <div className='about'>
      <div className='about--header'>
        <h1> Leonardo Dimarchi </h1>
      </div>
      
      <div className='about--body'>
        <section>
          <h1> <span><IdcardOutlined /></span> About me </h1>
          <p> At the moment, I'm a Computer Engineering student at <a href={'https://www.facens.br/'}>Facens</a>, 
            right where <a href={'https://liga.facens.br/'}>LIGA</a> (Games and Apps Innovation Laboratory) resides, 
            which is the place where I'm at a internship. </p>
        </section>

        <section>
          <h1> <span> <NotificationOutlined /> </span>Languages </h1>
          
          <ul>
            <li> Portuguese - Native Speaker </li>
            <li> English - Intermediate </li>
          </ul>
        </section>

        <section>
          <h1> <span> <PhoneOutlined /> </span> Contact me </h1>
          <ul>
            <li> Email - <a href={'mailto: leonardodimarchi@outlook.com'}> leonardodimarchi@outlook.com </a></li>
            <li> Linkedin - <a href={'https://www.linkedin.com/in/leonardodimarchi/'}> https://www.linkedin.com/in/leonardodimarchi/ </a> </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
