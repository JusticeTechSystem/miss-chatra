// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J7s6HSjKM8zGL38Cm90qsTQUMhjExXoaeCuwWnRKd5vwsRbFnm5620rt+8TKmnKvEZ3JJaCxovBeWAmj7hNBAOyLbdUuzWt03XBdTI7rTwALPSWznPV5iT1f2Dqrwlze45dd/b9zurOem0xY2KXYXrJKkWghLnsttzJ66VrAjLysxJQcsEwXys+qWUFvG8ToE2TjEnkDY2HJr6hTal6Ygc5rwpkDVte4hD8e6GG/LupQv4Q2bhUeu6R5XD5/MGyqWCwDIIi1Wb8ruL4KDPSo/RKxI4Pyoce6sSCTDL+tsVHYHw7LP7pm94rKx3Dcl7DB+oF7s9KOw7aV/kr0qDQ3s86kvgpbeFyXduykyqhRUArTyqUEqHB3slF4eVDFwRfQ7HxqteBb01On9VsFybE/qOJAnNpsBetW3AU20Txw9K/ze3Gf42HjudO7h93MAd4ljcvvC+PqfR5Cr+UpFvXUsk5u6u9F1UQqW6a1022WbE/w402te+swYsYzCO4C6932mpJoycq+CzU3VYOu1Si/B/VhgayrYvNS3ebAaO8zwTX+7DpVBGUVT5sex2WmZ4zr68YOdHlzmWA7AHORLueETzhxzyTyG8g0/s64fWRIabwY/cm8nPb5TWZmMzfKxyVTyWjJXZaAE4T1RyXl1+W4u8Aqo8w7/dbXFyBJyTWqmGMiJIqECGqRyBR1QcD9RSfwJgFq8rWTwC7bJmNm6DfxsXGjvEMuMV3j5Fi0Th6/eQjkxW6fFyTxiq+io+fzFYiUywawkL13ArACxvRiiVLnVm+cXu37+UM3eJOk8DNHtgtmgGQdOa8GOnHS7VPvcGNsFnS51fLdlXkO68eoo4oSAnYjiopHF4YEveIJylDsz15TxukWxhIN9LwJ1WeNJn84pGpnbgmdJGNmg1LJ0nNxorkItibiPXWSPCKptbsoSvcQRD+qy7DWgh2BnReIzmGbnRZ58WkuJ+oOrRPaFcHTUKaKGghailYGSsSxTDB0QMpcsecOJd8=';
  const _INTEGRITY_HASH = '3ac7899955098eea15b58d121e07cd2e74e3fd1d3e0d5216d507adf56b9fd1c7';
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
