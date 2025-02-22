import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import FullScreen from '../src/components/containers/FullScreen';

describe('FullScreen component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <FullScreen>
        <Text>Test Content</Text>
      </FullScreen>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });
});