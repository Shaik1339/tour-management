import React from 'react'
import TourCard from '../../shared/TourCard'
// import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'
import { useFetch } from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeaturedTourList = () => {

  const {data,error,loading} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  console.log(data,'data');
  return (
    <>
    {
      loading && <h4>Loading....</h4>
    }
    {
      error &&  <h4>{error}</h4>
    }
    {
        data?.data?.map((item,index)=> (
            <Col lg='3' className="mb-4" key={item.id}>
                <TourCard tour={item} />

            </Col>
        ))
    }
    </>
  )
}

export default FeaturedTourList
