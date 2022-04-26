/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it("matches last snapshot", async () => {
  const appSnap = renderer.create(<App />).toJSON()
  expect(appSnap).toMatchSnapshot()
});
