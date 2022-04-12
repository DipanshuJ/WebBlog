import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <>
    <div className='headerTop'>
        <div className="title">
            <Link className='heading' to='/'><h2>TECH BLOG</h2></Link>
        </div>
      <ul className="topLinks">
        <li className="topLinksItem"><Link className='link' to='/books'>BOOKS</Link></li>
        <li className="topLinksItem"><Link className='link' to='/feedback'>FEEDBACK</Link></li>
      </ul>
    </div>
    <div className="headerBottom">
        <h3>Dipanshu Jain</h3>
        <p>MCA'24 MANIT  |  Programmer </p>
    </div>
    </>
  )
}

export default Header;
