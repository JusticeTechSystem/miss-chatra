// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'p0SfkAchsAknTDuD499XPKcFQzakPqSlXYwXNzrd6s8oh/v531hr1BSVaVRXkmSmxpSLkTuIKa/k7cKf8BTMO2mkw8W7s6lY2FidAa8L8IuJ7Ty06HrxDpdJVI25VJ2QvjRbkG44LaanN/uaMjfQF6o1mfYzmKc1VHitHLVjr2ylL+HUOX0fV6MW6yG0pEWO3eyxuml0IGbQYcuvCON26ckMIYOgCXd+jxx4LXBeeF8J1XVJwhVj+abc07S0Zv8t/OafITS5Q78rpWQnOs6l7owLGMaIwERAkYB3tpGhRn6HdIRfsMH0n63peA3LMYm2CiFNEdUcFhdxfKxKJPu1mJzI5GBWKy3V4XjEfYcA/15EoAgD+nDM5GIXk7GlCL5fx6cEcENemSuFRO3n+9k7Ad9zGeQqZqrUAa46CgtZPkz4zSPcxxjjlO9cqiEOc6JS5hcjzSIunvYHFbpsbjoD1B0YJS7h5jBjUPYd/l8rIGcI3nPoAn7dqTEKh9woXvKHv30uzBn0zgsMMis7gwDzqcD2fAnRKTUq2VowrBLgNkFuzLQCyaEvh1zycyqVDmOHgmLtcS9ZLSOh+bNbsp3N0e/mGlSjRM6A8zyA3W95kv5xJXYWAvaCldwhDCNUuPClNEt3O1I+/60SuwKqmbKrMhg/4+TKHj6hQ9MzZTqxQZjq8Emmg9nRmrO6A6il959DwRVUIxKQdznCiTm+l5kmkqa5VRpyQzTJi9Ofl4qWUes8MOcLEj935yne/T62zjSjHE17qCX+Vo6rsoREJ/lhnJzOmfDPUH/5qF/TmzY5zPvLpwCHviKQHn6sw1mLq1KsSwK5a4QtzdcJu/pl3xk8pZbtVV39SYKGYTCWH6ZVkS+dZ8ryArQ3PafITUH64eeCGKad8DnD1aIo/snKsStetflm+BuiJwj13PpdBCELfbhizUJNFOiliZBDmlVPCz1Gqwh5qtx+Dkfja2Wc72/wy3n3uj8qaTvUp+j5ABbdoGq2uWz+lGvFyxoY7I+RhAGKstyoTPOXwEmf7DjCvjVYbfbo7AnQSC/bmZO5QnC1yRYAus2foD0IRFmtAYQ+LaKxWNfIQOhQvD9MGZ6BC7kLxBjYxVx2LdID6oQeyz75kdunyud4o69/oYZf2pzTfS6JGq5RbJu7Qyf+DBRtzGGyk9Jywvs4a+OH6PxfcutlJKjKaQ2QgnI76vcVsoX1XEQ7WgPcP99B8Is=';
  const _INTEGRITY_HASH = 'cdb124c3ad8c659d8d43a741e0c21dd5483f94abf072199ed9fb2e9344f998ef';
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
