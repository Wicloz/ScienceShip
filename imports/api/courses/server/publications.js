import { Courses } from '../courses.js';

Meteor.publish('courses.all', function() {
  return Courses.find();
});

Meteor.publish('courses.one', function(id) {
  new SimpleSchema({
    id: String
  }).validate({ id });

  return Courses.find({
    _id: id
  });
});
