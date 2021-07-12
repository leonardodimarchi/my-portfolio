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
        <JobCard
          icon={<IdcardOutlined />}
          title='LIGA' 
          initialDate='21/02/2021' 
          finalDate='22/03/2025' 
          description='Essa é a descrição' 
          skills={['primeiro','segundo']} />
      </div>
    </div>
  )
}
