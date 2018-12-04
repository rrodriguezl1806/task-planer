import React from 'react';
import { Layout } from 'antd';

export default class Footer extends React.Component {
    
    currentYear = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    render() {
        return (
            <Layout.Footer className="app-footer">
                Task Planer ©{this.currentYear()} Created by The Cochis
            </Layout.Footer>
        );
    }
}