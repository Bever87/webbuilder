module.exports = {
  name: 'shared-wizard-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/wizard-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
