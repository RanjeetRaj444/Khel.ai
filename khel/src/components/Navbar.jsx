import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../styles/styled-components/Menu";
import "../styles/Navbar.css";
import { RiMenuFoldFill, RiCloseLine } from "react-icons/ri";
import NavButton from "./Buttons/NavButton";

const Navbar = ({ home }) => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav id="nav-menu">
			<Link to="/" offset={-100}>
				<div className="brand">
					<h3 id="user-detail-name">Khel.ai</h3>
				</div>
			</Link>

			<div className="bigScreenNav">
				<ul className={"menus"}>
					<li className="menu__item">
						<Link className="nav-link home" to="/" offset={-100}>
							<Menu>Home</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link className="nav-link downloads" to="/downloads" offset={-100}>
							<Menu>Downloads</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link className="nav-link about" to="/about" offset={-100}>
							<Menu>About</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link className="nav-link contact" to="/contacts" offset={-100}>
							<Menu>Contacts</Menu>
						</Link>
					</li>
					<li className="menu__item">
						<Link className="nav-link " to="/pricing" offset={-100}>
							<NavButton />
						</Link>
					</li>
				</ul>
			</div>

			<div className="smallScreenNav">
				<button onClick={() => setOpenMenu(true)}>
					<RiMenuFoldFill style={{ color: "black" }} />
				</button>

				{openMenu && (
					<div className="menus__small">
						<ul className="small">
							<button onClick={() => setOpenMenu(false)}>
								<RiCloseLine />
							</button>

							<li className="menu__item">
								<Link
									className="nav-link home"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="/home"
									offset={-100}
								>
									<Menu>Home</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									className="nav-link downloads"
									to="/downloads"
									offset={-100}
								>
									<Menu>Downloads</Menu>
								</Link>
							</li>
							<li className="menu__item">
								<Link
									className="nav-link about"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="/about"
									offset={-100}
								>
									<Menu>About</Menu>
								</Link>
							</li>

							<li className="menu__item">
								{" "}
								<Link
									className="nav-link contact"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="contacts"
									offset={-100}
								>
									<Menu>Contacts</Menu>
								</Link>
							</li>
							<li className="menu__item">
								<NavButton />
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
