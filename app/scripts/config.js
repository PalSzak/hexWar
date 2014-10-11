'use strict';

angular.module('PalSzak.Hexwar')
  .constant('version', 'v0.1.0')
  .constant('sizes',[{name: 'hex_size_xs', size: 20},{name: 'hex_size_sm', size: 25},{name: 'hex_size_md', size: 35},{name: 'hex_size_lg', size: 50}])
  .constant('neighbourName', hexWarCore.neighbourName)
  .constant('neighbours', hexWarCore.neighbours);
