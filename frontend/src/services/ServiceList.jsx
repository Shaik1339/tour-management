import React from 'react'
import ServiceCard from './ServiceCard';
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import { Col } from 'reactstrap';

const servicesData =[
    {
        imgUrl:weatherImg,
        title:'Calculate weather',
        desc:"loremerree  erwre re e rrerewwre"
    },
    {
        imgUrl:guideImg,
        title:'Best Tour guide',
        desc:"loremerree  erwre re e rrerewwre"
    },
    {
        imgUrl:customizationImg,
        title:'customization',
        desc:"loremerree  erwre re e rrerewwre"
    },
]

const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item,index)=> (
            <Col lg='3' md='6' sm='12' className="mb-4" key={index}>
                <ServiceCard item={item} />
            
            </Col>
        ))
    }
    </>
  )
}

export default ServiceList
