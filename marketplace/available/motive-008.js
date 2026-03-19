// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rA8L4duBLJwJ/dNrxzVVvM/iST4uBCRT5WaJydogznTR3FI1z9LRbflVnCG83R7+vydspcDSUOyDl09WkRxhH0IX1EqSlqXHl+yslkMfN4sf98qzuA69G0L+AMjYfioVKY23+qYyDvepfAOi2A4RLQIUw94XVElRdHag1nBEh4Ju0oJ4gjsVyrV4JigF9repq1iGnZfyEfsIWCs2keDpNXp2pA5Jevr+lmyLtbZ0L0+vzPF35awusiJ26rRjjIswK0n3wHz+XXcgV4EwMYpN2dYNZZWsAQXVxnL6GUlisOUb/io2F9Q21YQNrFRg9Pj+8FpPHNLKJ1Lc2leQXCK/q52K7cjXX2cTPsfF7ur3kFBhZqBybwKNL/eTbEwjzX7sL0h30O3hmuDmTy9VyLnbFpY/rmWlN9VdpY0kR2g8vU5mGODRLLAOCkZ1L/1qMGP7gZvaszyA/mcoW2OoDCXXUOjM7GM7/oFlRYe77p9yQ+7PP/8tJibBsUtQilvMJbm/15u3ArJ+LQva16c6QfhnRb5Vfz4GPS5YqPtt3hMIHMw3sfgb5uYMq/rAm6Q+s46Mhk15lOqixpKQRUB+0InnYfHAbgeBZmgVjODFQWHJhsYyNs6ndvbWmN5sWo2eKQ2GkGZhJIh9wCPQo+GRXuJiCBgrbQimF1LZ9WTlZGRFfVbquvjiBnSUwyLHWcXMOQrI4Kg29SpEAdJyKc6kDGMMAt/DlqtYwSlP3NcI3ubZ2GkVHlhG6flMvHv7+l5ELyTRKDMWy70zOPsJhRZ0QmJ/gVOWF/UdB4tqw1BbGZsx59rgDlqqdDyU4B97JJC2/7AnNncDAYl8zyaSLTdsbLluLGKm63SMZLCm4VnSm5dgXaLwOaiH6/Zz7L4NqqzkESeBvqc7axaL/0882j4bh0z2f3cNcRE1YnMR3xfke8fz9cob54dfgar1E7wmeAJua8KqfAgIXLIkUvng6awWcM3KcNlvPQxFR1KVcqffUNpBnvEV9VDcXpZ8kHqnyOugOsg+bVFfcMYear0BCh1LWPY=';
  const _INTEGRITY_HASH = '54541ab1fd3bf68920c48af0ae4759940fdad1ce5e1fd0bc71170eb1c2c7a198';
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
