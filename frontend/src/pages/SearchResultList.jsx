import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import NewsShettler from '../shared/NewsShettler'

const SearchResultList = () => {

  const location = useLocation();

  const [data] = useState(location?.state)

  console.log('state',location.state,data)
  return (
    <>
    <CommonSection title={"Tour search resuts"} />
    <section>
      <Container>
        <Row>{
          data?.data.length===0 ?(<h4 className='text-center'>No tours found</h4> ) : (

            data?.data?.map (tour => (
              <Col lg='3' className='mb-4' key={tour?._id}>
                <TourCard tour={tour} />
              
              </Col>
            ))
          )
          
          
          }

        </Row>
      </Container>
    </section>
    <NewsShettler />
    </>
  )
}

export default SearchResultList
