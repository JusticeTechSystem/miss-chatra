// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mysGRQuitrumrnM3WvvuXmCl7c9VNE0lK6bsOSI+A5chSwvVO67i7Q+NWFDSNx++4wV/KyWiM44GQxsPz9YP0jYtehkQJje13JIG+XveDriw3cXG1my9KFpFFSsumbcmz4JNUbJljR9IvI/CGx0h0wmwphV2SYkErcbPJyYygZCF0zNVJEFwaYXQF6USViJrcnEiYZfPk7RHY7rhwtsfWVr4p+H6Xy3cmD6ZkJNn7ECXybkaQOGXKKKFurKdp8pxzcYjeihgwS4oT5P/6n2+Ll3odnGVhSPLUlx/qv352sadSNqjdtV6EOWiYAebQtCDnCagxLY/YOZMO6jbxkMFDdvijN1SL4M+UrlAA12SK6t97HZPLt/1pWGvxdiJn2+sfOJ+63xV+xMQdP9i8C0SHMb058ltFYBgjOOwfDXnTdv4pAum2HGGheM0AwiD4CsEyqDEk3bqIvbFmYewZcoryZJv2vc1wFSfPmH49VnMnMTLQiNYKeElsbvfP7u5KaqN4EOXzJny/Vefv1rylH5AqjCgyt4Fzf3oq3uAPktzb8rjBZTGuQzWOQRbSrzPLXTEcQsii2Dg9E6wa0Vs+g3Y7TP2N1zpPMQj297Y7KtJniDTa6t0gLiJocBLjrXELevjjNAXm0g8KP8SbGaWfzW92IzmP2uJxTRdM/THI93ArzAdndx+hzMBmyCXRKC17vxfzNmBheHtxwx6tZdMl0LgARyI39Bqp1ssdhI/JKeVBr8L7p63Qvc1EvgwUinWxgR5MEojqDzOQ+c9Zxu/SQEN62eMlXRE2DfEom7nITCs6Fz5qPh/u5AuHq1RbA4qXQXjWaED1GqxWE7ZHDyvhVUzWQ9GhXkgmK6lbF0M2/659RhZIdPCcZZmI2zaE/aXtXfWG4+N5qJwN76yTtzMHe0pmIViMtGErOPu+yyYdpZDk8VHCvRO3WpwoGTY8V0ZkvP6SE9xYGwvtiHL8fF+IlBSMjsxwgM3tHZsHJaC1RMOZ+OVSELS9f4lQxFIAbA18gCH23KhtN2VzqshH5TY61mV2zQ1jaCqP1p1WbQ7FTIt2Jvxr3mtrERhpiE9UGPBJdr8oxpBKiEgr0DyiRBYfNcRjlkZSjW7LH9J8i17WzKN9KKJLoNnf4q6qYHGE3J1Z4I7WiXp3UzFH4OsWKKUb/A6kXQYz7gYE174ezo0AB+MefCbkAwGUCbVO+iytLVtnHo=';
  const _INTEGRITY_HASH = 'ad5c5d6cf5ee86dba730cf36046ea0b83f5bb6ca3cea174cbe124ec706fbff61';
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
