import React from 'react';
import PropTypes from 'prop-types';
//import { SectionStyle } from './Section.styled';

const Section = ({ title, children }) => (
    <div>
        {title && <h2>{title}</h2>}
        {children}
   </div> 
)

Section.defaultProps = {
    title: ''
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
export default Section;