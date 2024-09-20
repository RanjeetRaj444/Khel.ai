const SolutionCard = ({ icon, title, description }) => (
	<div className="solution-card">
		<div className="icon">{icon}</div>
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
);

export default SolutionCard;
