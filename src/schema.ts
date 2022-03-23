
import { v4 as uuidv4 } from 'uuid';

export interface Card {
  id: string;
  title: string;
  type: string;
  toggles: Array<Toggle | DropdownToggle | GroupToggle>
}

export interface Toggle {
  id: string;
  label: string;
  type: string;
}

export interface GroupToggle extends Toggle {
  childToggles: Array<Toggle | DropdownToggle | GroupToggle>
}

export interface DropdownToggle extends Toggle {
  min: number;
  max: number;
}


export const schema: Card[] = [
  {
    id: uuidv4(),
    title: 'GENERAL',
    type: 'Horizontal',
    toggles: [
      {
        id: uuidv4(),
        label: 'CASE MANAGEMENT',
        type: 'Basic',
      },
      {
        id: uuidv4(),
        label: 'MAP TIMELINE',
        type: 'Basic',
      },
      {
        id: uuidv4(),
        label: 'VIEWS & BRIEFINGS',
        type: 'Basic',
      },
      {
        id: uuidv4(),
        label: 'NOTIFICATIONS',
        type: 'Basic',
      },
      {
        id: uuidv4(),
        label: 'MASS COMMUNICATIONS',
        type: 'Basic',
      },
      {
        id: uuidv4(),
        label: 'TRAFFIC CAMERAS',
        type: 'Basic',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'SETTINGS',
    type: 'Vertical',
    toggles: [
      {
        id: uuidv4(),
        label: 'AUDIT LOG',
        type: 'Basic',
      },
      {
        id: uuidv4(),
        label: 'USERS',
        type: 'Parent',
        childToggles: [
          {
            id: uuidv4(),
            label: 'USERS ADD',
            type: 'Basic',
          },
          {
            id: uuidv4(),
            label: 'USERS DELETE',
            type: 'Basic',
          },
          {
            id: uuidv4(),
            label: 'USERS EDIT',
            type: 'Basic',
          },
          {
            id: uuidv4(),
            label: 'MAX USERS',
            type: 'NumberDropdown',
            min: 1,
            max: 10,
          },
        ]
      },
      {
        id: uuidv4(),
        label: 'SOME OTHER SETTING',
        type: 'Basic',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'ALERTS',
    type: 'Vertical',
    toggles: [
      {
        id: uuidv4(),
        label: 'ALERT MANAGER',
        type: 'Basic',
      },
      {
        id: uuidv4(),
        label: 'ALERT RULES',
        type: 'NumberDropdown',
        min: 1,
        max: 10,
      },
    ],
  },
]
