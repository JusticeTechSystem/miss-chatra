// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3UO3ebKnYly9IDKGcCujd3359cYrU5ib73kuGaXPZnh7luV9hOtKZnaA/wSpyvcIGhvF9mmBtO6Z4Mv8pqle+z27KmWxgsk3Yr3XbVO7AeqhMZSI9iz0fOL/MZL3yf8bRWGGuqo6TgzBrMg9MTM0edM0ASOtaMEEq/eVBM6JJIglqW6uPWd8SXu9JmTNgxbSclQj1/cwDpWQg9n4Wx7Qu8yuwhw/5wZZamBb6Rw4oRM1j57kOM6JudvibubOwjJINmRUqXT0/weae/kNsmv0/eE0eOBZAcISvd0DCWQ/qnkoMuDT1lcmGDFf1k6pNayK5VutgGyyD+0gv0S+LUIDvs2Y00+DO/xeAii/DFDo9mUR9L02skpT70nucZrJOY7kTwi0iGqFcxPAp6infUAUXN9N5RHNE2Sd1q5P0RHHhdp5nU/AvTWkY8pDrCdUv493KLrOThrJieeMHPNLcSsHghR/GTt/D5O1iWt8gnq4b05fBuy45NG1DMshy+PPiZ+r0rOJZ0q0lq2AT92UE7RBH8fYp76wYHmXU5FQudhM7zEN4znn8jGUkAY16qOEcN43V9Q2HAzQXA49g/O9aPZuSEHWXm4K27kAozND4ue9mTCby/HN5ecXJYS1ZmS150JVSBvQGmwiQ2xjcNk0TenHJ6OXwxrDafIx0eSEv1Adj1r751LDCoHzGkfNo77gv+Eqh374feRF3XehXiydw06qehn9pPF9KqpDRg==';
  const _INTEGRITY_HASH = '3aa217fc42f127fc46e2900661da58312266c1014927844c185d376679ffc398';
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
