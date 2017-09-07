Template.registerHelper('titleFor', (routeName) => {
  routeName = routeName.replace(/([A-Z])/g, ' $1');
  routeName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
  return routeName;
});
