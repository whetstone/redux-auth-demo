import React, { PropTypes } from 'react';

export default class ManifestActionComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  render() {
    const {action, diff} = this.props;

    const actionStyle = {
      background: 'white',
      marginBottom: '10px',
      padding: '3px',
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.5)'
    };

    const headerStyle = {
      textTransform: 'uppercase'
    };

    const blockStyle = {
      background: 'white',
      color: 'black',
      margin: '10px 15px',
    };
    const actionBlock = this.state.expanded ?
      <div style={blockStyle}>
        <span style={headerStyle}>Raw Action</span>
        <pre>{JSON.stringify(action)}</pre>
      </div> :
      null;

    let changes = [];
    if (diff.length > 0) {
      changes = diff.map(this.renderDiff.bind(this));
    }

    const storeBlock = this.state.expanded && diff.length > 0 ?
      <div style={blockStyle}>
        <span style={headerStyle}>Store Mutations</span>
        <pre>{changes}</pre>
      </div> :
      null;

    const mutationsStyle = {
      display: 'block',
      fontSize: '0.8em'
    };

    const mutationsBlock = diff.length > 0 ?
      <span style={mutationsStyle}>{diff.length} mutations</span> :
      null

    return (
      <div>
        <div style={actionStyle}>
          <span onClick={this.expandAction.bind(this)}>{action.type}</span>
          {mutationsBlock}
          {actionBlock}
          {storeBlock}
        </div>
      </div>
    )
  }

  renderDiff(diff) {
    const oldValueStyle = {
      textDecoration: 'line-through',
      color: 'red'
    };

    const oldValue = JSON.stringify(diff.lhs);
    const newValue = JSON.stringify(diff.rhs);

    return (
      <span>
        {diff.path.join('.')}: <span style={oldValueStyle}>{oldValue}</span> {newValue}
        <br/>
      </span>
    )
  }

  expandAction() {
    this.setState({
      expanded: !this.state.expanded
    })
  }
}
