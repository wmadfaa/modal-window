import { css } from 'lit-element';

export default css`
  .fade-in-and-scale-effect .content {
    transform: scale(0.7);
    opacity: 0;
    transition: all 0.3s;
  }
  .fade-in-and-scale-effect.show .content {
    transform: scale(1);
    opacity: 1;
  }
`;
