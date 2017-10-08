import './subjectList.html';

Template.components_subjectList_subjectRow.events({
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
