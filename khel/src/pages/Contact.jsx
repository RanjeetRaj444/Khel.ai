import React from "react";
import "../styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import MapComponent from "../components/MapComponent"; // Import the map component

const Contact = () => {
	return (
		<div className="contact-page">
			{/* Contact Info Section */}
			<motion.section
				className="contact-info-section"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<h1>Contact Us</h1>
				<div className="contact-info">
					<motion.div
						className="info-card"
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.3 }}
					>
						<FaPhoneAlt className="contact-icon" />
						<h2>Phone</h2>
						<p>+91 88004-40122</p>
					</motion.div>

					<motion.div
						className="info-card"
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.3 }}
					>
						<FaEnvelope className="contact-icon" />
						<h2>Email</h2>
						<p>vaibhav@khel.ai</p>
					</motion.div>

					<motion.div
						className="info-card"
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.3 }}
					>
						<FaMapMarkerAlt className="contact-icon" />
						<h2>Location</h2>
						<p>40/153 CR Park, Delhi India</p>
					</motion.div>
				</div>
			</motion.section>

			{/* Leaflet Map Section */}
			<section className="map-section">
				<h2>Our Location</h2>
				<MapComponent /> {/* This renders the Leaflet map */}
			</section>
		</div>
	);
};

export default Contact;
