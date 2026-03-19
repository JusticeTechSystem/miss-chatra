// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5lJ3DaleIWGL/UYHjdjTloOPeapjTJjY5vIRMsUb2GfvDc0PfhQ1EP9tX8xsPYZbVrW1DjsWXqWdhqTznPxNTLEsOGo9c7qb3GKlilheElfK6D8AsV/mslvONlhSFKZYX9/W8rdghh0y+fUibqTJ+O4x46CbjK8atUMAKkRJfG5ofKQfC372ZL/P/wrK3SOE8kYvoPKhlYI/93fpircyQDyA0o9P1/pfEfBdvxgHQ24aQMq+CW5UB5CA5k0c9K93KU8jp0fBsX6V1eU+T6tq22tn/vY2JR2DKiDyvqP44G7DfZwXQLsUrCJDQxQq6e1BWy4HslgjiymCSs20HFMOM9EdyY3r7RX+ygH6iB6/4VnbagidgxD6i4YfziVX1R1MEBcHf5erxI/gS2uNGAp5X4JpG///A8KkNK9srM7kZRxrHf3Cr6qr1F3WK2VCgpT3e05Yx1HFCyteePu5dFNJxfxfgI4JN6s9aPKzsPXk6XaamRa6Mudmts/goQZzRXGAXXpE8V08iWTi4FXm9IUKaKifrSZVIFLQhPeRl3AkFehddyRCI1WnjkYhZWuJmvyw8LzVdiKKPRWMAQgd87BQvWN9HU5iii+yetHp/r71t8+hrVdc7rmu6CwhiqmQZMINr61KPeUwSM/G2wRiAWcyPMqYVqykukNtSMvubwaFF0/SciCsFm/JNgNxhFS8kHSdr5D5f4D/AA18kYY1z7XxOYI4b8HCaynT3QaedU/bap0QYCYEuFm1Vql/Tg1bARJwvGyRRKKinbSYxpJ6FFgfkqGe11wH1fvnW29UJm9jw7GdbENOgcFpAckZj6NwOv7MNSJCnnVLHOu27Gq1VmQvqNpxbixrY6xcobk0wTsR8aNBlXLODFWCDEAp96DFJRI5/wuUOhWzi7EzdvHStnbvDqD6lEMKmIRJFrJdfZ3+dJD+HCHmMjn2Z8aEBNu1MqD1U0j9JF8DtIQhE47yyC+v+00pyE6T/INE2t8uPWmW1BTrYnpfmaRKZMoDP5CEV7wLYSJQK2ni7Gi7EyZ4nBzRXX+cxYydXnbt73UrURqhZGM+y62exylsojfN3oGhRqtTLWaI1fP+4uqAMj/CsjoPxlCLOyfyBDcOjH0Z5/Tq3fGJcmvP/Y7Ds5s7aBk3w0tYFRK4MQkLc9XQa1EKjaJyUrpGkzOp0Gj+jizRgjDRsAoKEddYTMKHGH+AAaL1Ukc4BxLQ1siUprRGUx30CgICPoddQw7iIhqRZaz8sv2fmL9yMdbOMejV5ECGEZpwD5gZqo2zTYNyZ9oNWleA5fw8Mn0fJGMrtJpTO0rLCJeS93ZJYAV6ail65eCZ0ou+tGPn/UGSpr8xVHJ0Tw==';
  const _INTEGRITY_HASH = 'a7d10aa676e52c4778e3b8fd9b25eebb81fe153b6606d8ce893fb91497ab7a26';
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
