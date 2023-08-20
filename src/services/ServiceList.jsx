import React from 'react'
import ServiceCard from "./ServiceCard"
import {Col} from "reactstrap"
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const servicesData =[
{
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "lorem epr swsj wsjkwsjwsjwsjjk wsjkws jkjk"
},
{
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: "lorem epr swsj wsjkwsjwsjwsjjk wsjkws jkjk"
},
{
    imgUrl: customizationImg,
    title: "Customization",
    desc: "lorem epr swsj wsjkwsjwsjwsjjk wsjkws jkjk"
},










    
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item ,index)=>(<Col lg='3' key={index}><ServiceCard item=
{item}/></Col>  ))

      }
    </>
  )
}

export default ServiceList
