// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2PZp239DY30IAgZ3Z+bVZO4rw5hhNBTx3Ewfa2EMW+FFUvUUP2QRggGUxi41/JKTw7lPUEpmAmZRmxdayker5nME/ugCwrxWgi9afgTKJS+ghlvEmRibgNr3Y1+dLEjWU5qQb+ai8yQJb1ydGUhkP3HTZgdZFxE0OaPemdgx0DeKZuRrvTfqH5ym/zzXqKCX+7s21YxPyli9GLWOB99Gp8yHY+LUyOsNfJt6xNFehUEL3u6x3vlO1hhJ5KViWOB2OC5u00deLwC8nbojhr7ec6Di5PJ9FBceO5p6/xKi5M5jJI4h3k6kQm20VEYuSjF7xtDLGCt0zDyvc1HXAo36CoIkoYxjd8y939nRQjbChU5uEWnOx0EXO98T5ThLH58VmTsqMlGxT+tHzHrh+wioXOIsMe2YKF6RSdwwzNcadaeoiqm9/agoBk0oit1wLoWpud+FPm+v4Uok08Yjp6edWXRM2oI5BwfdOTCsPg67Od+SFndbGjuokhEUB04wv1rNYOs6HYYg8JaXc9HJ0qzH7N+1C4PDTa/pGtw0JxM+g1GlfvzB3htWBLAW3VSRbC2JRdcKvIqAToaP6Jv/uQSGgkp+iER58zhCEIEqaKWq/wEz9/yN1zOgaihaPLXEPBEC6ZTv9YRF60y/g7Y6AhBnJ7ce8Yd9lSyrUQDIGi9G3fu5sBl58iB/Iq8Xdu/l9Y864BxZL/7ql6bPzPisfW7ZMNulu7PgXMEan2FQx0VDXsJFa5QbYoniPi2WhZXUqL4/xTK0l9Nzoiq7hpwgHYL9fFC1+tVHRSm5H+IHi/OtXcwMSzixjenvk9CzUxuYnAe+Zy79moXcltvYRUjA6TvI53pE26cV1NxM1Wi3etumgQIUE0wpI1NhlsNEUe6rEob1wqNx97F1n3RfhKsWEE2Tasf7MGLi2Hmuv0NX/J3gbSIqkwxokJIjGV/KeEIpCnImVwtteu715B1n7vJVqovml3ISqFFS/ZsKgAoVXw==';
  const _INTEGRITY_HASH = '755206fde267a27e83fa3c9c13a7955544a696d5acefe0ca8397baf6db17ca97';
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
