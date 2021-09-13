module.exports = {
  components: {
    categories: [
      {
        name: 'Inputs',
        include: [
          'src/components/Button/Button.js',
          'src/components/ButtonGroup/ButtonGroup.js',
          'src/components/Checkbox/Checkbox.js',
          'src/components/Radio/Radio.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'material-ui-v4-merge'
};
