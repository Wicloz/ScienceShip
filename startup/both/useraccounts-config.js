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
  _id: 'email',
  type: 'email',
  required: true,
  displayName: 'Leiden University Umail',
  placeholder: 'Leiden University Umail',
  re: /.+@umail.leidenuniv.nl/,
  errStr: 'Invalid umail'
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
