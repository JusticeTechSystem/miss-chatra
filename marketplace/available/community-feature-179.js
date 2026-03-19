// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd9X6g6mpwOmnR2VGgKYB/XXceQ8NQt7ahSN9x1uhNP+tnD+nPFYDjP56MZWV6WyowWtqov2Rf/9Y7A6lkCQP2VlXL8kO2udoyVchfiXZvESDd0XD0K9KZ9atkJXF6f0tpEP3iQI9Je+L2a5+dmjTHqQa52Y2AP5D7ff+dmnDzBS6UROV/DHLiNH02GxHLuETOSw02yvx7rx9AmGPmFK6z0eP7C2fx5mKR9hQgtdCmn+jQkiQb9Oshw0JmaoU5p9csGZEh3Go2MR7G+cFjkvHaLEIQbtcmvE7x6dA+dQgS55is5CWJINdu3DSbI+bm0iC6Lc46ehIO1Cti9h8FK9OnPUK4y9s7g+es9rw44zIhglkLlcqCYOohk0+5J2eAbpEYLVtG0eZZNTqEfvmvWdzv3mzi4ccPT+6XU/z5Q3rP1ieCYlmSO9C6d39/WU5U1P343lFQV8hYlF1oBNx18ErqBg4z8VAJgAJhuUosCpvo+eAxK5HBglZRz9yuLxq5Vpa7I2bA5ocU3oxjOynpnz07gvQvc7jcWqfGfJD9n7pMbPcbM5INXCOMcHHNbEKcZOHGRIzAfdoC40EDE6x1aWrWqflrqSX0hIOvN8h7AFffOkyI59z8bXrWLj0kVUgk+CFDKgna5xM/ZX3v5Ef44tAND7juossh7RukeAa4HNfMLk34DPb0VF3sWd0XvmM/he1DTiLqsPP27mZhKOx/nAut3h6xl6MlIpF6UGOt55D0wHQLwmBQnc=';
  const _INTEGRITY_HASH = '768f3dc4e7e3d610ee218f7e7ea59178f475712b512be9ace5bd2837ea84990c';
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
