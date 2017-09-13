import './courseBrowser.html';

import { Courses } from '/imports/api/courses/courses.js';

Template.pages_courseBrowser.onCreated(function () {
  Session.set('PageTitle', 'Course Browser');
  SEO.set({
    title: Session.get('PageTitle') + ' | ' + Meteor.settings.public.appName
  });

  this.subscribe('courses.all');
});

Template.pages_courseBrowser.helpers({
  insertCourseData() {
    return {
      id: 'insertCourseModal',
      collection: 'Courses',
      type: 'insert',
      modalParentId: 'js-dynaview',
      title: 'Add Course'
    };
  },

  courses() {
    return Courses.find({}, {
      sort: {name: 1}
    })
  }
});

Template.pages_courseBrowser_courseRow.events({
  'click .courseRow'(event) {
    if (event.which === 1) {
      FlowRouter.go('viewCourse', {'_id': this._id});
    }
  },
  'auxclick .courseRow'(event) {
    if (event.which === 2) {
      window.open(FlowRouter.path('viewCourse', {'_id': this._id}), '_blank');
    }
  }
});
