import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Input, Card} from 'reactstrap';
import {Route} from "react-router-dom";

function Api_modal(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button onClick={toggle}>
                API 관리
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>API</ModalHeader>
                <ModalBody>
                    <div>
                        <Col>
                            <br/>
                            <Row>
                                <Card>
                                    <h3>Upbit</h3>
                                    <Input placeholder={"Access Key"}/>
                                    <Input placeholder={"Secret Key"}/>
                                    <Button>API 값 확인</Button>
                                </Card>
                            </Row>
                            <br/>
                            <br/>
                            <br/>
                            <Row>
                                <Card>
                                    <h3>Bithumb</h3>
                                    <Input placeholder={"Connect Key"}/>
                                    <Input placeholder={"Secret Key"}/>
                                    <Button>API 값 확인</Button>
                                </Card>
                            </Row>
                        </Col>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        입력 완료
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Api_modal;