// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gmqv+rLceYhB1AMNb//aq0c6ST8xR724yCWqCoprpZRhTMhavIEHcqEZWeUg10+PyFhfWoxotZ7IA4mxd+ABssZPae0ENMC1BuyDZp0qfEUi83LzZkkYbpPbgfaaI8g0uL5pI9L8dmKa8fKlMRE7N+e7GautVEi6yp6zuKi/OH/831r5v0B6Z0gs6DE7BQkY+GHYRpsPMiZzSu3lPgTT0cARFa2myk8kfE/pcB5i+F6KSEzDNeuU0amJ8JJ+L1gXH5GnH5vnEoPNjuLlK0U5iRHnHVOtD1bZCdluRwXOrW3yAaxDR1MI4N6pCrVzPlbt6h92tSJa4S43C45ubzTfrLty3jTDktRVon2qa8HrWpcRBpG2CGOkdThX4jIGjzojEdmW14hvqW1vimM6ymHQrnELEDjFeS1gfIqvoRrQfS6Pz9gOqmLHOQ0cAJ8u2dG1e/oapqHjzSKvEsgl0PkQvHMvFtuwAWlfqOYQwsd+X0Mcn52P2uEewG7LRvDtnfaXMCFggSSL0sN6O1Ax6BOdwLRVu0qS8zza2X+PdvOgxaGuz2ft9fKApjERdJQ6EYR4J148P14k66Ruk+oJquDMipwup0KxxXZbJ6jWwXm9a+GOD6WdEAvXKr7uLFr/XWi5Me71C2LiHFXjQcTst+1TG8RRinGw/H4CCvo6hvv5lMvfJAbI1pXEIT9Lpu+YrTPnmNg+oJdAjkJdYBCXWJfccraGKXh1mUdw18s2eq8xcZ1o0QrS5NdwjdEfNHwzvS4HyABMYdWNQrPvHqNwOf6pErg2PsL0rSMVu/JqbEcTxLCLH7C4WKE2yTPyEEPQPIA/osjuU99fyzIYHJ+zenaNXx1oz5gTxvU3ZFU18KOc+LbmhgVBTqcGt3n8NE2P+tYxXU+e+Cu5awbSWnBIMBirzguWwCJJdLHSSZnXrp0xwxIALndPjMZH+/itaNp+h9ydIHP/dHBxpvnz35H4/BCsNmpkB2u0eahwRZsWgu5agMFsXCnV7N3P65+AhHg1VN6EMEa+iod4nACAUq8Dgq2N81HjDDuNhfkkEA09oeWd';
  const _INTEGRITY_HASH = '4541e1b76a88b2ea5184a274a426d0ac1d5fce7db7fafe87eb177cf7b11c27d3';
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
