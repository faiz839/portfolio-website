import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Content from './Content'
import SkillsComponent from './SkillsComponent'
import  Project  from './Project'
import ContactForm from './Contactform'
import FooterComponent from './FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Content></Content>
    <SkillsComponent></SkillsComponent>
    <Project></Project>
    <ContactForm></ContactForm>
    <FooterComponent></FooterComponent>
    </>
  )
}
export default  App
