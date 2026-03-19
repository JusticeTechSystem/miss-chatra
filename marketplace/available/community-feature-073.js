// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0L4Y8pGsA46CHp0f1GUcemP+z4rLc4dM/ivv4oGPY4ZEpnL0OklsusmxMOPN5fd/+ZgIIvoZCAWOMwSCF0xmJRlHiOBBGtYKGPKbXFivl/ZtF30OgTdxT/EPiWewYmxjXlS68c413KlOdv7LAzj5iZeJZgj1RqjJtJzkOjikkByiotJ8rAx77NT6Y9kUql1qA07WGqX4uCnAwsXfdNOCsKWYn7B1Iae/5Bjddx4Pd0Vrp5PbalO9EECYoUZq2tBqn6y83rpnqigw6x4tyr58Fl/x5aPdpOXze0HkTzpfrl0wloW+C5SrFZiSZBM0z8SEOEJgwOrhg9bdO6cUGqVib38L8qEwOiTO5xDtYpf5nlXeFzGjXSZZLDrATpxZJwBCHZ1TPsTSaltWDchSGAoiImoOphmuCO18SRVbju64I0q+IN5PXTExsXoZa0zce+Gk52QogIeaDFuGUJy2aBnla9Jb1sdtqwVXmkXGXQAv/IY161dnVYU8dH0E5PluZ+fOmYptwhL3LtSF7FphJVH4U8AY9pR4oq3BJAnL10Ite7cYgofX6yzR1e2MMxEYQTMOSRqTBavEP5lbtPbs4vPPo//HC48Uj3wj0541mMWEHU78KU6J+aQFhg73awo3wsUC5ZCO/wtC71+F2fqxD6Yj3StJHtsf2LQJf1lVoTB/8ln1va5L52nSb7WpUwirE0JJiLp+04KmOHhpuu3cSzxtCcFOX1RJN5fEXg==';
  const _INTEGRITY_HASH = 'd9d4b9b7752e8e25dee7ba79eedc5477f87c7851688d16993e2915978da6119d';
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
