module.exports = {
  name: 'webbuilder',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/webbuilder',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
