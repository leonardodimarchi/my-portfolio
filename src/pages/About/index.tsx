import { ReactElement } from 'react';
import './styles.scss'

export function AboutPage(): ReactElement {
  return (
    <div className='about'>
      <div className='about--header'>
        <h1> About me </h1>
        <span> Name </span>
      </div>
    </div>
  )
}
