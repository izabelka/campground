import React, { Component } from 'react';
import styled from 'styled-components';
import FEATURES from '../camp-features/camp_features.js';
import Feature from './Feature';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { features: FEATURES };
  }

  renderFeatures = () => {
    return (
      this.state.features.map((feat, index) => (
        <Feature
          key={index}
          title={feat.title}
          presence={feat.presence}
          hasSubfeatures={feat.subfeatures && feat.subfeatures.length > 0}/>
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

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const FeaturesWrapper = styled.ul`
  margin-top: 10em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default App;
