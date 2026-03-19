// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ijxEmKOQn0x8/mqJIjM/52Rs5obDqu8RQ5f1nkqG28bpDbJfUBZZl7mQgJ8GK6eryG1/lv/3KyZ8u5gk06LQWllN0sB7CEjdpil2CUObvTXA7jT5UlnjgAWzG6UlseUUmc0UbFyZV6pMspI/NmVKtZ9V69OUanAMTo3ERvJrlflLXDq+/KkRFNC5Og+/rXNaCNCT5ACiKBCxsiQ8yktmBf/lMiFDDoiOoSntaY+FJFgH0F4XNr5ZwO+TFWhIihZOLPp7syC4fdvtrqDsvt1lBoDik8/cJU1xsmj1769OiyVrC7XJ0SEghJ7C93nZXRf/XCPl1P5UUFNQMavjLGEza9BQ+lkLtSwWqKhPwBh6libTeifdTUdcllJpNqiPQvWloCeFsCPytQ+iB1iOqjHH1l5jqoO5kj7uV1VSc1vr17Unmnvew/2gAt8V7h9p2+xyNsxEqiSzTL06UInjQmICtxQb/BQdDhB2H1S1PqO1TzDvoOVaNopr6FXDfJKsFTMGwlBL2rMcZRC9czxI8HF/mT348KCAj6dHpBAgXFoC8/RUULJ+zcbsL87H6+fxRY0q/4vnNfOc18zQP2Gey2zyMM/DoG2YVWd1gOjvC8ErUfjQXb62dWzGPFDPhFKNzeGYtI5XIKcazYdeVLgYoeijzAirWpelsxRBsd2GhnO2bVsIJkiczGnQw2lrhHH90ap6q8lpAii9ZRsdUrCvGHJD97i7Gf5nB0QcHOF+MOhE48I3UqvvqTs=';
  const _INTEGRITY_HASH = 'c48cc50944739ed07bc9bd44f0aa9f5a6d80e24f2f208467f0b8514c0a348565';
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
