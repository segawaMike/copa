import React from 'react'
import'../../App.css'
function Contact () {
	return(
		<div className="contact-card">
			<div className="form">
				<form>
					<ul className="field">
					<input  className="input-feild" type="text" placeholder="First Name" required/>
					</ul>
					<ul className="field">
					<input  className="input-feild" type="text" placeholder ="Second Name" required/>
					</ul>
					<ul className="field">
					<input  className="input-feild" type="email" placeholder="you@example.com" required/>
					</ul>
					<ul className="field">
					<input  className="input-feild" type="text"  placeholder="Your reason" required/>
					</ul>
					<ul className="field">
					<input className="input-feild-mes" placeholder="Your Message" />
					</ul>
					<ul className="field">
					<button style={{
						backgroundColor:'orange',
						color:'white',
						float:'right',
						padding:'10px',
						borderRadius:'5px'
					}}>Submit</button>
					</ul>
				</form>	
			</div>

			<div className="card-info">
			<p className="contact"><i class='fas fa-envelope'/> collinsmicheal256@gmail.com</p>
			<p className="contact"><i class='fas fa-phone'/> +256758042033</p>
			<p className="contact"><i class='fas fa-map'/> Kampala Uganda</p>
			<p className="contact"><i class='fab fa-whatsapp'/> +256758042033</p>
				
			</div>

		</div>
	)
}
export default Contact