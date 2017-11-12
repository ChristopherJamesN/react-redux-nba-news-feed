import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class BackButton extends Component {
  static contextTypes = {
    router: () => null,
  }

  render() {
    return (
      <Button
        onClick={this.context.router.history.goBack}>
          Back
      </Button>
    )
  }
}

export default BackButton;
