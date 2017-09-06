import './navbar.html';

Template.components_topnav.onRendered(function () {
  $('.button-collapse').sideNav({
    closeOnClick: true
  });
});

Template.components_topnav.helpers({
  pageTitle() {
    return Session.get('PageTitle');
  }
});
