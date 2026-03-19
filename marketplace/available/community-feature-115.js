// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XndUG5My5j7ZhFCwMNCkSpM7ZmsQ4+lwej2krKcv54JErlY/rxo7iWEfTAlfnGhKm3RkY2QCT+YBBiPj36g5OJ/dYpjCqXpXUAO3g8bL9VsYRGR2Sh2sS2zJ/NWFURmjPx1GD8qTONosx+4zThmm1qIDMo0pnWrtGOl50wqy2lKEZ1VQgElb1aNcx3paxf1W6Mmyx9J6b4R3LQzJSKOk/oB78us4M7SE418o+/bNL0HntD6/GC3rX4ptXWmwT7fUmVodH3mYlNnr7rKNAeFV3ZZR262octbo9IOQ5B6L06OWUfgr3qyuvYpTxp6N5S7jo05q1OnZguWhSCQLixyxjVVjjS+K+dmfGcTmbXCT8FyvrdQwziZBZAFuKci1KlC4/4ub3gvARuVvRQ50JkNjErbY956qeKSdC9xJiR58U/POLJ3UEzhpIrYd6cvXxIRRxo9vqLxie+pfoR1WOQ89Z/mk5/9LtvvDZ2xsBtnB1JEPfkEH51OV7Qr2Qy37RyiBKyf/249SWH7dCinNS89ZgcTmDtGIS/lLmp4TXkDgiFHQ4tIQzm1xMu1zw2o1ZVFrb0olKrbEhSkESTkcfjFOmZNYGixFvCCc5o7spIgmLJud1ZDhsA7Umm+gkLySI1i56V3t+ssChhAnh1rQajbaMLSidIWCM4iQwbqbMKR1Y1DGgol2kn14vJK9WCA3nPt9Tb4FUGFXN2Iu/ej67AnzOuMtrsEM6y8Rieur5oayZ4L3zeaiacPPO+IK';
  const _INTEGRITY_HASH = 'f54b8cbb07e4ccd299ca36f870203562fb0390dd7d558dae55b70f448fbcc8d0';
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
