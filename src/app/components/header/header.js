import React from 'react';
import { Layout, Icon } from 'antd';
import './header.css';
const { Header } = Layout;

function HeaderContent() {
    return (
        <Header style={{ paddingRight: '2em', paddingLeft: '2em' }}>
            <div style={{ display: 'inline-block' }}>
                <h2>Task Planer</h2>
            </div>
            <div className="options" style={{ display: 'inline-block', marginRight: '2em'}}>
                <Icon type="notification" className="notification" />
                <Icon type="plus-circle" className="plus"/>
            </div>
        </Header>
    );
}
export default HeaderContent;