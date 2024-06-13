import {useState} from 'react';
import Link from 'next/link';

function Service2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row icon-wraper-1">
					<div className="col-lg-4 col-md-6">
						<div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<h6 className="sub-title text-primary bgl-primary m-b15">NOS SERVICES</h6>
							<h2 className="title m-t10">Services Digitaux</h2>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
										<i className="flaticon-office"></i>
									</a>
								</Link>		
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Développement iOS et Android</h4>
								<p>Nous développons des applications mobiles pour iOS et pour Android. Nous formons également dans ce domaine.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-pie-charts"></i>
									</a> 
								</Link>	
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Développement Web</h4>
								<p>Nous formons des développeurs Web et nous développons des projets pour particuliers ou entreprises. De la conception à la mise en production.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a></Link> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Formation d'enseignants</h4>
								<p>Nous formons également des personnes qui veulent devenir enseignant à leur tour.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">UX/UI Designer</h4>
								<p>Nous faisons des interfaces utilisateur ou maquettes pour le design et les différentes pages d'une application web ou mobile.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-help"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Développement Logiciel</h4>
								<p>Pour tout Développement Logiciel, site web, Machine Learning, objet de calcul, intelligence artificielle : Python est le plus répandu. Essayez Python avec nous.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Service2;