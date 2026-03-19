// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x0eJcaP1tUGdfDE1e/DEtgDAps7bRUtRLfeBqTTtmftfxg68QPhvwQocb0Y33UkxTvHrJWATWOJkgSBmQJufyAsuzIiMEnj+ytuY0BGI4QXghge97PcLDoSkVX8gA2GrWRmNNyUon1gjEz/od9Kj52bdDpzsPkaTxHc4/8e6jQoINxPC8PS7GvrMlx9BkdHPy2uIzhHwpVH3HpnxGbqOESwY9FCkeUHzC7s1FgVoUteYk2Y8UNF7cMyax15LBM++VXNptbu8xN0ZbvJy1zLa1LBZ0McfeCHjEAwg1ENV/bwAqFATaUhKI9xC/v6/v/+FVwwZOgq1ajHWg33x6FS5lat475Oz235O2x1SXyOWaMHylGDlYnE9pEDTf7KCZPz5T3DI857T8Mt9aKikp2njMI/5ExNXr2clFR5Iat2JE6/mLITjajEk3B3kKZYCIIMtAeC2WVbH5JN7xgP6XtenVr2ADMYBEgHHmlDV4TphROjt1ep4UyouixWkzOyFz5fAELqlse5Jndr5fAGdZeKCLKWxnpx7uCGafly4gWSREK/zQ4wDgIbUG4mJNG6+gIHEtlWweAw2ziK0icKzIFeeAC9EtJn5GDG2NB8I5ZCNsWyIZOp4x26Rkv9bl4b7tuC6/I3BpYQExHwAA2tiboIddYhmA0sfCixjvrofg3zJtWE6nMj5S/p1WmT5aDg+xK0belb1IOpV36WycvaEHiaYlZeYYBTKIRYJEjsC20mFrnGQUgMfpuG24XBqxxhHgipagbx++vFjqe9vIielwn8eavZ0ZFg9K8koDbf8+oexJq6Wx9a6n4tggG14HSCWAiuLKcmK1hgaN9Vl9j/2wZkp8mgbTEYAFHod2ds7rRVnCGlaUvDxelh6xyetrCURuN0d76d/lC0j1Rcmp9k9/gPYIb/NKjpCtg3rCIGoa1+5bqR5bQPEi32vg61sKMyy+LsgE3kg62nkAYB4VfDLSkFXmtrB7WD10+/wQ9Ulgqyp+jhPGUgys8GRUbWxehwDIdQDwMZoO0Es/k1/kF2oDd2ML2WUMYt4q08SnFIPc5Ye6i8rl+humkDFObpdvOOvIUsjhbCOkxsPJOKLTKOFZ9kHP8dqfgHPg0/ZDS3aa6VCQ3f0IqhusQF/V32wKd0/aEr4pHo1t/uehW2vDtx8YqhpiBmaxzYcOx7uT6QiPW7KHri96JnUZ5Ep2uI1NeKE+LI=';
  const _INTEGRITY_HASH = 'cab1ee388f22136d4992246682a69ba3d56d9a97c73539c896eed196392903f9';
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
