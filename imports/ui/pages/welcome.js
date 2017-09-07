import './welcome.html';

Template.pages_welcome.onCreated(function() {
  Session.set('PageTitle', 'Welcome');
  SEO.set({
    title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
  });
});
