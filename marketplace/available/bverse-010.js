// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B3WRZwPv3SsvlmJYWMvkOb6tIWApjFAX7+lXruVS7gz1avGj7rdllOwgXEZjGL1M/aHFUzbha9OM1hcCFZr9FISHtUaB6HWesbvGwWBfbU8w48c5ZIZW59+LbbPKZkfdPC4d1wOTq2BTg2bNeI6lUSP2s623aR+Wp9/w0fPdnSlwqTk1tIpv5t21EZvVWXYv6SlNrS/Z1S+EC6YFzxKTeQsDuYOgtIvrotdvfG2TK5cyevvwHduuFUKo5RHvmf3l7UyeQa8F1INvYJDXMwEPEdOh0ifl4RXJYmQuAioIGjjF+JwQ06k3aB8vFIzDxsRGJYX8/sFdGsixWrdNjXT2a3QaczBrUKezMM+Aphc8HKKV+IbwlEM4G8FWcGWl5H1FMduizmVgLiwhM4Z6MbfL4FHFOdpKXGIEmsoNmfcKM6C6KpIuNqkJhHS7vWYuuVbeMCcl9h1gzfy2w2qVYWkVnKU4jkIrDs5lR6+XtTK9VJElULNvI1zhCtb0S/IQ/EZNp9zALG9iW6fqAtNtkteqCz0KdduNYDIiWf9sP5uS5eB/nfEXUlZzavR8qWsInkSTusvb5rN4EiY4sD3x/ibQXf+3s7RpteZzOSHojObUyROF6aCooF0JZgQN0S2hYRvhnVw8xeDwj0JTLCmJOnxVmjF6qno/cord0ALNPBIn26Is/6JWtgLYn1zGv6xxpa27XeQv4c7vonb+sIld2IlYknnrrOrwww==';
  const _INTEGRITY_HASH = '625e759539c5c2d89800c96edfd166a3dab8e63777c93c1012b632300e034d51';
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
