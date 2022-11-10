import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Input, Card} from 'reactstrap';
import {Route} from "react-router-dom";
import {ResponsiveLine} from "@nivo/line"

const Profit_rate_graph = ({data}) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 30, right: 20, bottom: 50, left: 40 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
        />
    );
}

export default Profit_rate_graph;