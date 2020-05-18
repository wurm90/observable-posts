import React from "react";

class AppContainer extends React.PureComponent {
  render() {
    return <>{this.props.children}</>;
  }
}

export default AppContainer;
