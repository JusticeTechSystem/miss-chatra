// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yq/CSDj8jxQJuIKTuylU6vnFBAoTb/to9BGKA3r3ZhuBofZWkMP45n9nAYT17CAm9OA0MEE1LUpF3Wbe3Uh65sqqMlfGcy1fZF4CjJEa6YIjdUDumugUWWtlluDaT8JYiPgtle/uwN21loWvfcfM+fxxVe0zXL59AhNbVCkrUfCN1biEu6trqhV3dh5MxzNUQoYDZU09DAPICdiaxHAqO6nUOPrcz5tEauchLeydsjn7yx+bEbvBh5SRnMxl9ujwF3kCNl5oKZ9qACaNecCVqyfJlWkzodFbMTFmB0DEaaLqq5iHWXXdnrNUfhRUAzI810R8bAp+oPN3/1U1tO23gY92PhVf6CXnstPowv6tlAG/jxBLREuSX3hyd/5bFZQQ1z3vu6tOnAWttt1Df/XbAmLe2Tg7hTuyvEt1IskVuVFuMDGqOz7sAuguzcu6dFvJYRE1wBPqiXZZY+VLh09NLpimU+mNWax/qQyW5vUWBZHcrKnBMfg8ffwUrrDZFwcnYrNcH1YSOK5DMXMgIw+NkVC9o/GeNbZCmiSFukM5VnJhEs6EqODr9a/hFMud7CAwTmlc2VZonUAsaFpgUOfRNc4eLR/kLMKPv8dlyRmI5/qV3eUnK+Gds7gwEK7DJ5hIHDyANacYui+dmIqsIU5C4zNkSpyIcqdARgjvlw4hsNVhWyNT9ixJNGEjr91drgmngfx9OOYfpG5PGga9il1+Ns/aA1OwjJEkoRJCx/BaoLqzxYFIAEM17ezpxqQtmGd/URVppPfVMxhr5ZpSN9NNxX2uPwe/wlWJ30XKI6v0uXrBrhPCViUjxmfq3X70pKfnN3axC905LEhW/zQf08bUN8LwydpSelYhzi8xQmc6wFZp4L3wmIknDBmUnXF2VrcY/Crr9WIHPnEYOtM2HtipiOMuI+zx2QYe7hVW+PWc77CkSOQVlRHdq59tlgWzrsNI8dUoZpF34+4uxhAaJbxm5vf7A6rcufWCvULJUoP/Bh2FK9tr8T1/F9jpvkJ7EkYdyLJBaEXmvUdsnJ08y4kr4zkYMZAkH/O4YYY9Tq3bn7blDFdlgcDfAfuflT2bOqdMEt82u8BU4hyg6nqtMFO2DUR4gAvWOQ0zOgoS4Ba0ylnDl+1x0yNWcrqhqrgtdfbKwZfrpKEOwAY06cQtEe3JzK6ufSmM7IzeEknD5LTjmt3PukHHMP6eLSq8PsbkumqoDZtceVEqf4Y6WzwePSALzLvkABW99B5JWMqCfbcjB4qnYSQPtCe1YctTpXb86eAtHuCOlvKFO6JcqVEuk1liIpEgnpmJv1QqxHNzrgHFcpum8CDqXw4qtZ/Z/JZz7PxV9ox4LqX5jguzPg==';
  const _INTEGRITY_HASH = '368d22762d468e4cea1d3a5a11f2945cd5dab0e8468bf0dfa29f0c00b2e24118';
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
