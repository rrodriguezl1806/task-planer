import React, { useState } from 'react'
import { Layout, Row, Col, Checkbox, Icon } from 'antd';
import './cards.css'

export default function Cards({ type, title }) {
  return (
    <Layout>
      <div className="title">
        <h3 className={type}>{title}</h3>
      </div>
      <div className="listTaks">
        <Card></Card>
      </div>
    </Layout>
  )
}

function Card() {
  return (
    <div>
      <Checkbox id="" onChange={onChange} style={{ marginRight: '2em'}}>Task name</Checkbox>
      <Icon type="edit" className="pointer" onClick={editTask} style={{ marginRight: '1em'}} />
      <Icon type="delete" className="pointer" onClick={deleteTask} />
    </div>
  )
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function editTask() {
  console.log('edit');
}
function deleteTask() {
  console.log('delete');
}