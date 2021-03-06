import './subjectBrowser.html';

import '../components/subjectList.js';
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
    return Subjects.find();
  }
});
