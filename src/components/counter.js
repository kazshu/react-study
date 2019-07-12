import React from 'react';
import Button from '../components/button';

export default class Counter extends React.Component {
  render () {
    const { increment, decrement, counter } = this.props;
    return (
      <div>
        <div>
          <Button text={"+"} onClick={increment}  />
        </div>
        <div>
          <Button text={"-"} onClick={decrement}  />
        </div>
        <div>
          Count: { counter.count }
        </div>
      </div>
    )
  }
}
