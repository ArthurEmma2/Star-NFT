import React, {useEffect} from 'react'
import './Hero-section.css'
import {Container, Row, Col}  from 'reactstrap'
import{Link} from 'react-router-dom'
import heroImage from '../../assets/img/nft9.jpg'

import  Aos  from 'aos';
import 'aos/dist/aos.css'



function HeroSection() {
  useEffect(() =>{
    Aos.init({duration:3000})
  },[])
  return (
   <section className='hero__section overflow-hidden'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='hero__content'>
            <h4 className='text-light' data-aos='fade-left'data-aos-delay="50">Star <span className='h4__nft'>NFT </span> market place on Tezos</h4>
            <h1>Discover the Most Premium, Unique and <span className='nft__color'>Exclusive NFT Collections</span></h1>
            <p>
                Star Trade is one of the world's largest NFT marketplace where you can buy &amp; 
                trade a lot of top digital Assets.</p>

              <div className="hero__btn d-flex align-items-center gap-4">
              <button className='hero-btn1 d-flex align-items-center gap-2'><Link to='/market'>Explore<i class="ri-rocket-line"></i></Link></button>
              <button className='hero-btn2 d-flex align-items-center gap-2'><Link to='/create'>Create<i class="ri-arrow-right-up-fill"></i></Link></button>
          </div>
              </div>
        </Col>
        <Col lg='6' md='6'>
          <div className="hero-img">
            <img src={heroImage} alt='hero' className='w-100'/>
          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default HeroSection