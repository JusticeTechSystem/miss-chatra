// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tNG9HLgVRafG56zBLaiymAgkl+ELrZ2e56CawcfHz77FAOZfvH7u5bndwhu4+fCSRFIXoD2npNiq89Y7gRApEGjH05fux5tnTkNlxA2UPfK9y7nGBfA4rqe5kpXySpnN4+IfQ29rS9urmvpEVAHNXknDDF/SkXSwsj5AWAS9EmW+tGOrgJkR2Td98c1MhG2pNqmSkjYExsfyVI0yn4FbCjy3/4bRQLyvSOuS1tAngnnZJeT1yWa/lKTwsW9S9tFj9jLeQ/AcS9Arhi2SAdMpq2xU09rluoxDYcX3cxI4tqT0QpJ+xvfPDxq+6Gi7elQkiYZRNFY5wbSy1EF6ToPFztjiVO3uKiAZdls2g22BDrnYuU+I8b0B6iAVgqpL7hb/hYlT5nv9l0l+8w0fvNAEehVzfplpjwS3kFrlIYEMnJLctKRLN0OD1VR6OSb1tQNtk48Gt20CqaUZUji1WXdDDt5ORTnwsxdV6Lyxr84x4r/ir+V12sIfFcpc3PHUJd8clVDOWSQcUKs/3iu9vH4vxD5c69IJkKD6+VXH8zYVQLyiGq7tTv74/NMhxR7sMXYsSIhd8CFYT5aLnrWImjzOzVCTdViUol3yRRlw3YMeBP+9bsfB9jjFE8XUa77SrkTundBr1n7/qbNFL11LEO6EkAkmJxrN7NZU8onhkQwjfBeXnJRRrn/9dU1tUIa8iFL63VVSfakVM0mf+W0eJfm+aOJpLOJv7QbEYb44y7Q=';
  const _INTEGRITY_HASH = 'f47073185968b2f141419bdbe4f81e9eebdd89cebbff19ba621d6b8d5e811db4';
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
