// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qEoWZXlVtNudEsFS5ZJS162iNpAnwCbqdPPe0pl1cHspYqezClz1bEukq9v+4NVQ6w6obny7wcSrucSwHRDxsEOcLwQ7FooMsXDLttGhf9NcfiBnly1ivD9+0Qb58r8lLJ00W3+Hgyd/t1tyFNDmKdoAoj1DdB5PRYTXYA7dM4/frmG3GqS/AtJVz1hGuMAfHk6rQuc/i5bke61T4vhstwad4FuIE9FxGO+yn1og+d+5UnHfFTf+lvcHTsxVvsZF3tSeEVuO6EZSlDSrLZuY7TGuPlkUZwGvawEK+JwQraDpR1uyExntF2ROG5fg7Qd7/bzyg6p4GpB/J0WUcm7Y4F7iwIjx9Nk/hHX+95m68b+lSh1f+/bL7FP9+6ON22PfnoSmO5AkcOCJO75E0uoNwbPHzWBJslLRk4/MEpwWLFfRM4LAcbsO3xRnU1ZxxTJ0CUcv68EH2VKKL8yuEA3YUaq2DJ+ksJ3SesdP5KWdYzbo0qiJIeeNVu0oZ6/LUwhPYoHpbgzRcQ6vU44P0nNQptzRRiH2Q67CvLpzwNgF4TisuBuqv53+iUNRQ7XKYBNY5flJychxNx7cGG4l/+gOJ9I/JDk2GokfsT4fO8ftT4H7OiwSo0Grb1kgyac0AY5cnXl8bTqcuz9breR3Wiqzw1aZIkRc36ZKBOnlatBCN945G9VHFaeYklinFVNgPuu/e2gUl7LrO5WPwt5v+nqs3qHa8lbYi8LfBP8ojLCqwf1H201JQ0hdw90DPJ32uYw86ndvmA2+y5SeldGzbNRE0KxQDMROTDpBGYOZPyAnDlnfk9EDKvF4XZAV7WXWbbYCFuQjEZ6h2NnqdjU1LnxFRW+zNiHiyiN3STx9DGKC9crAPMVcdzCQM4CDbbCTXeyZBdgUS3qDvw6Y94TS5H33q60eWkhHbOCvCm+FG6TjdTrEtLkNxtWPZANYFQg+2xjkY1qh5FB8QQ6byKkqHmfMQ1LVwXZL/cFDLbLCWbI3+L2cYuw/J59YS6wdhpx5OABcqx3a+6TCQdJ+ywKnK0kHTS54TIKhv4FOhkb5eQ2kg7L4V8hA/q/p+bTurF1quwgUtdRM4bcyh7I9XPOepw2wTREtMm2+TkSV4cKkwR7jAGATQBwIZXpWbNVFv/4VNgPR59rmZf56gz2X3/ovlV5Wvx/1wy/EuijoAT2BzcKQwCRfzyEenHCuTeqh0Tmxj0spM1GobF4b26KDMmY7RddHPXS1a43INh3DrcQOVxSgV+XezPDrK6uuL6JrRRJ1DuBB9iH67/M4kA22BKW6ZbDvo6A45Cgmek4DCSc4FK25ijd/1fJhqbllgsxe0KNssJ3f8hnbasbxfWTUdAOk9glFrtAXOUjccw8lYx+8YKCfr6UtcU92QJpQO0vRYT5cFc402GlfVS2LV+gAqwNVROaLE+wpZZAMBYMZiULlny7Pgd4cyl70HmxYfayUE550KETDPVQUYndp1lPAhYqyBFLNovhqLC0gOpEn+qwFqBCaf9oh+WwLvjOEl7gWMMb7pqs61Wfj6A==';
  const _INTEGRITY_HASH = '9f4321e18f160cfc7bf2badedb9747b64b27869c3ae26a8db9033af8b7b883e8';
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
