import { SubjectsCourses } from '../subjects_courses.js';
import SimpleSchema from 'simpl-schema';

Meteor.publish('subjects_courses.some.bySubjects', function(ids) {
  new SimpleSchema({
    ids: Array
  }).validate({ ids });

  return SubjectsCourses.find({
    subject_id: {$in: ids}
  });
});

Meteor.publish('subjects_courses.some.byCourses', function(ids) {
  new SimpleSchema({
    ids: Array
  }).validate({ ids });

  return SubjectsCourses.find({
    course_id: {$in: ids}
  });
});
