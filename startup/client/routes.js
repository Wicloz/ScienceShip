FlowRouter.notFound = {
  action() {
    import '../../imports/ui/layouts/app.js';
    import '../../imports/ui/pages/notfound.js';
    BlazeLayout.render('app', { content: 'notfound' });
  },
};

FlowRouter.route('/', {
  name: 'welcome',
  action() {
    import '../../imports/ui/layouts/app.js';
    import '../../imports/ui/pages/welcome.js';
    BlazeLayout.render('app', { content: 'welcome' });
  },
});
