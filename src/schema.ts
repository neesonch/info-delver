
export interface HorizontalCard {
  title: string;
}

export interface VerticalCard {
  title: string;
}

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
    id: 'a1',
    title: 'GENERAL',
    type: 'Horizontal',
    toggles: [
      {
        id: 'z0',
        label: 'CASE MANAGEMENT',
        type: 'Basic'
      },
      {
        id: 'z1',
        label: 'MAP TIMELINE',
        type: 'Basic'
      },
      {
        id: 'z2',
        label: 'VIEWS & BRIEFINGS',
        type: 'Basic'
      },
      {
        id: 'z3',
        label: 'NOTIFICATIONS',
        type: 'Basic'
      },
      {
        id: 'z4',
        label: 'MASS COMMUNICATIONS',
        type: 'Basic'
      },
      {
        id: 'z5',
        label: 'TRAFFIC CAMERAS',
        type: 'Basic'
      },
    ],
  },
  {
    id: 'b2',
    title: 'SETTINGS',
    type: 'Vertical',
    toggles: [
      {
        id: 'x0',
        label: 'AUDIT LOG',
        type: 'Basic'
      },
      {
        id: 'x1',
        label: 'USERS',
        type: 'Parent',
        childToggles: [
          {
            id: 'w0',
            label: 'USERS ADD',
            type: 'Basic'
          },
          {
            id: 'w1',
            label: 'USERS DELETE',
            type: 'Basic'
          },
          {
            id: 'w2',
            label: 'USERS EDIT',
            type: 'Basic'
          },
          {
            id: 'w3',
            label: 'MAX USERS',
            type: 'NumberDropdown',
            min: 1,
            max: 10,
          },
        ]
      },
      {
        id: 'x2',
        label: 'SOME OTHER SETTING',
        type: 'Basic'
      },
    ],
  },
  {
    id: 'c3',
    title: 'ALERTS',
    type: 'Vertical',
    toggles: [
      {
        id: 'y0',
        label: 'ALERT MANAGER',
        type: 'Basic'
      },
      {
        id: 'y1',
        label: 'ALERT RULES',
        type: 'NumberDropdown',
        min: 1,
        max: 10,
      },
    ],
  },
]
