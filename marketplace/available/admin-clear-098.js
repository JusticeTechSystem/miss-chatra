// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6LN0psk0jzUcz/MxCPkzK1KCgNAv1C38RfG1MN20srW1yklp0fRqgZYv5UBJOywW5EUOnlPkFuZYhgngMpl3mAnXeZgzAXVO/QwsJpF3jFLUuujm8+QcNW4eL/d6MdxacUApZZahdIYIEL7OraXgOx6nbuITxzxLuZ+swWk7ilsU++msXjqV2t33AKrkk0bXFsi93+iaDNbjYtLCdchWKoolLwu4d8KI7Onwbij0LsIAYoUnMHhIu/wcHyeiFPjKYkaN0tKRMW6oPSWA3vaCBAZYo6reW57aC5d2yOgDSlZH52xL+n9w1eDBmwOwt95uoqOQdbGcWOn3qMqlKiQ39QKS2qMiKM5btg2QyFgfhI0dP4qgrHZf2R6QVXnZFmNCnvCHS+btqQzOyap+Z9GaqqZoVIjIjKSAuq48fH7ceKGgPuxuz2ZPbJlXnC4PZ/6zpqrrMKAzV8y6YWS9IX3+b1hrRO92gP0RNS9C3WaIBXEUWDTUOCisdA4KR2UPhxhTWiNhhYXfp0SKXBPYp1OdVQgzceEH21aLYXLY+A9wIkLPWlJP1ZDGId4Nr0wpH+aVCO4meG0XJNMLEy09JxY7TlwCSXetcO+kGzGX3q2oMHvblphyT8r8puwT9b5hCoZ7vVzVBPOxcYB1w3XLoXpztXpE/wLbNZBivE/8Ij8YbW3AdGdYf+m7PD0nucB8RnymeMkQ4DZsO1+OVHSxSDnvly2gPER9BZZcmdzJk5OhtAFoNFJzBNIjK4yocJ2Tw+SNeYyXyk+v0ikqraO4vlTSMzjqV+kMH1ELuouS+zE1gzzfVp6FQ3qdCCHQFO7xX43PBuhvXaxtcSVM5IAhAFG4jXtJ5h+Bul1IUKZZqqGnnVB2X12uYrkh1bRw3DOC0KOuDpQ17kjKe2vzK7P+zUPvLpLkR8UlE+P8GcCDVq6yLHlb3yB2cFuhv6XAe8NBs0Pno+ydwS06EpT4EwumzpgqClHAjLqona/Ro4kYLrTliEZW7971SH0=';
  const _INTEGRITY_HASH = '7c17a637d6fe20a229dbde779af4ccb4876f9b163272ad8fa72a0c1ea347767f';
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
