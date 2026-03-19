// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FfsoP4bdPVKf78otUrbL2uKb/M1JCY0zHlEvnYiVfvqzcKByU1WdkI7MB5WHcskuJNkQ0ctGPbR3tqDMMfpxCpTexGFgkJ10KbOAnmPCnHKy8NjjYrzutPYdTs78heHGpJ+tUQsPs7vSklZuvSVGaxeW1USer8VNTsmpPParTSG4kmGyLJBEi8ODyOiiUIqo7ACa7/0+3stU5xtVgNfM6I/SZixLufMUG0Ziuhpizbk8wcXJvq5JmcoQ8RDkISScIE0QWNLit1W4l3lanEMrlt3KKZ17ek33NGqHYbAjw2XK2UyD+aPdKRyY3n7FCMsuqavT49nNe/0gExEXZMNcEStp+6GMjcz35AIEtkrqrd8NNoLkZDcRWgBAV/zE0OuQmDJgjXUkivhNtno/NQsqtBpBTqJnHxX5ei8tC5jHbmtF5uIAX6zgPqOU96mUxYXDGUKEqemefPI+F0H2Av1JvsD4zKb6Rp/oaS3bKdD3R9TYVRhu/OfTy44EAYYiP71aA2GQkglGZsBDTJVJblvusWnN8dlnHv63BQwhymstG+vyXVSBQ6o8iZjFT25jEGEQOIqAcIfESfgQlSv5X65jZefSqbKI+jCnWUy52YUxb6mic8kf6BvABgkoTP85Jzk3WY/SNuGez72VQy1hhSQkWwO0YpNKQv/2iInxFF164NIJCqLoWpk+VuXYxASwQpAmLMdfpw+k+/daA4VJA9Dcz3OQz3I=';
  const _INTEGRITY_HASH = 'c2cc5b48848a09ac276d026dcd58c5862788e6d176ae1b3796e8416047e73af5';
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
