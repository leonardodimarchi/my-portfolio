import { IdcardOutlined } from '@ant-design/icons';
import { ReactElement } from 'react';
import { JobCard } from '../../components/Job-card';

import './styles.scss';

export function ExperiencesPage(): ReactElement {
  return (
    <div className="experiences">
      <div className="experiences--header">
        <h1> Experiences </h1>
      </div>

      <div className="experiences--body">
        <div className="experiences--body--card">
          <JobCard
            icon={<IdcardOutlined />}
            title='LIGA Facens - Software developer assistant'
            initialDate='August - 2021'
            finalDate='Current'
            description='Building App and Web projects mostly in Angular2+, and Rest APIs with
            NodeJS/NestJS at the backend.'
            skills={['Typescript','Angular','NestJS']} />
        </div>

        <div className="experiences--body--card">
          <JobCard
            icon={<IdcardOutlined />}
            title='LIGA Facens - Intern'
            initialDate='April - 2021'
            finalDate='August - 2021'
            description='Getting some experiences with Angular2+
            and some libraries at the frontend,
            along with API development with NestJS framework at the backend.'
            skills={['Typescript','Angular','NestJS']} />
        </div>
      </div>
    </div>
  )
}
