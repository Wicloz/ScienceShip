if (Meteor.isClient) {
  import '/imports/ui/layouts/app.js';
  import '/imports/ui/accounts/authpage.js';
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
  showResendVerificationEmailLink: true
});

if (Meteor.isClient) {
  AccountsTemplates.configureRoute('changePwd');
  AccountsTemplates.configureRoute('forgotPwd');
  AccountsTemplates.configureRoute('resendVerificationEmail');
  AccountsTemplates.configureRoute('resetPwd');
  AccountsTemplates.configureRoute('signIn');
  AccountsTemplates.configureRoute('signUp');
  AccountsTemplates.configureRoute('verifyEmail');

  FlowRouter.route('/logout', {
    name: 'logout',
    action() {
      AccountsTemplates.logout();
    }
  });
}
