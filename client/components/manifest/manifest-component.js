import React, { PropTypes } from 'react';
import ManifestAction from './Action';
import deep from 'deep-diff';
import './index.scss';
import classNames from 'classnames'

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
    const frameClasses = classNames('frame');

    return (
      <div className={frameClasses}>
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
      <ManifestAction action={action}
                      index={index}
                      key={index}
                      diff={diff || []}
                      toggleAction={this.props.toggleAction.bind(this, index)} />
    )
  }
}
