import { html, fixture, expect } from '@open-wc/testing';

import {ModalWindow} from '../src/ModalWindow.js';
import '../modal-window.js';

describe('ModalWindow', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: ModalWindow = await fixture(html`
      <modal-window></modal-window>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: ModalWindow = await fixture(html`
      <modal-window></modal-window>
    `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: ModalWindow = await fixture(html`
      <modal-window title="attribute title"></modal-window>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: ModalWindow = await fixture(html`
      <modal-window></modal-window>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
