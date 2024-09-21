import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Import icons

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-content">
				<div className="footer-left">
					<a href="#top" className="back-to-top">
						Back to Top
					</a>
					<p>Registered Address: Delhi, India</p>
					<p>© Khel.AI. All Rights Reserved.</p>
				</div>

				<div className="footer-right">
					<div className="footer-logo">
						<Link to={"/"}>
							{" "}
							<h2>Khel.AI</h2>
						</Link>
					</div>
					<div className="footer-links">
						<Link to="/refund-policy">Refund Policies</Link>
						<Link to="/privacy">Privacy & Terms of Use</Link>
						<a href="/about">About Us</a>
						<a href="#">Why Trust Us</a>
						<Link to="/policy">Editorial Policy</Link>
						<a href="mailto:vaibhav@khel.ai">Email us</a>
					</div>
				</div>
			</div>

			<div className="social-icons">
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<FaTwitter className="icon" />
				</a>
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebookF className="icon" />
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedinIn className="icon" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
