// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zjjnJDw8uAsojM7ZBEJlwLPlYVO5lviRABREz4tkgdgS1pqfV82wQ1EuMye2PIAfjjCcO0kduIWnYeKxSDnLxLPBU8kpT8/4KNO2+8fl8CLxhCuwpAA66ldyMfEkni4HxMPWPe/yw7hiGQyoLUlOLA0sIMudQGl4i9mFyhRWdA7Rj+7EHvhYTsbgfBcVK4bBAuV1N4l6Skck3lwP1ocDDLnzMHxLGyd5U1zBdT6K72lI4O2Czt7NieWZkGFd6OusMd/so+9C65V/VOdnffoZK98nUIZCXzFBp0m2PqUf3m1rrz/lNdKgGxP0v0JaM2UXD9FbxDj4lCqY5D2kqkpoE6JPXrZwFGlS9XIVXcJ6LXDe8OwDrr4XdncgAGkuQx7nxH+o9pDj8hEQcTO3M7Crlgd6/xw7bZOgdIzdn4kEyGAGLcYPuZ2jo72GM5j5FO1XXyBSnDgghUwiS3Ok9MeVMv3ApbauvLRI+HyO7KQid3g0yqLwkF0npohowySYyV27F7NJsBDdgH+9tU5Hf+IcLqzaPpEvchmWwRtW8LTKNzzL5xY7T0s4sg6jgnBRRpzZ8ZQ3HU7ZCSCYIssFQnjnd7JEsRs9ZJwwzFe9H/fbaV62S66JpmM6Cup4GzY/WNDSTYQ85VnmA21X9wuXa3PoghqvK/sbw7PNmZ7UkKTYVqutf+Qx32Swrwv1+Zq06zGvZdLY85UJeGPk8vhxe8ZIx82fCKnqQ1DX1W/JDGyJENij5iCQk2bgUgvpyeJeaWa8TNwdghZjh3EOjRUfRy5GvhjbaLlvtEAeXb+ZrWVJT6UWm2IXTBTFPRFGGbs4oPrfuVjl6ZVh/ajGXrOOdT3QYgDyry8EvkN52mmlko7dBJX7cLLcH+EZiypU9un2/E67iGNedoJZY7uZlcXp22iVOg67QJ01wVnWT46F7QMmNjRktj7N5d9bLjM1eIbOEWi8oY+5QvZ+GJkJAn6qPn0sqmuPA4/nedu3pRlxXqRwz3JG9coC88nm3iD7FN5cWcfB21ZRMRUUNVVCFUJiITvgV6B0iOnIKo6J+pBw1fivzraQi64buZX67smjncLbR2KIvOKiNYJkOBHFo8lItZoPM6PR+m3f/99WKKwyMt3U4zzaVGOUx0M40NdIAz9SIRPc3xqqIKNqeOMlNwhI3R21NIS9DmdyIu/xU6Rj7qBqB2yRfd1ssgpHjIZkzb5Q/4iDl7ewZg==';
  const _INTEGRITY_HASH = '59e3e4f81ad544a00e2f0ae5e36297fed588195ddeec65e11ca4529d43e7053b';
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
