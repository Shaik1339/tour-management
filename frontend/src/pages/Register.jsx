import React,{useState,useContext} from 'react'
import '../styles/login.css'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'


const Register = () => {

   const [credentials, setCredentials] = useState({
         username:undefined,
         email:undefined,
         password:undefined
  
      })

      const navigate = useNavigate()

      const {dispatch} = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials(prev => ( {...prev , [e.target.id]:e.target.value}))

}

 const handleClick = async (e) => {

   console.log('reg',credentials)

       e.preventDefault();
       try{
        const res = await axios.post(`${BASE_URL}/auth/register`, credentials);
        if(!res.status===200  || !res.status===201){
          alert('falied to register');
        }

        dispatch({type:'REGISTER_SUCCESS'})

        navigate('/login')        

       }catch(err){
          alert(err.message);
       }
 }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
           <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="" />
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit' onClick={handleClick}>Create New Account</Button>
              </Form>
              <p>Already have an account?<Link to='/login'>Login</Link></p>
            </div>

           </div>
          
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;
