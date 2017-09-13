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
    allowedValues: ['Autumn/Winter', 'Spring/Summer']
  }
}, { tracker: Tracker });

Subjects.attachSchema(Schemas.Subject);
