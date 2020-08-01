module.exports = {
  name: 'webbuilder-landing-page',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/webbuilder/landing-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
