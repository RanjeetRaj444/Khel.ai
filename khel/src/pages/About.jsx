import React from "react";
import "../styles/About.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import about_img from "../images/review.jpg";
const About = () => {
	return (
		<div className="about-page">
			{/* Hero Section */}
			<section className="hero-section">
				<div className="hero-overlay">
					<h1>DRS Cricket</h1>
					<p>Where Passion, Tech & AI Meet</p>
					<button className="cta-button">Get Started</button>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="story-section">
				<div className="story-content">
					<div className="story-text">
						<h2>Our Story</h2>
						<p>
							DRS Cricket was born out of the founders’ deep-rooted love for the
							game of cricket and a shared vision of using artificial
							intelligence to enhance the sport. We are a team of passionate
							cricket enthusiasts and tech innovators who believe in harnessing
							the power of AI to make the game fairer, more engaging, and
							accessible to everyone.
						</p>
					</div>
					<div className="story-image">
						<img src={about_img} alt="DRS Cricket" />
					</div>
				</div>
			</section>

			{/* Video Section */}
			<section className="video-section">
				<ReactPlayer
					url="https://youtu.be/49I2DmzMP64"
					className="drs-video"
					controls
				/>
			</section>

			{/* Let’s Work Together Section */}
			<section className="work-together-section">
				<h2>Let’s Work Together</h2>
				<p>
					Connect with us to explore how we can make your vision a reality. Join
					us in shaping the future.
				</p>
				<Link to="/pricing">
					<button className="cta-button">Get Started</button>
				</Link>
			</section>
		</div>
	);
};

export default About;
