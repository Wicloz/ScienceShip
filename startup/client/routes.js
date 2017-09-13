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

const courseRoutes = FlowRouter.group({
  prefix: '/courses',
  name: 'courses'
});

courseRoutes.route('/', {
  name: 'courseBrowser',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/courseBrowser.js');
    BlazeLayout.render('layouts_app', { content: 'pages_courseBrowser' });
  },
});

courseRoutes.route('/:_id', {
  name: 'viewCourse',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/courseView.js');
    BlazeLayout.render('layouts_app', { content: 'pages_courseView' });
  },
});

const subjectRoutes = FlowRouter.group({
  prefix: '/subjects',
  name: 'subjects'
});

subjectRoutes.route('/', {
  name: 'subjectBrowser',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/subjectBrowser.js');
    BlazeLayout.render('layouts_app', { content: 'pages_subjectBrowser' });
  },
});

subjectRoutes.route('/:_id', {
  name: 'viewSubject',
  action() {
    require('/imports/ui/layouts/app.js');
    require('/imports/ui/pages/subjectView.js');
    BlazeLayout.render('layouts_app', { content: 'pages_subjectView' });
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
