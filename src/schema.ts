
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
  toggles: Toggle[]

}

export interface Toggle {
  id: string;
  label: string;
  type: string;
  children?: Toggle[]
}

export const schema: Card[] = [
  {
    id: 'a1',
    title: 'General',
    type: 'Horizontal',
    toggles: [
      {
        id: 'z0',
        label: 'Case Management',
        type: 'x'
      },
      {
        id: 'z1',
        label: 'Map Timeline',
        type: 'x'
      },
      {
        id: 'z2',
        label: 'Views & Briefings',
        type: 'x'
      },
      {
        id: 'z3',
        label: 'Notifications',
        type: 'x'
      },
      {
        id: 'z4',
        label: 'Mass Communications',
        type: 'x'
      },
      {
        id: 'z5',
        label: 'Traffic Cameras',
        type: 'x'
      },
    ],
  },
  {
    id: 'b2',
    title: 'Settings',
    type: 'Vertical',
    toggles: [
      {
        id: 'x0',
        label: 'Audit Log',
        type: 'x'
      },
      {
        id: 'x1',
        label: 'Audit Log',
        type: 'x'
      },
    ],
  },
  {
    id: 'c3',
    title: 'Alerts',
    type: 'Vertical',
    toggles: [
      {
        id: 'y0',
        label: 'Alert Manager',
        type: 'x'
      },
      {
        id: 'y1',
        label: 'Alert Manager',
        type: 'x'
      },
    ],
  },
]
