import './courseList.html';

Template.components_courseList_courseRow.events({
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
