/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import ImageColorPicker from '../index';

describe('[ImageColorPicker] 테스트', () => {
  render(<ImageColorPicker />);
  it('화면에 그려지면 두가지 버튼을 갖는다. (Browse, Reset)', () => {
    expect(screen.getByText('Browse')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByText('Reset')).toBeInstanceOf(HTMLButtonElement);
  });
});
