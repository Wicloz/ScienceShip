Security.defineMethod('ifIsCurrentUser', {
  fetch: [],
  transform: null,
  allow(type, arg, userId, doc) {
    return userId === doc._id;
  },
});

Security.defineMethod('noPropDeep', {
  fetch: [],
  transform: null,
  allow(type, arg, userId, doc, modified, modifier) {
    let present = false;
    for (const key in modifier) {
      if (!modifier.hasOwnProperty(key)) continue;
      if (modifier[key].hasOwnProperty(arg)) {
        present = true;
      }
    }
    return !present;
  },
});

Meteor.users.permit(['insert', 'update', 'remove']).never().allowInClientCode();
Meteor.users.permit('update').ifIsCurrentUser().onlyProps(['profile', 'emails']).noPropDeep('profile.studentNumber').allowInClientCode();
