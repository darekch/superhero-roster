# Senior NodeJS/ReactJS Superheroes Tech Test

## Pull Request

Author: darekch <darek.chec@gmail.com> request to merge `feature/superhero-roster-page` into `develop`

## Short overview copied from the task

Build a Superhero Roster Web Application that allows users to browse, filter, and view details about superheroes.

## Setup

In order to install required packages, run `npm install` in the root directory.
To start frontend app, run `npm run dev`
To start e2e tests with Playwright, run `npm run test:e2e`
To start unit tests with Jest, run `npm run test`

## Overview

This home `/`` route redirect to e.g. http://localhost:3000/characters
To check functionality move to e.g. http://localhost:3000/characters and http://localhost:3000/character/batman

## This PR includes commits:

- `615e69d3` test(components): Install and run Jest with react-testing-library, check renders for Checkbox component
- `a035b32a` test(characters): Install Playwright and run basics e2e tests for both pages /characters and /character:slug
- `e1c3e81d` chore(character): Add button Back component to easily navigate (next/navigation) with previous pages
- `b56f57c2` chore(characters): NoResults client side component to fallback for filtering superheroes on /characters page
- `b442ca09` feat(favourites): Implement Favourite feature with small client side component, extend store and allowing users to filter on /characters page
- `812cdfbd` feat(themes): Added themes for dark and light toggle with next-themes, upgrade styling on mobile devices
- `3d156082` feat(character): Implement and styling Character single page components
- `86c19a9f` feature(character): Add /services for API resources and initialize /character:slug page with (SSG/ISG) Server Side Generation methods
- `3df72bba` feat(characters): Initialize superheroes store with Zustand library (define interface for state and action methods)
- `3df72bb1` feat(characters): Implement Characters components (ui components, filters, list and card)
- `2e000854` feat(layout): Add layout components (Header, Footer) and basic styling for pages
- `d30aef89` feat(types): Init /types directory with definitions for Superheroes schema and assign with data list records
- `9a0529dd` build(setup): feat(routing): Define app routes - /characters and /character:id pages and init data serving with /api route
- `d30aef89` chore(setup): Clean code from Next.js app started boilerplate
- `aab56aa7` build(setup): Install and configure lint-staged and husky, define pre-commit hook and run scripts (package.json)
- `eebc0922` build(setup): Install and configure Prettier with ESLint
- `af63474d` chore(editor): config setup (.vscode settings and extensions)
- `1db36e49` build(app): Initial commit from Create Next App

## What should be added in another PR to increase UI experience, code quality and consistency:

- Write more `e2e` test with `Playwright`, describe more user scenarios,
- Describe more tests (unit and integration), increase code coverage with `Jest` and `react-testing-library`,
- Improve mobile responsiveness (RWD) for other devices e.g. small screens with mobile menu and togged nav,
- Add `i18next`internationalization-framework to detect the user language and load translations and push them into the app,
- Perhaps switch styling from CSS Modules to Tailwind CSS utilities,
- Extend own design system with `@/components/ui/**` based on `shadcn/ui` library,

## What should be added in another PR to increase developer experience:

- Add `Storybook` to easy manage with implementation and testing next `@/components/ui/**` components,
- Deploy `/app/api/**` resources to seperate domain for unblock all features comes from SSG (Static Site Generation) and ISG (Incremental Static Regeneration), because fetch data from localhost like e.g.`/app/api/**/route.ts`not works in build time after`npm run build` promt, it works only when API resource is alive,
