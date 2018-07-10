import React, { Component } from 'react';
import styled from 'styled-components';
import FEATURES from '../camp-features/camp_features.js';
import Feature from './Feature';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { features: FEATURES};
  }

  componentWillMount
  renderFeatures = () => {
    return (
      this.state.features.map((feat, index) => (
        <Feature
          key={index}
          title={feat.title}
          presence={feat.presence}/>
      ))
    );
  }
  render() {
    console.log(FEATURES)
    return (
      <Wrapper>
        <FeaturesWrapper>
          {this.renderFeatures()}
        </FeaturesWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const FeaturesWrapper = styled.ul`
`;
export default App;
