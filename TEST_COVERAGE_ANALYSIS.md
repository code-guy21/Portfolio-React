# Test Coverage Analysis

## Current State

**Test coverage: 0%** — The project has **zero test files** and no testing libraries installed.

| Metric | Count |
|--------|-------|
| Source files | 13 |
| Components | 9 |
| Test files | 0 |
| Testing libraries | 0 |

The `package.json` includes a `test` script (`react-scripts test --env=jsdom`) and `react-scripts` bundles Jest internally, but no test setup files or testing utilities (e.g., Enzyme, React Testing Library) are installed.

---

## Components Inventory

| Component | File | Type | Testable Logic |
|-----------|------|------|----------------|
| `App` | `src/app/layout/App.js` | Class | Renders router with PersistentDrawer |
| `PersistentDrawer` | `src/features/PersistentDrawer/PersistentDrawer.js` | Class | Drawer open/close state, anchor switching, conditional rendering, route definitions |
| `MyDrawer` | `src/features/MyDrawer/MyDrawer.js` | Functional | Props-driven rendering, RTL chevron direction logic |
| `Bio` | `src/features/Bio/Bio.js` | Functional | Static content rendering, includes SocialMediaIcons |
| `Projects` | `src/features/Projects/Projects.js` | Functional | Maps `ProjectData` array to `SimpleMediaCard` components |
| `SimpleMediaCard` | `src/features/SimpleMediaCard/SimpleMediaCard.js` | Functional | Conditional button rendering (Try It, Learn More, Github), fallback image URL |
| `SocialMediaIcons` | `src/features/SocialMediaIcons/SocialMediaIcons.js` | Functional | Renders 6 social links with correct URLs |
| `tileData` | `src/app/public/tileData.js` | JSX data | Navigation links with correct `to` paths |
| `ProjectData` | `src/features/Projects/ProjectData.js` | Data | Array of 5 project objects with expected shape |

---

## Recommended Test Improvements — Prioritized

### Priority 1: Setup Testing Infrastructure

Before writing any tests, install a testing library. Recommended approach:

```bash
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

Or, for a more modern approach:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Create `src/setupTests.js` to configure the adapter.

---

### Priority 2: SimpleMediaCard (High Value)

**File:** `src/features/SimpleMediaCard/SimpleMediaCard.js`
**Why:** This is the most logic-dense presentational component with three conditional rendering paths.

Tests to write:
- Renders title and description text
- Renders "Try It" button only when `webAddress` prop is provided
- Renders "Learn More" button only when `learnMore` prop is provided
- Renders "Github" button only when `github` prop is provided
- Renders no action buttons when none of the optional props are provided
- Uses fallback image URL when `photoURL` is not provided
- Buttons link to the correct URLs via `href`

---

### Priority 3: PersistentDrawer (High Value)

**File:** `src/features/PersistentDrawer/PersistentDrawer.js`
**Why:** This is the main stateful component with the most interactive behavior.

Tests to write:
- Initial state has `open: false` and `anchor: 'left'`
- Clicking the menu icon button calls `handleDrawerOpen` and sets `open: true`
- The menu icon button is hidden when the drawer is open (via `classes.hide`)
- `handleDrawerClose` sets `open: false`
- `handleChangeAnchor` updates the anchor state from event target value
- Drawer renders on the left side (`before`) when anchor is `'left'`
- Drawer renders on the right side (`after`) when anchor is not `'left'`
- Route `/projects` renders the `Projects` component
- Route `/` renders the `Bio` component
- Footer text is present with copyright

---

### Priority 4: MyDrawer (Medium Value)

**File:** `src/features/MyDrawer/MyDrawer.js`
**Why:** Has directional logic and is a key navigational component.

Tests to write:
- Renders a `Drawer` component with `variant="persistent"`
- Passes `open` prop to control visibility
- Renders `ChevronLeftIcon` when direction is `'ltr'`
- Renders `ChevronRightIcon` when direction is `'rtl'`
- Clicking the close icon button calls the `drawerClose` callback
- Renders the `mailList` content inside a `List`

---

### Priority 5: Projects (Medium Value)

**File:** `src/features/Projects/Projects.js`
**Why:** Tests the data-driven rendering pipeline.

Tests to write:
- Renders one `SimpleMediaCard` for each item in `ProjectData`
- Passes correct props (title, description, photoURL, etc.) to each card
- Renders exactly 5 project cards (matching `ProjectData` length)

---

### Priority 6: ProjectData (Low Cost, High Confidence)

**File:** `src/features/Projects/ProjectData.js`
**Why:** Simple data validation, easy to write, catches accidental data corruption.

Tests to write:
- Exports an array with 5 entries
- Every entry has required fields: `title`, `description`, `photoURL`, `github`
- Every `github` URL starts with `https://github.com/`
- Every `photoURL` is a non-empty string

---

### Priority 7: SocialMediaIcons (Low Value)

**File:** `src/features/SocialMediaIcons/SocialMediaIcons.js`
**Why:** Mostly static, but useful for snapshot testing.

Tests to write:
- Renders 6 `IconButton` components
- Each icon links to the correct social media URL
- Snapshot test to catch unintentional markup changes

---

### Priority 8: Bio (Low Value)

**File:** `src/features/Bio/Bio.js`
**Why:** Primarily static content.

Tests to write:
- Renders the profile image with correct `src` and `alt` attributes
- Renders the biography text
- Renders the `SocialMediaIcons` component
- Snapshot test for regression detection

---

### Priority 9: App and tileData (Low Value)

**Files:** `src/app/layout/App.js`, `src/app/public/tileData.js`
**Why:** Very thin wrappers, but still worth basic smoke tests.

Tests to write for `App`:
- Renders without crashing
- Contains a `Router` wrapping `PersistentDrawer`

Tests to write for `tileData`:
- `mailFolderListItems` contains links to `/` and `/projects`
- `otherMailFolderListItems` renders "Extras" and "Social Media" items

---

## Summary

| Priority | Component | Est. Tests | Rationale |
|----------|-----------|------------|-----------|
| 1 | Testing infra setup | — | Prerequisite for all tests |
| 2 | SimpleMediaCard | 7 | Most conditional logic |
| 3 | PersistentDrawer | 10 | Stateful, interactive, routing |
| 4 | MyDrawer | 6 | Directional logic, callbacks |
| 5 | Projects | 3 | Data-driven rendering |
| 6 | ProjectData | 4 | Data integrity validation |
| 7 | SocialMediaIcons | 3 | Link correctness, snapshot |
| 8 | Bio | 4 | Static content, snapshot |
| 9 | App / tileData | 4 | Smoke tests |
| **Total** | | **~41** | |

Implementing these tests would bring the project from 0% to meaningful coverage across all components, with the highest-value tests targeting the components that have the most logic and user interaction.
