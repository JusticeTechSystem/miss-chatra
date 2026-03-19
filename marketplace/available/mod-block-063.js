// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vkbm6pV5qJRUT6spyy2ufRTXujKhwpD/3t0AJmuNOGRDqXhp98S+VOq8oKcD9F4gZuHPLMK+G7JMxLpoR2RVrLRWL0Gdg+ZOnarB5b/YDOFHBvG+dQWDb2oOisSdkF5DY0iqGu5TaQGvkwG+tIkmekD0QxglVcQr2pvIv+hL3QL9iqRVZ1VWwQG1uATjesLrlyXP7yF/EQ+YZzxXv3f92Bhgm+YRmPu8w0Z0jLgN3KCOgCf3Hc9wen7FS66cpGyNYolOquCMAIlDJbHjedsNeqdlalzPmCR2pp1QGgEXdrnqL8MwQWc/4Qs1sCyR6vo0tYcuA7aSim8/ivoV3iD4c5lKeXXWpg1+JYC9jYU5gyWIyYWR84H4hauyPmn7YW3jK8sBFVPsAQFVw03c5Mliv+Oa8Sx+o0T+voIheKrDeW2Mm26ypMTrKmMIYdnE1gyCD8J2ieQYdkAmR2aUGKhTxu7WMeBN4xC7ZgULbn6QO3tz3aY6ES9TXccoifd9B4EKaAZ5Bb5jWX/EZBMVCTUHLJbT+eNgmuWk4KVc2m+j0MiYXMrhNb0QqObhpfvZvTtR2BsI5UeAhcOhKJPcQFGRcQ/fwv88puqYZsDT6H+p0nFOR+9rxHG9FjYazQq7c5IIO+ARi6thBll3TCmnQRk2x93kIMvEVDtfU0I2cZP4N0i0L6ebzb+JV0yOZy46jMwpDxezPUjfmuu/d2qp/lQhk7hOIkVSKabCyFcPDPHrf/N/DV6YSYrSK+46Z40xXIkzORJE3p7uoi0CW7VDtWwJlZwULlXTxO17Ot2kQ+gfAMIBI5SM1j8RI7jD1v3oTLdg25up6wL6l2P+qvjdxsJ9EwAQMSRrAO67/o//2YBKA9VJfJt1tc0AOARQkUiy2/+/YIOn3EZwLM17q/fBAsUlrm4TIHYJJDFihP0sGQqgbtLEH95ht85G8rjnczy8gRNygJ+puH4JZcQvqXUuptdS4QNQ5VPN+eVRjm70sRJJrlYovtDyPRugkHPJtR4pFs6elRq8Un8waRMfqppxXvhR9nyczRuPc7Yvxmdtp7DIPVhRwYuQEDSe9IyaVjEKmLw18a9LPNi3B6sQCcBRsLraZNyX6BUbw2Ja3WpQceAP2NTy5NHsAr6+tSkekJMcqZH1SLRZ2BkT7WHN5uEeocwUpw6K0+haUdNQyybKVnGausm1RW/Kw5GCUPRB6rHxVMO044k5GX1eeG/0VbDkfweeYzqiThxUDtkvTE46rfPT3T/rrMH3D2Xp9k0KWv7KF2MFkDL0Spl/r6OhBJLIF7CvM7xEEyoGO7JHSnq4Bs+25A2MqFBQW04UtWR9k3DH1v2OjR6vYWLbl2Z8hngbQxwqjxP3o/fEnfEnzw==';
  const _INTEGRITY_HASH = '27cdbdfa9d4948b060eae748edef58072a43a6e14af25e46e22d81a92b0a698d';
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
