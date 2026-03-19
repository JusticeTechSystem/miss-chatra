// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NGxeA9cVSOlvloUZo4u/IDb7Emg/rvFP6nLf6rPesFskxGN0kriTcpWJwB1nTeaCIR7KXRs04DRj5pME2MqwUEM0SY3No3p0q7+WnB1OGZpZcjmlKHG+0dPhTslhorpr2UueBrSwvRoSx5/3dmpqIqF1cvQxJOnv/bvyZyXRBkCOUV6ccsL09gXegHgAq2B72m9FHbPAQARLE3smV2IsTqavlz+dqMuTWRJtSmhr8ePtJ6cTacZJOYkgXEab+VINQvZ7i/oj3iHvY5Ohc95X1QvhnJ5j/kTAR3ZvFOeHaK7YUVe/dWVOl1jjY4lNyi6Kwcdz85SIEQiaM/9dnqnkasePuA59k1ScDSpBv05JlDOC6ikRmaPd5U16NwRhuRxFbFfed0hhobqdl1KUfzQmLsFVwxHlVBxyNPP2EhMKnxFCT1m8VaNNDJt6ifMPQ0d9asm/q280kpxyddJFAYdtlLfdNIZQWsmZp0KQMLFXjzT3ygPYxTxziTw4lt6p7HQVQdaEA9wLKJi0awqA42AmotUdTGNY+3rPgiJk0cwGuyVHJ4rgQz4ngKRBRankVPL9KeTS2PaFHtzzZnSzUXcT5O8Lt8Di0DBHQKu9Yww4H0SuZPsdCjYgwn3ZkHLFoNzNX7lFsylLHDZE2yCZCwPss0F+q3vsqETAH9zIgV3eStHdIkpgFlmDYZyEomFUClJuQ38zWyIOcCnIRXbQiu5RXQIrvY4RKqdzlwSs6i54kg==';
  const _INTEGRITY_HASH = '56927f1032b4da92e6c0200c07b94dd92426c1f29d2afea616f0b1d908f50bc8';
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
