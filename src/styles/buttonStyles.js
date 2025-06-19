// src/styles/buttonStyles.js
import { createStyles } from 'antd-style';

export const useGradientButtonStyle = createStyles(({ prefixCls, css }) => ({
  gradientButton: css`
    &.${prefixCls}-btn {
      position: relative;
      overflow: hidden;
      border: none;
      color:white;
      background:#3f5bdf;

      > span {
        position: relative;
        z-index: 1;
      }

      &::before {
        content: '';
        position: absolute;
        color:white;
        inset: -1px;
        color:#ffffff !important;
        background: -webkit-gradient(linear, left top, right top, color-stop(-14.2%, #3f5bdf), color-stop(72.84%, #61cf5c));
        background: linear-gradient(90deg, #3f5bdf -14.2%, #61cf5c 72.84%);
        z-index: 0;
        transition: opacity 0.3s;
        border-radius: inherit;
        opacity: 0;
      }

      &:hover::before {
        opacity: 1;
        color:#ffffff !important;
    
      }

      &:disabled::before {
        opacity: 0.4;
        color:#ffffff !important;
      }
    }
  `,
}));
