import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'

const FeaturedTourList = () => {
  return (
    <>
    {
        tourData.map((item,index)=> (
            <Col lg='3' className="mb-4" key={item.id}>
                <TourCard tour={item} />

            </Col>
        ))
    }
    </>
  )
}

export default FeaturedTourList
