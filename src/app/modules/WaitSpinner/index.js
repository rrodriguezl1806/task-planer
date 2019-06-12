import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

import { Spin } from './node_modules/antd';

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