import './subjectBrowser.html';

import { Subjects } from '/imports/api/subjects/subjects.js';

Template.pages_subjectBrowser.onCreated(function () {
  Session.set('PageTitle', 'Subject Browser');
  SEO.set({
    title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
  });

  this.subscribe('subjects.all');
});

Template.pages_subjectBrowser.helpers({
  insertSubjectData() {
    return {
      id: 'insertSubjectModal',
      collection: 'Subjects',
      type: 'insert',
      modalParentId: 'js-dynaview',
      title: 'Add Subject'
    };
  },

  subjects() {
    return Subjects.find({}, {
      sort: {name: 1}
    })
  }
});

Template.pages_subjectBrowser_subjectRow.events({
  'click .subjectRow'(event) {
    if (event.which === 1) {
      FlowRouter.go('viewSubject', {'_id': this._id});
    }
  },
  'auxclick .subjectRow'(event) {
    if (event.which === 2) {
      window.open(FlowRouter.path('viewSubject', {'_id': this._id}), '_blank');
    }
  }
});
