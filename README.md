# Info Delver - Settings Dashboard


## Setup

Clone and install repo:

 `git clone https://github.com/neesonch/info-delver`

`cd info-delver && yarn` 
or 
`cd info-delver && npm install`

## Run locally

Navigate to root folder of project and start app with:

`yarn start` 
or 
`npm run start`

If not automatically redirected, navigate to http://localhost:3000 in browser to view.

## View live version

https://neesonch.github.io/info-delver

## Testing

To run unit and integration tests:
`yarn test` 
or 
`npm run test`

To run e2e tests (via Cypress):
`yarn e2e` 
or 
`npm run e2e`

## Deployments

To deploy updates to live version hosted at Github Pages:
`yarn deploy` 
or 
`npm run deploy`


## Implementation Notes

Layout of dashboard is implemented with CSS Flexbox and Styled Components. The reasoning behind using Flexbox (as opposed to, e.g., CSS Grid) was imagining a CMS-style setup where the dashboard consumes a dynamic and configurable list of various types of card, each containing its own configurable list of various types of toggle - i.e., the exact layout is not known ahead of time. Instead, the component accepts a card list of arbitrary length and lays them out according to the following logic:
- Horizontal cards occupy the full width of a row and divide child toggles into three columns.
- Vertical cards occupy one third of a row and display child toggles in a single column. Up to three Vertical cards can be displayed in the same row, aligned to the left.
- A Horizontal card will always start a new row
- The height of each row is determined by the height of its tallest card

To see this in action, the `schema` array variable in schema.ts file can be edited when running the app locally to test different combinations of cards, for example:

![Image](https://i.imgur.com/W8FuH4P.png)

The layout is responsive - in mobile portrait view, all cards (and their child toggles) are collapsed into a single column.

The layout is keyboard accessible (Tab/Shift-tab to move the cursor forward and backward between toggles, Spacebar to enable/disable a highlighted toggle).

Colours are defined via CSS variables as a stepping-off point for future implementation of theming.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
