import React from 'react'
import Subtitle from './../shared/Subtitle';
import './styles/home.css';
import './../styles/home.css';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';
import {Container ,Row,Col} from 'reactstrap'
import ServiceList from '../services/ServiceList';
import Featuredtourlist from '../components/Featured-tours/Featuredtourlist';
import experienceImg from '../assets/images/experience.png'
import MemoryImagesGallery from '../components/Image-gallery/MemoryImagesGallery';
import Testimonials from '../Testimonials/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return<>
  {}
    <section>
      <Container>
      <Row>
      <Col lg='6'>
      <div className="hero__content">
      <div className="hero__subtitle d-flex align-items-center">

      <Subtitle subtitle={'know before you go'}/>
      <img src={worldImg} alt=''/>
      </div>
      <h1>Treveling opens the door to creating    <span className="highlight">
      memories    </span>    </h1>
      <p>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium natus impedit tenetur dolor pariatur suscipit ab sunt aspernatur vel ipsum necessitatibus voluptatum mollitia odio eligendi    </p>
      </div>
      


      </Col>   
      <Col lg="2">
      <div className="hero__img-box">
      <img src={heroImg} alt="" />
      </div>
      </Col>   
      <Col lg="2">

      <div className="hero__img-box">
      <video src={heroVideo} alt="" controls/>
      </div>
      </Col>   
      <Col lg="2">

      <div className="hero__img-box">
      <img src={heroImg02} alt=""/>
      </div>
      </Col>
      <SearchBar/>
         </Row>
      </Container>
      </section>
      <section>
<Container>
<Row>
<Col lg="3">
<h5 className='services__subtitle'>What we serve</h5>
<h2 className='services__title'>We offer our best services</h2>
</Col>
<ServiceList/>

</Row>
</Container>
</section>
{}
{}
<section>
<Container>
<Row>
<Col lg="12" className='mb-5'>
<Subtitle subtitle={"Explore"}/>
<h2 className='featured__tour-title'>Our featured tours</h2>
</Col>
<Featuredtourlist/>

</Row>
</Container>
</section>









{}
{}

<section>
<Container>
<Row>
<Col lg ='6'>
<div className="experience__content">
<Subtitle subtitle={'Experience'}/>
<h2>With our all experiences <br/> we will serve you</h2>
<p>
ledlkkek  e e ek ele e 
<br/>

ledlkkek  e e ek ele e 



</p>
</div>
<div className='counter__wrapper d-flex align-items-center gap-5'>
<div className='counter__box'>
<span>12k+</span>
<h6>successful trip</h6>
</div>
<div className='counter__box'>
<span>12k+</span>
<h6>successful trip</h6>
</div>
<div className='counter__box'>
<span>12k+</span>
<h6>successful trip</h6>
</div>
</div>
</Col>
<Col lg='6'>
<div className='experience__img'>
<img src={experienceImg} alt=""/>
</div>
</Col>






</Row>
</Container>

</section>
<section>
<Container>
<Row>
<Col lg='12'>
<Subtitle subtitle={'Gallery'}/>
<h2 className='gallery_title'>Visit ir office customer tour gallery</h2>
</Col>
<Col lg='12'>
<MemoryImagesGallery/>

</Col>


</Row>
</Container>
</section>
{}
{}
<section>
<Container>
<Row>
<Col lg='12'>
<Subtitle subtitle={'Fans Love'}/>
<h2 className='testimonial__title'>What our fans say about us</h2>

</Col>
<Col lg='12'>
<Testimonials/>

</Col>
</Row>
</Container>
</section>
{}
<Newsletter/>






</>









}
export default Home
