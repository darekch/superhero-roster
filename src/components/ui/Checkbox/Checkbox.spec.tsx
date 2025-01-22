import { render } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  const mockOnChange = jest.fn();

  it('renders Checkbox component with label', () => {
    const result = render(
      <Checkbox
        id='test-checkbox'
        name='testCheckbox'
        isChecked={false}
        label='Test Checkbox'
        onChange={mockOnChange}
      />
    );

    expect(result.getByText('Test Checkbox')).toBeInTheDocument();
  });
});
