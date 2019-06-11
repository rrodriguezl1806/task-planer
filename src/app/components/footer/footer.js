import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default function FooterContent() {
    
    const currentYear = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <Footer style={{ textAlign: 'center' }}>
            Task Planer ©{currentYear()} Created by The Cochis
        </Footer>
    );
}