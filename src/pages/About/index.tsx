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
          <h1> About me </h1>
          <p> At the moment, I'm a Computer Engineering student at Facens, 
            right where the LIGA (Games and Apps Innovation Laboratory) resides, 
            which is the place where I'm at a internship. </p>
        </section>
      </div>
    </div>
  )
}
