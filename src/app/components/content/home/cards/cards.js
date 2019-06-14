import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Checkbox, Icon } from 'antd';
import './cards.sass'

export default function Cards({ type, title, data }) {
  return (
    <Layout>
      <div className="title">
        <h3 className={type}>{title}</h3>
      </div>
      <div className="listTaks">
        {data.map((task, index) => (
          <Card key={index} task={task}></Card>
        ))}
      </div>
    </Layout>
  )
}

function Card({ index, task}) {
  return (
    <div>
      <Checkbox id={index} onChange={onChange} style={{ marginRight: '2em'}}>{task.description}</Checkbox>
      <Icon type="edit" className="pointer" onClick={editTask} style={{ marginRight: '1em'}} />
      <Icon type="delete" className="pointer" onClick={deleteTask} />
    </div>
  )
}
const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
}

const editTask = () => {
  console.log('edit');
}
const deleteTask = () => {
  console.log('delete');
}