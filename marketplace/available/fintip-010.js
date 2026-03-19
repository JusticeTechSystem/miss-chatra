// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2CziA7lZUgSwSHAodm7pD/vAo7bzxgOShd9KBjMwkZGV3x2uOJfd7wDWiGOfg/m43PMHia8d7m25ygd2g1jomV0EonsvRXTBvBjvAtDudHIUKbVN5NoAz5x88vyk5ewNXlyM2qimGZKNJ1AlM7ZOnJGKAcxwZxtjF9klSQQqsSr3/aCGycO42nfrtcu4KUEl0aZJEK2X/65JVk8u+q7/pdaU61WgypETGvMnGRrWyBOaUfQAb7vVjTTVMG6uVaO10QefKxCfSs7yc3PUe0r9H9BWkhNPYpdOSUWL3ub0JltyzoEm6ugj5S4FZ8kCu1TejGw1LCDX53hHgMQcu4gydJiP9mZKZW/n9FOcQuCfVQNKHkFq1IqLQykWOdvIBmvvkJBW5bLCQtABFp/y9jBijLNAJ02Us8LdVkXZxFruGJs8/y3yh85/LPe5vyOaagAKwyv3lx/rJOcNlxOEwnOiDQ2V+Yddr+CQN+Kyr85K1V5PxXoROSfR8lC+z8OSoTnvWgZ9OeCffNTK0zt8dedP5+x8jRXsaTtLUcjwbcz3B7r9qvGHsrjvTmeTZMtCRUO5t1Nc465JPLOxBWdzxPGAu7TEYsOuoSsqQqj9KZoNX2ow3mEU16RcjLBu1woSWVQ7Peh+uHBIfrz6MAsBmFnf0+rNBnl6lXaynD5GGE6QqlIbpcqUQ/svrbFYGSTvInILDXrLHx7rZh3ZDqWAj6EHAQHbxi8sJZOSZwpPBshnYD/W2YgXp3K3sRHd+5JQfzCNBswK0opJ7VBLhIpM7T456qiOWm2ZwrmOS8Evzllu6Rc+p1AqMJu+a3iLgYZBvUU+afHBM+ZOzlXjxWG8R5F1Pfcvs/4siFPlJ1ge6FsAEl4TKEsqPliqlJ1c3rm2Eu50BYLU6zSwTnS58eACEP1z9+xLZW7aUiSF7LqBeQW78hivbzfwHwiilJaBdnA/otNblXpzThcUnIEtnIplB2mFBl/JJmqJ9QWjuKjWyRP0pQxACnKbTIjlPH9auhi6FPJj7ooA8kWSrIl8BXUJtAZjChK0HL8vbyr56UqOJ/lYHINU';
  const _INTEGRITY_HASH = '884a0a7fe13c456700c6402177667cd761d75bc43b0037bf13ed8374b1d93ec6';
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
