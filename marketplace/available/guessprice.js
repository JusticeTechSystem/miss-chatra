// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n4gwkXx+XxuEU1nS7YPV4yYHrjXrtW+NtjCgxIN3/wNG7p8HcUN8RIcjh6NIbziAkN0LzUWx/BrWmtlwm1SU7/t+WCA7NMZnAKnlSfbv2xrkP1t8G3kAzwpQ4UvCvbn3dkB+s1ep36TFZhVf3/z7Fp4rwf9TkhO7rnVr+c1+cBAxlL7Pun+crUW/eG/9M8u9OZKQOXFImLc2m7lDlDB11wZXfr2/EKwPWu0IpfX+Y9f/6b3qA/DWQ3uBLSiq0god86mSBwIFKPkp4HU2O0i78fcygL5bJn+d5ZLdI9NraSG8nGLHuEZyjs6GqC5mx3Dg9d9o+gO5Rf4xW+A4oKt+w+bBntJ+KYpqJYxTa0agNBcRsT3me6LdnTrlDHCCRUXY5vk2xvlIfrFAdvljKat/FL3OX7xuuqBOdOe11Fkl5JBiFT9M7ilRUKkozmb9CJjdW6eMF/UImb+Lv0OMMdg/wVI7qhDDhWCDWsa7hTMuTNqBS5nO3+LmeN2rLqJ/MMzrOToVCvqWJHOO3KHLUGx/ip+KRIbcFW5pM+Nlt8yopoWfc37gLvlNVQu3NX9XxH3x1hUmqTb+N94dR8/Syehr27I7f15LZ6GHn/C542OCeq9Ozee4wMF0X7c08gCh1HSNAuBSg3j8VzK57WaKS/bOe9jXuyPDqvg/lUU6XC3JIc5cSNOtHS+GWXjS6ZOAI7m4TvFSsyRWZiEVIeu7wdg/tTPZ6Fj4vV/tYTUtCv62QH0KBs1dKztUZ+2vRCcC/N/qSlcSK09fGZYF90pQP7paMcmIUbHaLZLdX2bBAsQZpdK0+w85NwJwiCPZJwqQ+k/brkNHYDzzDB+1IDhyuNpqFpM2J6UiSIdwimWVR2lR8LRv/UHWC0ogOsIiUFOfBGmGAJZywy4ucB2AJDFBFH91tFpyM8OIpMppF/3eiuUkFnT6qd1nXR++4lg7ctSIjxXOwGU0lZ06K6QaoRJF8cCT9h7BbRlBHqRfMOXN0rV5n4GqXPBWSj8gW7ovJmJ1rIdDvvBujtmY2U4TVAkZfIS3Dz02d0BYVOgTQjvM/A7eUo0d+Mff5Ndqnp3FR7u6gBNkWfSoILr8mq6h7swX8YfGuOkjm9f+KxnogzgWHng1cNURsRsT7lB851zLP6f3imDAobcYCn5LrdtxAFzAj34Vtxe6BsYy6dDDBk+OdtfnVXPhjFiR2BMF1tqfrvyfUOId+KXoZ/TG';
  const _INTEGRITY_HASH = 'e86a8b2a19083ba12879b159c0e63e09b7eab154490b38174aca0aead79ada95';
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
