import React, { ReactElement } from 'react';
import './styles.scss';

/**
 * O Card com as informações de experiência de trabalho
 */
export function JobCard(props: JobCardProps): ReactElement {
  const skills = props.skills?.map((skill, index) => {
    return <span key={index}> {skill} </span>
  });

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
            {props.initialDate} ~ {props.finalDate}
          </div>
        </div>
      </div>

      <div className="card--description">
        {props.description}
      </div>

      <div className="card--skills">
        { skills }
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
