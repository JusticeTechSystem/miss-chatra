// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/rG6+qkWW1GoPy5szK16toz5sXkYhjfpQT1pEbYoHN7y8d++rvFAqCUT3Zpdaw91DfOz8a+/BRZMsh+5du0+ClLHV+YnQTWouxbHn1a52Aeu1xySrEq1PEU2VBpnfOCQEIx5oSmLjcqdY6LlZtLwwAvOEg9ng1RNpRgUdEKuQW1lDLNk+OH1MAhzBfKRwbUMXeqcZHJZuGJ1eMF6iuQz2HpFokJTkQvad9e2oXIJLc49kmaeWNFpuSz3QbkSAxZkkgcY6KLfNvSiEqR8XTxW77SwwOY7nJoHmiNNLFPeQyLEefu6aM9jFVPFmXn3b6Yuq3wUmAGPgOAv1ZUpQB0cfIMTTUpAVlL5Fg2Qq6mj5HrX6bVudBkWA2vkz8v5akxPkOMMGUTW524Ms3nrOg4Ozi67UGOgYP1pnNcKXWLK+mAniFB9hrzDoFBSo8WSBL1l6xIqftAC/1711zzgh5+cOP8xWLHpufdh/SG1H7treYGdfcPtsRl2oc+lmVe1fwyjg6CR/thKGJv9eYI2sHFlR7fLLCAjUP2aoa9S7XyDrMp8CXy3lMx+cKgIzVADoDTt+aJH05ofcFALyh2jzvIiA+6gvAmlIMzYShLoIOu8f/dQ1y6RNb4epjMi3bywMByYsLU5kwpLezL3+4uyoYsEUAp7Zbs7HdwRbOwPjSj0rkdg+imEhCs+Aew9ZT5saWGGqwPPzWF6OBsRnL3cSNwV6e+bzr8HLre7rH8SZ34l0A7N9VUKo2/1H9546bx8fHJvLdZ5Itw0cByhIBlZq83Zn6A7ErcP2bXJcpnjA0XDdMWS9/pmjQbXZpwP38lHPsbBTlJLhfi2RRoSVLqg7ZKUkkAv67dxwv5g2oRNAHQVQP3ZMfi01d/uAXSkhfi7z1cA+5AIzjaDTLjPmzm3cydtOcyJM698ff5cCrfEvlfnIgnMRVxWvbcm2Ad0GEh8ycu4hduB75tHT/qySyu8/TBtr/o9I4AoUOvUBU36v/79LW66EjiON1vOhNkfOJ/3BEwOSKqwN0oD7vKn5K1J4dmlCOWB8EHccr+bPvUM2Ved0HPbBZ1gBVIfp133J+JPnJbZbEQw4TukWCVF9onwjqQ/4VnndOV81jE6SjVv/KBjQAi7JjDHV1BC19hEZLkyEeptnZAAW2VHzrrBiFwpc2wOHp/58H/6dPwiPzSl8RPDbixEbnssmT7FAoQeHuM2zzJZz3JYdNh+6WKgUFjpTSUcIBb5DZBnjB8IcEk0lNNukaicaaUW4aK7+XH6vdcUEmEvkl7cFPVkVFMd5lF/ff8Yfhxui04kRKrEWBWarjdhl72AqVpGR07i9x0c3WppPhjXzcjlMfbmw/7mJ+NOQDvHxac3WUoNQmtF/oBs3DFOFnJXdOI=';
  const _INTEGRITY_HASH = 'eef4cf0e67663375c2a059f58f9790a57d25a7e898d4f21d1b6878dd87c9481d';
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
