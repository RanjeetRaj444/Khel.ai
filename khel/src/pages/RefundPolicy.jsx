import React from "react";
import "../styles/RefundPolicy.css";

const RefundPolicy = () => {
	return (
		<div className="refund-policy-container">
			<section className="refund-policy-header">
				<h1>Refund Policy</h1>
				<p>
					At Khel.ai, we strive to provide you with the best Cricket DRS
					experience. However, if you are not completely satisfied with your
					purchase, we are here to assist. Please review our refund policy
					below:
				</p>
			</section>

			<section className="refund-policy-section">
				<h2>General Terms</h2>
				<h3>Eligibility for Refunds:</h3>
				<ul>
					<li>Refund requests must be made within 14 days of purchase.</li>
					<li>Requests must include proof of purchase and activation key.</li>
				</ul>

				<h3>Conditions for Refunds:</h3>
				<ul>
					<li>
						The app must not have been used extensively beyond basic setup.
					</li>
					<li>
						Refunds are not available for renewed subscriptions after the
						initial 14-day period.
					</li>
					<li>
						Refunds will not be issued for partial months or unused services
						within a subscription period.
					</li>
				</ul>

				<h3>How to Request a Refund:</h3>
				<ul>
					<li>
						Send an email to{" "}
						<a href="mailto:vaibhav@khel.ai">vaibhav@khel.ai</a> with the
						subject line “Refund Request.”
					</li>
					<li>
						Include your order number, activation key, and the reason for your
						refund request.
					</li>
				</ul>
			</section>

			<section className="refund-policy-section">
				<h2>Refund Process</h2>
				<h3>Review Period:</h3>
				<ul>
					<li>
						Our team will review your refund request within 5-7 business days.
					</li>
					<li>
						We may request additional information to process your request.
					</li>
				</ul>

				<h3>Refund Approval:</h3>
				<ul>
					<li>
						Refunds are not guaranteed and will be reviewed by the team on a
						case-by-case basis.
					</li>
					<li>
						Approved refunds will be processed to the original method of
						payment.
					</li>
					<li>
						You will receive a confirmation email once the refund has been
						processed.
					</li>
				</ul>

				<h3>Processing Time:</h3>
				<ul>
					<li>
						Refunds may take 5-10 business days to appear on your statement,
						depending on your payment provider.
					</li>
				</ul>
			</section>

			<section className="refund-policy-section">
				<h2>Non-Refundable Situations</h2>
				<ul>
					<li>
						<strong>Unauthorized Access:</strong> Refunds will not be issued for
						activation keys that have been shared or used by unauthorized users.
					</li>
					<li>
						<strong>Violation of Terms:</strong> Refunds will not be granted if
						the terms of service are violated, including misuse of the app.
					</li>
				</ul>
			</section>

			<section className="refund-policy-section">
				<h2>Contact Us</h2>
				<p>
					If you have any questions or concerns regarding our refund policy,
					please do not hesitate to contact us at{" "}
					<a href="mailto:vaibhav@khel.ai">vaibhav@khel.ai</a>.
				</p>
				<p>
					Thank you for choosing Khel.ai. We appreciate your business and are
					dedicated to providing you with the best possible experience.
				</p>
			</section>
		</div>
	);
};

export default RefundPolicy;
