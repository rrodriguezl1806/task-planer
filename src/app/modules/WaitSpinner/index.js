import React from 'react';
import PropTypes from 'prop-types';

import { Spin } from 'antd';

const WaitSpinner = (props) => {
    const { size } = props;

    return (
        <Spin size = { size || 'default' } />
    );
}

WaitSpinner.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large'])
}

export default WaitSpinner;