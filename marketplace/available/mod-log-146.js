// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'epqle96bKUJEOtcXa8Qv/rac7ZAzYOk/l0S67Q+fKfhiXZmkmlKl61tmqZ50t9Ue/BS6L6bV0vasXp9jAq+nUxAHE83h6fQNc+IBXYqXOGzFoYGI9XX71PROImeY7pQ0f6C3WYCN+x0kTulmE+jEBhqzhhki81I8ATWLWNKO9qVAN3jixz16w7mGcbYvesK/4ZqtitelEAWM0JxWnnTlymq+pqrYQFPKSF9sHwvMQ80h4EoAdy3RSkqhRKR5a1C68ZR+mcuTjCau5I4QbT3AGX9NhxTnckgG98qdVn1u9p9bdlVLs031d0noUFmfAMVGKq+gRjWSKRJ0XYBQ1vF9pJOd3lhATBCti1tb3Q3WKesmU5HRLbJzSkt1CGc5chykFQWPZRRbApVGVPGhVJuLHc6gbgjYpKc8AyWiXEPEHWNn7jK7wip8GQl5bTvEpOETj3Asi7LTvMHaOh2guhGbKmWfPTu3/5u1SjcFetgU9ut2zUeSv8jKGaiMV+bFFoZdUkj4VYGwqK2Jf/MfOKcCTZJ/fbTFoh2TUFGVjyihWPnfMRv5aR22KSLpQlEtUFA9D5t8YuRRI3E8RhBPmLk8Zt/LIph8eRAhuocPbDURt1fQS/Dw/v3autkyPi1btzCankjouW2vvm2b1DaMBjA4ighp1+JEpllegEKBYCQVB/XIDGfRk3GE1lGaY0I0n1NhMElOr08lC+WVGL25XBTgsQQcTcK9uebfvcWl0B8asAfr3qPgVlhzie9DAKfTeMhC8R9FSMLUKqXjdjeZXBNUFRt26DRq7ZqTUzdjT4fn+wg4n8UB0tAeegcklJp5Dxfs5sMU7DOznMEk0qAKakwqodXMvOCB77uPrzu71IsenQSqDLhtbEXfqxuDLqFEa/F/bEu4kJiwlQFBRNAgKZoxizc6wHvXQ18mIR97L0x1o3oaHDeDtbJtV2MPjRze8dofAzkkpU81i94pyjDgjEgU05iV1N0QzVfb9cht8d3MPUElu9FVwyZu9vjQ3j+G5pVrF70QIO4KfUJ9sdkzbACIAtPE84EHrLZ67QP5uFKBt0XFDd7XDIFdoVF5ZRVeHqkAu9Zh2rcIkKVlQ8z+P7ZfjgOm4r7upaeq9e7VVGc0VbRjk55RO0usVf+VkPt8PVGTur1fwOn7Z2mZHcu1ZyJSEAXZawTszGwo3NLVFy00P5SAEjZYNx60EZp28i4Pyr9pcBd99+PubdSJJT6eIsKH/XrDcI93ZOxsApXEXkS2rep4NGeFfyInhhb9Z+MBqg4VCkDs7bG9dIPZbVVhwlJQ7zIYrt/exyEVjMYzIo4gE7sGwP3GIfsmqBPpLTMFRxhfdrRTIT1l/HQldw==';
  const _INTEGRITY_HASH = '20622e5a97811ca31261ea74fb6ec87355be919890c2ef451348cf5c131416d8';
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
