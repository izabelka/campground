import React, { Component } from 'react';
import styled from 'styled-components';
import FEATURES from '../camp-features/camp_features.js';
import Feature from './Feature';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      features: FEATURES
    };
  }

  listFeatures = (features) => {
    let listSubfeatures = (subfeatures) => {
      if (subfeatures && subfeatures.length > 0) {
        return (
          <FeaturesWrapper
            subfeature>
            {this.listFeatures(subfeatures) }
          </FeaturesWrapper>
        )
      }
    }

    return features.map((feat, index) => (
      <Feature
        key={ index }
        title={ feat.title }
        presence={feat.presence}
        hasSubfeatures={feat.subfeatures && feat.subfeatures.length > 0}>
          {listSubfeatures(feat.subfeatures)}
      </Feature>
    ))
  }

  render() {
    return (
      <Wrapper>
        <FeaturesWrapper>
          {this.listFeatures(this.state.features)}
        </FeaturesWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 34px;
`;

const FeaturesWrapper = styled.ul`
  margin-left: ${({ subfeature }) => subfeature ? 34 : 0}px;
`;

export default App;
