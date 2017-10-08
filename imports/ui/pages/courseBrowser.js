import './courseBrowser.html';

import '../components/courseList.js';
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
