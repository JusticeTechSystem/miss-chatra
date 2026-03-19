// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NGNAkFC/hEV62D4VwYX59RtEWIvtzgzSjrRRev1+pBpI2/Ksvl+utXWcitde5ukrkeho5swhT8SKN/0TaDD+6ckiaskTc+tO9SWhBVR2A01rgtuFTlJNM0mAUnk4hFpB7hChYz7G0MDPbkDnMXo5gy4xP61qmGQvKT5iAJ9RSbKH0Et6pywniy1qdK/O+NUZzNreh3rwEoFgCzTMNGZxsLc/Jtphoh/UqcZ3rF8a6XzymeCEankqhECgWXkvYjUiYA7XhmFy0BFgI0HYVfSw4e4MH4sSAuYjSJkYkUqbH4jcGVz4ibnCBeKx5XJ6VzUkF65AFdzbQUn84r/DLFsJE3UrcMllDIscDC4hbHFyUxnsK/sxixz+0P1QOUa3U0btyClU18LqeyCFYgg39HepQ9ExZ+bbS3NvpI3J1dAubkWzt22/rAoc2fnCo2q44B+d/nLXjlBp/wG3H3hdYDIT0bkD1sEeYTyYb3IBOZD7+ghhflOEZbTt+VUuvsAlDhThjq/oHHpleVq9vpo1/+27ZuYpxlpghWmBzwv5/6y8eJcQ5AWyXeGcJsWnlPyXFYnqCYtNQEYqMIb3F03Bs8JKLSrBk4pR1Qxt1xt5lhZ5O0IuOb4hgNHwZNM/qRVS29bJ+CDwzbWmr6pD51Ph4MEA40ehqGKs7oa3Twv9qOulfLGb7rKf3sAtyAfQ/Ujf2yNdSdmba8Sjc6Rw4YFpF4UmyaebtDfWLUIKR8WAjOOZeB59YPMuiKU50Pfc9t8kXo5SPEHk1VKvVFswNBTI2Ko9b7GcRpg6xfAgdEWnBgp5sLj0+1G+F+t88HilQsmV7KuwkdnTEKOkI+JJ9yJ3HCRpdd2GNpwfIETf4ksN9LFHbo7JW7FrFZsbyTDKDxemyfHW+FNUMWFBhpeiebTQzg/2ZoIVjt2ZJHiGRqCANHDhS7hi+rmv7sLI4hbkSIIzV6qzh2n6uAC+IXd/Z7Stkvjpu0ifXA/q5Q7oQ+iHAu614m/73zckwbjnkQSVV/zYshx9O7ZKWJvMFi6qWXrOx/YcuhjVcBod8Xr187nd6mO7wHRIgj4tIIsw+rvaN4Wmcgw3LtgXeq1eEiuMBM4hkuVmMoqknOEKNFUptN5eurEfxFdzq+ZbmVLKpoaAQNrDlLm2DG4c92PwWtJ/5a8tZDs12OX117CPD/40S2QzP6YhCnz/1lWlWsOCy+9g7vw3kTUW5BhLdud84jSbeUZx8k02uxy3EzW8luvvvU1bmYlrd9pdoTyUeZs/p17TzTWIvxiwgaaSxjsxYcCxBSFWDw7CzENcZ5Ye9aJze1YVsz5+adfzLETOfqb5LIvJslXXqCu3Bg4nqm5BMkTM94dc9ZPlPtkBRXyfIlwhYMoMvvMN/JrWVElAm6vrAg==';
  const _INTEGRITY_HASH = '04aed471a03493b650d89c6ce64a72f13171870b9b4a4e5ebb115431bb2fcb91';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
