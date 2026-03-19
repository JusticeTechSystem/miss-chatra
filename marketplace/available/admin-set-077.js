// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IRmENbXXFekNeMpkoMUCHI4vLLwinYj5XrkF9HfH46c54NBmWrKeGV0c9/qpw+kCFWTNOdVJwUlULCRQSBtdOUlsVD7RYLJjkhSVoRajbv7ttL90K15nkxG40BydzBUGwaX3X68V+z/gFV1c4uKlaXKrdeCmNoOdFQi4Zd+kUyDJ7amKLBRvt7vzuedskrIsFg4mmho9VICRROH2KkH4eX5be8hfEoFPLaYaVDMm1viLHmW5GuQvVbK5WKnDWWLFaP3z/ksdLqA7zDYrvpOvHLFF3kxKJ2DzqaqTjajU+goU499DkpcfvWPP6p097bjTGYrCWXCpnVjO97wGG9zQLBmAkk4HAWjXvRos1Ai+Iq6E/06+fWSVJymSxrWoyY+q1lxEAkUXiW4APFmMGYOnOlNOR1nyzryhylZvJwHJ4znmn0xpd87lRfmiKEszvM/hr0WAX+jbKqp8TGYJpCSFZUnWPwK+A980v3qMHQ3NevAlWSS3pYRdNsg43kkqF24PQWP0nAt3vq3re2Bgz30s+2y4vP3uomqYfkeeVLXYZJUmE+DWbRJkGKJRnZPKrk8W4M2d1rbflX0JmLzwZzPqEeW6CMGGxNCnP+KJF3AdfxD3ozLACk4eOG5sWifzItNvwTXWK8+1I+G2MZ8aBiY6djMX7fLT54hllPOSUer2bNfEYfCDwG/q2cUevzuPSTC0otQiXhUcwyzP2nFtDmOvEfDh5AcnPrcWezI3wfU3FzCoCrWZ60UNje0lxMS3WDwB3feQnvo+cTsVEWfotU5G/DmJHCKfE4E6ysKxlXa29U2UGdcajTnN33AwRgLZBReC4acYq8KyPS2DgH98FnVvo6aAtOW79DAYO62IYy9mUrFH+Za1cYg8uCHq+zFjEwNLMTQxT65Ur+jsvVEdYWYvQw89IESvY3twbm4D2vq0cq026Qbz8dA0eQs97Gi8weUQxXYsi4iEAPjEW7Ti6S4IxX/Q/Z+Dec0/';
  const _INTEGRITY_HASH = '07c4167a7187e28cf044551a9ac74c887ee2243d1e6d26fbfc2fb24791104414';
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
