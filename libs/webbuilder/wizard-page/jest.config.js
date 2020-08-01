module.exports = {
  name: 'webbuilder-wizard-page',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/webbuilder/wizard-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
