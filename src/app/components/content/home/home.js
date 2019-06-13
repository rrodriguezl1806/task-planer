import React from "react";
import { DatePicker } from 'antd';
import moment from 'moment';
import { Row, Col } from 'antd';
import './home.sass'
import Cards from './cards/cards'

const { MonthPicker } = DatePicker;
const monthFormat = 'YYYY/MM';

export default function Home() {
  return (
    <div>
      <div className="date">
        <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
      </div>
      <div className="cards">
        <Row>
          <Col span={11} className="cardUI">
            <Cards type="UI" title="Urgent and Important"></Cards>
          </Col>
          <Col span={11} className="cardNUI">
            <Cards type="NUI" title="Not Urgent but Important"></Cards>
          </Col>
          <Col span={11} className="cardNIU">
            <Cards type="NIU" title="Not Important but Urgent"></Cards>
          </Col>
          <Col span={11} className="cardNINU">
            <Cards type="NINU" title="Neither Important nor Urgent"></Cards>
          </Col>
        </Row>
      </div>
    </div>
  )
}