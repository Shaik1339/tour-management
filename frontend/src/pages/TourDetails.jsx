import React, {useRef, useState,useEffect,useContext} from 'react'
import '../styles/tour-details.css'
import { Container,Row,Col,Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
// import tourData from '../assets/data/tours'
import CalculateAvgRating from '../utils/AvgRating'

import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import { BASE_URL } from '../utils/config'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const TourDetails = () => {

  const {id} =useParams();

  const reviewMsgRef = useRef()
  const [tourRating, setTourRating] = useState(null)
  const [tour,setTour] = useState(null)

  const {user} = useContext(AuthContext);

  // const {photo,title,desc,price,reviews,city,distance,address, maxGroupSize} =tour;

  const fetchTour = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/tours/${id}`);
      if(!response.status===200 || !response.status===201){
        return alert("falied to fetch tourdetails");
      }
      setTour(response?.data?.data)
    } catch (err) {
      alert('falied to fetch')
      
    }
  };

  useEffect(() => {
     fetchTour(id);
  }, [id]);

 useEffect(()=> {
  window.scrollTo(0,0)
 },[])
  if(!tour){

    return <h4>Loading......</h4>

  }else{
    
  }

  const {avgRating,totalRating} =CalculateAvgRating(tour?.reviews)

  const options ={
    day:'numeric',
    month:'long',
    year:'numeric'
  }
    
  //submit request to Server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    if(!user || user===undefined || user===null){
      alert('please sign in');
    }

    try{

      const reviewObj = {
        username: user?.data?.username,
        reviewText,
        rating:tourRating
      }

      const res = await axios.post(`${BASE_URL}/review/${id}`,reviewObj,{ withCredentials: true });

      console.log('review',res);

      alert(res?.data?.message);

    }catch(err){

      alert(err.message);

    }

    //later we call our api
  }

  return (
   <>
   <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className="tour__content">
            <img src={tour?.photo} alt="" />
            <div className="tour__info">
              <h2>{tour?.title}</h2>
              <div className="d-flex align-items-center gap-5">
               <span className="tour__rating d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i>{avgRating===0? null : avgRating}
                {totalRating===0? 'Not Rated':<span>({tour?.reviews.length})</span>}
                
                </span>
                <span>
                <i class="ri-map-pin-fill"></i> {tour?.address}
                </span>
              </div>
              <div className="tour__extra-details">
                <span>
                <i class="ri-map-pin-time-fill"></i>{tour?.city}
                </span>
                <span>
                <i class="ri-money-dollar-circle-line"></i>{tour?.price} /per person
                </span>
                <span>
                <i class="ri-money-dollar-circle-line"></i>{tour?.distance} km/hr
                </span>
                <span>
                <i class="ri-group-line"></i>{tour?.maxGroupSize} people
                </span>
              </div>
              <h5>Description</h5>
              <p>{tour?.desc}</p>
            </div>

            {/*tour Reviews section starts*/}
            <div className="tour__reviews mt-4">
              <h4>Reviews ({tour?.reviews?.length} reviews)</h4>
              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                  <span onClick={() => setTourRating(1)}>
                  1<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={() => setTourRating(2)}>
                  2<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={() => setTourRating(3)}>
                  3<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={() => setTourRating(4)}>
                  4<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={() => setTourRating(5)}>
                  5<i class="ri-star-fill"></i>
                  </span>
                </div>
                <div className="review__input">
                  <input type="text" required ref={reviewMsgRef} placeholder='share your thoughts' />
                  <button className='btn primary__btn text-white' type='submit'>submit</button>
                </div>
              </Form>
              <ListGroup className='user__reviews'>
                {
                  tour?.reviews?.map((review)=> (
                    <div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review?.username}</h5>
                            <p>{new Date("02-25-2024").toLocaleDateString("en-US",options)}</p>
                          </div>
                          <span className='d-flex align-items-center '>
                          {review?.rating}<i class="ri-star-fill"></i>
                          </span>
                        </div>
                        <h6>{review?.reviewText} </h6>

                      </div>
                    </div>

                  ))
                }

              </ListGroup>
            </div>
            {/*tour Reviews section ends*/}
          </div>
        </Col>
        <Col lg="4">
        <Booking tour={tour} avgRating={avgRating}/>
        </Col>
      </Row>
    </Container>
   </section>
   
   </>
  )
}

export default TourDetails
