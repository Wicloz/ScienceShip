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

FlowRouter.route('/courses', {
  name: 'courseBrowser',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/courseBrowser.js');
    BlazeLayout.render('layouts_app', { content: 'pages_courseBrowser' });
  },
});

FlowRouter.route('/courses/:id', {
  name: 'courseBrowser',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/course.js');
    BlazeLayout.render('layouts_app', { content: 'pages_course' });
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
