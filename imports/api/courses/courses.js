import SimpleSchema from 'simpl-schema';
import { Subjects } from '/imports/api/subjects/subjects.js';
import { SubjectsCourses } from "/imports/api/subjects_courses/subjects_courses";

// Collection
class CoursesCollection extends Mongo.Collection {
  remove(selector, callback) {
    SubjectsCourses.remove({course_id: selector});
    return super.remove(selector, callback);
  }
}

export const Courses = new CoursesCollection('courses');

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

// Helpers
Courses.helpers({
  subjects() {
    return Subjects.find({

    });
  }
});

// Window
if (Meteor.isClient) {
  window.Courses = Courses;
}
