module.exports = {
  components: {
    categories: [
      {
        name: 'Inputs',
        include: [
          'src/components/Button/Button.js',
          'src/components/ButtonGroup/ButtonGroup.js',
          'src/components/Checkbox/Checkbox.js',
          'src/components/Fab/Fab.js',
          'src/components/IconButton/IconButton.js',
          'src/components/Radio/Radio.js',
          // 'src/components/Select/Select.js',
          'src/components/TextField/TextField.js',
        ],
      },
      { 
        name: 'Data Dispaly',
        include: [
          'src/components/Avatar/Avatar.js',
          'src/components/Icon/Icon.js',
          'src/components/Typography/Typography.js',
          'src/components/Tooltip/Tooltip.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'material-ui-v4-merge'
};



