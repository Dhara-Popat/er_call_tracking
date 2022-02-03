import React from 'react';

const Header = (props) => {
  return (
      <div className='h3 text-center mt-3 mb-3'>
        {props.header}
      </div>
  )
}

export default Header

