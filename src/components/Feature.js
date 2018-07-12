import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Feature extends Component {

  constructor(props) {
    super(props);

    this.state = {
      icon: this.props.presence ? '✅' : '❌',
    };
  }


  render() {
    return (
      <FeatureWrapper
        presence={this.props.presence}
        hasSubfeatures={this.props.hasSubfeatures}>
        <FeatureIcon>
          {this.state.icon}
        </FeatureIcon>
        <FeatureTitle>
          {this.props.title}
        </FeatureTitle>
      </FeatureWrapper>
    );
  }
}

Feature.propTypes = {
  title: PropTypes.string,
  presence: PropTypes.bool,
  hasSubfeatures: PropTypes.bool,
};

const FeatureWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  font-size: 1.4em;
  font-weight: 400;
  color: ${({ presence }) => presence ? '#00b500' : '#ee0000'};
  border: 1px solid #c8d1dd;
  border-radius: 100px;
  background-color: #fff;
  cursor: ${({ hasSubfeatures }) => hasSubfeatures ? 'pointer' : 'default'};

  &:not(:last-of-type) {
    margin-right: 14px;
  }

  &:hover {
    background-color: ${({ hasSubfeatures }) =>
                           hasSubfeatures ? '#edfae8' : '#fff'};
  }
`;

const FeatureIcon = styled.span`
  margin-right: 4px;
`;

const FeatureTitle = styled.span``;

export default Feature;
