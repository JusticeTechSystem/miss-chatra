// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rDpf3yIDinLgifF8CPZAJckz3nHXDPDNv2t4l1oy9xpRCtbCAgwtliC04/IlVSE1eE141Y6XtLgviuP0fDtCEbbnPJgglZw57qEhhCWRvjdqkjy9S6oGVz2jIdyvBv3VB6RkOkH4mSgXzjcBfV6iFzucptAH3NRH/QW7fEXTppnzPrRKnvmfd6A/v6y78wL7PYCoNVbpzzQyF0NAsLEL79uu6K5CpOYJoafCbVF3hilTUGaIw42KSDXBAHyJuYXBqf4C/UBbGkBGIqbbUJojsNZpwO84em7SR/OMG3gwptEKVIZnR9ghxQ9OuNIPeAEVRrd6wFWV9mhiDifszyArOFXHTe3/RwdjuB8U6vH80iH6VqltV6kNf3k1aHfIZjPfedvJYQTKbtMso1T97KpTfe1VUiGxcTfwkKd/3T33NeNV/13g3TWPe4HKMcat6qiGEAiySNhuoJKPgp4QjS9w+AjkXf7s4Lq4MeYmUWrnPtBDaFdBqOdZFvt0EYP6xbBBM1acSlKSkxTqW13pp1RS+m+5R1dGxatKK7xLzozEwNu8YpYThMtx14tujleUbQ/A2XgQEZdCXS1xh5+jagTodNXumm7zviI6dvlU46VYNGuf8CmfJM//tVjzaBDuI390NhZJXDtFUVpK6v2ABvuBFbRoUx51a2X6A4JMTG2lLVXM611T4rsoNQIkizYbUmaMZI4gbra2bSRe7tWxelnz20thNzIkY4/MnZmkc/48m1vdYcw=';
  const _INTEGRITY_HASH = '283a9c7880746034439bb9751d28a00c1c104974a5fabba7841658d93243e497';
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
