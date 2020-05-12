import { css } from 'lit-element';

export default css`
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50%;
    max-width: var(--modal-max-width);
    min-width: var(--modal-min-width);
    height: auto;
    z-index: var(--modal-z-index);
    visibility: hidden;
    backface-visibility: hidden;
    transform: translateX(-50%) translateY(-50%);
  }
  .content {
    color: var(--content-color);
    background: var(--content-background-color);
    padding: var(--content-padding-vertical) var(--content-padding-horizontal);
    position: relative;
    border-radius: var(--content-border-radius);
    margin: 0 auto;
  }
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    visibility: hidden;
    top: 0;
    left: 0;
    z-index: var(--overlay-z-index);
    opacity: 0;
    background: var(--overlay-background-color);
    backdrop-filter: blur(var(--overlay-background-blur));
    transition: all var(--overlay-transition-duration);
    cursor: var(--overlay-cursor);
  }
  .show {
    visibility: visible;
  }
  .show ~ .overlay {
    opacity: 1;
    visibility: visible;
  }
`;
