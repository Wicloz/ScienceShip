import './courseView.html';

import '../components/subjectList.js';
import { Courses } from '/imports/api/courses/courses.js';

Template.pages_courseView.onCreated(function () {
  this.autorun(() => {
    this.subscribe('courses.one', FlowRouter.getParam('_id'));
    this.subscribe('subjects.all');

    if (this.subscriptionsReady()) {
      Session.set('PageTitle', Courses.findOne({ _id: FlowRouter.getParam('_id') }).name);
      SEO.set({
        title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
      });
    }
  });
});

Template.pages_courseView.helpers({
  updateCourseData() {
    return {
      id: 'updateCourseModal',
      collection: 'Courses',
      type: 'update',
      doc: Courses.findOne({ _id: FlowRouter.getParam('_id') }),
      modalParentId: 'js-dynaview',
      title: 'Edit Course'
    };
  },

  course() {
    return Courses.findOne({
      _id: FlowRouter.getParam('_id')
    })
  }
});
