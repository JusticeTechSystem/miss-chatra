// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TGbSz65BjtmLI7tcqJaC0Pyryx4+iRK3Q1cVSGvykJ2XLgoEKE5SgB16zXs8c5kThCyrOEjZoAcSXDmeDzhW/w33cbjxcDbUxMMQpgMP7K4JYnEA3d7DDh0SpSfrYP26PoNPnWHopzdCb8x9fzqwhnpRqjFHpfi+Csm9/nJYS3emJkmpL12yqJsJwy5RlRY5PLqxkgfEO2PNBOWpL1oSCBbezu9e0tUoEszDpzrXyZzZHXJBwoOES91XwidenGWCu5HW4j9O64/n7iAxKS2Wpkr0fazdXqs27fRO1JaASpNfNxE/VPJEjmYbJIsixJDdasDJkn3gC2R03EWcLck6p44H2Y4ga/jLZzNcdkC3NVQBQWgVUSuW9Plf4F6i/LOzMJWqVnQpt82RG7GCY0eJj72mbqou0xeQre/3jHsHImENeIU5R+hEJsXvzAnAt9bPEfVO/qfb+pEjWePPE3LuZJk/i0+CokFF20Yj/unNohbMZpJNQepJ';
  const _INTEGRITY_HASH = 'dbed8967dadc69cf4731686836dfb95fc773190459345e73e6102c6390070727';
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
