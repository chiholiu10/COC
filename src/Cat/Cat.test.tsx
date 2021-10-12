import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Cat } from './Cat';

test('check radion select Cat exists', () => {
    const component = shallow(<Cat />);

    expect(component.length).toEqual(1);
});

test("test input radio button", () => {
    const { getByLabelText } = render(<Cat />);
    const labelRadio = getByLabelText('Balinese') as HTMLInputElement;
    expect(getByLabelText('Balinese')).not.toBeChecked();
    fireEvent.click(labelRadio);
    expect(getByLabelText('Balinese')).toBeChecked();
});