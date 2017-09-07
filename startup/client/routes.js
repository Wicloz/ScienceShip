FlowRouter.notFound = {
  name: 'pageNotFound',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/notfound.js');
    BlazeLayout.render('layouts_app', { content: 'pages_notfound' });
  },
};

FlowRouter.route('/', {
  name: 'welcome',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/welcome.js');
    BlazeLayout.render('layouts_app', { content: 'pages_welcome' });
  },
});

FlowRouter.route('/profile', {
  name: 'manageProfile',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/profile.js');
    BlazeLayout.render('layouts_app', { content: 'pages_profile' });
  },
});
