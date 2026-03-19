// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dDRtbUq9B4OHjDM3Tqa8J0mz7K90foC7Ai4vd4Qvz3m7ACbN/IoY6kFltPRyIgZFBZYDz7bSMjRK5J4UqGiiytiO6Gm2oxrfy+wbFnt8To3o8u5BUONUwqZ3ZIuOqfEoj88RAtwVbfkf7Hm6wWDIuswTQyDeVeBEEi2MaBqxzmKJsQzduyA3opnyVyI29IgPJgOEKKHnUO5rMxaFU9D42ZoHWHg6j2841+i2N5XKqUJlncmKaa/o0ZFPvrl1ZiWIE6AwC1uvpZAAzk8wMsaPbR5bmG5A7cnyJNQOMUBwKaj1TVK9kyp4aKAdPWV6d5nI0Dpkrx1Rly0MoFPyqt7KbiHTg1GtEz9bpH+RScpqMMIj8qFuy4QkdBIAwscZoOlb+PNDNgygE0WP5ccGe2yg7GT9EIGjLEOk3zUsMbG8FDYcrk/nOfkIqGOhMoU1aTEQkGzhNMEKpGYMUys3C4ea5hG/wEA3rtxT+2WQbaJ/ymx3dgo+obahDfUvTU3Y6RuaOlqlzd87am/umgzdgEfTz6UM+btL3xt+ikcOhKa3O5J56JHqzqe/gaMA1yvKUakGLKurCaMz+V7CDVqyyV3kUh1YnLM4v4QGGUz1bQRqqsXAQ1FtQq8Ib+zhxMPMHNEDmQby1+z0qTMd2gPSL05VXqLaXB3z+AFzuY0nThA+juQFQVUk3ssqDHHvRuj2fUrzRADt7QZ9fV1SwHe5FF3TrMj/+FDRY1+ySGdqucnJ8TxUBRhLUzzQ90oRDEyqhqxwP3/F0ZS7IbeaLyn0g4z9zcfRyQHH182ME8osfkcO6XaIeF3DCFlezQGHJ4wDlikwoON97n3waZ3Lc/3+dISXAy77nh6j6DzpW2qwf0z5MgIAXIUokLxCLkKTNGxkRSbwfBHW6wTgGqd+wNi5aB4cWttRXhrU0Gc3ZYyPhPLB2FBnu+tBnC31ng==';
  const _INTEGRITY_HASH = '9315876cc7752711060a4b9caa9dfd35a498a7c0dc4b4361011731511daf1a3c';
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
