if (Meteor.isClient) {
  require('/imports/ui/layouts/app.js');
  require('/imports/ui/accounts/authpage.js');
}

AccountsTemplates.configure({
  defaultTemplate: 'accounts_authpage',
  defaultLayout: 'layouts_app',
  defaultLayoutRegions: {},
  defaultContentRegion: 'content',
  enablePasswordChange: true,
  enforceEmailVerification: true,
  sendVerificationEmail: true,
  showForgotPasswordLink: true,
  showResendVerificationEmailLink: true,
  continuousValidation: true,
  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: true,
  positiveFeedback: true,
  showValidating: true,
  showReCaptcha: true
});

let passwordField = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');

AccountsTemplates.addField({
  _id: 'nameFirst',
  type: 'text',
  required: true,
  displayName: 'First Name',
  placeholder: 'First Name',
  transform: function (value) {
    return value.capitalizeWords();
  }
});
AccountsTemplates.addField({
  _id: 'nameMiddle',
  type: 'text',
  required: true,
  displayName: 'Middle Name(s)',
  placeholder: 'Middle Name(s)',
  transform: function (value) {
    return value.cleanToLower();
  }
});
AccountsTemplates.addField({
  _id: 'nameLast',
  type: 'text',
  required: true,
  displayName: 'Last Name',
  placeholder: 'Last Name',
  transform: function (value) {
    return value.capitalizeWords();
  }
});
AccountsTemplates.addField({
  _id: 'studentNumber',
  type: 'text',
  required: true,
  displayName: 'Student Number',
  placeholder: 'Student Number',
  re: /^s([0-9]){7}/,
  errStr: 'Invalid student number',
  transform: function (value) {
    return value.replace(/^s*/, 's');
  }
});
AccountsTemplates.addField({
  _id: 'studentPassword',
  type: 'password',
  displayName: 'Leiden University Password',
  placeholder: 'Leiden University Password'
});
AccountsTemplates.addField({
  _id: 'email',
  type: 'email',
  required: true,
  displayName: 'Leiden University Umail',
  placeholder: 'Leiden University Umail',
  re: /.+@umail.leidenuniv.nl/,
  errStr: 'Invalid umail',
  transform: function (value) {
    return value.replace(/@.*$/, '@umail.leidenuniv.nl');
  }
});

AccountsTemplates.addField(passwordField);

if (Meteor.isClient) {
  AccountsTemplates.configureRoute('changePwd', {
    name: 'changePassword'
  });
  AccountsTemplates.configureRoute('forgotPwd', {
    name: 'forgotPassword'
  });
  AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetPassword'
  });
  AccountsTemplates.configureRoute('signIn', {
    name: 'logIn'
  });
  AccountsTemplates.configureRoute('signUp', {
    name: 'register'
  });
  AccountsTemplates.configureRoute('verifyEmail', {
    name: 'verifyEmail'
  });
  AccountsTemplates.configureRoute('resendVerificationEmail', {
    name: 'resendVerificationEmail'
  });

  FlowRouter.route('/logOut', {
    name: 'logOut',
    action() {
      AccountsTemplates.logout();
    }
  });
}
