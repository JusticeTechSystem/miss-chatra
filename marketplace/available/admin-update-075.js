// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'si+zNFvlUdSfjv1TqIV1dEOe9z9AZeevED/6SWLs2qL8q4XUqiK+acKRdWLA4zN3PxnA7/pVGKZTNQ1mSUQyA72hwWoYzpPTvYQjkCVO/XYiyrpPzL3oTzILO+AE315Sf8jI0mt7T6Ar0ELmkm9haW2QV5E7FVa5rEhFPetzzyeaL7IDpDHmyn/PNt55+eG7uW0WVaVeL6M9cljunhZtOGPZE4Z0zooPZmTslOE3N6sj3JJ6A77XoCzY/6wsmjZ/oPWyeJ2MqHWjURFa5DTbpbwLqZ0hQJjTplNb9fVpIYCwE9QqC59oNTKbCrZyEfc/9lRde9xIbq8fguR/AItUILTvUX405jW/RLVTxmjSVX3P5if7OwoDknFIOuOcfsjSasbEf/EJlO8E2vqDH25Ona1Vr/VroQRKq3rfR5WPtlMlESapXb/IYs4a4VOFEk/keAgH4ZQixIkmn7E82uLixvo2118kfsA9/KStQ78VDYvZXmPGuSHlfXMpSubS6kwr/qMd5O0kmYCcQ3eaDH3x9KHmUQYe+ggkGsRJbiGNCt45fm5aGwPU+d+vumDq+EIktxfxbJ9gH5z+uwSWIdr+aPF8mY+7T498W7wuAUzNn/NuILFmpNoKBMOHQ6KNpj1/HNqL+z4lCDZiJCNnv+b6ovr1Et63WOviaHLdDrjFsqtrZdub+anZ/bl0hTNkoW8+ZERyWN93Kt4fHMo0ORUKzwE+dhXuN2/WW7vzbGcIAEiybFjz8lsepb0dS355PDzIHX1PCwZHqLovoaWsotkGZE/60DtC7xQD3ODI9u+DnN00Ixspneg8jK52Jxw9Gz98VgTvRyJbXJMv8LSBadkW6UXlerFpfMJ/5vef9EKjidSmsl3ki7T3on4c3Ho6v4rJVVLgx3tASwW/1CWDNn0wtdl6ZkCBnp6MjwFwtyVifi/5+lHxX4Pg9YApCKSZ798wkoFZ2c9zz93++afOxeOhk1ceqJPXcBEYrXcjzQLbaKM1nRionWw33+4gmj7G';
  const _INTEGRITY_HASH = '662901fbc6fac7e4e75770f69617123ddb3192f0c6aef0209674513ff2cc1624';
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
