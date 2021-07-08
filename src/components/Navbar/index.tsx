import { ReactElement } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import mapIcon from '../../assets/imgs/map.svg';
import personIcon from '../../assets/imgs/person-outline.svg';
import './styles.scss';

export default function Navbar(): ReactElement | null {
  return (
    <div className="navbar">
        <Link to={ '/about' }>
          <div className="navbar--item">
            <img src={ personIcon } alt="Sobre"/>
          </div>
        </Link>
        <Link to={ '/trajectory' }>
          <div className="navbar--item">
            <img src={ mapIcon } alt="Sobre"/>
          </div>
        </Link>
    </div>
  );
}
