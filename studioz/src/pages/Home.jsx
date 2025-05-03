import React from 'react';
import { Row, Col } from 'reactstrap';
import PropertyManagement from '../utils/PropertyImage';
import "../styles/Home.scss";
import MarqueeComponent from '../utils/Marquee';


export default function Home() {
     const CommercialData = {
       imageSrc: "/images/homeBanner.jpg",
       title: "PROPERTY MANAGEMENT SOFTWARE",
       subtitle: "RESIDENTIAL THRIVES ON YARD!",
       description: "Power your business with a single connected solution...",
       buttonText: "Learn More",
       onButtonClick: () => {
         window.location.href = "/commercial";
       },
     };

    const ResidentialData = {
      imageSrc: "/images/Residential/Residential.jpg",
      title: "PROPERTY MANAGEMENT SOFTWARE",
      subtitle: "RESIDENTIAL THRIVES ON YARD!",
      description: "Power your business with a single connected solution...",
      buttonText: "Learn More",
      onButtonClick: () => {
        window.location.href = "/residential";
      },
    };

    const clientLogos = [
      {
        image: "/images/clients/TM.svg",
        alt: "Tech-Mahindra",
      },
      {
        image: "/images/clients/Deloitte.png",
        alt: "deloitte",
      },
      {
        image: "/images/clients/western-aqua.png",
        alt: "western-aqua",
      }
    ];

    return (
      <section className="page home-container">
        <img src="./images/homeBanner.jpg" alt="home-banner" />
        <div className="commercial-content">
          <Row className="text-center">
            <Col xs={2} md={6} className='text-end'>
              <CommercialIcon />
            </Col>
            <Col xs={10} md={6} className='text-start'>
              <span className="ms-2 h1">Commercial</span>
            </Col>
          </Row>
          <PropertyManagement data={CommercialData} />
        </div>
        <div className="residential-content">
          <Row className="text-center">
            <Col>
              <ResidentialIcon />
              <span className="ms-2 h1">Residential</span>
            </Col>
          </Row>
          <PropertyManagement data={ResidentialData} />
        </div>
        <div className="marquee-component">
          <MarqueeComponent />
        </div>
        <div className="client-logo mt-5">
            <h3>Our Clients</h3>
          <Row xs={3} md={3}>
            {clientLogos.map((logo, index) => (
              <Col
                key={index}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="client-logo-image"
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    );
}


const CommercialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className='dark-icon' viewBox="0 0 72 72" width="72" height="72">
    <g id="Commercial">
      <path d="M64.2647,59.743V39.6782H62.6584V26.2225H59.2073V11.2567l-3.9727.6773v-.067H15.1956v6.8937l-3.4419.5868v6.875H7.9417V39.6782H6.241V59.743H4.8337v1H65.7258v-1Zm-1-.0459H48.5217V40.6782h14.743ZM61.6584,39.6782H48.47V27.2225H61.6584ZM16.1956,12.867H49.7624L16.1956,18.59ZM8.9417,27.2225H21.9983V39.6782H8.9417ZM7.241,40.6782H21.9839V59.6971H7.241ZM22.9983,26.2225H12.7537V20.1913l45.4536-7.7491v13.78H47.47l.0517,33.5205H43.52V44.8182H27.4413V59.743H22.9839ZM42.52,45.8182v13.89H35.9807v-13.89Zm-7.5393,13.89H28.4413v-13.89h6.5394ZM43.52,38.2694H27.4417v-1H43.52Zm0-4.3193H27.4417v-1H43.52Zm0-4.32H27.4417v-1H43.52Z"></path>
    </g>
  </svg>
);

const ResidentialIcon = () => (
  <svg
    className='dark-icon'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    width="72"
    height="72"
  >
    <g id="Residential">
      <path d="M40.5755,27.4843a5.23,5.23,0,0,0-10.46,0v5.8442h10.46Zm-1,4.8442h-8.46V27.4843a4.1907,4.1907,0,0,1,4.1855-4.186,4.236,4.236,0,0,1,4.2744,4.186Zm-17.019,14.47h-8.979v7.7168h8.979Zm-1,6.7168h-6.979V47.7983h6.979Zm26.5269,1h8.9794V46.7983H48.0834Zm1-6.7168h6.9794v5.7168H49.0834Zm15.6347,11.561V54.5151h1.7041V46.7983H64.7181V41.4531h2.708l-1.2119-4.668H62.4681V19.24h4.8467L65.61,12.8217H45.48l-.2724-1.6455H25.517l-.2723,1.6455H5.0306L3.3246,19.24H8.8915V36.7851H4.4252l-1.212,4.668H5.9217v5.3452H4.2176v7.7168H5.9217v4.8442H2.1908v1H68.37v-1Zm.7227-21.5742.6924,2.668h-21.44v-2.668ZM46.5425,19.24H61.4681V32.3456H44.6927V20.8788h2.1211ZM61.4681,33.3456v3.44H56.349v-3.44Zm-6.1191,0v3.44H50.1566v-3.44Zm-6.1924,0v3.44H44.6927v-3.44ZM64.84,13.8217,66.014,18.24H46.3769l-.7315-4.4185ZM26.3646,12.1762H44.36l1.2744,7.7026H25.0912ZM4.6253,18.24l1.1739-4.4185h19.28L24.3484,18.24ZM9.8915,33.3456h4.7539v3.44H9.8915Zm-4.6739,20.17V47.7983H9.3163v5.7168H5.2176Zm20.815,5.8442H6.9217V54.5151h3.3946V46.7983H6.9217V41.4531H26.0326Zm0-18.9062H4.5062l.6924-2.668h20.834Zm-10.3872-3.668v-3.44h5.0927v3.44Zm10.3872,0H21.7381v-3.44h4.2945Zm0-4.44H9.8915V19.24H24.183l-.271,1.6386h2.1206ZM40.7438,59.3434H29.9815V57.5321H40.7438ZM31.401,56.5178V43.6242h8.0063V56.5178Zm12.2917,2.8415H41.7438V56.5321H40.4073V42.6242H30.401V56.5321H28.9815v2.8272H27.0326v-38.48h16.66Zm20.0254,0H44.6927V41.4531H63.7181v5.3452H60.3236v7.7168h3.3945Zm-2.3945-5.8442V47.7983h4.0986v5.7168H61.3236Z"></path>
    </g>
  </svg>
);
