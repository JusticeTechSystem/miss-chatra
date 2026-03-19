// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7PgmISXyJfTxgQxBh5/rFqrgvFNJnq+7QRKHhOK6jZpSgnsCmmNHJT0sp2HLvg3PrXZzjHX0JAMAMM5yngl48oPOGfh+903IcYuPIpLoa/4OVPaft3OSoJ+5QRzYC9Q5zxVUpV8/GNUsPhUVhTNDpJpwUqCz02qWDahOoy0yMHrYQ4FUdTcAGDqum7AJpH95ogwtfStqc8kAj7CNKklTF18KO7BDTiqPm5vXIfT+VEpOQfRBqHQPBKoh+ky7JXGCvRSBHrWwtcNxA+O4T2yesxdhL4nR3/O9HhU/ABKb6yNnHWR2f2TXFJXiEsZBL5ISKl0LoTd2qw6MXjTMtQSKrdDvvKJvLj69mBDox+tr2oDg+zKtAvfJE/aIj8ZhWovwrejbg/jpzXb6ipH8e3OX9fX1/6kLefEGPN1Wy5QO0bARYmePLonXNiQkt56nORwax2uVW73Sumls+VecbQCuJUX+UtQQaXrOzMqWWosdgIKXg080ssuDQuB0jALrLYimxcTu35rwhD22WzPeHg+nGmGz/uAKCgQBrXUfbxVzb8p1NJn4QZ/YXzBfQM3cEovbR/l56YLhj6UnRJnNjIqVs+kXwRLl8NQ0nWZsjxX7XuLoJWSH2hJKkodhm7gdViALANsKl+qhExN5cIwaMB1YpqHCQmBYBfZGD07pBgczFxEoJ9QuCy6ZOicv1yxb3eHGhj/flSEDixU5vIuJd9NFAFrU2w8cQacxKAxt/ezROAiJuL7LgQNpdzmGHaSExFMyy/r2Gm7+aq3av7YMJQ1RmYyXYnirryaCWypnik4rftgECXXvSVjxfMaEkvuzVTS8xwh2PK/Zn4y5tsbMNhWwe1xVTWly/x4JVEWF9w2jgfAwwy1/aNW8fhL3LGll/CUI4ZNAzk100UNANc1UO4HYWF+WoKRFsy+U/qozyClBGd/FjizFEi2XEIgpdklfpbS/gf7WDXYqnqOF33/G9bNxwgKJ0L5HbjbjxhzNFZQHWVhGdDv/DlPMMIr+q+gqMQwfdFU3+mBe/sk=';
  const _INTEGRITY_HASH = 'c39a604652520ab98cd358ae313357a0d842cc49301e385c52f09f383c37ef1c';
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
