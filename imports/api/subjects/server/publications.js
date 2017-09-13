import { Subjects } from '../subjects.js';
import SimpleSchema from 'simpl-schema';

Meteor.publish('subjects.all', function() {
  return Subjects.find();
});

Meteor.publish('subjects.one', function(id) {
  new SimpleSchema({
    id: String
  }).validate({ id });

  return Subjects.find({
    _id: id
  });
});
