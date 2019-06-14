import React, { useState, useEffect } from "react";
import { DatePicker } from 'antd';
import moment from 'moment';
import { Row, Col } from 'antd';
import './home.sass'
import Cards from './cards/cards'
import { getTasksByMonthYear } from '../../../services/cards'

const { MonthPicker } = DatePicker;
const monthFormat = 'YYYY/MM';

export default function Home() {

  const [tasks, setTasks] = useState([])
  const [taskTypeUI, setTaskTypeUI] = useState([])
  const [taskTypeNUI, setTaskTypeNUI] = useState([])
  const [taskTypeNIU, setTaskTypeNIU] = useState([])
  const [taskTypeNINU, setTaskTypeNINU] = useState([])

  useEffect(() => {
    getTask()
  }, [])

  const getTask = async () => {
    const res = await getTasksByMonthYear('06', '2019')
    getTypeTask(res.data.result)
  }

  function getTypeTask(data) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if(element.calification === 'Urgent and important') {
        setTaskTypeUI([...taskTypeUI, element])
      }
      if(element.calification === 'Not Urgent, but Important') {
        setTaskTypeNUI([...taskTypeNUI, element])
      }
      if(element.calification === 'Not Important, but Urgent') {
        setTaskTypeNIU([...taskTypeNIU, element])
      }
      if(element.calification === 'Neither Urgent nor important') {
        setTaskTypeNINU([...taskTypeNINU, element])
      }
    }
  }

  return (
    <div>
      {taskTypeUI.length}
      <div className="date">
        <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
      </div>
      <div className="cardsBlock">
        <Row>
          <Col span={11} className="cardUI">
            <Cards type="UI" title="Urgent and Important" data={taskTypeUI}></Cards>
          </Col>
          <Col span={11} className="cardNUI">
            <Cards type="NUI" title="Not Urgent but Important" data={taskTypeNUI}></Cards>
          </Col>
          <Col span={11} className="cardNIU">
            <Cards type="NIU" title="Not Important but Urgent" data={taskTypeNIU}></Cards>
          </Col>
          <Col span={11} className="cardNINU">
            <Cards type="NINU" title="Neither Important nor Urgent" data={taskTypeNINU}></Cards>
          </Col>
        </Row>
      </div>
    </div>
  )
}