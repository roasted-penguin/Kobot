import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Input, Card, Table} from 'reactstrap';
import {Route} from "react-router-dom";
import Api_modal from "./api-modal";
import Profit_rate_graph from "./profit-rate-graph";

function Back_test_modal(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button style={{width:'100%'}} onClick={toggle}>
                백테스트
            </Button>
            <Modal fullscreen={true} isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>백테스트 모드</ModalHeader>
                <ModalBody style={{height:"100%", width:"100%"}}>
                        <Col>
                            <Row style={{margin:"10px", height:"50%"}}>
                                <Col md={2}>
                                    <Row style={{height : "90%"}}>
                                        <Col>
                                            <Card style={{height : "100%"}}>

                                                <Row  style={{padding:'10px'}}>
                                                    <Col>
                                                        <Button style={{width:'100%'}}>프리셋 1</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button  style={{width:'100%'}}>프리셋 2</Button>
                                                    </Col>
                                                </Row>
                                                <Table style={{padding:"10px"}}>
                                                    <thead>
                                                    <th>항목</th>
                                                    <th>설정값</th>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>파라미터1</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터2</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터3</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터4</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터3</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터4</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터3</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터4</td>
                                                        <td>########</td>
                                                    </tr>
                                                    <tr>
                                                        <td>파라미터3</td>
                                                        <td>########</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={7}>
                                    <Card style={{height : "100%"}}>
                                        dsfds
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{height : "100%"}}>
                                        <Profit_rate_graph data = {[
                                            {
                                                "id": "norway",
                                                "color": "hsl(49, 70%, 50%)",
                                                "data": [
                                                    {
                                                        "x": "2022-07",
                                                        "y": 10.4
                                                    },
                                                    {
                                                        "x": "2022-08",
                                                        "y": 12.6
                                                    },
                                                    {
                                                        "x": "2022-09",
                                                        "y": 16.9
                                                    },
                                                    {
                                                        "x": "2022-10",
                                                        "y": 7.2
                                                    },
                                                    {
                                                        "x": "2022-11",
                                                        "y": -5.2
                                                    },

                                                ]
                                            }
                                        ]}></Profit_rate_graph>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{margin:"10px", height:"50%"}}>
                                <Col md={2}>
                                    <Card style={{height : "100%"}}>
                                        <Table style={{padding:"10px"}}>
                                            <thead>
                                            <th>항목</th>
                                            <th>설정값</th>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>파라미터1</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터2</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터3</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터4</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터3</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터4</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터3</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터4</td>
                                                <td>########</td>
                                            </tr>
                                            <tr>
                                                <td>파라미터3</td>
                                                <td>########</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                        <Button>백테스트 시작</Button>
                                        <Row  style={{padding:'10px'}}>
                                            <Col>
                                                <Button style={{width:'100%'}}>프리셋 1</Button>
                                            </Col>
                                            <Col>
                                                <Button  style={{width:'100%'}}>프리셋 2</Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col md={10}>
                                    <Row>

                                        <h3>백테스트 진행 상황판</h3>
                                        <Card style={{height : "100%"}}>
                                            <Row>
                                                <Col>
                                                    <Table>
                                                        <tbody>
                                                        <tr>
                                                            <th>시작잔고</th>
                                                            <td>##.##.##</td>

                                                        </tr>
                                                        <tr>
                                                            <th>밸런스 상황</th>
                                                            <td>##.##.##</td>

                                                        </tr>
                                                        <tr>
                                                            <th>최대 도달 밸런스</th>
                                                            <td>##.##.##</td>

                                                        </tr>
                                                        <tr>
                                                            <th>#####</th>
                                                            <td>##.##.##</td>

                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col><Col>
                                                <Table>
                                                    <tbody>
                                                    <tr>
                                                        <th>수익률 상황</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    <tr>
                                                        <th>최대 청산 위험률</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    <tr>
                                                        <th>최대 존버 기간</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    <tr>
                                                        <th>최대 낙폭</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Col><Col>
                                                <Table>
                                                    <tbody>
                                                    <tr>
                                                        <th>승률</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    <tr>
                                                        <th>최대 수익/손실</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    <tr>
                                                        <th>최대 무포 기간</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    <tr>
                                                        <th>#####</th>
                                                        <td>##.##.##</td>

                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            </Row>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card style={{height : "100%"}}>
                                            <Table style={{padding:"10px"}}>
                                                <thead>
                                                <th>종목</th>
                                                <th>거래 시간</th>
                                                <th>포지션</th>
                                                <th>수량</th>
                                                <th>가격</th>
                                                <th>수수료</th>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>#####</td>
                                                    <td>##.##.##</td>
                                                    <td>buy</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                </tr>
                                                <tr>
                                                    <td>#####</td>
                                                    <td>##.##.##</td>
                                                    <td>buy</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                </tr>
                                                <tr>
                                                    <td>#####</td>
                                                    <td>##.##.##</td>
                                                    <td>buy</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                </tr>
                                                <tr>
                                                    <td>#####</td>
                                                    <td>##.##.##</td>
                                                    <td>buy</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                </tr>
                                                <tr>
                                                    <td>#####</td>
                                                    <td>##.##.##</td>
                                                    <td>buy</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                    <td>########</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Card>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
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