import './navbar.html';

Template.components_topnav.onRendered(function () {
  $('.button-collapse').sideNav({
    closeOnClick: true
  });
});
