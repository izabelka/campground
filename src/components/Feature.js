import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

class Feature extends Component {

  constructor(props) {
    super(props);

    this.state = {
      icon: this.props.presence ? '✅' : '❌',
      clicked: false,
    };
  }

  onFeatureClick = () => {
    this.props.hasSubfeatures && this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <FeatureWrapper>
        <FeatureContent
          presence={this.props.presence}
          hasSubfeatures={this.props.hasSubfeatures}
          onClick={this.onFeatureClick}
          clicked={this.state.clicked}>
          <FeatureIcon>
            {this.state.icon}
          </FeatureIcon>
          <FeatureTitle>
            {this.props.title}
          </FeatureTitle>
        </FeatureContent>
        {this.state.clicked && this.props.children}
      </FeatureWrapper>
    );
  }
}

Feature.propTypes = {
  title: PropTypes.string,
  presence: PropTypes.bool,
  hasSubfeatures: PropTypes.bool,
};

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FeatureWrapper = styled.li`
  color: ${({ presence }) => presence ? '#00b500' : '#ee0000'};
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
  animation: ${fadeInLeft} .3s linear;
`;

const FeatureContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 180px;
  padding: 14px 18px;
  font-size: 1.4em;
  font-weight: 400;
  color: ${({ presence }) => presence ? '#00b500' : '#ee0000'};
  border: 1px solid #c8d1dd;
  border-radius: 100px;
  background-color: #fff;
  cursor: ${({ hasSubfeatures }) => hasSubfeatures ? 'pointer' : 'default'};
  margin-bottom: ${({ clicked }) => clicked ? 16 : 0}px;

  &:hover {
    background-color: ${({ hasSubfeatures }) =>
                           hasSubfeatures ? '#edfae8' : '#fff'};
  }
`;

const FeatureIcon = styled.span`
  margin-right: 6px;
`;

const FeatureTitle = styled.span``;

export default Feature;
