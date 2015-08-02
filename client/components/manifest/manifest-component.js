import React, { PropTypes } from 'react';
import ManifestAction from './manifest-action-component.js';
import deep from 'deep-diff';
import './index.scss';

export default class ManifestComponent {
  static propTypes = {
    // Stuff you can use
    computedStates: PropTypes.array.isRequired,
    currentStateIndex: PropTypes.number.isRequired,
    stagedActions: PropTypes.array.isRequired,
    skippedActions: PropTypes.object.isRequired,

    // Stuff you can do
    reset: PropTypes.func.isRequired,
    commit: PropTypes.func.isRequired,
    rollback: PropTypes.func.isRequired,
    sweep: PropTypes.func.isRequired,
    toggleAction: PropTypes.func.isRequired, // ({ index })
    jumpToState: PropTypes.func.isRequired // ({ index })
  };

  render() {
    const actionReports = this.props.stagedActions.map(this.renderAction.bind(this));

    return (
      <div style={windowStyle}>
        {actionReports.reverse()}
      </div>
    );
  }

  renderAction(action, index) {
    let newState, oldState, diff;
    if (index !== 0) {
      newState = this.props.computedStates[index].state;
      oldState = this.props.computedStates[index - 1].state;
      diff = deep.diff(oldState, newState);
    }

    return (
      <ManifestAction action={action} key={index} diff={diff || []}/>
    )
  }

  renderState(state) {
    const slices = [];
    for (let key in state.state) {
      if (state.state.hasOwnProperty(key)) {
        var obj = state.state[key];
        slices.push(this.renderSlice(obj));
      }
    }

    return (
      <div>
        {slices}
      </div>
    )
  }

  renderSlice(slice) {
    //for (var prop in slice) {
    //  if(slice.hasOwnProperty(prop)){
    //    console.log(prop + " = " + slice[prop]);
    //  }
    //}

    return (
      <div>
        <pre>{JSON.stringify(slice)}</pre>
      </div>
    )
  }

}
