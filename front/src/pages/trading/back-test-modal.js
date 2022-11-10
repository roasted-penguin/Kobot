import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Input, Card} from 'reactstrap';
import {Route} from "react-router-dom";

function Back_test_modal(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button onClick={toggle}>
                백테스트
            </Button>
            <Modal fullscreen={true} isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>백테스트 모드</ModalHeader>
                <ModalBody>
                    <div>
                        <Col style={{width : "30%"}}>
                            <Row style={{height : "50%"}}>
                                <Col style={{height:"100%"}}>
                                    <Row>
                                        <Col>
                                            <Button>프리셋1</Button>
                                        </Col>
                                        <Col>
                                            <Button>프리셋2</Button>
                                        </Col>
                                    </Row>
                                    <Row style={{height:"100%"}}>
                                        <Card>

                                        </Card>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                        <Col>

                        </Col>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Back_test_modal;