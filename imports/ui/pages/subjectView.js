import './subjectView.html';

import '../components/courseList.js';
import { Subjects } from '/imports/api/subjects/subjects.js';

Template.pages_subjectView.onCreated(function () {
  this.autorun(() => {
    this.subscribe('subjects.one', FlowRouter.getParam('_id'));
    this.subscribe('courses.all');

    if (this.subscriptionsReady()) {
      Session.set('PageTitle', Subjects.findOne({ _id: FlowRouter.getParam('_id') }).name);
      SEO.set({
        title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
      });
    }
  });
});

Template.pages_subjectView.helpers({
  updateSubjectData() {
    return {
      id: 'updateSubjectModal',
      collection: 'Subjects',
      type: 'update',
      doc: Subjects.findOne({ _id: FlowRouter.getParam('_id') }),
      modalParentId: 'js-dynaview',
      title: 'Edit Subject'
    };
  },

  subject() {
    return Subjects.findOne({
      _id: FlowRouter.getParam('_id')
    })
  }
});
