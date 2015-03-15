Package.describe({
  name: 'viacdn:font-awesome',
  summary: 'Font-Awesome via CDN for Meteor',
  version: '4.3.0',
  git: 'https://github.com/dealable/meteor-font-awesome-cdn.git'
});

Package.onUse(function(api) {
  api.addFiles('load.js','client');
});
