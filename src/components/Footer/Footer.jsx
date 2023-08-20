import React from 'react'
import "./footer.css"
import { Container, Row ,Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
const quick__links=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]
const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]
const Footer = () => {
  return (
    <footer className='footer'>
       <Container>
       <Row>
       <Col lg="3">
       <div className='logo'>
       <img src={logo} alt=""/>
       <p>Lore m dk kdk lk k k ee  e</p>
       <div className='social__links d-flex align-items-center gap-4'>
       <span>
       <Link to ="#"><i class="ri-youtube-line"></i></Link>
       </span>
       <span>
       <Link to ="#"><i class="ri-youtube-line"></i></Link>
       </span>
       <span>
       <Link to ="#"><i class="ri-instagram-line"></i></Link>
       </span>
       </div>
       </div>
       </Col>
       <Col lg='3'>
       <h5 className='footer__link-title'>Discovery</h5>
       <ListGroup className="footer__quick-links">
        { quick__links.map((item ,index)=>(
          <ListGroupItem key={index} className='ps-0 border-0'>
            <Link to={item.path}>{item.display}</Link>
          </ListGroupItem>

        ))}
       </ListGroup>
       </Col>
       <Col lg='3'>
       <h5 className='footer__link-title'>Discovery</h5>
       <ListGroup className="footer__quick-links">
        { quick__links.map((item ,index)=>(
          <ListGroupItem key={index} className='ps-0 border-0'>
            <Link to={item.path}>{item.display}</Link>
          </ListGroupItem>

        ))}
       </ListGroup>
       </Col>
       <Col lg='3'>
       <h5 className='footer__link-title'>Discovery</h5>
       <ListGroup className="footer__quick-links">
        
          <ListGroupItem className='ps-0 border-0'>
             <h6>address</h6>
       <p>ddee</p>
          </ListGroupItem>
          <ListGroupItem className='ps-0 border-0'>
             <h6>phone</h6>
       <p>444424224</p>
          </ListGroupItem>
          <ListGroupItem className='ps-0 border-0'>
             <h6>email</h6>
       <p>fss@d.components</p>
          </ListGroupItem>

        
       </ListGroup>
       </Col>

       </Row>
       </Container>
    </footer>
  )
}

export default Footer
