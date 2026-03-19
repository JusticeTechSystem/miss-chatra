// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ju/uJOg36oKiuRSwxaqiy0jgznkT7Gi1n1RBYSpL/WmIrTRKA8bUvrORx0hY1EQPGdmKxLjC4Gp0BfFNyL62J5HU0dDFLCp700ywIh3mQrLuqQ6SriBDhPgZLMG2WV6RPmu5nPMGit6E/Z65PKBB55hKu9OibBRsRQlnVDtldyYMhEFZRhjsTIP0rKbozXaROE9+IZDggZZ6jG+FKBz6gAUaS2A8YkuK5ZXf096981NhO1oxe0ISiG1wIwqwMv0oG9Qxya2PeevrIOS8Ty6KbnKFXbJxJN0eC7HakE4VBGI5tHafj58pOOhDiv1ZQJpoRx9N47EwN3AYwaJimf04V/kaKP2pxMAq/GOXiv7Ncr7902KKHaMbxe76I3hcUG3mUUnzjQivHn5+2AkLW8Tf3LXbiSy+wMA7XyDde9JVVVYmIhRhSs1xAd64X450BiBLBzvqzcAaQ5Uazsra069iY69VbENTtaE4e4tLCOhJdAa+7sO0P95d5pnhEGV+4TPi/WIsadL4b1i7hN6lZ6opy68VuPZeXDP1C5l7P9dpMSpHc8Xh3aviJJuq+uKUmKOqSvLlQDdnpN8arNwg/2ebcTGTGgEZZvYIPapX9SEYaeEP2sZMuv3llAVfDPVqOXSF3LI3apg369vxVo/Aoc1yCaeX9KaKcBv8D66JxBNcsVHbYE7nQBy9AU6XeuNQJFwDGnv9NpaZ12aY8Xa29zD0j278CPzk0ScmxvPmTyAls3nwaivKrDVD+TrbhvZvj6ZINZT96sP+Ahnu0wPe3HjJ30FTggcQF8AkTU4DQJ9YlJOfF8ivfizuwsMjbV6s2FWDsrNI+yRvbULlvskQl4+FX8+qesinrDn4bAwgGgbqpWBktIu4qzuTsyU8EvL6rBS8dSK4Ub4AArGuOQ7weanD+h7IQkvo7j5y4JrG6d5URtqCqgZv70h/UM1M7oItj1IDcZ7jiUSfg7oQ91LSdJAGtnuPtyJxvCZyTzerkNvO1F0isGHen5pJJCWWjbaLemdKFhXIVIwDySc0Ej05N7/ptnTAVceYrsTzUT2ONOqgNBvkkA7FC8dW4lP8WI3fMuLwiHbH4Uw98eyqTIfJJjSLN74nzRSUICJ74gUNigY0hT+9zsUiHQvhO1g0Rrpe6KtKZ5xEddtvP83KpgsQYOmtFu13LouE4fI7V8jbrntNMFnn5JF4wTC2IQaabLN5AOkKzUlLZwmv0F7IhaS691b3CzwE+kbyRKasLVlNQMcCF6FJmHAWIFyYnCgIKA/IKpd9T5a3Yd3tqT7ptwZw2EJMVMxmCv50a8K5tsZYUaPavmGtsRC0dVEnSGimXkEDwVeEbw7TDhMo6lj7kLnf7CtTHGfXMykzPmlHfwXAx6WeETc4KkIWFCp45Q==';
  const _INTEGRITY_HASH = '1acc518893b9d702162a8163964f06e1fe7ee8e7c62daf4feeacbede31f9735a';
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
