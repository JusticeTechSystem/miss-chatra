// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jpn5hupy4Ob3/H8uQ1GUMZ3AmppZ9rYpXkr7E+xva7NE+ni8sRCeh3QoFEL7XgcbQ6pyTTxPqldPG4h4bzZXBCuCEqhlm8MZxOQ8C5UrrBsHZWdMyH8PCWgxFF8TIDe9GszmjB+bGk8Q23O3t8xB/ge3BCwnpbsmT5jMD+N2S/Jdk28cBk2RpSwDfpGR5efC53flx6xpQ8H03AE0kwL59pQsH0j/Weem0sQ56udyQtLryoik26Qp3QjE+xj0QBaa3UtIIM//mGKpu0A4itBxHcKG5ynaUqC4DMAY3Gy9AJ+/6fN6Jm0vKJkjlWOQBMLg974gXDn8tDJy9iKMqAg3NMB49KyvppIajJjeRvbxNZA+Hn9ZlFJirj0ejCoZsO4UCIWYF7Hk1jLv2VL0yood8jaekIMp2P73S2i/0qzt60dw01n8QffZTjHRWjRWzVMN5sKLy1qjxqLDfBgnQFLumIOZOLhh9Y1tjCpCQULIhAUtjfUCyu9fEY/aO0UsDjS2/8rCflepDPVvuLIigOaWynoRNXx9lRZC6QtyGv+vc17UeGqQQH02HPRsySBUQG36DeU0OoLEedKS5rXvyblnTrCMqnCMRKbGkcRHyBb4JGrsRffL2ZYcNLLgOAjsB9POQXFFWazgqmHixKweQTvV/3DWOzF4x1ujQ44qEU7tJccAVefwLkS8ic2PNXWuxCFE6trlIPAhZ0m+TOfGVY8H/jc=';
  const _INTEGRITY_HASH = '790388e6243d1bc95305d61390e04fcdd78b8140046d97385256ecbdc3ca4cd1';
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
