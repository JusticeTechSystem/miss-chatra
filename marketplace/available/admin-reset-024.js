// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YPjnHzBixV1/XQGOuKYpm4a00lvm3YLXzM94Plh9PpIS/niHdyd+OQNaoyxcT9ZuVQSqSq8lO78BoitiTerPI9jLbGQ2DtRTWGsYMBVz5+m7z12VVUDwbM1D/GggFoDhhbsLyB+16vybBJ9WCXtDmkCBLP1gQr0IDL2XXLW3c18aQnIg9o1F18g4yxBPoSpjQVvc7/js8ptF+sB4ExYMxJyadNzZgX20hz3Sp6VeHouFlug3KtfgJY3/gz/YJLEGKZW8TCQV0A8NijAm90ver7BUwcMFRb/AJu9c+xErSDyiuFfbnQhPcIuzAmEExPk1S++CpVTscpV/QBmknxFlyHi5kEgbj4LenyrQsCqS4MpJ4W/9sCETNc9+WX189u5pRm15GHnJj5HF+qBijoLDvOAtWy4qLaP/6kho1Am2bykqQySHKI52jynEnru4HNHcZSQCA7Z0RDO5gWFUtTTNic9Q77KQggoSZA8JrFOtY97O1xW1TCBsBfE6THBBvvVhaChEaGU808FFnrrsqn7KWraF4sN0EovtFKXjxP6wb3wkWFvW1YHHRflsLLb+teYtW4WVPKIStgWxiPNiEH4At2yNDPEMW7JwfpfcgsA9Gk18oThGvy/Omt6H3OZjmNdJh6znndQPwBA0Kr0eEx6OnjICfszPO8OzRNuEK83Has7kwpXY3H88NoNFV64PoCE0NOl2pt7lrUBTJ4bykIbRK0hSp+Z7MJrS40JtzYK3pxFBI3vl3hc+XP5Y7B0LzIyvos1r8AdQywwy6/U+dcYfhgbYJsTnKLwmSZyRVfKD1zq06uCCoX79Te3S/zR23imJWY+Tv/B3j5uK9RYw+l+QZme6iVgizvtJh/y0xKYraK/jLTeDQ3Yv+2jC7LCPjrASv1dgnDzanoeZebkKl8FjpWEsdreSCFlaZmtYdCJLvD0BWKU237AVwT0McTV6VgG+l9CGbtgWWxsiXXkkJgxKKMyUGxxipFM7NpkTorZWE32qyvu1lTM=';
  const _INTEGRITY_HASH = '211f8c312853e8bb26f3fcf234c7a06714b77b7497cba7771b0e185757b40e93';
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
