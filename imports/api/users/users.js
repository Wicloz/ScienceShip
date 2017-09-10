import SimpleSchema from 'simpl-schema';

// Security
if (Meteor.isServer) {
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
}

// Schemas
const Schemas = {};

Schemas.User = new SimpleSchema({
  emails: {
    type: Array,
    minCount: 1
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD
  },
  'emails.$.verified': {
    type: Boolean,
    autoValue: function () {
      if (!this.isSet) {
        return !!this.isUpdate;
      }
    }
  },
  isAdmin: {
    type: Boolean,
    optional: true,
    autoValue: function () {
      if (!this.isSet && !this.isUpdate) {
        return false;
      }
    }
  },

  profile: {
    type: Object
  },
  'profile.nameFirst': {
    type: String,
    label: 'First Name'
  },
  'profile.nameMiddle': {
    type: String,
    label: 'Middle Name(s)'
  },
  'profile.nameLast': {
    type: String,
    label: 'Last Name'
  },
  'profile.studentNumber': {
    type: String,
    regEx: /^s([0-9]){7}$/,
    unique: true
  },
  'profile.studentPassword': {
    type: String,
    optional: true,
    label: 'Leiden University Password'
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

Meteor.users.attachSchema(Schemas.User);
