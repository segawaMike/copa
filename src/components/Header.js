import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
function Header() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

  	const closeMobileMenu = () => setClick(false);
	

	return(
		<div className="main-header">
			<div>
				<div className="site-logo-container">
					<Link to='/'className="site-logo"onClick={closeMobileMenu}>COPA <i style={{
						color:'orange',
						padding:5
					}}class='fa fa-coffee'/></Link>
					<div className='menu-icon' onClick={handleClick}>
	            <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={closeMobileMenu} />
	          	</div>
				</div>
				<div className="nav-links">
				<ul className={click ? 'nav-mobile-active':'nav-mobile'}>
				<Link to='/Products' className={click? 'nav-mobile-active':'nav-link'} onClick={closeMobileMenu}>Products</Link>
				<Link to='/Contact Us' className={click? 'nav-mobile-active':'nav-link'} onClick={closeMobileMenu}>Contact</Link>
				<Link to='/About' className={click? 'nav-mobile-active':'nav-link'} onClick={closeMobileMenu}>About</Link>
				<Link to='/Services'className={click? 'nav-mobile-active':'nav-link'} onClick={closeMobileMenu}>Services</Link>
				<Link to='/'className={click? 'nav-mobile-active':'nav-link'} onClick={closeMobileMenu}>Home</Link>
				</ul>
			</div>
				

			</div>

		</div>

	)
}
export default Header