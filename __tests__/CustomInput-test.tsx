import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import CustomInput from '../src/components/shared/CustomInput';

jest.mock('@expo/vector-icons', () => ({
    Ionicons: 'Ionicons',
}));

describe('CustomInput', () => {
  it('Deve renderizar o input corretamente', () => {
    const { getByTestId } = render(
      <CustomInput testID="custom-input" placeholder="Test" icon="text" value="" onChangeText={() => {}} />
    );

    const input = getByTestId('custom-input');
    expect(input).toBeTruthy();
  });

  it('Deve chamar onChangeText quando o valor do input for alterado', () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <CustomInput testID="custom-input" placeholder="Test" icon="text" value="" onChangeText={onChangeTextMock} />
    );

    const input = getByTestId('custom-input');
    fireEvent.changeText(input, 'testing');

    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
  });
});