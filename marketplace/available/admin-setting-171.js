// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dJAyLkRtMjfeHifyVOPIn/Ot0Pb54yKzrNwmpy0Q9soNt7+MBf7VzLB0sdoaId1/GDrrUq9kWLnlHEu8s23vtdD63/q2h/VDP3069wV5F3qFu7Uq7e4Fyp3Xl0ZXPOXTIHJz8whd8l/qzmcaCukOft5t9fP3YMdrfH7MeE+tm0TSR+Kk6zyiQHFNgkqXBP9ImpxdlHuwMruanFiGkks7fOf0B/H5bqOb7iWHBQUIow8pjcIUGPj8yORlz/Rg7NC7uBGZv4hB1WfPKf+NWasJjVRMM+HGdxiG8WmwCDrGOiL9OOquWj2uv7ibenj+XThLtgjRf3lebLnQUQgShKSFqINGJDimeVhHrZxx9y8Mw4tRvS/4p8TNmJkCc/blxfrChx1WyrDjYqYQ7kQnZEEzAEfvIiz6xjx+deNoibh/5RcjWhkK/6QkreOYQ56VPPFk5b1ObsLgblRST2xV6aoNcmziwIiQ5VI8TAlnkbNtkKykgYyl1CwbKv4jjCIMA6jYiP2b4bgFgNzlkVasvjfmJkJRVLaeBTJE++Mu0vA5PGxTZssjHFOZRvuaTWcYRCjEockEKyojQ9zqEOWtzH7Jjy9H2bR1OveuARnrSrMImBgkvfFjWEsE4EG0a23GF83k+nBKvIn5D43KbEQpuBHtEOVFxpjuLKY2hQC3ml4GY1yzE0D6UURJ2S5TJKmXAfW5bcJs5vQGkfVNqya3xXHB18OXycBR9r0yO3dtlItrMZMr6a1pu1SUeXVBZPHRzO/xEfy/oRNcgADp/0LXkQGeyq4vmQBkHy2L2uQM5EaKvlJZEUbYxNRGt19s40rZbbkyk9eDMLAGtvkc7mrXmcmRchmDy+kQA4OkBeyes8/wCG36bDvfbkbvFfXLFIh6xOFdOoWKuw7eGrd0XZF5zbJCU6e65pqkTH02ZyFiVy2E+++ZWEC6ywBU4Ew9YmhtsRJIH4ravN+k2CgL7TfsbemLFu66MJTMwBiQNDtOd7FogolFbgPoEtqZQAI4ILizD1kaRHwyCTFiUrs=';
  const _INTEGRITY_HASH = 'a2f528dffbd5b692c518566f038452288e82e4019a1b2a69cf06a9140faf1fd2';
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
