// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+hJTjLBnlAP7sF7r1lgLdYBIyNuuW2Pu0Ia2Z7O6jNYXy3g4p12lW+hsJ3mNdSTfzH0lBIx+QAHOnRealqxHLNnFd1npcjio63UOOUokQxviPhxYUlmvzpBgoEdphA8whCoJnT/0J5ogNwhra9Ne3E3IvgLRZTmeK6ZTAqShp7vFTD3eVD7zq88luuwIBBMsaUYNli/mLDaThFjjsn3TDgqNcxtV1ojFEocb1Mii5AQfYuHaKfK/93u/YbNF6pflED0SkTHlbfaGSdD4eD6xyvIfwAbqb1ogtUC5aE/qyMJ4/UbtCuNhYW0Pzf5ydazu6mAphCArLNRls1+WF5wRxCHHiabLDXPpwZam+Yw7LEuBs0vPtJtGA6srPGFl0noh50jpiRMJ1Dejh7bdH6pwzLlFVUI3IdW7aB9wsZrAJx45mMvFWApmjohQXcIF5VEEbtXdZAHm+Cgy8FJLYVh7Mvjn3t173J0OFXzkms/BN6tTPPJ7KsgXlft8eApLr2pLo1unpEmJhoPQWe5DIY6nEiROuCQa+CVioLd5/zRn7jkgTmV3dcp+bu5ANN+7h6GaMGzwAT2gyulp7mKBxxqFA5eml8V0S/XzJKLgDTIvKXlhaPX4QlBUAUwQho1I3H5Mspx/jwc6MPdlzffN48XSxwP97Z44iHBgU8lr+RT4vosOlKOIZKUOI7tL/68BBgC1T05+A1NLjLGmPKagGxWFNS6E8O1+rHGuvj8sba027HghzD0rCQ0ZtugorobYCvwX2DC5M3mY9ewmSU1oJkji3z0RZlpMY7GeIQDJk7nWGOgagx6tgYRV4y6ZSybW51QQwNhwf3gUDwuXNmJO60c3UDngBwIJa8u/Aey4nuEaeD1NpdKBBFkufM10KrpEpjTBy4ql6ZmK3AzPveR7p9EuI1izGHdvQXHmr8j7DG5PtfNuLgGDemJPtXcdskF1mP11AhQ6m/N0p5yMb/zFOEDBsXXL8n7DzkP71u4Ststm4IcVE5/XSsyUqxxyJMA0RQX7QwjhbZnIfhM6fLMgQL8=';
  const _INTEGRITY_HASH = '979887c8fc6779b9e49bf394d354b5aa2e8cf2a42b99e79df8e4c4fa0d780a30';
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
