module.exports = {
  name: 'shared-search',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/search',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
