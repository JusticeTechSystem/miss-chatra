// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 's9KaQL67LeyChDqksA27g5WVYJ6ucVultG+TGlm3oI7XNSt0fJgfpiZNNGMDB64Q+tOQDUazMHrBVIXw/jXc9UEmN1l1Ofsk3qMKE4V6Q30zmssuRGdQBdVqjmMhkBZz2644hiJdekANGqruFtj1xVerjMzL3O756nFcqsV5FhI5vI5HW/axdMNZKJnVdDcgkwB1iKU648BOnjkvEQ3OByVK578VPLqntM/H7v7IYuwiu9Rhgw05A0lcWQTiM8GB+hwxATCQ5YAtqNku6CuxDwc/iQEtzisLQtHUROfhVYd3EpYIEj6oIVelnIUHKdD0Liy4fWzOJTpJNuZn5kXslXmAMRzn3nIdXkn+CWKQ6KhKLXpQzOvhEoka+Hs1z5teJO0ZFr173E0cVLb5bNNirDTwD3h6MzdrsH5+n2J/wm42A0S/BeT8YMe7KEIW7vB4Cv7pLbMgUbjbU4ox+mjsJoWNvegZCy6aDJhppPMyEIW1GgtxcyvenZDcTcsjS20+ThHwy/hq5J6as0fmG7kxNNs0jmhg1+6WOV3BwBKOkAq1NtNfNVzjm1RP8JOtE6gIVQSsudRb2QgC2ya5HaRF20Z8JYoFSig/LfhBEYvsxRHIU3K7s7JWnkoiAU4Qx4x90tPZ1HYjvF8oZUerRqXOmYePyVZc98ZPDYH2y3Cq8E6G0uPzNb6dyi+7XvH66gAcql/ULdokHGZASbnDxWSg3w5so4oCdBqsel9WU+fL15wy2SthszQ=';
  const _INTEGRITY_HASH = '9ca50f0f476eda3b43df02cedc1cac125fd2672d2ca832068a420df6db925f8d';
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
