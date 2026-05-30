/* xclone shared utilities */
window.xc = (function() {
  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getToken() {
    return localStorage.getItem('token');
  }

  function authHeaders() {
    var t = getToken();
    return t ? { 'Authorization': 'Bearer ' + t } : {};
  }

  function requireAuth() {
    if (!getToken()) {
      window.location.replace('/login');
      return false;
    }
    return true;
  }

  function logout() {
    localStorage.removeItem('token');
    window.location.replace('/login');
  }

  return {
    escHtml: escHtml,
    getToken: getToken,
    authHeaders: authHeaders,
    requireAuth: requireAuth,
    logout: logout
  };
})();
