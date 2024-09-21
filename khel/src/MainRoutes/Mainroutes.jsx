import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Downloads from "../pages/Downloads";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";
import RefundPolicy from "../pages/RefundPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const Mainroutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contacts" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/downloads" element={<Downloads />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/refund-policy" element={<RefundPolicy />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
			</Routes>
		</div>
	);
};

export default Mainroutes;
