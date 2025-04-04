import React from 'react'
import PropTypes from 'prop-types';
export const childcomponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

childcomponent.propTypes={
    children: PropTypes.array,
}