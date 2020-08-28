import React, { Component } from 'react';
import styled from 'styled-components';
import ErrorPage from './ErrorPage'

const H1 = styled.h1`
    color:red;
`

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    alert('에러발생')
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info
    });
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) {
    //   return <H1>에러 발생!!</H1>;
      return <ErrorPage/>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;