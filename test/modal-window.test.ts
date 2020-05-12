import { html, fixture, expect } from '@open-wc/testing';

import { ModalWindow } from '../src/ModalWindow.js';
import '../modal-window.js';

describe('ModalWindow', () => {
  it('works', async () => {
    const el: ModalWindow = await fixture(html`
      <modal-window></modal-window>
    `);

    expect(el.open).to.equal(false);
  });

  it('passes the a11y audit', async () => {
    const el: ModalWindow = await fixture(html`
      <modal-window></modal-window>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
