import React from "react";
import "../styles/Home.css";
import SolutionCard from "../components/SolutionCard";
import { solutions } from "../data/solutions";
import NavButton from "../components/Buttons/NavButton";
import challengephoto1 from "../images/channels-home.jpeg";
import chooseImage1 from "../images/pngwing.com (9).png";
import chooseImage2 from "../images/pngwing.com (7).png";
import VideoCarousel from "../components/VideoCarousel";
import Faq from "../components/Faq";

const Home = () => {
	return (
		<main className="home-page">
			<section className="home-head">
				<div className="home-heading">
					<h1>Cricket Analysis Automation at Your Fingertips</h1>
					<p>Powerful tools to simplify cricket analysis and tracking</p>
					<NavButton />
				</div>
			</section>

			<section className="solutions-container">
				<h1 className="solutions-container__heading">Our Solutions</h1>
				<p className="solutions-container__subheading">
					Streamline your cricket analysis with our advanced features
				</p>

				<div className="solutions-grid">
					{solutions.map((solution, index) => (
						<SolutionCard
							key={index}
							icon={solution.icon}
							title={solution.title}
							description={solution.description}
						/>
					))}
				</div>
			</section>
			<section className="video-section-home">
				<h1>Our Works :-</h1>
				<VideoCarousel />
			</section>
			<section className="challenges-section">
				<div className="image-container">
					<img
						src="https://as2.ftcdn.net/v2/jpg/04/48/70/43/1000_F_448704319_FSwmNX1fqLMPZzOw1g9leDPeIXWsWQz7.jpg"
						alt="Cricket player"
					/>
				</div>
				<div className="content-container">
					<h2>Challenges Faced by Traditional Cricket Analysis</h2>
					<ul>
						<li>Manual ball tracking is time-consuming and prone to errors</li>
						<li>Finding and clipping video highlights require manual effort</li>
						<li>
							Need to switch between multiple tools and platforms for analysis
						</li>
						<li>
							Limited access to advanced analysis features without paid plans
						</li>
						<li>Delays in getting analysis due to manual processes</li>
					</ul>
				</div>
			</section>
			<section className="challenges-section">
				<div className="content-container">
					<h2>Our Revolutionary Solutions</h2>
					<ul>
						<li>Automated ball tracking for accurate analysis</li>
						<li>Effortless video clipping with AI technology</li>
						<li>All-in-one Android app for seamless analysis</li>
						<li>Flexible plans with free trials and premium benefits</li>
						<li>Real-time insights and faster analysis with advanced tools</li>
					</ul>
				</div>
				<div className="image-container">
					<img
						src="https://as2.ftcdn.net/v2/jpg/04/48/70/33/1000_F_448703371_XwNIWrsjtwV8Py4L6KjlnBnrjXhpDfyE.jpg"
						alt="Cricket player"
					/>
				</div>
			</section>

			<section className="choose-khelai-section">
				<div className="choose-section-heading">
					<h1>Why Choose khel.ai?</h1>
					<p>
						Our platform offers a range of benefits that make cricket analysis
						easier and more efficient
					</p>
				</div>
				<div className="choose-section-body">
					<div className="choose-section-img-container">
						<div>
							<img src={chooseImage1} alt="Cricket-Image 1" />
						</div>
						<div>
							<img src={chooseImage2} alt="Cricket_Image 2" />
						</div>
					</div>
					<div className="choose-section-desc-container">
						<div className="choose-desc-box">
							<div className="desc-content">
								<h2>Smart and Efficient</h2>
								<p>Cutting-edge technology to simplify cricket analysis</p>
							</div>
							<div className="desc-number">1</div>
						</div>
						<div className="choose-desc-box">
							<div className="desc-content">
								<h2>Comprehensive Features</h2>
								<p>All-in-one solution for analysis and tracking needs</p>
							</div>
							<div className="desc-number">2</div>
						</div>
						<div className="choose-desc-box">
							<div className="desc-content">
								<h2>Flexible Pricing</h2>
								<p>Choose from free trials or upgrade for premium benefits</p>
							</div>
							<div className="desc-number">3</div>
						</div>
					</div>
				</div>
			</section>
			<Faq />
		</main>
	);
};

export default Home;
