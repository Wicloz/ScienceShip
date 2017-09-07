import SimpleSchema from 'simpl-schema';

Meteor.users.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const Schema = {};

Schema.UserProfile = new SimpleSchema({
  nameFirst: {
    type: String,
    label: 'First Name'
  },
  nameMiddle: {
    type: String,
    label: 'Middle Name(s)'
  },
  nameLast: {
    type: String,
    label: 'Last Name'
  },
  studentNumber: {
    type: String,
    regEx: /^s([0-9]){7}/,
    unique: true
  },
  studentPassword: {
    type: String,
    optional: true,
    label: 'Leiden University Password'
  }
}, { tracker: Tracker });

Schema.User = new SimpleSchema({
  emails: {
    type: Array,
    minCount: 1
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD
  },
  "emails.$.verified": {
    type: Boolean
  },
  isAdmin: {
    type: Boolean,
    optional: true,
    autoValue: function () {
      return false;
    }
  },

  profile: {
    type: Schema.UserProfile
  },

  createdAt: {
    type: Date,
    autoform: {
      omit: true
    }
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
    autoform: {
      omit: true
    }
  },
  heartbeat: {
    type: Date,
    optional: true,
    autoform: {
      omit: true
    }
  }
}, { tracker: Tracker });

Meteor.users.attachSchema(Schema.User);
