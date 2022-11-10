import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row, Table} from "reactstrap";
import Api_modal from "./api-modal";
import Back_test_modal from "./back-test-modal";
import Profit_rate_graph from "./profit-rate-graph";

const trading = () => {
    return(
        <div style={{margin:"30px", height:"100%", width:"100%"}}>
            <Row style={{margin:"10px", height:"50%"}}>
                <Col md={2}>
                    <Row style={{height : "70%"}}>
                        <Col>
                            <Card style={{height : "100%"}}>
                                <Card>Bot1</Card>
                                <Card>Bot2</Card>
                                <Button>봇 추가</Button>
                                <Button>봇 삭제</Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{height : "30%"}}>
                        <Col>
                            <Card style={{height : "100%"}}>
                                <Table>
                                    <tbody>
                                    <tr>
                                        <th>잔고</th>
                                        <td>1000000</td>
                                    </tr>
                                    <tr>
                                        <th>수익</th>
                                        <td>1000000</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <Api_modal/>

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
                        <Table style={{padding:"10px"}}>
                            <tbody>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            </tbody>
                        </Table>
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
                            </tbody>
                            <Back_test_modal/>
                            <Button>수정</Button>
                        </Table>
                    </Card>
                </Col>
                <Col md={7}>
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
                </Col>
                <Col md={3}>
                    <Card style={{height : "100%"}}>
                        <Profit_rate_graph data = {[
                            {
                                "id": "norway",
                                "color": "hsl(49, 70%, 50%)",
                                "data": [
                                    {
                                        "x": "plane",
                                        "y": 12
                                    },
                                    {
                                        "x": "helicopter",
                                        "y": 176
                                    },
                                    {
                                        "x": "boat",
                                        "y": 88
                                    },
                                    {
                                        "x": "train",
                                        "y": 112
                                    },
                                    {
                                        "x": "subway",
                                        "y": 27
                                    },

                                ]
                            }
                        ]}></Profit_rate_graph>

                    </Card>
                </Col>
            </Row>

        </div>
    )
};

export default trading;
