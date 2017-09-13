import SimpleSchema from 'simpl-schema';

// Collection
export const Courses = new Mongo.Collection("courses");

// Security
if (Meteor.isServer) {
  Courses.permit(['insert', 'update', 'remove']).never().allowInClientCode();
  Courses.permit(['insert', 'update']).ifLoggedIn().allowInClientCode();
}

// Schemas
const Schemas = {};

Schemas.Course = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['Bachelor', 'Master', 'Minor', 'Other']
  },
  name: {
    type: String
  },
  duration: {
    type: SimpleSchema.Integer,
    min: 1,
    label: 'Duration in Semesters'
  }
}, { tracker: Tracker });

Courses.attachSchema(Schemas.Course);

// Window
if (Meteor.isClient) {
  window.Courses = Courses;
}
