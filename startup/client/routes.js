FlowRouter.notFound = {
  action() {
    import '/imports/ui/layouts/app.js';
    import '/imports/ui/pages/notfound.js';
    BlazeLayout.render('layouts_app', { content: 'pages_notfound' });
  },
};

FlowRouter.route('/', {
  name: 'welcome',
  action() {
    import '/imports/ui/layouts/app.js';
    import '/imports/ui/pages/welcome.js';
    BlazeLayout.render('layouts_app', { content: 'pages_welcome' });
  },
});
