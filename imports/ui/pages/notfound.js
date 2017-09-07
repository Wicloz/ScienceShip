import './notfound.html';

Template.pages_notfound.onCreated(function() {
  Session.set('PageTitle', 'Page not Found');
  SEO.set({
    title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
  });
});
