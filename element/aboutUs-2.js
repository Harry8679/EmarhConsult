import Link from "next/link";

function AboutUs_2() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">A PROPOS</h6>
							<h2 className="title m-b20">Nous avons mis en place une équipe pour atteindre vos objectifs</h2>
							<p>
								Notre but est que vous réalisez et amenez à bien vos projets. Nous vous accompagnons dans la création de vos sites ou applications web et mobiles.
								Nous accompagnons non seulement dans la réalisation de vos projets mais aussi de sa maintenance si vous le souhaitez.
							</p>
						</div>
						<ul className="list-check primary m-b30">
							<li>Accompagnement dans la conception de vos projets.</li>
							<li>Réalisations de vos projets web et mobiles.</li>
							<li>Déploiement de vos différentes applications.</li>
							<li>Maintenances et mises à jour de vos différentes applications.</li>
						</ul>
						<Link href="/about-us-2"><a className="btn btn-primary rounded-xl gradient">Haut de la Page</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;