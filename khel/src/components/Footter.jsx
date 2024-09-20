import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
const Footter = () => {
	return (
		<footer>
			<div className="footer-content">
				<a href="#top">Back to Top</a>
				<p>Registered Address: Delhi India</p>
				<p>© Business 2 Community. All Rights Reserved.</p>
				<div className="footer-links">
					<Link href="/privacy">Privacy & Terms of Use</Link>
					<a href="/about">About B2C</a>
					<a href="#">Why Trust Us</a>
					<a href="/policy">Editorial Policy</a>
					<a href="#">Email us</a>
				</div>
			</div>
			<div className="social-icons">
				<a href="#">
					<img src="twitter-icon.png" alt="Twitter" />
				</a>
				<a href="#">
					<img src="facebook-icon.png" alt="Facebook" />
				</a>
				<a href="#">
					<img src="linkedin-icon.png" alt="LinkedIn" />
				</a>
			</div>
		</footer>
	);
};

export default Footter;
