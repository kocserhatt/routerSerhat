import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='nav'>
      <Link to='/'>Anasayfa</Link>
      <Link to='/about'>Hakkımda</Link>
      <Link to='/contact'>İletişim</Link>
      <Link to='/posts'>Postlar</Link>
    </div>
  );
}
