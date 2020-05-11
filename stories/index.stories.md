```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/modal-window.js';

export default {
  title: 'ModalWindow',
  component: 'modal-window',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# ModalWindow

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add modal-window
```

```js
import 'modal-window/modal-window.js';
```

```js preview-story
export const Simple = () => html`
  <modal-window></modal-window>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <modal-window title="Hello World"></modal-window>
`;
```
