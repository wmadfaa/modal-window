import { html, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import VARIABLES from './styles/variables.styles';
import MAIN_STYLES from './styles/main.styles';

import FADE_IN_AND_SCALE from './styles/effects/fade-in-and-scale.styles';

export class ModalWindow extends LitElement {
  static get styles() {
    return [VARIABLES, MAIN_STYLES, FADE_IN_AND_SCALE];
  }

  @property({ type: Boolean }) open = false;

  __handleOnOverlayClicked() {
    this.dispatchEvent(
      new CustomEvent('overlay-click', { detail: { open: this.open } })
    );
  }

  render() {
    return html`
      <div
        class=${classMap({
          modal: true,
          'fade-in-and-scale-effect': true,
          show: this.open,
        })}
      >
        <div class="content">
          <slot>default content</slot>
        </div>
      </div>
      <div class="overlay" @click=${this.__handleOnOverlayClicked}></div>
    `;
  }
}
