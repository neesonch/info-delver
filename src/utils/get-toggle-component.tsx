import React from 'react';
import { Toggle, DropdownToggle, GroupToggle } from '../schema';
import { BASIC, PARENT, NUMBER_DROPDOWN } from './constants';
import BasicToggle from '../components/Toggles/BasicToggle';
import ToggleGroup from '../components/Toggles/ToggleGroup/GroupToggle';
import ToggleNumberDropdown from '../components/Toggles/ToggleNumberDropdown/ToggleNumberDropdown';

const getToggleComponent = (toggle: Toggle | DropdownToggle | GroupToggle) => {
  const { label, id, type } = toggle;
  switch (type) {
    case BASIC:
      return <BasicToggle label={label} id={id} />
    case PARENT:
      if ('childToggles' in toggle) {
        return <ToggleGroup label={label} id={id} childToggles={toggle.childToggles} />
      }
      break;
    case NUMBER_DROPDOWN:
      if ('min' in toggle) {
        return <ToggleNumberDropdown label={label} id={id} min={toggle.min} max={toggle.max} />
      }
      break;
    default:
      return null;
  }
}
export default getToggleComponent;