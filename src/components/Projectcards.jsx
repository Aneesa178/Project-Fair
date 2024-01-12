import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import mediaplayerImage from '../assets/img1 (5).jpeg'
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';



function Projectcards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={mediaplayerImage} />
        <Card.Body>
          <Card.Title>Media Player</Card.Title>


        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={mediaplayerImage} width={"100%"} height={"250px"} alt="" />

            </Col>
            <Col md={6} lg={6}>
              <h4>Description</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat omnis dicta deleniti dolores officiis officia
                repudiandae, beatae, nihil neque voluptatum nulla enim placeat? Expedita praesentium atque sequi, rem vero provident.</p>
              <p><span className='fw-bolder'>Technologies:</span>HTML,CSS,React,Node</p>
            </Col>
          </Row>
          <div className='d-flex mt-3'>
            <a href="https://vercel.com/aneesa178s-projects/media-player" style={{ color: "black", fontSize: "20px" }}><i class="fa-solid fa-link ms-3"></i></a>
            <a href="https://github.com/Aneesa178/Media-Player" target='_blank' style={{ color: "black", fontSize: "20px" }}><i class="fa-brands fa-github ms-3"></i></a>
          </div>
        </Modal.Body>

      </Modal>
    </div>

  )
}

export default Projectcards