import './profile.html';

Template.pages_profile.onCreated(function () {
  Session.set('PageTitle', 'Manage Profile');
  SEO.set({
    title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
  });
});

Template.pages_profile.helpers({
  currentUser() {
    return Meteor.user();
  }
});
