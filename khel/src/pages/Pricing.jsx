import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../styles/Pricing.css";

const plans = [
	{
		name: "Basic plan",
		price: "₹ 239/hour",
		description: "Affordable rates for casual turf sessions",
		features: {
			streaming: true,
			review: true,
			highlights: false,
			replay: false,
			scoreTicker: false,
		},
		image:
			"https://as2.ftcdn.net/v2/jpg/04/48/70/33/1000_F_448703371_XwNIWrsjtwV8Py4L6KjlnBnrjXhpDfyE.jpg",
	},
	{
		name: "Standard plan",
		price: "₹ 489/hour",
		description: "Balanced pricing for regular turf players.",
		features: {
			streaming: true,
			review: true,
			highlights: true,
			replay: false,
			scoreTicker: false,
		},
		image:
			"https://external-preview.redd.it/lYL0e3fKPhGd9lywTiIFNA7kPGyWG4NtbZkr1A4ql_Y.png?auto=webp&s=cb102f2be7675dd2362887b7ca079b3fa674b718",
	},
	{
		name: "Premium plan",
		price: "₹ 899/hour",
		description: "Premium pricing for turf enthusiasts.",
		features: {
			streaming: true,
			review: true,
			highlights: true,
			replay: true,
			scoreTicker: false,
		},
		image:
			"https://as2.ftcdn.net/v2/jpg/04/48/70/33/1000_F_448703360_Yl1j5l882016Uzmo52mqGx2eu9h07Apt.jpg",
	},
	{
		name: "Premium Plus plan",
		price: "₹ 2200/hour",
		description: "Premium Plus pricing for Ground Players.",
		features: {
			streaming: true,
			review: true,
			highlights: true,
			replay: true,
			scoreTicker: true,
		},
		image:
			"https://as1.ftcdn.net/v2/jpg/04/48/70/34/1000_F_448703418_0Kiybs2VJ5kIFZWG5Fk8b3Un3ztfa88c.jpg",
	},
];

const Pricing = () => {
	return (
		<div className="pricing-container">
			<h1>Choose Your Plan</h1>
			<div className="pricing-grid">
				{plans.map((plan, index) => (
					<div className="pricing-card" key={index}>
						<img src={plan.image} alt={plan.name} className="plan-image" />
						<div className="plan-details">
							<h2>{plan.name}</h2>
							<p className="price">{plan.price}</p>
							<p className="description">{plan.description}</p>
							<button className="buy-btn">Buy Now</button>
							<ul className="features-list">
								<li>
									<span>
										{plan.features.streaming ? (
											<FaCheckCircle />
										) : (
											<FaTimesCircle />
										)}
									</span>{" "}
									Streaming
								</li>
								<li>
									<span>
										{plan.features.review ? (
											<FaCheckCircle />
										) : (
											<FaTimesCircle />
										)}
									</span>{" "}
									Review
								</li>
								<li>
									<span>
										{plan.features.highlights ? (
											<FaCheckCircle />
										) : (
											<FaTimesCircle />
										)}
									</span>{" "}
									Highlights
								</li>
								<li>
									<span>
										{plan.features.replay ? (
											<FaCheckCircle />
										) : (
											<FaTimesCircle />
										)}
									</span>{" "}
									Replay
								</li>
								<li>
									<span>
										{plan.features.scoreTicker ? (
											<FaCheckCircle />
										) : (
											<FaTimesCircle />
										)}
									</span>{" "}
									Score Ticker
								</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;
