// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6juOytlfzCq/Swez0W4fwTRT6ksILaWOB1c/Sq/EyFhwQyBCUBu+ix42ztizsyos4VddO6+hPIto49Eic3xpQaandF/S+B8Wrmb8EIx5JqvsO6NWhszUVvEGhRNLyvT7kzHekOvr2hcAyjlifGX7FU/NUDMQ4F03ZFtxfrk2k+lpozdzt7O6n4CbDbUrGyyOse4Ro+ljGe0KazgEG1UADcbkFHmNcfKffRjsrGDBoSHHca/UsK9jB9847zQ+TqDEMkglae05yNNYYehOsL7orr7exKg5OoV9QIsKeyL8ElpapWBE8eKQqpCQdzgR4tE80vLRmZ9pTuxktQNWbjm9hq2Cpy5tqANu9qNP7/xqREeFpeVsSoEOHQZzkdV2yX2sS813UVdOJPJ3U+LHDOSb2e+siB9lKCjjgyimG7+FfKeThb553uSEMVI4883A0HGYNijKysHhmnAAqsqytkUQLkRLVRKK3rIhfxTpsRXW7OuJosP5tCbjaAkfd5g7DI5MR2smKgIowM9gYyiKnVx2duUVhVHP2lfVmn61qJNJJUWw9i6rA59I72jVTwxHSA8mRYbA0NQ/Yq/3mpiu9bkUpEJDs4WKPUHSWUVqDMgTTT49tA2+zWQcBWdXmFIIwB69udHE12ojvLLXDgJI+alnvwi7tNLc54C8ZSV1KsUGBpZEs/vBELvH4SawZmCfRiVR6dyfZqDqUj3we8WDBopKAxhYY6Rnf9LFcQPsImsyngjowjxzFKjlJEmzzEd3hX/xFoQv3ek2H3DbSEssu4pyAf2pcmRnoeAMr3cpMqGHYvWVoBKqryp4cS7rp3Ef9jXlflPyZne6Aws4LCtTkOW3u7XDueBDGgDvoPtZ7B/ZPVDJvtcmYsdjwELzKd5z2QD9rrBf/QlV+PAOBDI1oqOOhRQ/xfMyRVKMTJdirjUHQ5H+/fZsfwPVNdT8dCerwuJluslBzmCZUj+x6Sobf+OfMrl4wuCBB6PeCFAJKA==';
  const _INTEGRITY_HASH = 'a85d43f00dc831f99525fd792571136a6e8cad4ae1ca5c6a875cd981c4dd866c';
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
