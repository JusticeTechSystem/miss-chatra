// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WNTlP+sG0oBUmAWxRZoy9EiHA+D6qqSnQDuqh08FDYxFp34o2eopCPkoWjkHL+v5B2lHJgZLa/DsHyKtd2kbBMIHhuksfgk5+JSvoLBiTsD1WvQ+e0TW4M1PRv0q3HZzyf6gasL6JJHl98KCNQdPQxcve4uiEQE7VkNqy0dmvE7us21ybEy8WThKYUOuo6MqdUw8LBJuLtDOrDW+xJ3c11RvcqFEcEKFG+Ys05BZvNlVFWZ7cxZc3aLSZjMJsFfC5YlupKMs/yhC1woiQ83kujVdFzyiGItgPeUS1KA4oa601jt/QqPp2mr7NdMxVn8yVDUTEquYorHauJSTU6Kd3S9YYql6H3P/6CjppIrvBkRF26707S+fcKDtCRrvkVETDol0KKF3kNHiXAYF0Va4uqu6ctLdqD47fCoRAE1MvWyZxzaVnbJtZBl+26CC2QynX+qlbD8T3QpIV5eO5K/T4a2YMu1nGvtDhCjyzFK7L9z9q/n4/fv2P6hNHvPxrxdqILKczdDMtZjzjLZfXBXBurIBkIDxLJeVp83D9LR/XT1vmOF5sGloXS5qLadOdunCzO7KBYdRYoF6vZvAAbRHw4gSOIbOaFCtneLfeqFxkgZR2kGYcsoMCjX572Vx7oEmnqWoHbq1z2UCJ5lmxfmA0ZnkIrDffJmM95tuqqlesTicZMtq8RPBEFTcco3N5zr4jA==';
  const _INTEGRITY_HASH = 'df823f3a044ce08e154b33bc37db31a3ce7c3228323966d113a546e65be5e492';
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
