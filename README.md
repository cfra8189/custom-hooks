# Custom Hooks Lab

## Description

Reusable React hooks with simple demos: client-side pagination (`usePagination`) and debounced values (`useDebounce`). Built with Vite and vanilla React.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Deployed App](#deployment)
- [About the Authors](#author)
- [Development Process](#process)
- [Installation & Setup](#install)
- [Works Cited](#sources)

## <a name="technologiesused"></a>Technologies Used

- **JavaScript (React)** - Hooks and component demos
- **Vite** - Fast dev server and build
- **CSS** - Layout and styling for demo panels
- **ESLint** - Linting for consistency

## <a name="features"></a> Features

**usePagination hook** - Current page, bounds, and navigation helpers
**useDebounce hook** - Debounced value with cleanup on change
**Pagination Demo** - Renders paged items with next/prev and page buttons
**Debounce Demo** - Input with adjustable delay and filtered results
**Responsive Layout** - Grid that stacks on small screens

**In Progress:**

- [ ] Additional pagination edge-case tests

## <a name="nextsteps"></a>Future Features

- TypeScript typings for hooks
- Storybook examples for both hooks
- Keyboard focus styles and aria hints
- Unit tests for pagination math and debounce timing

## <a name="deployment"></a>Deployed Link

**Live Application:**
Not deployed yet (run locally)

**Repository:**
https://github.com/cfra8189/custom-hooks

## <a name="author"></a>About The Authors

- **[Clarence Franklin](https://github.com/cfra8189)**

## <a name="process"></a>Development Process

- Feature branches and incremental commits per lab step
- Lightweight peer review and manual testing of demos

## <a name="install"></a>Installation & Setup

1. Clone the repository:

	```bash
	git clone https://github.com/cfra8189/custom-hooks.git
	```

2. Install dependencies and start dev server:

	```bash
	cd custom-hooks
	npm install
	npm run dev
	```

3. Open the local URL from the terminal output.

## <a name="sources"></a>Works Cited

- React docs on hooks
- MDN Web Docs - JavaScript timers and array methods
