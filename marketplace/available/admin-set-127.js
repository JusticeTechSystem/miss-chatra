// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qQ/iv27a5dRrkMm9WFiwjJifGeg5siJFBGHcZbV16vbjTQw/tAhmKXA8d5Bsd42/p84otT663afvSFECQ6qHEKxdeMb2ztFtEF+D7ZRBEmqqsC1hk2bdwYQl39CTdl5OBB/HVeXM9UfmDxqcFzmQxUXyMeEG2QJ+Rvzc3tqAE5sIIq6N/r7PhQpePWDBZH4FDH9WBe47jTDRniJTeAJM2ZMppfbG1x3IoMhKa9PiACJ/Rv45GTEQyNfrRsZQiklpUtX8uf+14QbZPSP6Bllyd/7S82j/ohUmNEYxBgH/lB7Jfz3x6j3efxTwzqyf9nzCuhvY1KX7OzWKOILGk+aBV1nzxefBfG+xWkICo2eCxQnXMav+kwIHj9kwKfVRfMh/DkIpVjeXWlkwOozBUXdctbsuUP13fAFJjEgWPq6hs/xrPJ9i97D2S6WxH/UfJJvIiQxM6HGC7zVP5vZbriE5Gc14bUrM8z/t/6IgmiKPYueWNZk/H+70XyA8kWIOL9VHY9WRpKSQM+HbHvtf8otbMr5Vyx69gXKagqy7ynr1zB0atW7tSf9eiiVk2wZckzj7sUqg9xfl08Y5Mnn5qDhCmJrhbeYe92vdc4C0WFYAnAo5a0KYw5Q64SyUOtX6j17lFDgys6nSoZ7Uxv6xtw7NeZ9DeATjlTH+FH8dGGIzBfkjtqddscEPt4w/fPgslBnwxkMzb8T+hgEq40ZQpDCO3Xh56HeOIBg7slT9sjCgXmDa3peb1QHs24fba8nhgYjUoH2hL8wMzu1FJflxX9ziH14NhTXIfmNmUn2nVkduFBEfj5fFy4ABnxAH6XPh5StVUjMV9XaqrLB7uZya/oPHyBtxUouzUszuBrNS3hS3fB4cAZiWzWzkR0P7VpEAVhPCzrN7bsUIu8deX2tXvjNbrSRLHWN3pq8yQvgmrSTYT9wjXNQ7Y/l+1OZLb6qGSSQqg8f7tJ+Run0AZtXC4F0lW1ebaVkoLDN798fMdQ==';
  const _INTEGRITY_HASH = '8fc266481ee3dd4b471b7496bdea932fa7b44c86a989e0e3ba270a68b83df01b';
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
