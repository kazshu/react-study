import { connect } from 'react-redux';
import * as counterModule from '../modules/counter';
import Counter from '../components/counter';

const mSTP = state => {
  return {
    counter: state.counter,
  }
}

const mDTP = dispatch => {
  return {
    increment: () => dispatch(counterModule.increment()),
    decrement: () => dispatch(counterModule.decrement()),
  }
}

export default connect(mSTP, mDTP)(Counter);