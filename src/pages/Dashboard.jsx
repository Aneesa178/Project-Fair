import React from 'react';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Myproject from '../components/Myproject';
import { Row,Col } from 'react-bootstrap';

function Dashboard() {
  return (
   <>
   Dashboard
   <Header/>
   <h2 className='mt-5 ms-3'>Welcome <span style={{color:"orange"}}>User</span></h2>
   <Row className='container-fluid mt-5'>
    <Col md={8}>
      <Myproject/>
    </Col>
    <Col md={4}>
    <Profile/>
    </Col>
   </Row>
   </>
  )
}

export default Dashboard