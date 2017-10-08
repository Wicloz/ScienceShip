import SimpleSchema from 'simpl-schema';

// Collection
export const Subjects = new Mongo.Collection("subjects");

// Security
if (Meteor.isServer) {
  Subjects.permit(['insert', 'update', 'remove']).never().allowInClientCode();
  Subjects.permit(['insert', 'update']).ifLoggedIn().allowInClientCode();
}

// Schemas
const Schemas = {};

Schemas.Subject = new SimpleSchema({
  name: {
    type: String
  },
  year: {
    type: SimpleSchema.Integer
  },
  semester: {
    type: String,
    allowedValues: ['First', 'Second'],
    autoform: {
      afFieldInput: {
        options: function () {
          return {
            'Spring': 'First',
            'Autumn': 'Second'
          };
        }
      }
    }
  }
}, { tracker: Tracker });

Subjects.attachSchema(Schemas.Subject);

// Helpers
Subjects.helpers({
  getSemester() {
    if (this.semester === 'First') {
      return 'Spring';
    }
    else if (this.semester === 'Second') {
      return 'Autumn';
    }
    return this.semester;
  }
});

// Window
if (Meteor.isClient) {
  window.Subjects = Subjects;
}
