import React from 'react'


function Box(props) {
    const {width='300px', height='400px', color='lightblue', title='Cow'} = props;
  return (
    <div style = {{
        width: width,
        height: height,
        backgroundColor: color
    }}>
        <h3>{title}</h3>


    </div>
  )
}

export default Box