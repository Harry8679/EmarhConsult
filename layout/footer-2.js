import Link from 'next/link';

function Footer2() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-2" id="footer" style={{"backgroundImage":"url(images/background/bg4.png)"}}>
		<div className="container">
			<div className="dlab-subscribe style-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<h2 className="title">Inscrivez-vous à notre Newsletters afin de recevoir les futurs nouveautés.</h2>
					</div>
					<div className="col-lg-5">
						<form className="dzSubscribe" action="script/mailchamp.php" method="post">
							<div className="dzSubscribeMsg"></div>
							<div className="form-group">
								<div className="input-group">
									<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Votre adresse email"/>
									<div className="input-group-addon">
										<button name="submit" value="Submit" type="submit" className="btn btn-primary gradient fa fa-paper-plane-o"></button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
							<div className="widget widget_getintuch">
								<ul>
									<li>
										<i className="fa fa-phone gradient"></i>
										<span>+33 6 25 96 64 88<br/>Fixe indisponible</span> 
									</li>
									<li>
										<i className="fa fa-envelope gradient"></i> 
										<span>contact@emarhprogramming.com <br/>infot@emarhprogramming.com</span>
									</li>
									<li>
										<i className="fa fa-map-marker gradient"></i>
										<span>Paris, France</span>
									</li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Nos liens</h5>
							<ul>
								<li><Link href="#"><a>Accueil</a></Link></li>
								<li><Link href="#"><a>A Propos</a></Link></li>
								<li><Link href="#"><a>Services</a></Link></li>
								<li><Link href="#"><a>Contact</a></Link></li>
								{/* <li><Link href="#"><a>Blog</a></Link></li> */}
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Nos Services</h5>
							<ul>
								<li><Link href="#"><a>Développement Web</a></Link></li>
								<li><Link href="#"><a>Développement Mobile</a></Link></li>
								<li><Link href="#"><a>Développement Logiciel</a></Link></li>
								<li><Link href="#"><a>UX/UI Designer</a></Link></li>
								<li><Link href="#"><a>Formation Enseignant </a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Autres liens</h5>
							<ul>
								<li><Link href="#"><a>YouTube</a></Link></li>
								<li><Link href="#"><a>Instagram</a></Link></li>
								<li><Link href="#"><a>Twitter - X</a></Link></li>
								<li><Link href="#"><a>Support </a></Link></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 text-left"> 
						<span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
					</div>
					<div className="col-lg-6 col-md-5 text-right"> 
						<div className="dlab-social-icon">
							<ul>
								<li><a className="fa fa-facebook" href="https://www.facebook.com/profile.php?id=100070065353546/"></a></li>
								<li><a className="fa fa-instagram" href="https://www.instagram.com/harrymaccode/"></a></li>
								<li><a className="fa fa-twitter" href="https://x.com/HarryMacCode"></a></li>
							</ul>
						</div>
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --></footer> */}
    </>
  )
}

export default Footer2;