import './authpage.html';

Template.accounts_authpage.onCreated(function() {
  this.autorun(function() {
    let routeName = FlowRouter.getRouteName();
    if (routeName) {
      routeName = routeName.replace(/([A-Z])/g, ' $1');
      routeName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
      Session.set('PageTitle', routeName);
      SEO.set({
        title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
      });
    }
  });
});
