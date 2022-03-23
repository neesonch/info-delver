import getToggleComponent from './get-toggle-component';
import { Toggle, DropdownToggle, GroupToggle } from '../schema';
import { BASIC, PARENT, NUMBER_DROPDOWN } from './constants';

const mockData: (DropdownToggle | Toggle | GroupToggle)[] = [
  {
    id: 'mock-basic-id',
    label: 'Basic Toggle',
    type: BASIC,
  },
  {
    id: 'mock-parent-id',
    label: 'Parent Toggle',
    type: PARENT,
    childToggles: [],
  },
  {
    id: 'mock-number-dropdown-id',
    label: 'Number Dropdown Toggle',
    type: NUMBER_DROPDOWN,
    min: 0,
    max: 1,
  },
  {
    id: 'mock-invalid-toggle-type-id',
    label: 'Invalid Toggle',
    type: ' ',
  },
]

describe('getToggleComponent', () => {

  test('Returns correct React components for given type', () => {

    const basicToggle = getToggleComponent(mockData[0])
    expect(basicToggle?.type.name).toBe('BasicToggle');

    const toggleGroup = getToggleComponent(mockData[1])
    expect(toggleGroup?.type.name).toBe('GroupToggle');

    const dropdownNumberToggle = getToggleComponent(mockData[2])
    expect(dropdownNumberToggle?.type.name).toBe('ToggleNumberDropdown');

    const invalidToggle = getToggleComponent(mockData[3])
    expect(invalidToggle).toBe(null);
  });

});