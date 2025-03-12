import React, { Fragment } from 'react';
import { Imagesdata } from '../../common/commonimages';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Card, Accordion, Container, Nav, Tab, Navbar } from 'react-bootstrap';
import { data1, contact } from '../../common/commondata';
import CountUp from 'react-countup';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
const LandingPage = () => {

	const SidSwitcherIcon = () => {
		//leftsidemenu
		document.querySelector(".demo_changer")?.classList.toggle("active");
		const Rightside = document.querySelector(".demo_changer");
		Rightside.style.insetInlineEnd = "0px";

	};
	//switcher close function
	const SideMenuclose = () => {

		document.querySelector(".demo_changer")?.classList.remove("active");
		let demo_changer = document.querySelector(".demo_changer");
		if (demo_changer) {
			demo_changer.style.right = "-270px";
		}
	}
	const Navbar1 = () => {
		//Pageclick
		const handleClick = (e) => {
			e.preventDefault();
			const target = e.currentTarget?.getAttribute('href');
			const location = document.querySelector(target)?.offsetTop;
			window.scrollTo({
				left: 0,
				top: location - 64,
			});
		};
		// Pagesactive while scrolling
		const pageLink = document.querySelectorAll(".side-menu__item");
		pageLink.forEach((Element) => {
			Element?.addEventListener("click", (event) => {
				event.preventDefault();
				const hrefdata = Element?.getAttribute("href");
				const elementview = document.querySelector(hrefdata);
				elementview.scrollIntoView({
					behavior: "smooth",
					offsetTop: 1 - 60,
				});
			});
		});
		function onScroll() {
			const sections = document.querySelectorAll(".side-menu__item");
			const scrollPos =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;

			sections.forEach((elem) => {
				// const value  = elem.getAttribute("href");
				const refElement = document.querySelector(["href"]);
				const scrollTopMinus = scrollPos + 73;
				if (
					refElement?.offsetTop <= scrollTopMinus &&
					refElement?.offsetTop + refElement.offsetHeight > scrollTopMinus
				) {
					elem.classList.add("active");
				} else {
					elem.classList.remove("active");
				}
			});
		}
		window.document.addEventListener("scroll", onScroll);


		/// pin
		const Topup = () => {
			if (window.scrollY > 30 && document.querySelector(".landing-page")) {
				const Scolls = document.querySelectorAll(".sticky");
				Scolls.forEach((e) => {
					e.classList.add("sticky-pin");
				});
			} else {
				const Scolls = document.querySelectorAll(".sticky");
				Scolls.forEach((e) => {
					e.classList.remove("sticky-pin");
				});
			}
		};
		window.addEventListener("scroll", Topup);
		return (
			<div className=''>
				<ul className="side-menu">
					{data1.map((data) => (
						<li className="slide" key={Math.random()}>
							<Nav.Link onClick={handleClick} className={`side-menu__item ${data.class}`} href={data.url} ><span
								className="side-menu__label">{data.heading}</span></Nav.Link>
						</li>
					))}
				</ul>
			</div>
		);

	};
	const sidebarToggled = () => {
		document.querySelector(".app")?.classList.toggle("sidenav-toggled");
	};
	const SidSwitcherIcon1 = () => {
		//leftsidemenu
		document.querySelector(".demo_changer")?.classList.toggle("active");
		const Rightside = document.querySelector(".demo_changer");
		Rightside.style.insetInlineEnd = "0px";

	};
	return (
		<Fragment>

			<div className="page">
				<div className="page-main">
					<div className="main-header side-header hor-header">
						<div className="main-container container-fluid">
							<div className="main-header-left">
								<Link onClick={() => sidebarToggled()} className="main-header-menu-icon" to="#"
									id="mainSidebarToggle"><span></span></Link>
								<div className="hor-logo">
									<Link className="main-logo" to={`${import.meta.env.BASE_URL}dashboard/`}>
										<img src={Imagesdata("whiteLogo")} className="header-brand-img desktop-logo"
											alt="logo" />
										<img src={Imagesdata("logo")} className="header-brand-img desktop-logo-dark"
											alt="logo" />
									</Link>
								</div>
							</div>
							<div className="main-header-center">
								<div className="responsive-logo">
									<Link to={`${import.meta.env.BASE_URL}dashboard/`}><img src={Imagesdata("logo")} className="mobile-logo" alt="logo" /></Link>
									<Link to={`${import.meta.env.BASE_URL}dashboard/`}><img src={Imagesdata("whiteLogo")} className="mobile-logo-dark" alt="logo" /></Link>
								</div>
							</div>
							<Navbar className="main-header-right">
								<Navbar.Toggle className="navbar-toggler navresponsive-toggler" type="button" data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4"
									aria-expanded="false" aria-label="Toggle navigation">
									<i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
								</Navbar.Toggle>
								<div
									className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent-4">
										<div className="d-flex order-lg-2 ms-auto">
											<div className="header-nav-right p-3">
												<Link to={`${import.meta.env.BASE_URL}pages/custompages/signin/`} className="btn ripple btn-min w-sm btn-outline-primary me-2"
													target="_blank">New User
												</Link>
												<Link to={`${import.meta.env.BASE_URL}pages/custompages/signup/`} className="btn ripple btn-min w-sm btn-primary me-2"
													target="_blank">Login
												</Link>
											</div>
										</div>
									</Navbar.Collapse>
								</div>
								<div className="demo-icon nav-link icon" onClick={() => SidSwitcherIcon1()}>
									<i className="fe fe-settings fa-spin  text_primary"></i>
								</div>
							</Navbar>
						</div>
					</div>

					<div className="landing-top-header overflow-hidden">
						<div className="top sticky">
							<div className="landing-app-sidebar__overlay" data-bs-toggle="sidebar"></div>
							<div className="landing-app-sidebar bg-transparent">
								<div className="container">
									<div className="row">
										<div className="main-sidemenu navbar px-0">
											<Link className="main-logo" to={`${import.meta.env.BASE_URL}indexpage/`}>
												<img src={Imagesdata("whiteLogo")} className="header-brand-img desktop-logo"
													alt="logo" />
												<img src={Imagesdata("logo")}
													className="header-brand-img desktop-logo-dark" alt="logo" />
											</Link>
											<Navbar1 />
											<div className="header-nav-right d-none d-lg-block">
												<Link to={`${import.meta.env.BASE_URL}pages/custompages/signin/`} className="btn ripple btn-min w-sm btn-outline-info me-2"
												>New User
												</Link>
												<Link to={`${import.meta.env.BASE_URL}pages/custompages/signin/`} className="btn ripple btn-min w-sm btn-primary me-2"
												>Login
												</Link>
											</div>
											<div className="header-setting-icon bg-primary rounded-5 d-none d-lg-block">
												<div className="demo-icon nav-link icon" onClick={() => SidSwitcherIcon()}>
													<i className="fe fe-settings fa-spin  text_primary"></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden reveal" id="home" onClick={() => SideMenuclose()}>
							<div className="container px-sm-0">
								<Row>
									<Col xl={6} lg={6} className="animation-zidex pos-relative">
										<h4 className="fw-semibold mt-7">Manage Your Business</h4>
										<h1 className="text-start fw-bold">We Help to Build Your Dream Project with Valex !</h1>
										<h6 className="pb-3">
											Valex - Now you can use this admin template to design stunning dashboards
											that will wow your target viewers or users to no end. To create a good and
											well-structured dashboard,
											you need to start from scratch with React, SCSS, CSS, and JS and with lots of coding,
											but by using this Valex-Admin template.</h6>

										<Link to={`${import.meta.env.BASE_URL}indexpage/`}
											target="_blank" className="btn ripple btn-min w-lg mb-3 me-2 btn-primary"><i
												className="fe fe-play me-2"></i> Get Started
										</Link>
										<Link to="https://themeforest.net/user/spruko/portfolio"
											className="btn ripple btn-min w-lg btn-outline-primary mb-3 me-2" target="_blank"><i
												className="fe fe-eye me-2"></i>Discover More
										</Link>
									</Col>
									<Col xl={6} lg={6} className="my-auto">
										<img src={Imagesdata("pngs14")} alt="" />
									</Col>
								</Row>
							</div>
						</div>
					</div>

					<div className="main-content mt-0 ms-0">
						<div className="side-app ">
							<div className="sptb section bg-white-2" id="Features">
								<div className="container">
									<Row>
										<h4 className="text-center fw-semibold landing-card-header">Features</h4>
										<span className="landing-title"></span>
										<h2 className="fw-semibold text-center">Valex Main Features</h2>
										<p className="text-default mb-5 text-center">The Valex admin template comes with
											ready-to-use features that are completely easy-to-use for any user, even for
											a beginner.</p>
										<div className="row mt-7">
											<Col lg={6} md={12}>
												<div className="card features main-features main-features-4 wow fadeInUp reveal revealleft active p-4" data-wow-delay="0.1s">
													<div className="bg-img mb-2 text-left">
														<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="#42A3DB" /><path fill="#347CBE" d="M85.5 26.6 66.1 61 33.3 98.6 62.6 128H64c33.7 0 61.3-26 63.8-59.1L85.5 26.6z" /><path fill="#CD2F30" d="M73.1 57.7h-16c3.6 18.7 11.1 36.6 22.1 52.5.3-5 1-9.8 1.8-14.5 4.6 1.3 9.2 2.3 13.7 3-9.7-12.2-17-26.1-21.6-41z" /><path fill="#F04D45" d="M54.9 57.7c-4.6 15-11.9 28.9-21.6 40.9 4.5-.7 9.1-1.7 13.7-3 .9 4.7 1.5 9.5 1.8 14.5 11-15.9 18.4-33.8 22.1-52.5h-16z" /><path fill="#FFF" d="M93.5 52c1.8-1.8 1.8-4.7 0-6.5-1.3-1.3-1.7-3.3-1-5 1-2.4-.1-5-2.5-6-1.7-.7-2.8-2.4-2.8-4.3 0-2.5-2.1-4.6-4.6-4.6-1.9 0-3.5-1.1-4.3-2.8-1-2.4-3.7-3.5-6-2.5-1.7.7-3.7.3-5-1-1.8-1.8-4.7-1.8-6.5 0-1.3 1.3-3.3 1.7-5 1-2.4-1-5 .1-6 2.5-.7 1.7-2.4 2.8-4.3 2.8-2.5 0-4.6 2.1-4.6 4.6 0 1.9-1.1 3.5-2.8 4.3-2.4 1-3.5 3.7-2.5 6 .7 1.7.3 3.7-1 5-1.8 1.8-1.8 4.7 0 6.5 1.3 1.3 1.7 3.3 1 5-1 2.4.1 5 2.5 6 1.7.7 2.8 2.4 2.8 4.3 0 2.5 2.1 4.6 4.6 4.6 1.9 0 3.5 1.1 4.3 2.8 1 2.4 3.7 3.5 6 2.5 1.7-.7 3.7-.3 5 1 1.8 1.8 4.7 1.8 6.5 0 1.3-1.3 3.3-1.7 5-1 2.4 1 5-.1 6-2.5.7-1.7 2.4-2.8 4.3-2.8 2.5 0 4.6-2.1 4.6-4.6 0-1.9 1.1-3.5 2.8-4.3 2.4-1 3.5-3.7 2.5-6-.7-1.7-.3-3.7 1-5z" /><path fill="#FFCD0A" d="M64 70.8c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z" /><path fill="#FFF" d="M59.9 61c-.6 0-1.1-.2-1.5-.7l-8.3-9.2c-.7-.8-.7-2.1.1-2.8.8-.7 2.1-.7 2.8.1l6.7 7.5 15.1-18.8c.7-.9 2-1 2.8-.3.9.7 1 2 .3 2.8L61.4 60.2c-.3.5-.9.8-1.5.8z" /></svg>
													</div>
													<div className="text-left">
														<h4 className="fw-bold">Quality &amp; Clean Code</h4>
														<p className="mb-0">The Valex admin code is maintained very cleanly
															and well-structured with proper comments.
														</p>
													</div>
												</div>
											</Col>
											<Col lg={6} md={12}>
												<div className="card features main-features main-features-2 wow fadeInUp reveal revealleft active p-4" data-wow-delay="0.1s">
													<div className="bg-img mb-2 text-left">
														<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#54C0EB" /><path fill="#84DBFF" d="M19.2,109c11.5,11.4,27.3,18.5,44.8,18.5c17.5,0,33.3-7.1,44.8-18.5H19.2z" /><rect width="19.6" height="10.4" x="54.2" y="92.7" fill="#FFF" /><rect width="19.6" height="2.3" x="54.2" y="92.7" fill="#E6E9EE" /><path fill="#E6E9EE" d="M82.2,109H45.8l0,0c0-3.3,2.7-6,6-6h24.4C79.5,103.1,82.2,105.7,82.2,109L82.2,109z" /><path fill="#324A5E" d="M103,92.7H25c-2.4,0-4.4-2-4.4-4.4V34.7c0-2.4,2-4.4,4.4-4.4h78c2.4,0,4.4,2,4.4,4.4v53.7   C107.4,90.7,105.4,92.7,103,92.7z" /><path fill="#FFF" d="M20.6,84v4.4c0,2.4,1.9,4.3,4.3,4.3H103c2.4,0,4.3-1.9,4.3-4.3V84H20.6z" /><rect width="80.3" height="46.9" x="23.9" y="33.4" fill="#FFF" /><circle cx="100.3" cy="88.3" r="2" fill="#FF7058" /><circle cx="94.7" cy="88.3" r="2" fill="#4CDBC4" /><circle cx="89.1" cy="88.3" r="2" fill="#54C0EB" /><rect width="9.7" height="27.7" x="32.3" y="46.7" fill="#ACB3BA" /><rect width="9.7" height="15.8" x="45.7" y="58.7" fill="#4CDBC4" /><rect width="9.7" height="23.1" x="59.1" y="51.3" fill="#FFD05B" /><rect width="9.7" height="35.7" x="72.6" y="38.7" fill="#84DBFF" /><rect width="9.7" height="8.1" x="86" y="66.3" fill="#FF7058" /></svg>
													</div>
													<div className="text-left">
														<h4 className="fw-bold">Multiple Demos</h4>
														<p className="mb-0">
															We included multiple demos, preview video, and screen shots
															to give a quick overview of our Valex admin template.
														</p>
													</div>
												</div>
											</Col>
											<Col lg={6} md={12}>
												<div className="card features main-features main-features-3 wow fadeInUp reveal revealleft active p-4" data-wow-delay="0.1s">
													<div className="bg-img mb-2 text-left">
														<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#54C0EB" /><path fill="#FFF" d="M42.2,96H23.6c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C45.1,94.7,43.8,96,42.2,96z" /><rect width="18.7" height="36.8" x="23.6" y="35.8" fill="#4CDBC4" /><circle cx="32.9" cy="83.9" r="7.2" fill="#E6E9EE" /><circle cx="32.9" cy="83.9" r="5" fill="#324A5E" /><path fill="#FFF" d="M68.8,96H50.2c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C71.6,94.7,70.4,96,68.8,96z" /><rect width="18.7" height="36.8" x="50.1" y="35.8" fill="#FF7058" /><circle cx="59.5" cy="83.9" r="7.2" fill="#E6E9EE" /><circle cx="59.5" cy="83.9" r="5" fill="#324A5E" /><path fill="#FFF" d="M109,92.7l-18,4.6c-1.5,0.4-3.1-0.5-3.5-2.1L73.2,38.7c-0.4-1.5,0.5-3.1,2.1-3.5l18-4.6   c1.5-0.4,3.1,0.5,3.5,2.1l14.3,56.5C111.5,90.8,110.6,92.4,109,92.7z" /><rect width="18.7" height="36.8" x="80.4" y="36.1" fill="#FFD05B" transform="rotate(-14.193 89.778 54.551)" /><circle cx="97" cy="83.2" r="7.2" fill="#E6E9EE" /><circle cx="97" cy="83.2" r="5" fill="#324A5E" /></svg>
													</div>
													<div className="text-left">
														<h4 className="fw-bold">Widgets</h4>
														<p className="mb-0">
															30+ widgets are included in this template. Please check out
															the best option that suits you and implement it in your
															projects.
														</p>
													</div>
												</div>
											</Col>
											<Col lg={6} md={12}>
												<div className="card features main-features main-features-4 wow fadeInUp reveal revealleft active p-4" data-wow-delay="0.1s">
													<div className="bg-img mb-2 text-left">
														<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#FFD05B" /><path fill="#FFF" d="M30,103.8l0-79.7c0-1.8,1.5-3.3,3.3-3.3h50.1l0,11.4c0,1.8,1.5,3.3,3.3,3.3H98l0,68.3   c0,1.8-1.5,3.3-3.3,3.3H33.3C31.5,107.1,30,105.6,30,103.8z" /><path fill="#E6E9EE" d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4H86.6c-1.8,0-3.3-1.5-3.3-3.3L83.3,20.9z" /><path fill="#CED5E0" d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4L83.3,20.9z" /><rect width="54.6" height="2.4" x="36.7" y="50.7" fill="#E6E9EE" /><rect width="54.6" height="2.4" x="36.7" y="58.2" fill="#E6E9EE" /><rect width="54.6" height="2.4" x="36.7" y="65.8" fill="#E6E9EE" /><rect width="54.6" height="2.4" x="36.7" y="73.4" fill="#E6E9EE" /><rect width="23.5" height="2.4" x="67.8" y="80.9" fill="#84DBFF" /><rect width="23.5" height="2.4" x="67.8" y="88.5" fill="#84DBFF" /><rect width="54.6" height="2.4" x="36.7" y="43.1" fill="#E6E9EE" /><rect width="29.6" height="2.4" x="36.7" y="35.6" fill="#84DBFF" /><path fill="#FF7058" d="M41.1,83.3c-4.4,4.4-4.4,11.5,0,15.9s11.5,4.4,15.9,0c4.4-4.4,4.4-11.5,0-15.9   C52.6,78.9,45.5,78.9,41.1,83.3z M41.9,84.1c3.4-3.4,8.7-3.8,12.6-1.3l-1.6,1.6c-3-1.7-6.9-1.3-9.5,1.2c-2.6,2.6-3,6.5-1.2,9.5   l-1.6,1.6C38.1,92.8,38.5,87.5,41.9,84.1z M43.1,94.3c-1.3-2.5-0.9-5.7,1.2-7.7c2.1-2.1,5.2-2.5,7.7-1.2L43.1,94.3z M54.9,88.2   c1.3,2.5,0.9,5.7-1.2,7.7c-2.1,2.1-5.2,2.5-7.7,1.2L54.9,88.2z M56.1,98.3c-3.4,3.4-8.7,3.8-12.6,1.3l1.6-1.6   c3,1.7,6.9,1.3,9.5-1.2c2.6-2.6,3-6.5,1.2-9.5l1.6-1.6C60,89.6,59.5,94.9,56.1,98.3z" /></svg>
													</div>
													<div className="text-left">
														<h4 className="fw-bold">Validation Forms</h4>
														<p className="mb-0">
															Different types of “Form Validation” are implemented in this
															Valex admin template and used strict validation rules.
														</p>
													</div>
												</div>
											</Col>
											<Col lg={6} md={12}>
												<div className="card features main-features main-features-5 wow fadeInUp  p-4" data-wow-delay="0.1s">
													<div className="bg-img mb-2 text-left">
														<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#90DFAA" /><path fill="#FFF" d="M95.8,19.4H32.2c-1.9,0-3.4,1.5-3.4,3.4v82.5c0,1.9,1.5,3.4,3.4,3.4h63.7c1.9,0,3.4-1.5,3.4-3.4V22.7   C99.2,20.9,97.7,19.4,95.8,19.4z" /><polygon fill="#324A5E" points="88.5 90.2 43 90.2 43 34.2 39.5 34.2 39.5 93.8 88.5 93.8" /><rect width="4.9" height="44.8" x="48" y="41.3" fill="#FF7058" /><rect width="4.9" height="38.3" x="58.1" y="47.8" fill="#84DBFF" /><rect width="4.9" height="31.2" x="68.3" y="54.9" fill="#FFD05B" /><rect width="4.9" height="22.7" x="78.4" y="63.3" fill="#CED5E0" /></svg>
													</div>
													<div className="text-left">
														<h4 className="fw-bold">9 Types of Charts</h4>
														<p className="mb-0">
															We included nine (9) types of the best possible chart
															options for your project. You can customize with your
															requirement.
														</p>
													</div>
												</div>
											</Col>
											<Col lg={6} md={12}>
												<div className="card features main-features main-features-6 mb-4 wow fadeInUp  p-4" data-wow-delay="0.1s">
													<div className="bg-img mb-2 text-left">
														<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#54C0EB" /><path fill="#FFF" d="M28.8,22.7v82.5c0,1.9,1.5,3.4,3.4,3.4H84V96.8c0-1.9,1.5-3.4,3.4-3.4h11.8V22.7c0-1.9-1.5-3.4-3.4-3.4   H32.2C30.3,19.4,28.8,20.9,28.8,22.7z" /><path fill="#E6E9EE" d="M84,108.6h11.8c1.9,0,3.4-1.5,3.4-3.4V93.5H87.4c-1.9,0-3.4,1.5-3.4,3.4V108.6z" /><path fill="#CED5E0" d="M84,108.6h11.8c1.9,0,3.4-1.5,3.4-3.4V93.5L84,108.6z" /><rect width="6.3" height="11.8" x="47.6" y="39.6" fill="#CED5E0" /><rect width="6.3" height="21.1" x="56.4" y="30.3" fill="#FFD05B" /><rect width="6.3" height="17.1" x="65.3" y="34.2" fill="#84DBFF" /><rect width="6.3" height="24.5" x="74.2" y="26.8" fill="#FF7058" /><rect width="37.4" height="1.8" x="45.3" y="51.4" fill="#324A5E" /><rect width="52.7" height="2.6" x="37.7" y="73.5" fill="#E6E9EE" /><rect width="52.7" height="2.6" x="37.7" y="67.2" fill="#E6E9EE" /><rect width="52.7" height="2.6" x="37.7" y="60.9" fill="#E6E9EE" /><rect width="52.7" height="2.6" x="37.7" y="79.7" fill="#E6E9EE" /><rect width="38" height="2.6" x="37.7" y="86" fill="#E6E9EE" /></svg>
													</div>
													<div className="text-left">
														<h4 className="fw-bold">Documentation</h4>
														<p className="mb-0">
															The documentation provides clear-cut material for the Valex
															admin template. The documentation is explained in such a way that every user can understand.
														</p>
													</div>
												</div>
											</Col>
										</div>
									</Row>
								</div>
							</div>
							<div className="section testimonial-owl-landing feature-section">
								<Container>
									<Row>
										<Card className="bg-transparent mb-0">
											<h4 className="text-center fw-semibold text-white landing-card-header">Features</h4>
											<span className="landing-title"></span>
											<div className="demo-screen-skin code-quality pt-2" >
												<div className="text-center p-0">
													<h2 className="text-center fw-semibold text-white">Features Used in
														Valex Admin Template</h2>
													<Row className="justify-content-center">
														<div className="col-lg-12 px-0">
															<div className="feature-logos mt-5">
																<Swiper
																	slidesPerView={1}
																	spaceBetween={10}
																	pagination={{
																		clickable: true,
																		bullets: false,
																	}}
																	breakpoints={{
																		'@0.00': {
																			slidesPerView: 1,
																			spaceBetween: 10,
																		},
																		'@0.75': {
																			slidesPerView: 2,
																			spaceBetween: 20,
																		},
																		'@1.00': {
																			slidesPerView: 3,
																			spaceBetween: 40,
																		},
																		'@1.50': {
																			slidesPerView: 4,
																			spaceBetween: 50,
																		},
																	}}
																	autoplay={{
																		delay: 2500,
																		disableOnInteraction: false,
																	}}
																	modules={[Pagination, Autoplay]}
																	className="mySwiper"
																>
																	<SwiperSlide>
																		{/* <div className="slide"> */}
																		<img src={Imagesdata("landing1")} alt="img" />
																		<h5 className="mt-3 text-white">Bootstrap5</h5>
																		{/* </div> */}
																	</SwiperSlide>
																	<SwiperSlide>
																		<div className="slide">
																			<img src={Imagesdata("landing2")} alt="img" />
																			<h5 className="mt-3 text-white">HTML5</h5>
																		</div>
																	</SwiperSlide>
																	<SwiperSlide>
																		<div className="slide">
																			<img src={Imagesdata("landing3")} alt="img" />
																			<h5 className="mt-3 text-white">JQuery</h5>
																		</div>
																	</SwiperSlide>
																	<SwiperSlide>
																		<div className="slide">
																			<img src={Imagesdata("landing4")} alt="img" />
																			<h5 className="mt-3 text-white">Sass</h5>
																		</div>
																	</SwiperSlide>
																	<SwiperSlide>
																		<div className="slide">
																			<img src={Imagesdata("landing5")} alt="img" />
																			<h5 className="mt-3 text-white">Gulp</h5>
																		</div>
																	</SwiperSlide>
																	<SwiperSlide>
																		<div className="slide">
																			<img src={Imagesdata("landing6")} alt="img" />
																			<h5 className="mt-3 text-white">NPM</h5>
																		</div>
																	</SwiperSlide>
																	<SwiperSlide>
																		<div className="slide">
																			<img src={Imagesdata("landing1")} alt="img" />
																			<h5 className="mt-3 text-white">Bootstrap5</h5>
																		</div>
																	</SwiperSlide>
																	<SwiperSlide>
																		<div className="slide">
																			<img src={Imagesdata("landing2")} alt="img" />
																			<h5 className="mt-3 text-white">HTML5</h5>
																		</div>
																	</SwiperSlide>
																</Swiper>

															</div>
														</div>
													</Row>
												</div>
											</div>
										</Card>
									</Row>
								</Container>
							</div>
							<div className="section bg-landing working-section  bg-white-2" id="About">
								<Container>
									<Row>
										<h4 className="text-center fw-semibold landing-card-header">Our Mission</h4>
										<span className="landing-title"></span>
										<div className="text-center">
											<h2 className="text-center fw-semibold">Our mission is to make work meaningful.
											</h2>
										</div>
										<Col lg={12}>
											<div className="card bg-transparent">
												<div className="card-body text-dark">
													<div className="statistics-info">
														<div className="row">
															<Col xl={6} lg={6} className="pe-0 my-auto">
																<div className="ps-5">
																	<h2 className="text-start fw-semibold fs-25 mb-4">We are
																		a creative agency with a passion for design.
																	</h2>
																	<div className="d-flex reveal revealleft active">
																		<span><svg
																			style={{ width: '20px', height: '20px' }}
																			viewBox="0 0 24 24">
																			<path fill="#0162e8"
																				d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
																		</svg></span>
																		<div className="ms-4 mb-4">
																			<h5 className="fw-bold">Quality & Clean Code
																			</h5>
																			<p>The Valex admin code is maintained very
																				cleanly and well-structured with proper
																				comments.</p>
																		</div>
																	</div>
																	<div className="d-flex reveal revealleft">
																		<span><svg
																			style={{ width: '20px', height: '20px' }}
																			viewBox="0 0 24 24">
																			<path fill="#0162e8"
																				d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
																		</svg></span>
																		<div className="ms-4 mb-4">
																			<h5 className="fw-bold">Well Documented</h5>
																			<p>
																				The documentation provides clear-cut
																				material for the Valex admin template.
																				The documentation is explained or
																				instructed in such a way that every user
																				can understand.
																			</p>
																		</div>
																	</div>
																</div>
															</Col>
															<Col xl={6} lg={6}>
																<div className="text-center reveal revealleft mb-3">
																	<img src={Imagesdata("pngs16")}
																		alt="" className="br-5" />
																</div>
															</Col>
														</div>
													</div>
												</div>
											</div>
										</Col>
									</Row>
								</Container>
							</div>
							<div className="testimonial-owl-landing">
								<div className="container">
									<Row>
										<Card className="bg-transparent mb-0">
											<div className="demo-screen-skin code-quality" id="dependencies">
												<div className="text-center p-0">
													<div className="row justify-content-center">
														<div className="row text-center services-statistics landing-statistics">
															<Col xl={12}>
																<Container>
																	<Row>
																		<Col lg={12}>
																			<Row>

																				<Col xl={3} md={6} lg={3}>
																					<div className=" reveal">
																						<div className="bg-transparent">
																							<div className="counter-status">
																								<div className="counter-icon">
																									<i className="fe fe-server"></i>
																								</div>
																								<div
																									className="test-body text-center text-white">
																									<h1 className=" mb-0">
																										<CountUp className='h2 counter mb-0' end="140" />

																										<span className="">+</span>
																									</h1>
																									<div className="counter-text">
																										<h5
																											className="font-weight-normal mb-0">
																											React Components</h5>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</Col>
																				<Col xl={3} md={6} lg={3}>
																					<div className=" reveal">
																						<div className="bg-transparent">
																							<div className="counter-status">
																								<div className="counter-icon">
																									<i
																										className="fe fe-life-buoy"></i>
																								</div>
																								<div
																									className="test-body text-center text-white">
																									<h1 className=" mb-0">
																										<CountUp className='h2 counter mb-0' end="65" />

																										<span className="">+</span>
																									</h1>
																									<div className="counter-text">
																										<h5
																											className="font-weight-normal mb-0">
																											Plugins</h5>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</Col>
																				<Col xl={3} md={6} lg={3}>
																					<div className=" reveal">
																						<div className="bg-transparent">
																							<div className="counter-status">
																								<div className="counter-icon">
																									<i
																										className="fe fe-file"></i>
																								</div>
																								<div
																									className="test-body text-center text-white">
																									<h1 className=" mb-0">
																										<CountUp className='h2 counter mb-0' end="10" />

																										<span className="">+</span>
																									</h1>
																									<div className="counter-text">
																										<h5
																											className="font-weight-normal mb-0">
																											Form Elements</h5>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</Col>
																				<Col xl={3} md={6} lg={3}>
																					<div className=" reveal">
																						<div className="bg-transparent">
																							<div className="counter-status">
																								<div className="counter-icon">
																									<i className="fe fe-grid"></i>
																								</div>
																								<div
																									className="test-body text-center text-white">
																									<h1 className=" mb-0">
																										<CountUp className='h2 counter mb-0' end="30" />

																										<span className="">+</span>
																									</h1>
																									<div className="counter-text">
																										<h5
																											className="font-weight-normal mb-0">
																											Widgets</h5>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</Col>
																			</Row>
																		</Col>
																	</Row>
																</Container>
															</Col>
														</div>
													</div>
												</div>
											</div>
										</Card>
									</Row>
								</div>
							</div>
							<div className="section">
								<Container>
									<Row>
										<section className="sptb demo-screen-demo faqs" id="faqs-2">
											<Container>
												<Row className="align-items-center">
													<h4 className="text-center fw-semibold">Highlights</h4>
													<span className="landing-title"></span>
													<h2 className="text-center fw-semibold">Template Highlights</h2>
													<Col lg={12}>
														<Row className="justify-content-center">
															<Col lg={9} as='p' className="text-default sub-text mb-7">
																The Valex admin template is one of the modern dashboard templates. It is also a premium admin dashboard with high-end features, where users can easily customize or change their projects according to their choice. Please take a quick look at our template highlights.
															</Col>
														</Row>

														<Row id="grid">
															<Col lg={6}>
																<Col md={12} className="grid-item px-0 ">
																	<Accordion>
																		<Accordion.Item eventKey="0" className='landing-accordian mb-4  bg-primary-transparent'>
																			<Accordion.Header className='h5 fw-bold  card-title mb-0'>
																				<span className='text-primary'>Switch Easily From Vertical to Horizontal Menu</span>
																			</Accordion.Header>
																			<Accordion.Body>
																				<p>
																					The Valex - Bootstrap Responsive Flat Admin Dashboard HTML5 Template is available in both vertical and horizontal menus.
																					Both menus are managed by single assets. Where users can easily switch from vertical to horizontal menus.
																				</p>
																				<p className="mt-2 mb-3">
																					<span className="fw-bold">Note: </span>Please Refer full Documentation
																					for more details.
																				</p>
																			</Accordion.Body>
																		</Accordion.Item>
																	</Accordion>
																</Col>
																<Col md={12} className="grid-item  px-0">

																	<Accordion>
																		<Accordion.Item eventKey="0" className='landing-accordian mb-4 bg-success-transparent'>
																			<Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-success">
																				<span className='text-success'>Switch Easily From LTR to RTL Version</span></Accordion.Header>
																			<Accordion.Body className="pt-0">
																				<p>
																					The Valex - Bootstrap Responsive Flat Admin Dashboard HTML5 Template is available in LRT &amp; RTL versions with single assets. Using those single assets, it’s very easy to switch from one version to another version.
																				</p>
																				<p className="mt-2 mb-3">
																					<span className="fw-bold">Note: </span>Please Refer full Documentation
																					for more details.
																				</p>


																			</Accordion.Body>
																		</Accordion.Item>
																	</Accordion>
																</Col>
																<Col md={12} className="grid-item  px-0">

																	<Accordion className=" p-0">
																		<Accordion.Item eventKey="0" className='landing-accordian mb-4 bg-warning-transparent'>
																			<Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-warning">
																				<span className='text-warning'>Change Easily Side Menu Styles</span></Accordion.Header>
																			<Accordion.Body className="pt-0">
																				<p>
																					The Valex - Bootstrap Responsive Flat Admin Dashboard HTML5 Template is also available in different types of Side Menu Styles. Where the users can change their Side Menu styles by using single assets.
																				</p>
																				<p className="mt-2 mb-3">
																					<span className="fw-bold">Note: </span>Please Refer full Documentation
																					for more details.
																				</p>


																			</Accordion.Body>
																		</Accordion.Item>
																	</Accordion>
																</Col>
															</Col>
															<Col lg={6}>
																<Col md={12} className="grid-item  px-0">

																	<Accordion className="p-0">
																		<Accordion.Item eventKey="0" className=' landing-accordian mb-4 bg-info-transparent '>
																			<Accordion.Header className="card-options-collapse h5 fw-bold mb-0 text-success">
																				<span className='text-info'>Switch Easily From One Color to Another Color style</span></Accordion.Header>
																			<Accordion.Body className="pt-0">
																				<p>
																					The Valex - Bootstrap Responsive Flat Admin Dashboard HTML5 Template is available in different types of color styles. Where the users can change their template completely with those color styles.
																				</p>
																				<p className="mt-2 mb-3">
																					<span className="fw-bold">Note: </span>Please Refer full Documentation
																					for more details.
																				</p>


																			</Accordion.Body>
																		</Accordion.Item>
																	</Accordion>
																</Col>
																<Col md={12} className="grid-item  px-0">
																	<Accordion className=" p-0">
																		<Accordion.Item eventKey="0" className=' landing-accordian mb-4 bg-secondary-transparent'>
																			<Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-secondary">
																				<span className='text-secondary'>Switch Easily From Full Width to Boxed Layout</span></Accordion.Header>
																			<Accordion.Body className="pt-0">
																				<p>
																					The Valex - Bootstrap Responsive Flat Admin Dashboard HTML5 Template is also available in two different types of layouts "Fixed Layout" and "Scrollable Layout". Here users can switch their Template from one layout to another layout easily.
																				</p>
																				<p className="mt-2 mb-3">
																					<span className="fw-bold">Note: </span>Please Refer full Documentation
																					for more details.
																				</p>


																			</Accordion.Body>
																		</Accordion.Item>
																	</Accordion>
																</Col>
																<Col md={12} className="grid-item  px-0">
																	<Accordion className=" p-0">
																		<Accordion.Item eventKey="0" className='landing-accordian bg-danger-transparent'>
																			<Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-danger">
																				<span className='text-danger'>Easily From Fixed to Scrollable Layout</span></Accordion.Header>
																			<Accordion.Body className="pt-0">
																				<p>
																					The Valex - Bootstrap Responsive Flat Admin Dashboard HTML5 Template is also available in two different types of layouts “Full Width” and “Boxed” Layouts. So that user can switch their dashboard from one layout to another layout effortlessly.
																				</p>
																				<p className="mt-2 mb-3">
																					<span className="fw-bold">Note: </span>Please Refer full Documentation
																					for more details.
																				</p>


																			</Accordion.Body>
																		</Accordion.Item>
																	</Accordion>
																</Col>
															</Col>
														</Row>
													</Col>
												</Row>
											</Container>
										</section>
									</Row>
								</Container>
							</div>
							<div className="bg-landing section  bg-white-2">
								<Container>
									<Row>
										<h4 className="text-center fw-semibold landing-card-header">Choose a plan </h4>
										<span className="landing-title"></span>
										<h2 className="text-center fw-semibold">Find the <span className="text-primary">Perfect
											Plan</span> for your Business.</h2>
										<Tab.Container className="pricing-tabs text-center" defaultActiveKey="year">
											<div className="pri-tabs-heading text-center mt-3">
												<Nav className="nav nav-price justify-content-center pricing-tabs">
													<Nav.Item><Nav.Link data-bs-toggle="tab" href="#month" eventKey="month">Monthly</Nav.Link></Nav.Item>
													<Nav.Item><Nav.Link className="" data-bs-toggle="tab" eventKey="year"
														href="#annualyear">Annual</Nav.Link></Nav.Item>
												</Nav>
											</div>
											<Tab.Content className="tab-content text-start">
												<Tab.Pane className="tab-pane pb-0" id="annualyear" eventKey="year">
													<Row className="d-flex align-items-center justify-content-center">
														<Col lg={4} xl={4} md={8} sm={12}>
															<Card className="card p-3 border  border-primary pricing-card advanced reveal revealrotate">
																<div className="p-4 bg-primary rounded-5 d-block text-justified pt-2 bd-white-2">
																	<p className="fs-18 fw-semibold mb-1 pe-0">Advanced<span
																		className="badge bg-white text-primary float-end font-weight-normal">Limited
																		Deal</span></p>
																	<p className="text-justify fw-semibold mb-1"> <span
																		className="fs-30 me-2">$</span><span
																			className="fs-30 me-1">1,299</span><span
																				className="fs-25"><span
																					className="op-0-5 text-muted text-20">/</span>
																			year</span></p>
																	<p className="fs-13 mb-2">Lorem ipsum dolor sit amet
																		consectetur adipisicing elit. Iure quos debitis
																		aliquam .</p>
																	<p className="fs-13 mb-1 text-primary">Billed monthly on
																		regular basis!</p>
																</div>
																<div className="card-body py-2">
																	<ul className="text-justify pricing-body ps-0 my-4">
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
																			<strong> 5 Free</strong> Domain Name
																		</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5
																			</strong> One-Click Apps</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				3 </strong> Databases</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				Unlimited </strong> Cloud Storage</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				Money </strong> BackGuarantee</li>
																		<li className=""><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				24/7</strong> support</li>
																	</ul>
																</div>
																<div className="card-footer text-center border-top-0 py-2">
																	<Button className="btn btn-lg" variant='primary'>
																		<span className="ms-4 me-4">Select</span>
																	</Button>
																</div>
															</Card>
														</Col>
														<Col lg={4} xl={4} md={8} sm={12}>
															<div className="card  border  p-3 pricing-card reveal revealrotate">
																<div className="card-header d-block text-justified pt-2">
																	<p className="fs-18 fw-semibold mb-1">Basic</p>
																	<p className="text-justify fw-semibold mb-1"> <span
																		className="fs-30 me-2">$</span><span
																			className="fs-30 me-1">399</span><span
																				className="fs-25"><span
																					className="op-0-5 text-muted text-20">/</span>
																			year</span></p>
																	<p className="fs-13 mb-1">Lorem ipsum dolor sit amet
																		consectetur adipisicing elit. Iure quos debitis
																		aliquam .</p>
																	<p className="fs-13 mb-3 text-secondary">Billed monthly
																		on regular basis!</p>
																</div>
																<div className="card-body py-2">
																	<ul className="text-justify pricing-body ps-0 mb-0">
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong>
																				2 Free</strong> Domain Name</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
																			<strong>3 </strong> One-Click Apps
																		</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				1 </strong> Databases</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				Unlimited </strong> Cloud Storage</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				Money </strong> BackGuarantee</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				24/7</strong> support</li>
																	</ul>
																</div>
																<div className="card-footer text-center border-top-0 py-2">
																	<Button variant='' className="btn btn-lg btn-outline-secondary ">
																		<span className="ms-4 me-4">Select</span>
																	</Button>
																</div>
															</div>
														</Col>
														<Col lg={4} xl={4} md={8} sm={12}>
															<div className="card border  p-3 pricing-card reveal revealrotate">
																<div className="card-header d-block text-justified pt-2">
																	<p className="fs-18 fw-semibold mb-1">Regular</p>
																	<p className="text-justify fw-semibold mb-1"> <span
																		className="fs-30 me-2">$</span><span
																			className="fs-30 me-1">899</span><span
																				className="fs-25"><span
																					className="op-0-5 text-muted text-20">/</span>
																			year</span></p>
																	<p className="fs-13 mb-1">Lorem ipsum dolor sit amet
																		consectetur adipisicing elit. Iure quos debitis
																		aliquam .</p>
																	<p className="fs-13 mb-3  text-danger">Billed monthly on
																		regular basis!</p>
																</div>
																<div className="card-body py-2">
																	<ul className="text-justify pricing-body ps-0 mb-0">
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>
																				1 Free</strong> Domain Name</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4
																			</strong> One-Click Apps</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>
																				2 </strong> Databases</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong>
																				Unlimited </strong> Cloud Storage</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong>
																				Money </strong> BackGuarantee</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong>
																				24/7</strong> support</li>
																	</ul>
																</div>
																<div className="card-footer text-center border-top-0 py-2">
																	<Button variant='' className="btn btn-lg btn-outline-secondary ">
																		<span className="ms-4 me-4">Select</span>
																	</Button>
																</div>
															</div>
														</Col>
													</Row>
												</Tab.Pane>
												<Tab.Pane className="tab-pane" id="month" eventKey="month">
													<div className="row d-flex align-items-center justify-content-center">
														<Col lg={4} xl={4} md={8} sm={12}>
															<div className="card p-3 border-primary pricing-card advanced">
																<div className="card-header d-block text-justified pt-2">
																	<p className="fs-18 fw-semibold mb-1 pe-0">Advanced<span
																		className="tag bg-primary text-white float-end">Limited
																		Deal</span></p>
																	<p className="text-justify fw-semibold mb-1"> <span
																		className="fs-30 me-2">$</span><span
																			className="fs-30 me-1">199</span><span
																				className="fs-25"><span
																					className="op-0-5 text-muted text-20">/</span>
																			month</span></p>
																	<p className="fs-13 mb-2">Lorem ipsum dolor sit amet
																		consectetur adipisicing elit. Iure quos debitis
																		aliquam .</p>
																	<p className="fs-13 mb-1 text-primary">Billed monthly on
																		regular basis!</p>
																</div>
																<div className="card-body pt-2">
																	<ul className="text-justify pricing-body ps-0">
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
																			<strong> 5 Free</strong> Domain Name
																		</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5
																			</strong> One-Click Apps</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				3 </strong> Databases</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				Unlimited </strong> Cloud Storage</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				Money </strong> BackGuarantee</li>
																		<li className="mb-5"><i
																			className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>
																				24/7</strong> support</li>
																	</ul>
																</div>
																<div className="card-footer text-center border-top-0 py-2">
																	<Button variant=''
																		className="btn btn-lg btn-primary text-white">
																		<span className="ms-4 me-4">Select</span>
																	</Button>
																</div>
															</div>
														</Col>
														<Col lg={4} xl={4} md={8} sm={12}>
															<div className="card p-3 pricing-card">
																<div className="card-header d-block text-justified pt-2">
																	<p className="fs-18 fw-semibold mb-1">Basic</p>
																	<p className="text-justify fw-semibold mb-1"> <span
																		className="fs-30 me-2">$</span><span
																			className="fs-30 me-1">39</span><span
																				className="fs-25"><span
																					className="op-0-5 text-muted text-20">/</span>
																			month</span></p>
																	<p className="fs-13 mb-1">Lorem ipsum dolor sit amet
																		consectetur adipisicing elit. Iure quos debitis
																		aliquam .</p>
																	<p className="fs-13 mb-1 text-secondary">Billed monthly
																		on regular basis!</p>
																</div>
																<div className="card-body pt-2">
																	<ul className="text-justify pricing-body ps-0">
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong>
																				2 Free</strong> Domain Name</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
																			<strong>3 </strong> One-Click Apps
																		</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				1 </strong> Databases</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				Unlimited </strong> Cloud Storage</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				Money </strong> BackGuarantee</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong>
																				24/7</strong> support</li>
																	</ul>
																</div>
																<div className="card-footer text-center border-top-0 py-2">
																	<Button variant='' className="btn btn-lg btn-outline-secondary ">
																		<span className="ms-4 me-4">Select</span>
																	</Button>
																</div>
															</div>
														</Col>
														<Col lg={4} xl={4} md={8} sm={12}>
															<div className="card p-3 pricing-card">
																<div className="card-header d-block text-justified pt-2">
																	<p className="fs-18 fw-semibold mb-1">Regular</p>
																	<p className="text-justify fw-semibold mb-1"> <span
																		className="fs-30 me-2">$</span><span
																			className="fs-30 me-1">69</span><span
																				className="fs-25"><span
																					className="op-0-5 text-muted text-20">/</span>
																			month</span></p>
																	<p className="fs-13 mb-1">Lorem ipsum dolor sit amet
																		consectetur adipisicing elit. Iure quos debitis
																		aliquam .</p>
																	<p className="fs-13 mb-1  text-danger">Billed monthly on
																		regular basis!</p>
																</div>
																<div className="card-body pt-2">
																	<ul className="text-justify pricing-body ps-0">
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>
																				1 Free</strong> Domain Name</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4
																			</strong> One-Click Apps</li>
																		<li><i
																			className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>
																				2 </strong> Databases</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong>
																				Unlimited </strong> Cloud Storage</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong>
																				Money </strong> BackGuarantee</li>
																		<li className="text-muted"><i
																			className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong>
																				24/7</strong> support</li>
																	</ul>
																</div>
																<div className="card-footer text-center border-top-0 py-2">
																	<Button variant='' className="btn btn-lg btn-outline-secondary ">
																		<span className="ms-4 me-4">Select</span>
																	</Button>
																</div>
															</div>
														</Col>
													</div>
												</Tab.Pane>
											</Tab.Content>
										</Tab.Container>
									</Row>
								</Container>
							</div>
							<div className="section" id="sectionfaq">
								<Container>
									<Row>
										<h4 className="text-center fw-semibold">FAQ'S ?</h4>
										<span className="landing-title"></span>
										<h2 className="text-center fw-semibold">We are here to help you</h2>
										<Row className="justify-content-center">
											<Col xl={9} as='p' className="wow fadeInUp text-default sub-text mb-7" data-wow-delay="0s">
												The Sash admin template is one of the modern dashboard templates.
												It is also a premium admin dashboard with high-end features, where users can easily customize
												or change their projects according to their choice.
											</Col>
										</Row>
										<section className="sptb demo-screen-demo" id="faqs">
											<Row className="align-items-center">
												<Col md={12} lg={6} className="">
													<img src={Imagesdata("pngs15")} alt="" />
												</Col>
												<Col md={12} lg={6}>

													<Col md={12} className="grid-item  px-0">
														<Accordion>
															<Accordion.Item eventKey="0" className='landing-accordian mb-4  bg-primary-transparent'>
																<Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-primary">01. Can i get a free trial before purchase ?.</span></Accordion.Header>
																<Accordion.Body>
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
																	<p className="mt-2 mb-3">
																		<span className="fw-bold">Note: </span>Please Refer support section for more information.
																	</p>
																	<Link to="#" target="_blank" className="btn btn-outline-primary tx-13">Click here</Link>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													</Col>
													<Col md={12} className="grid-item  px-0">
														<Accordion>
															<Accordion.Item eventKey="0" className='landing-accordian mb-4 bg-success-transparent'>
																<Accordion.Header className='h5 fw-bold    card-title mb-0'><span className="me-3 fs-18 fw-bold text-success">02. What type of files i will get after purchase ?</span></Accordion.Header>
																<Accordion.Body>
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
																	<p className="mt-2 mb-3">
																		<span className="fw-bold">Note: </span>Please Refer support section for more information.
																	</p>
																	<Link to="#" target="_blank" className="btn btn-outline-success tx-13">Click here</Link>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													</Col>
													<Col md={12} className="grid-item  px-0">
														<Accordion>
															<Accordion.Item eventKey="0" className='landing-accordian mb-4 bg-secondary-transparent'>
																<Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-secondary">03. What is a single Application</span></Accordion.Header>
																<Accordion.Body>
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
																	<p className="mt-2 mb-3">
																		<span className="fw-bold">Note: </span>Please Refer support section for more information.
																	</p>
																	<Link to="#" target="_blank" className="btn btn-outline-secondary tx-13">Click here</Link>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													</Col>
													<Col md={12} className="grid-item  px-0">
														<Accordion>
															<Accordion.Item eventKey="0" className='landing-accordian mb-4 bg-warning-transparent'>
																<Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-warning">04. How to get future updates ?</span></Accordion.Header>
																<Accordion.Body>
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
																	<p className="mt-2 mb-3">
																		<span className="fw-bold">Note: </span>Please Refer support section for more information.
																	</p>
																	<Link to="#" target="_blank" className="btn btn-outline-warning tx-13">Click here</Link>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													</Col>
													<Col md={12} className="grid-item  px-0">
														<Accordion>
															<Accordion.Item eventKey="0" className='landing-accordian mb-4 bg-danger-transparent'>
																<Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-danger">05. Do you provide support ?</span></Accordion.Header>
																<Accordion.Body>
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
																	<p className="mt-2 mb-3">
																		<span className="fw-bold">Note: </span>Please Refer support section for more information.
																	</p>
																	<Link to="#" target="_blank" className="btn btn-outline-danger tx-13">Click here</Link>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													</Col>
												</Col>

											</Row>
										</section>
									</Row>
								</Container>
							</div>
							<div className="testimonial-owl-landing section pb-0" id="Clients">
								<div className="container">
									<Row>
										<Col md={12}>
											<div className="card bg-transparent">
												<div className="card-body">
													<h4 className="text-center fw-semibold text-white">Testimonials </h4>
													<span className="landing-title"></span>
													<h2 className="text-center fw-semibold text-white mb-5">What People Are
														Saying About Our Product.</h2>
													<div className="testimonial-carousel">
														<Swiper
															pagination={{
																type: 'progressbar',
															}}
															autoplay={{
																delay: 2500,
																disableOnInteraction: false,
															}}
															navigation={true}
															modules={[Pagination, Autoplay]}
															className="mySwiper"
														>
															<SwiperSlide>
																<div className="slide text-center">
																	<div className="row">
																		<div className="col-xl-8 col-md-12 d-block mx-auto">
																			<div className="testimonia">
																				<p className="text-white-80">
																					<i className="fa fa-quote-left fs-20 text-white-80"></i>
																					Lorem ipsum dolor sit amet,
																					consectetur adipisicing elit. Quod eos id
																					officiis hic tenetur quae quaerat
																					ad velit ab. Lorem ipsum dolor sit amet,
																					consectetur adipisicing elit.
																					Dolore cum accusamus eveniet molestias
																					voluptatum inventore laboriosam
																					labore sit, aspernatur praesentium iste
																					impedit quidem dolor veniam.
																				</p>
																				<h3 className="title">Elizabeth</h3>
																				<span className="post">Web Developer</span>
																				<div className="rating-stars block my-rating-5 mb-3 d-flex justify-content-center"
																					data-rating="4"></div>
																				<div className="owl-controls clickable">
																					<div className="owl-pagination">
																						<div className="owl-page active">
																							<span className=""></span>
																						</div>
																						<div className="owl-page ">
																							<span className=""></span>
																						</div>
																						<div className="owl-page">
																							<span className=""></span>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</SwiperSlide>
															<SwiperSlide>
																<div className="slide text-center">
																	<div className="row">
																		<div className="col-xl-8 col-md-12 d-block mx-auto">
																			<div className="testimonia">
																				<p className="text-white-80"><i
																					className="fa fa-quote-left fs-20"></i> Nemo
																					enim ipsam
																					voluptatem quia voluptas sit aspernatur aut
																					odit aut fugit, sed quia
																					consequuntur magni dolores eos qui ratione
																					voluptatem sequi nesciunt. Neque
																					porro quisquam est, qui dolorem ipsum quia
																					dolor sit amet, consectetur,
																					adipisci velit, sed quia non numquam eius
																					modi tempora incidunt ut labore.
																				</p>
																				<div className="testimonia-data">
																					<h3 className="title">Williamson</h3>
																					<span className="post">Web Developer</span>
																					<div className="rating-stars block my-rating-5 mb-3 d-flex justify-content-center"
																						data-rating="5"></div>
																					<div className="owl-controls clickable">
																						<div className="owl-pagination">
																							<div className="owl-page ">
																								<span className=""></span>
																							</div>
																							<div className="owl-page active">
																								<span className=""></span>
																							</div>
																							<div className="owl-page">
																								<span className=""></span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</SwiperSlide>
															<SwiperSlide>
																<div className="slide text-center">
																	<Row>
																		<div className="col-xl-8 col-md-12 d-block mx-auto">
																			<div className="testimonia">
																				<p className="text-white-80"><i
																					className="fa fa-quote-left fs-20"></i> Duis
																					aute irure dolor
																					in reprehenderit in voluptate velit esse
																					cillum dolore eu fugiat nulla
																					pariatur. Excepteur sint occaecat cupidatat
																					non proident, sunt in culpa qui
																					officia deserunt mollit anim id est laborum.
																					Sed ut perspiciatis unde omnis
																					iste natus error sit voluptatem accusantium
																					doloremque laudantium.</p>
																				<div className="testimonia-data">
																					<h3 className="title">Sophie Carr</h3>
																					<span className="post">Web Developer</span>
																					<div className="rating-stars block my-rating-5 mb-3 d-flex justify-content-center"
																						data-rating="5"></div>
																					<div className="owl-controls clickable">
																						<div className="owl-pagination">
																							<div className="owl-page ">
																								<span className=""></span>
																							</div>
																							<div className="owl-page">
																								<span className=""></span>
																							</div>
																							<div className="owl-page active">
																								<span className=""></span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</Row>
																</div>
															</SwiperSlide>
														</Swiper>

													</div>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</div>
							<div className="section bg-white-2 pb-4" id="Contact">
								<div className="container">
									<div className="">
										<div className="card reveal p-5 pb-2 mb-0 ">
											<h4 className="text-center fw-semibold landing-card-header ">Contact</h4>
											<span className="landing-title"></span>
											<h2 className="text-center fw-semibold mb-0 px-2">Get in Touch with <span
												className="text-primary">US.</span></h2>
											<div className="card-body text-dark pb-0">
												<div className="statistics-info">
													<div className="row justify-content-center">
														<div className="col-lg-12">
															<div className="mt-3">
																<div className="text-dark">
																	<div className="services-statistics reveal my-5">
																		<div className="row text-center">
																			{contact.map((contacts) => (
																				<Col xl={3} md={6} lg={6} key={Math.random()}>
																					<Card>
																						<div className="card-body p-0">
																							<div className="counter-status d-flex">
																								<div
																									className={`counter-icon border border-${contacts.color} bg-${contacts.color}-transparent m-0`}>
																									<i
																										className={`fe ${contacts.icon} text-${contacts.color} fs-23`}></i>
																								</div>
																								<div className="ms-3 text-start">
																									<h5 className="mb-1 fw-semibold">{contacts.heading}</h5>
																									<p>{contacts.data} </p>
																								</div>
																							</div>
																						</div>
																					</Card>
																				</Col>
																			))}

																		</div>
																	</div>
																</div>
															</div>
														</div>
														<Col xl={12}>
															<div className="">
																<div className="reveal">
																	<Row>
																		<Col xl={6}>
																			<div className="form-group">
																				<label htmlFor="cusName" className="form-label">Name
																					<span className="text-danger">*</span></label>
																				<input type="text" className="form-control"
																					id="cusName" placeholder="Enter your name" />
																			</div>
																		</Col>
																		<Col xl={6}>
																			<div className="form-group">
																				<label htmlFor="cusEmail" className="form-label">Email
																					<span className="text-danger">*</span></label>
																				<input type="text" className="form-control"
																					id="cusEmail"
																					placeholder="Enter your email" />
																			</div>
																		</Col>
																	</Row>
																	<div className="form-group">
																		<label htmlFor="cusSubject"
																			className="form-label">Subject</label>
																		<input type="text" className="form-control" id="cusSubject"
																			placeholder="Enter your subject" />
																	</div>
																	<div className="form-group">
																		<label htmlFor="cusMessage" className="form-label">Message <span
																			className="text-danger">*</span></label>
																		<textarea rows="5" className="form-control" id="cusMessage"
																			placeholder="Type your message here..."></textarea>
																	</div>
																	<div className="form-group">
																		<button className="btn btn-primary">Send Message</button>
																	</div>
																</div>
															</div>
														</Col>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="demo-footer">
					<Container>
						<Row>
							<Card className="mb-0 bg-transparent">
								<Card.Body className="p-0 text-white">
									<div className="top-footer">
										<Row>
											<Col lg={4} sm={12} md={12} className="reveal revealleft">
												<h6>About</h6>
												<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
													doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
													veritatis et quasi architecto beatae vitae dicta sunt
													explicabo.
												</p>
												<p className="mb-5 mb-lg-2">Duis aute irure dolor in reprehenderit in voluptate
													velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat .
												</p>
											</Col>
											<div className="col-lg-2 col-sm-6 col-md-4 reveal revealleft">
												<h6>Pages</h6>
												<ul className="mb-5 mb-lg-0 ps-0">
													<li><Link to={`${import.meta.env.BASE_URL}indexpage/ `}>Dashboard</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}elements/alerts/ `}>Elements</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}forms/formelements/ `}>Forms</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}charts/chartjs/ `}>Charts</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}tables/datatables/ `}>Tables</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}apps/filemanager/fileattachments/ `}>Other Pages</Link></li>
												</ul>
											</div>
											<div className="col-lg-2 col-sm-6 col-md-4 reveal revealleft">
												<h6>Information</h6>
												<ul className="mb-5 mb-lg-0 ps-0">
													<li><Link to={`${import.meta.env.BASE_URL}pages/aboutus/ `}>Our Team</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}pages/aboutus/ `}>Contact US</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}pages/aboutus/ `}>About</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}pages/aboutus/ `}>Services</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blog/ `}>Blog</Link></li>
													<li><Link to={`${import.meta.env.BASE_URL}pages/aboutus/ `}>Terms and Services</Link></li>
												</ul>
											</div>
											<div className="col-lg-4 col-sm-12 col-md-4 reveal revealleft">
												<div className="">
													<a href="index.html"><img loading="lazy" alt="" className="logo mb-3"
														src={Imagesdata("whiteLogo")} /></a>
													<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
														dolore eu fugiat nulla pariatur Excepteur sint occaecat.</p>
													<div className="form-group">
														<div className="input-group">
															<input type="text" className="form-control"
																placeholder="Enter your email"
																aria-label="Example text with button addon"
																aria-describedby="button-addon2" />
															<Button className="btn btn-primary"
																id="button-addon2">Submit</Button>
														</div>
													</div>
												</div>
												<div className="btn-list mt-6">
													<Button className="btn btn-icon rounded-pill me-1"><i
														className="fe fe-facebook"></i></Button>
													<Button className="btn btn-icon rounded-pill me-1"><i
														className="fe fe-github"></i></Button>
													<Button className="btn btn-icon rounded-pill me-1"><i
														className="fe fe-twitter"></i></Button>
													<Button className="btn btn-icon rounded-pill me-1"><i
														className="fe fe-instagram"></i></Button>
												</div>
											</div>
										</Row>
									</div>
									<footer className="main-footer px-0 text-center border-top-0 mt-5">
										<Row>
											<Col md={12} sm={12}>
												Copyright © <span id="year"></span> <Link to="#">Valex</Link>.
												Designed with <span className="fa fa-heart text-danger"></span> by <Link
													to="#"> Spruko </Link> All rights reserved.
											</Col>
										</Row>
									</footer>
								</Card.Body>
							</Card>
						</Row>
					</Container>
				</div>
			</div>

		</Fragment>
	)
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
