import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Feature extends Component {
  render() {
    return (
      <FeatureWrapper
        presence={this.props.presence}>
        {this.props.title}
      </FeatureWrapper>
    );
  }
}

Feature.propTypes = {
  title: PropTypes.string,
  presence: PropTypes.bool,
};

const FeatureWrapper = styled.li`
  color: ${({ presence }) => presence ? 'green' : 'red'};
`;

export default Feature;
