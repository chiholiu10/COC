import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Dog } from './Dog';

test('check select option Dog exists', () => {
    const component = shallow(<Dog />);

    expect(component.length).toEqual(1);
});

test('should select correct select', () => {
    const { getByTestId, getAllByTestId } = render(<Dog />);

    fireEvent.change(getByTestId('select'), { target: { value: "Boxer" } })
    let options = getAllByTestId('select-option') as any;
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
})