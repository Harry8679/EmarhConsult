function Slider2() {
  return (
    // <!-- Slider -->
    <div className="banner-two gradient">
      <div className="container">
        <div className="banner-inner">
          <img
            className="img1 move-2"
            src="images/main-slider/slider2/pic3.png"
            alt=""
          />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content text-white">
                <h6
                  className="wow fadeInUp sub-title bgl-light text-white"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Nous faisons du bon travail                </h6>
                <h1
                  className="wow fadeInUp m-b20"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Nous vous fournissons les meilleurs solutions Web
                </h1>
                <p
                  className="wow fadeInUp m-b30"
                  data-wow-delay="1.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Nous sommes une agence Web qui développons des solutions dans le domaines du numérique. 
                  De la Conception de vos sites web ou applications web et mobiles en passant par des formations 
                  dans les domaines du web et du mobile...<br />
                  Pour en savoir plus sur les technologies cliquez sur le bouton "En savoir plus"
                </p>
                <a
                  href="/about-us-2"
                  className="wow fadeInUp btn btn-light text-primary shadow rounded-xl"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "fadeInUp",
                  }}
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
          <img className="img2 move-1" src="images/pattern/pattern8.png" alt="" />
          <img className="img3 move-2" src="images/pattern/pattern9.png" alt="" />
        </div>
      </div>
      <div className="dz-media">
        <img src="images/main-slider/slider2/pic1.jpg" alt="" />
      </div>
    </div>
  );
}

export default Slider2;
