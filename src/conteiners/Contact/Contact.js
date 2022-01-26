import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Photocontact from "../../assets/img/contact-image.png";
import { sendForm } from "../../assets/axios";

import "./contact.scss";


const Contact = () => {

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false);
    const [showAlert, setshowAlert] = useState(false);

    const [dataForm, setDataForm] = useState({});


    const handleChange = (e) => {
        setDataForm((prevData) => {

            return {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log("form.checkValidity()", form.checkValidity())
        setValidated(true);


        if (form.checkValidity() === false) {
            setError(true);
            setshowAlert(true);

        } else {

            const response = sendForm(dataForm);
            if (response.status === 201) {
                setError(false);
                setshowAlert(true);
                form.reset();
                setValidated(false);
                setTimeout(() =>{
                    setshowAlert(false);
                }, 3000)

            }





        }
    };





    return (
        <section id="contact">
            <div className="container-contacto container">

                <div>

                    <h3 className="Title-contact">
                        Get in touch<br></br>
                        <span className="Title-orange"> We are hiring!</span>
                    </h3>
                    <div className="form">
                        <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group  >
                                <Form.Control required className="form-item" onChange={(e) => handleChange(e)} requiered type="text" placeholder="Name" name="name" />
                            </Form.Group>
                            <Form.Group  >
                                <Form.Control required className="form-item" type="email" placeholder="Email" name="email" />
                            </Form.Group>
                            <Form.Group  >
                                <Form.Control className="form-item" type="phone" placeholder="Phone" name="phone" />
                            </Form.Group>
                            <Form.Group >

                                <Form.Control requiered className="form-item" controlId="exampleForm.ControlTextarea1" as="textarea" rows={4} placeholder="Mensaje" name="message" />
                            </Form.Group>
                            {
                                showAlert ? (
                                ! error ? (

                                <Alert  variant='info'>
                                Mensaje enviado!
                            </Alert>
                            ) : (
                            <Alert  variant='danger'>
                            Hubo un error!
                        </Alert>
                            )
                                 ) : null  };
                            
                            <Button type="submit" className="button2">Send</Button>
                        </Form>
                    </div>
                    <br />



                </div>






                <div>

                    <img className="FotosGlobo" src={Photocontact} alt="imagen de contacto" />
                </div>

            </div>

        </section >

    );
};

export default Contact