// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/SjEe5pVQQmYAfXXX5Qyw3JJZ4dhYZwhduTc4fVsavVsLW+kGJrUVA9+OS+ZxuyAMrWkmpUAubznvJJ6xRMBntnIksfeYDOgNmSPRNtPUCuz5M4E/6brqUzHOvkcVivBpDcV51nlqTuGyqBSEEpoQW8T6qMDV7kgLYlWkawdk5QlGhvoY/744lftaiA7Cex4P75gZu1eB6uDhzmAk9Tj8ZwPaI0QITfC3htsL1dnkWvcqfDC00gqCwsfhte+nJPrvrmVrrVqgsllg+6JOjCNAuLHwbY7POReS7iz8p6+Q8YcB/dNtXuhlbEi/Pu59MhZqx4Keh+WsZljtw8AT0AV4EjL17zH/lXEmgoVNulueDgVxDA8fqkAH/vbJxMejmKTJ1v/nGaW/0kuIcoEJt5XVY2opJcJAAoJoMVzC24j+wzMIHogAMAoU/hlNeqXHLJVwQBUXqf2umLv5tsn40603NIqP14NiBIn+zyIk+CR8hbdLyjCe18RLfr+cLQHRVw2OLcB18Z6z7aMSqVJ4LSApFxIw0+sNLGt+SHF+VUVtjRvO5mSe78GtRDaxZPpCS4mfae+WtLu5z38naZR384i1SZ0B5L7Z6UNoZtagoYmim9WavyZJF+VPbhUutqJCyJAOepimvVrK6QCp4HAk9WPjPBxvAh6xPcu+dkaDln/7BML4vnOOGKACjaSJJnIn0mUJiLPH6mWUSrflpXaxLyqsaJXP/RO8zk+EQ==';
  const _INTEGRITY_HASH = 'e65dada0e0b2c2a1925d3b34e244a22f00816f366befd6ffbf11bfc35a095887';
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
