// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uzhr4KisbKonoPfQmeiUAo8Iyzw+GaE9O54jZ87V59ewi/7NH/eI5VnGEefr77c4RT2NlSUNuMlLftON0pZRTE98V/jrdRPILjQVTqhxv25dxKjrNdWIO0BphvwV1RF8MAoy0DlT5irYsSUBXVQ20qAvYrR2cG/cW4MqAOcHXFBqI7CLW1Mfog/05ffKK4SnYQmFITJUDsVi20ZvYQq+AaQLqQJWoR52gd5qsQ8kCHNbmqqNJBErvc8Wx4I7nsM3yVtlUbgoxO9WAMkF9bunuHeqJvy40VzsKlaDJrD6sjV3v67MtossMKX45ZLlGoyTtb+iDsUD4Lz+0gapuJLXgOxe5CpBbxygpqmgkgg/d+HLh47V/5oUzTq1ZYFDQL7CA+DMoQEQfSw6sWnQxR8sGxi6uvSMyYkZ+/esQaW3WFzwwKXdITPsCj+fjs0LNWkRDZEJFCB0iMLDao7UZxrGuFE2VEApK7WWhC9KOWwskVY3mOEZRHkKk8qKJXaMzRIclTp8ppA6n56UsZs1f0wa2YYQ8W0d7oZpnkQcbAtL+mnlbemfCRWzqIkiEHgQazMznkMQUghfOpyFiI0cZAoTH1zQH2speTNIQNoOiGt337qePdnIyK8iMmxqGw0Kk1/tNRhGvzR6d5KheuuoHeJDDOEE/QEC8zXaJjoDgrjDwnrta4aSMaaNRcNqCLUIBrBh2BcFO/BrVECydfl4mWhLecxfN3k0cxww2RNYdHED2IUF4VWyXSLP843XUz/XRUbwsKNUqZDm8NcESI+kSj+ZVU1B0K33CGnKk1uc4Qi0Vll4EWZ5GfKtLRyQ+i4T56dQPCC45ziwuYaaSr+B39jrvwWmXLfrW9Z/8+wFqobC4YcnzxJOiQAj8XANAfDs3nS3+ToPoghE/cmUwVjjJO09LL4cPmwP82tUA0nItdrNe0yegcW+cn1zoIKKDFe9QFvQ3lssAOvQ1rhORBYbarJupbpzj0rRa0Wb8riZWX7YMdJ6eRZTlXeRsnMTmiANHXJXDAxIm86kzmB9TrpYOdreruBmlU8WgSCPUdbVEPDvSR2MKDGdKXkPMpKsdGvRnbTXNY3aAb12OK8J2OlmJ6xlkQnVWcxB9pdqvwiJ6tBpCd1KphVezNRSO9gM2rDWJaCLvS+d0qc/0y3ft+3vwdyqbhkZvCCNMZYu8DW0A78hh/D1/pZSguFtokUhTvIBfkTMS6/LO8wwI2ZM4X6fH7C2LnxNDuyDF6rPd9ox2M5mG4GveKiMC/mZBk9SY4EWtvMRoWtCWI+zhbQnefk9C5JjqBn2C6RbB1S4lKag4TUscfoA570H5BxVSzeg+HksysSPUF45/ybD8fuEUfhrP/dko4GzPF92mO36iF1Qol1W5yIQFZK0UUb7i/u0ayPtgNJRi6pP2XsLPtlOHnGJ';
  const _INTEGRITY_HASH = 'fac4836abaebcbbae76a24fb032831f52d0d4d929fb2b443e7d0c3f3be593074';
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
