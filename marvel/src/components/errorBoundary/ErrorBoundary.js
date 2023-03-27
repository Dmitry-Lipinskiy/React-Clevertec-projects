import { Component } from "react";

import { ErrorMessage } from "../errorMessage/ErrorMessage";

export class ErrorBoundary extends Component {

  state = {
    error: false
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true
    });
  };

  render = () => {
    if (this.state.error) {
      return <ErrorMessage />
    }

    // предстовляем что это компонент, который передан в этот компонент, как бы его ребенок
    return this.props.children;
  };
};