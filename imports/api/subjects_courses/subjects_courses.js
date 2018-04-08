import SimpleSchema from 'simpl-schema';

// Collection
export const SubjectsCourses = new Mongo.Collection('subjects_courses');

// Security
if (Meteor.isServer) {
  SubjectsCourses.permit(['insert', 'update', 'remove']).never().allowInClientCode();
}

// Schemas
const Schemas = {};

Schemas.SubjectCourses = new SimpleSchema({
  subject_id: {
    type: String
  },
  course_id: {
    type: String
  },
  mandatory: {
    type: Boolean
  }
}, { tracker: Tracker });

SubjectsCourses.attachSchema(Schemas.SubjectCourses);
