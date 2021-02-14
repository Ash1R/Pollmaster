import React from 'react';

const PollResult = (props) => {
  return (
    <div>
      {props.name} : {props.value}
    </div>
  )
}

export default PollResult;