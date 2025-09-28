import React from 'react'
import '../styles/home.css'
import { Container, Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVed from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured-tours/FeaturedTourList'
import ExperienceImg from '../assets/images/experience.png'
import MassonryGalleryImages from '../components/image-gallery/MassonryGalleryImages'
import Testimonials from '../components/testimonials/Testimonials'
import NewsShettler from '../shared/NewsShettler'
const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
             <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'know before you go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Travelling open the doors to creating <span className="highlight">memories</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aliquid exercitationem perspiciatis ipsam tempore animi, quaerat sint eum magnam dolorum vitae necessitatibus fugiat nobis repellat officia nesciunt eaque saepe quibusdam.</p>

             </div>
          
          </Col>
          <Col lg='2'>
           <div className="hero__img-box">
            <img src={heroImg} alt="" />
           </div>
          </Col>
          <Col lg='2'>
           <div className="hero__img-box hero__vedio-box mt-4">
            <video src={heroVed} alt="" controls />
           </div>
          </Col>
          <Col lg='2'>
           <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
           </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    {/* Hero Section starts */}
    <section>
    <Container>
      <Row>
        <Col lg='3'>
         <h5 className="services__subtitle">What We Serve</h5>
         <h2 className="services__title">we offer our best services</h2>
        </Col>
        <ServiceList />n
      </Row>
     </Container>
    </section>
     
    {/* Hero Section ends */}

    {/* feature Section starts */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle  subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
     {/* features Section ends */}

     {/* Experiences Section starts */}
     <section>
       <Container>
          <Row>
            <Col lg='6'>
             <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>with all our experience <br /> we will serve you</h2>
              <p>
                lorem  dasaffsaff <br />
                kkASKDJSADJFDSSDSAD  SADJSADKJDAKJDJ
              </p>

             </div>

             <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12K+</span>
                <h6>Successful Trips</h6>
              </div>
              <div className="counter__box">
                <span>2K+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>years experience </h6>
              </div>

             </div>
            </Col>
            <Col lg='6'>
               <div className="experience__img">
                 <img src={ExperienceImg} alt="" />
               </div>
            </Col>
          </Row>
       </Container>
     </section>


     {/* Experiences Section ends */}

    {/* Gallery Section Startts */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
            <MassonryGalleryImages />
            </Col>
          </Row>
        </Container>
      </section>


    {/* Gallery Section ends */}

    {/* Testimonials Section startts */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
           <Subtitle subtitle={'Fans Love'} />
           <h2 className="testimonial__title">what our fans say about us</h2>
          
          </Col>
          <Col lg='12'>

          <Testimonials />
          
          </Col>
        </Row>
      </Container>
    </section>

    {/* Testimonials Section ends */}
    <NewsShettler />

    </>
  )
}

export default Home
