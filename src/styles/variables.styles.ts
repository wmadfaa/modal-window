import { css } from 'lit-element';
export default css`
  :host {
    --modal-z-index: var(--modal-window-z-index, 2000);
    --modal-max-width: var(--modal-window-max-width, 630px);
    --modal-min-width: var(--modal-window-min-width, 320px);
    --content-color: var(--modal-window-content-color, #212121);
    --content-background-color: var(
      --modal-window-content-background-color,
      #f9f9f9
    );
    --content-padding-horizontal: var(
      --modal-window-content-padding-horizontal,
      16px
    );
    --content-padding-vertical: var(
      --modal-window-content-padding-vertical,
      16px
    );
    --content-border-radius: var(--modal-window-content-border-radius, 5px);
    --overlay-z-index: var(--modal-window-overlay-z-index, 1000);
    --overlay-background-color: var(
      --modal-window-overlay-background-color,
      rgba(22, 22, 22, 0.5)
    );
    --overlay-background-blur: var(
      --modal-window-overlay-background-blur,
      10px
    );
    --overlay-transition-duration: var(
      --modal-window-overlay-transition-duration,
      0.3s
    );
    --overlay-cursor: var(--modal-window-overlay-cursor, pointer);
  }
`;
