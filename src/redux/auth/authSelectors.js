const getUserEmail = state => state.auth.user.email;
const isLoggedIn = state => state.auth.isLoggedIn;
const isCurrentUserLoading = state => state.auth.isCurrentUserLoading;
const getAuthError = state => state.auth.error;

const authSelectors = {
  getUserEmail,
  isLoggedIn,
  isCurrentUserLoading,
  getAuthError,
};
export default authSelectors;
