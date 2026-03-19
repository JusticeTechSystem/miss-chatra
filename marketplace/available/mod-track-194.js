// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bPg6YU/px0zUreVOUkMrimmF1ucNDhZ+8Oo3tq7C4zbefP2jSQZjCTqrk5TxnHMmUd6LCCVH6CLyyj3vvbTBX1zVQ3rx2uGnvPudk2HoxTPC7tm/DlXGAMdxbjHi8tNlqVo/XLJy0HojxzDvPPW89S0fsaMbFHrmu8VBPPaIa2zcdR/S4RE7CSJHW8is8EqqJLW6pS//QmXZKvEn7Uuh/I1nHaiASAZi0/SfSNEFpGuDqA/HLcPmQ+EH1FXBUWEYp3EJ0+Lt6F7BMfoDgqXuEVGcFqSrXMlq0IJqypoorRNovKJwvi8jSvRCyBK/A456KQ/IIKwIWxB6E+5tlhjAUbVl5GnrOiiENwb2k+OehLJ4u+HM0LiHpUUEBK8GyDXwlLTk4RykG6diQtUYyYahHERjMMQOK9qL0Vi2LUiCs23BO4HAG76yLqWGqSJnBBshnIFJn+0aaH8JTdrR5QSFiSLholN2zttrotghebG44pSf+L6bEU16eycUoBmHFsRnjnP1ivnar4HUIFwhlTlm2mRdEy7qBuY6sJdVrAoJRS+VtmLV3Sy2ufSoixoMWbvHQ38kCcXZUaI42lthjVq+ZV3burVITNAjqD9VO9gSWmflpu/oeB2CaoxtAeNPkW6wVAUimJ5rMx2SNUeCXmFXmy3b2xlRkQxFn8dUeXp6bQbiy6s9n/KjUHIu4UFA+is9J3WuRHDek25grFvofOMXG7Flka5ebPTUdmDI1FFPw7vEuvoLUZDMsO9D3f5v4Ud20DlJYEKrE+5EzqbmCWONrABLymLcxCroS+xFEbwE3J69SHqLdiHouQynJgMO3TeN9ms6748dyPCoiEk/d4aAAfu5Og/aNcxgVLmBqkBozU6Sk8z/vOLyYYq5YA8GJXEYzdXry8Jun1yy69Pke9kCBLar8oQKTJ4Hz98t29T14hoMxL/TfbVunKnA+5A4R0mf/Z3Mn7fOj9yfefFjs1lRB9e3RoCeAoXGOgScA6twqTAIIghg+NexsaXPpK+vsCw+9WURHoQmLlxHEo3qMhesRfpi0wdgnE/v2L0NJqaVC2lN2YE5Pt8ppI46He0QTXXIgyjiBbVX+Xk5a8SIATOSEj9/D6/2y9EliUEIvKBwlNf7HUAiXxK4ehePEhmUuydIVGk8YmdBUdB/BM1Z9Ru+NaZu6RRkA7C4kCGBu3G+8qZqNtwzjqHpSFggXGK9RSBW3VaGkz66eFzLYdD9OJ6xnYkjkV0jG7SFvCUJ4/D3h+fz2L0/GZtJEOeRuye9Em2/9OKnqUYNK/iIFYajP7NPSI+ERER8HV3a/jXThMfyzBCCFeAZ4WybCpy0tKtfATFT1rLDjTUKTQBNtm6BS8uHt+DdQD+6XCWI1yvSS7+N';
  const _INTEGRITY_HASH = 'edc4969d764be452bfbe956b72e7d6e5e0c4e6cda4e14d65b2299d1dd423ef02';
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
