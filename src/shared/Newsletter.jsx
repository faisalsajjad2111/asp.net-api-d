import React from 'react'
import './newsletter.css'
import { Container ,Row ,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
    <section className="newsletter">
            <Container>
            <Row>
            <Col lg='6'>
            <div className='newsletter__content'>
            <h2> Subscribe now to get useful travel information           </h2>

            <div className='newsletter__input'>
                
            <input type='email' placeholder='enter your email'/>
            <button className='btn newsletter__btn'>Subscribe</button>   
                            </div>
                            <p>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga pro</p>  

                            </div>

                            </Col>

                            <Col lg="6">
                            <div className='newsletter__img'>
                            <img src={maleTourist} alt=""/>           
                            </div>
                            </Col>


      
    </Row>
    </Container>
    </section>

) 
}


export default Newsletter
