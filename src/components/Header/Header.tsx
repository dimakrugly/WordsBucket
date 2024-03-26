import './Header.scss';
import { Navigation } from '../Navigation/Navigation';

export function Header() {
  return (
    <header className="header">
      <div className="header__elements">
        <div className="header__logo-area">
          <p className="header__title">Words Bucket</p>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
