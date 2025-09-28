import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import NewsShettler from '../shared/NewsShettler'
import { Col, Container, Row } from 'reactstrap'
// import tourData from '../assets/data/tours'
import { useFetch } from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

const Tour = () => {

  const [pageCount , setPageCount] = useState(0)
  const [page,setPage] =useState(0)

  const {data:tours, error,loading} = useFetch(`${BASE_URL}/tours?page=${page}`);
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)
  
  console.log('count',tourCount)

  // useEffect(()=>{
  //   const pages= Math.ceil(tourCount?.data/4)
  //   setPageCount(pages)
  //   window.scrollTo(0,0);
  // },[tourCount,page,tours]);

  useEffect(() => {
    const count = tourCount?.data;
    if (typeof count === 'number' && count >= 0) {
      const pages = Math.ceil(count / 4);
      setPageCount(pages);
    } else {
      setPageCount(0); // fallback to prevent crash
    }
    window.scrollTo(0, 0);
  }, [tourCount, page,tours]);



  return (
    <>
    <CommonSection  title={"All Tours"}/>
    <section>
      <Container>
        <Row>
          <SearchBar />
         
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
      {
      loading && <h4>Loading....</h4>
    }
    {
      error &&  <h4>{error}</h4>
    }
        {
          !loading && !error && (
            <Row>
          {
            tours?.data?.map((item,index)=> (
              <Col lg='3' md='6' sm='6' className='mb-4' key={item._id}>

                <TourCard tour={item} />
              
              </Col>
            ))
          }

          <Col lg='12'>
          {pageCount > 0 && (
  <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
    {[...Array(pageCount).keys()].map((number) => (
      <span key={number} onClick={() => setPage(number)} className={page === number ? 'active__page' : ''}>
        {number + 1}
      </span>
    ))}
  </div>
)}
          
          </Col>
         
        </Row>
          )
        }
      </Container>
    </section>
    <NewsShettler />
    </>
  )
}

export default Tour
