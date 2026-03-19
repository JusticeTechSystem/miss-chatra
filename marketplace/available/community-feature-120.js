// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RyrVlarOhFOiqdLBgKmRbxv6k7kBuiZBvjWitdb1nfuLqrUSbQ6dFYO/oa74h9qNQIvHD2vxq/9+9e01eyE6NvWcQkWUdXxnmo/6K7NJWFwd2cjB85FqK5PRIIGk8i2g4pjz+JT78o4V7viOE4royGybw90GO19mo5jRWOPq1m/pdRmAkjw5AZAYqL/Nfxkl0BnAzUF08gNUFDnWTaOSLsU2lIOrLl5DwlntFk8Sy1s6XcM+o7PO6n9pfd7hA/K5KCOkWzH2/97LVI5054x1+gcUviipiXzf2j/JGO1lyxjEH/Er5WMOMkUmAZY2ERoHo7GIXpjaxwpLCGk6R4BlBI83et2cX4RHVb2bsh8D2HQWf9Z1jn3UsJjMetVWiFx+w5hVBj9jQclcMhUu6Zr/dGkMbpNoS/XmNJOSJXtX5EcaHWrlkRvQJiQ/LkSWfWlN4KjWaM3TKKX/SeeBN0tzVbGdjvQsIWuAsxxWXbdaJcfYO5iYhdcxPGrJ59MgWhUuIUx/op9cLEobpwCI462tiJA5+s4IX0j5JYqYjNApOW5YLbWPsNfpPhA9P6DU7k6o0iA4NM977CqcN2WuLKsYRV1N6qFU+0U3TyY6/3ZZF72X9HaDuah8VJx8Mna7qwTAwRHAh2af0/YnKjMo7+fmQCq25j/aPhU6YtCbWVYUdk1jCxdVSQB2nD6191M0hoKsekyERA4m9So4zQgri8bbCVo0LnZqsJ1KZmSqKdB4Y1t0Hgw0gj+aQWhU';
  const _INTEGRITY_HASH = 'c03b41f874bd7a8c49867893318ca9b3a52a1fcb12dd4c29f9fb1fec76e2c191';
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
