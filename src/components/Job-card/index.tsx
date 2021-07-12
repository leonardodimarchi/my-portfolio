import React, { ReactElement } from 'react';
import './styles.scss';

/**
 * O Card com as informações de experiência de trabalho
 */
export function JobCard(props: JobCardProps): ReactElement {
  return (
    <div className="card">
      <div className="card--header">
        <div className="card--header--icon">
          {props.icon}
        </div>
        
        <div className="card--header--texts">
          <div className="card--header--texts--title">
            {props.title}
          </div>

          <div className="card--header--texts--date">
            {props.initialDate} e {props.finalDate}
          </div>
        </div>
      </div>
      
      <div className="card--description">
        {props.description}
      </div>
    </div>
  )
}

interface JobCardProps {
  icon?: ReactElement,
  title: string,
  initialDate: string,
  finalDate: string,
  description: string,
  skills: string[],
}
