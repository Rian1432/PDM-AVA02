import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ImageButton from '../src/components/shared/ImageButton';

describe('ImageButton', () => {
  it('deve renderizar a imagem corretamente', () => {
    const { getByTestId } = render(
      <ImageButton testID="image-button" handlePress={() => {}} source={'https://example.com/image.jpg'} />
    );

    const button = getByTestId('image-button');
    expect(button).toBeTruthy();
  });

  it('deve chamar a função onPress ao ser pressionado', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ImageButton testID="image-button" handlePress={onPressMock} source={'https://example.com/image.jpg'} />
    );

    const button = getByTestId('image-button');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});