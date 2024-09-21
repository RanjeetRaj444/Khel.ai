import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Using React Icons for arrow
import "../styles/Faq.css";

const faqData = [
	{
		question: "Is the ball tracking feature accurate?",
		answer:
			"Yes, our ball tracking technology provides precise results, given the camera quality and conditions.",
	},
	{
		question: "Can I access the app on iOS devices?",
		answer: "Currently, the app is available only for Android devices.",
	},
	{
		question: "What is the duration of the free trial?",
		answer: "Our free trial lasts for a single match.",
	},
	{
		question: "Can I upgrade my plan at any time?",
		answer: "Yes, you can easily upgrade your plan within the app.",
	},
];

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index); // Toggle current question
	};

	return (
		<div className="faq-container">
			<h1>Frequently Asked Questions</h1>
			<p>
				Here are some of the most frequently asked questions. If you have any
				other questions, feel free to reach out to us.
			</p>
			<div className="faq-list">
				{faqData.map((faq, index) => (
					<div
						key={index}
						className={`faq-item ${activeIndex === index ? "active" : ""}`}
						onClick={() => handleClick(index)}
					>
						<div className="faq-question">
							{faq.question}
							<FaChevronDown />
						</div>
						<div className="faq-answer">{faq.answer}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
