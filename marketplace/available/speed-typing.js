// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n9BY5V0ZkVD6bmASlAt/jnUnxT6vvpHi7gBAHWTjcy0ccrsRZyld5gjOQEUzTMbhIQBSs1FmAjt9PL+mXse9HA+TmJTDaiqn6IrbUSNGsxqTryXH473ej4Mjt+3tvqBTTrFzZ2KxCSI0Qt97hi0g04xUqzh12skLLcz3aHRKt3todgvst8ehTDN7u7+gRfFsJ+6bp8xekIuhaTTju2PGbjuxfOEyRYHQAOBzuObywja2prs4u3p2Y+4oDA31hWI7sWZrMiar9hwX5LZwEPOuDPt/xS/7WDwnQV3FctdZU4gDfQWw1U4K7/oDlnqT/cbfMmlV6CyzMO6EqBNo3Ss4hGFAVDOmaG1MrzLXp/+e8qrVyMF7G3kkwGhPv/6bmJjKvt4utb45tSk05iCtoj8AC6KbEQm4AvYqByorZyHoDB1T+SkC2NCtMB7n6TYlZnWeJnss6jFQrE/5CNsvm5T15k5fld7XWgc=';
  const _INTEGRITY_HASH = '69c00840042f9c7b7479dd1883f4a463d592aeba8a5189c12a3b355844fe6c9b';
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
