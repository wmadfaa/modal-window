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
  <modal-window open>content goes here!</modal-window>
`;
```

## Variations

###### Custom Title

```js preview-story

const open = () => {
  const modal = document.getElementById('custom-modal')
  modal.open = true
}

const close = () => {
  const modal = document.getElementById('custom-modal')
  modal.open = false
}

export const CustomTitle = () => html`
  <button @click=${open}>open modal-window</button>
  <modal-window @overlay-click=${close} id="custom-modal"></modal-window>
`;
```
