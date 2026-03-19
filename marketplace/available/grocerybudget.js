// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JlNw7Q1/alBthHvjPM1uP0jBpkcaKHwPyrhr6gBfpHb9nkyh2GPH3QZTJQKj6YIE5NCS3yClFmFAWczmNQoyk4k4sFv25QgjMocHfGhmRXiBdsHf6bD3TAJxzgSmwJIPVKyla4HBU35MHvOgkr4Tb5TqCHVGjgcTsvkQl1n4Q91m1pONqZ0CqeyM8snU0pWIrcuMwCAw5qq/cMkMq4lKezrdRMvE0YDLCYne4hodsOgKskrO/xQzEm5lUGVo1DtdWrrj/NYbB6X++d2PMEL0H6RMoSGIcUAYY8rpOXJ4aTaD9mHn7vt25piS9tNKn3EokRew8Sr/zGnE7miflJvFH1iIVclIk1Uk2TDUmzPPFUZEFUR0pIuDPy9Xe9h/xDTWJSBHayQOcPbzlh368m6a7DA0WgpUEI0j9SiFivsKGMLFkaEXfKdCRTpx7zs0U8JgUeOia/wUje7Zz8lcjeIyKqXb1JscPBUwXRwHuk32xXd0p8DQPH2oFHj9frQX0PtqI5hilsts22TZqy6oDvzUGLoZgDJs70x5roP02+RS4N8SGfBWhNhtT9VMbodUBEZIhILdNlm9V1rH7OVEtagdquJjhMd6bRIWqFFSgcLyfr0VaXSAm8MtlwXj+Z7u9SOXdDCq8jRMMWystET4Aw6UDX/6j50OsJNnIm8/0Dd2aHF3tj4UNVtHWFC9bGfxj3bFIv/3ySoatxu5UzTRZ0eY/RvI7thYfZvVtRJUphSR8vxFkRNLQRMm/x2kDlhYtuLA7S/XdDsj4aJ37Q/f3NoHxq7lRh3sBEVDQY8yxXUk4lKdUKXYrcJEjuczk2az0y92IPeLPgwhUokjVM2NJJNSoqtRAlhAo0gluP4Amf6GhU0cr+2+5wUeukMFJLOnPEJYkq/SYzCx6eaSECM5l181QI+Fl5ZMBAN8saxlheAqpPk3D1mTOpPptfRWFQlXLeaSOC+rn0Ck+VN5Nwk9SCF5FHbSWFdbRuR9hzevUS0ag7p4GD973zJ2oYLfOOA+kV8cbB/eohcaDfWauyE1hDETRN0/tKyO+iRs69A65AF9t2junoJaXAIooNJZkMJ4lSoUB4za2hchsMjYsdRQh5Wo0bK0Z6GOd0JB10X+9ZhHK1tWBAeemuk4qtyngxQ8zqm2cKzSElXYNsnJ8ymp/lLjw4RqLvoxpyOB3U48m7qkfJcR9Ul6zMMiRhbbYpMGNUXduZFA9oCOAazovg==';
  const _INTEGRITY_HASH = '715ddd8de545927820ed906ac12f9a91db184160cdbd67cdceb6383a6ea53ee3';
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
