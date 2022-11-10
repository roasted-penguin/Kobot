import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Input, Row} from "reactstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components';


const logIn = () => {
    return(
        <div>
            <Row>
                <Col>
                    <Card
                        body
                        style={{
                            width: "100%",
                            height: "100%",
                            padding: "20px",
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h1" style={{textAlign:'center', margin: "30px"}}>
                                Kobot
                            </CardTitle>
                            <CardText style={{margin:"10px"}}>
                                <Input style={{margin:"10px"}} placeholder={"ID"}/>
                                <Input style={{margin:"10px"}} placeholder={"PASSWORD"}/>
                            </CardText>
                            <Button>
                                <Link to={'/trading'}>login</Link>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default logIn;
