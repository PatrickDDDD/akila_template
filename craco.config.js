const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              '@font-family': `'ClarityCity', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
              '@primary-color': '#385aea',           // 修改 Primary 按钮颜色
              '@border-radius-base': '10px',         // 按钮圆角
              '@btn-height-base': '35px',
              '@border-color': '#385aea',            // 全局边框色
              '@btn-primary-hover-border': '#385aea' // ✅ 按钮 hover 边框颜色
            },
          },
        },
      },
    },
  ],
};
