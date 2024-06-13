import { useState } from "react";

function OurServices2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
      
		{/* <!-- Services --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-3 mb-4">
							<h6 className="sub-title text-primary bgl-primary m-b15">NOS SERVICES</h6>
							<h2 className="title">Notre Organisation pour la Réalisation d'un projet</h2>
						</div>
						<p>Pour mener à bien un projet, nous avons besoin de comprendre et de connaître de façon précise ce que vous attendez et dans quel contexte.</p>
						<p>Après la conception nous passons au design et au développement de l'application et après chaque étape, nous faisons un point avec vous.</p>
						<p className="m-b30">Une fois l'application développées et satisfaisantes, nous passons à la phase de tests et de déploiement.</p>
					</div>
					<div className="col-lg-7">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-idea"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Idée &amp; Analyse du besoin</h4>
								<p>Nous recevons vos idées, les analysons et trouvons un moyen de les mettre dans le bon ordre pour une meilleure compréhension du projet.</p>
							</div>
						</div>
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-coding"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Conception &amp; Développement</h4>
								<p>Une fois le besoin mis en place, nous réalisons la conception de votre projet puis nous passons à son développement avec les technologies adaptées.</p>
							</div>
						</div>
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-rocket"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Tests &amp; Déploiement</h4>
								<p>Une fois la conception de l'application et la fin des développements de l'application, nous passons à la phase de tests puis de déploiement.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
    )
  }
  
  export default OurServices2;