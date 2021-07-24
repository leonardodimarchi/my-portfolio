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
            title='LIGA - Facens'
            initialDate='08/04/2021'
            finalDate='Current'
            description='Getting some experiences with Angular2+,
            Ionic and some others libraries at the frontend,
            along with API development with NestJS framework at the backend.'
            skills={['Typescript','Angular']} />
        </div>

      </div>
    </div>
  )
}
