// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OkCHu7aZjFOJphOV+iE1rvZgCaPodLKN9rYs+rk3OQPQ/virRLDqzbo4Zjbex69yZkF/xJJoLjG0Ryg0GTf2WuN0q+jCRJnce4ZKN11a5+12YLtkiGmN6JOITJFwBq5csQhGlJkY9bCfXQlouKENATjL0BdRIBfoc5M50YeVSx58r+0wQggxrkqRBT1kBHLEgyqyMgeTOCZNjzICLkoW2EP9EiFJJ3+zuNGPmd/+qhazbvbdLMBDK1vqF9pTSKNVkZbFBXbYH9itjCgDFEkKRh5FHzCegBjJ/dW40+UxtgKfwY1WAQU2sgejm8qWgB5o7x82fT2KtHmAI3Eoa2luAHf+vN287ucePlfi24nnT7Iqk8o2Tr448i2vn84s7L/67/XsX/upX1u4fKjp80t/jVW6h4DHZEtmeOokY3LzBe3sa3S8QSEmBzNrDn0s3UNYMAsUATGYcnG01C/V07PtplYAyvX8tgm9Mt7+0YlifXSpQgrY0d1q0QWlzljuyKsXdW1QgTW+rxcs2PVQ1dlqs8vtaCFBtSE8K5mV+yaXbhPzHYFJ1NWj1KqhvJiNZCSwyF+3Tw89tKmvdFSh69izuIe1QNXrTSSaMrkfvC48a6rF0mbgjHzKhAHpZO8oLVEjAyatcXpzQNofagqwfiPpp5S7XfgJOWHMSrEfOn/ve9vHiE8yy/7yma4SElQdW1eMMOvqhSQ/zpVDDjJzoLpsk/LgQaWsbRsjwRidbYv3HXiz8MsPvHQNNHXt';
  const _INTEGRITY_HASH = '0ad4daca837314d87fa39cc6940fa1f0dff044474e83c412a2b17cb1ad4fc25e';
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
