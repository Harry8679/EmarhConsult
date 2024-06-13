import { useState } from "react";

function AllServices2() {
	const [open, setOpen] = useState("p2")
	return (
		<>
		
		{/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
						<div className={`${open === "p1" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-office"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Conception</h4>
								<p>Nous avons la possibilité de vous aider à concevoir vos projets. Les idées, l'architecture, les technologies adéquates et les conseil 
									d'optimisation en passant par une amélioration du SEO</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-website"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">24X7 Support</h4>
								<p>Nos clients peuvent nous contacter 24h/24 et 7 jours/7. Notre service nous permet de vous être disponible avec ce forfait inclu. La disponibilité 
									cependant à lieu en priorité par email et moins par téléphone.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Développement Web</h4>
								<p>Vous avez une entreprise, un besoin ou un projet et vous avez besoin d'une solution Web ? Nous sommes disponible pour, et nous avons les compétences 
									les apétences et les aptitudes pour réaliser vos souhaits et vos besoins tout en restant dans le résonnable.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Développement Mobile</h4>
								<p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">UX/UI Design</h4>
								<p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-help"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Suivi</h4>
								<p>Nous accompagnons nos clients de A à Z. Ce qui signifie que nous les accompagnons si possible de la conception de l'application 
								jusqu'audéploiement passant par la phase de test</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices2;