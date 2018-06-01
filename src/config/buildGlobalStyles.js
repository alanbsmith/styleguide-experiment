function buildGlobalStyles(theme) {
  return `
    html {
      height: 100%;
    }
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: ${theme.fonts.primaryFallback};
      font-size: ${theme.dimensions.baseFontSize}px;
      font-weight: 400;
      height: 100%;
      margin: 0;

      button,
      input,
      select,
      textarea {
        font-family: ${theme.fonts.primaryFallback};
      }

      &.fonts-loaded {
        font-family: ${theme.fonts.primary};
        button,
        input,
        select,
        textarea {
          font-family: ${theme.fonts.primary};
        }
      }
    }
    #___gatsby {
      display: flex;
      min-height: 100%;
    }
  `;
}

export default buildGlobalStyles;
