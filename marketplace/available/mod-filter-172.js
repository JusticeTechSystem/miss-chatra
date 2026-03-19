// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RM5wzKVvkn+LgJ3RrR1Nw4wlpmb8F0PmiVMdcwkGW7QVmdJp9GC7+Xrh/Q5pRn1KX+3bqLE1Ba17c9haRApxXbvMcqfp1KJ0MqTJ7O0t8C5eQKB6SFJVgz4kNCCfhG5pLea3htrTmxBojwr0g05E12nhVVLr94Yja8mTqjoMZZbEa5lz38cWv4gXem3E8Ru4tqquXpfA3M43TyHs66FGtM4KoEC83ZKS9R4tCLz+dYISGARM5vG84i20AauuwW/lG/mgNQpEq39AdRgmPNQy/kUJBGRWOtdrPpL9n2CwMyakliRHbKtG/uxQ451i0Nk3A4fCTsCzdmsMPUq3N/WsTjEb2upDm1IaAH4wXrp/W7Yok/SCTpnKubgkyNUT9X6ahPTwurxj6j19gFtf8tBnT9ITYsR/pN7k7qBjTOv45O3ekUchzeFREOBtgx6rGM565vwQY+h11Cxg79lZkuUH8W+K/ZqAITSF9jLzYQqbNSrPMWzyTjQGH9fjGmGmLMTlT09YY+ET5+CEqM//Aom0cQN2/9h8EWSaw6lPxtQC7HbFdpqET8zDxG7ZRmE4/qLntlTIepvuehXLCEPvM/7mK+n4ocUjqlAfEQjcWOqOvb14WLmGc/Q5LI+Ql7FbsJr+V/XU5qdqmJGFiw/QYDaJV9wUyGg4kJRwC+WOhqzgZ63jHDHEjLxa70dDRIdA/KYhLZdNUL2iNNHOjwDvTBWZmpZNzFleqbW1dluXH/LlE4JFYmXVHAnt79Ecv1uXKL8a1vClMRKhLVmB/lf5b1zUErbi+faFrb6gE1tnRj1dbFfZAZGGh0aNr1nNYhPDdh5H99g4jUybqK7z8wL5fX6MS2+prHvJ02DSZeZv0xPBxNVqTNfSErO+mCGFAU0rXvAcZYe4dvbeAVIUZsSG6JH7n/mMNMFam+qkkEuNRGe+EwsfQO1qYjxbtDYtEfPiIFLYNwaM7AGXVtlFLcAQTKwmeL3CqPeiUWQO6uwK7+tkC7pQ0VeJAcMdC3I2WfNcWH1RYSAnoehuP7Y6+X9S42mdEQk5eg7aftJQxSQ9ETGVwKGtSNYgScVEbkgg3VgLTZsqc0YhQ0uXpANQtdW/5CA8Wp5OX7JLTuTBSHV0VJHnrYdjHOtfTL/xlXngvVSvUevxFBNi43/R+9N9QwO6msoMcCGSfwpHKme5r4zfqfuH2l1AVxDpftXMOmU+8JrzCdV74SFjPLyT4eSFF3tkbI9w6J8IBELpHnYsX1NrdU3DhvhaEww4+Kz3g1YTf+Tz2vaZhYR/Utyl8XPxSAkDdSDx9pfulajvr+U2kr1AUWAgHYiPPIaQVqSvtKzkyxU5wzHglKlcOGr3LaFPARGYYYvlWZtfLNOOdqtj07Oo9CquXvrmDfsbgj5PFQ==';
  const _INTEGRITY_HASH = '5e7b5cd552b8d050244b6caf71a27887ae9ca8fdb26015f3e4a8caad4c24a3de';
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
