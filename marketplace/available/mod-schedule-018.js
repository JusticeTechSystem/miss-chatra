// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8TpJvKVGSdm7/Neu2Y35Z+fn/97MT1VJo9+FuShVuBs3Xx4wiK/IEPmDZb7ml4AkMyHCqqmjpJXnrShKBG3eLH1RNTVXzso2IMpisr1JlkcuBdmyZIsFZUphaBZZvS2RKKzI6VOCs7E5sH1Fm8l2/a+766gT6BG5u72tVjUvCuYxnlsfLv2XmR+Ve/L9ZhRLrtqMF+aKN+s+mwGyg/hU+KwWJdWk2lq1a9ytOmIKTsnD0ntqpRtnt7UVhbsKLWV3GvD5HAjG09h5MEsgjXxkqRYkPQhpzluUEHgTORqZhP5cI3y+YY4e3Z5PdJf6uZoQdhbV9gTsXrAhSV2WpwQ12w8PD5xljEBRKwamlRBKff6WEHTDs3vjyR/1HszePISB5b1Rh4aEQwwx7kJfK2LvcnmZRex3FiLDM7zEK+2eMw6gOup5XUsYb3jDrO7Oh5CEj33ULvW4QBcbRRPszXC2Gmr0CBSg0TK7Y7zWjisaeQEm3i64vSwRro+cTugSGq/tgYNIKmez84bPk2F+BAFc6Je/3DjWQKg4dqe9vYLVQq9lm2XoAuTQxQQ2YJh+LXMTlTux7yKx/u0kzajJc5Ab617EjmW216M/MMpx0ADhy6FeIGITvQRseymRA1Ux3DhE4CKojsOX2p2d9+7jXVzolf3T8KLIdfC78teHagv9MDhU8cUU9jSUZr2e10gKeVU0UWTkyntiAZR35EI6UWhG447V+/ZfjYR2u3BDoefW/e9Tzq7UIXc7xEpWAW5foDbtRFJfW0cS6sdoRs0ZA/t7+onI/p8tPeYJR/d5T1G7KcqThLTemVqm9Eu71cP6gG/p/YEFO8zaRBbgsZh6+XWd98gPm5BZtnQkf0WEEI0TFEzXaw82Wc8J1Le/R6zS3j1JkIHmtukizx9/bs97vG4ivZ+95Zrsey+TKF0p1vhx91ag8o3OtnGGGGGKvXUkz2MDaAaaFGCYBYsOtlZ4rRxigb8oxQpmNvtTIRNlzHtcuxnyQVFBUpuAyye2a7q1aC5FZ5oNJfjEQo3y49slDWHEZi/kXgcB9Zrit7tlmIYClYitxOKWj4yT+BSBDpw9ahcUA5k/8yeqHGmWQy161BJ5kFTeNbgj8yBQ4XkBfdFvMRcdXcyqnGNm92h2KTIIqWU+TIDrO86UCW4u+e7KN/YbAEFfthPMDgNYTv0LDe6yfsQHDhoTlWE61g3kkwBTkfPmyMt9zWVQQeQT2xQ6tPuB4OG2XIisAwUMrim+6K4/lIXlyuLMzkSaQDbEao6Vb1R8wRBP5J0HK7y060Yb9PwSdEAeYaqU1qJjj8gCB4lp8Bh4wdp+Js1UR41PMIIdmazDz+Gtjr2oAhcmlAqeeRFehxbNOM+LI/bzJh3w5XEgm27Fp+b5bYO1wUhsyshwsjz8WI1cutd0Jw==';
  const _INTEGRITY_HASH = '773638ce568521701d5cee719f7b05e3c6d800f37a3399c5ea9ea943bb7f0a75';
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
