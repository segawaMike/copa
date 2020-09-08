import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
	return(
		<>
		<div className="main-footer">
			<div className="footer-logo">
				<Link to='/'className="footer-logo-img">COPA  <i   style={{
						color:'orange',
						padding:5
					}}class='fas fa-coffee'/> </Link>
				<div>
				<p>We are one of the leading companies <br/>in web snd mobile app<br/> development in africa.<br/> 
				We have cheap prices and offer <br/>the best quality Services<br/> all over africa</p>
				</div>

			</div>
			<div className="footer-link-gp">
				<form>
				<h5 style={{
					fontSize:'20px',
					paddingBottom:'5px'
				}}
				className="footer-link" >Subcribe to our weekly newsletter</h5>
				<input style={{
					borderRadius:5,
					color:'white',
					padding:5
					
				}}
				type="email"  placeholder="your email"/>
				<button style={{
					borderRadius:5,
					color:'white',
					backgroundColor:'Orange',
					padding:5,
					marginLeft:5
					
				}}>SUBCRIBE</button>
				<p style={{
					fontSize:'15px',
					paddingTop:'5px'
				}}
				className="footer-link" >Your can un Subcribe at anytime</p>
				</form>
			</div>
			<div className="footer-link-gp">
				<h4 className="footer-link" >Quick Links</h4>
				<Link to='/' className="footer-link">Donate</Link>
				<Link to='/Services' className="footer-link">Services</Link>
				<Link to='/About' className="footer-link">About</Link>
				<Link to='/Products'className="footer-link">partners</Link>
			</div>
			<div className="footer-link-gp">
				<h3 className="footer-link">Contact</h3>
				<Link to='/' className="foot-link" target='_blank'><i class='fab fa-facebook'/></Link>
				<Link to='/Services' className="foot-link" target='_blank'><i class ='fab fa-instagram'/></Link>
				<Link to='/About' className="foot-link" target='_blank'><i class='fab fa-twitter'/></Link>
				<Link to='/Contact Us'className="foot-link" target='_blank'><i class='fab fa-linkedin'/></Link>
				<ul>
				<Link to='/Contact Us'className="foot-link" target='_blank'><i class='fas fa-phone'/> +256758042033</Link>
				</ul>
				<ul>
				<Link to='/Contact Us'className="foot-link" target='_blank'><i class='fas fa-map'/> Kampala, Uganda</Link>
				</ul>
				<ul>
				<Link to='/Contact Us'className="foot-link" target='_blank'><i class='fas fa-envelope'/> collinsmicheal256@gmail.com</Link>
				</ul>
			</div>
		</div>
			<p className="copy-right">&copy; all rights reserved by segawa micheal collins 2020</p>
	</>

	)
}
export default Footer