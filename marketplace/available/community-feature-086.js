// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NTTm0iWF+75Y1oeXKrFfxVYT+X/CVWhwpGLjaPW84qtUrYJSGMl88ljiCKf9mEewRFdtjcW/XY/TfyvtXWqmv6EXQifafVoxMTImV3De9sjSje4OUpPXwIbn57TDyiSTfEffPf8/UreQ75N1Gv1O6H83GCa8VGLsglJMyrm2moXSULESuGt42SbPAhIdtoJw9xaOdUS5PrcTyZABamyfBt1DHbyHPss12KMtvczjHw2hHzpPGE4uRmbNu3znaU+GmU6pTLWmg4Z3SuiR4OzZ7ErxtBT2vRKM7pcRfW6Ught0WCq0+MciEBaOc5Fr6L1E5oZzkmIttxGet1GCqSCHBEsaGEXyeRXGf+R2YaLaAOEtfcP6SAZiml5SHaZ+e1hwVjWJpKh3sBxviCe/ClFoHCzoa1AyQz7neLw6aTsVfAZG/4M/U8YpfT4xYcxXXi7XEHY/INbzA7UVIOR7R01Z8pJVMtsOTZDufsTqP5QblA/zQt3tIB1dgF/ay1jZG6jMsEPscQUgut/tTYO5rbF7OkbiV9mxihtoH5ff/gNefi9uio7A4R6qK32rzbCAFBPB7OakMyUN79WFznnjt2mZDD4kO0rqbz40Dc6fvYwNqd20LfPvCjQq0h6Usy+aUpSomoNeN/PVHCbELprOFimqOSC7/IHAgBMNpx2E6bbsKTudM8XOmZJtuvJG2kUv8Ou3Z/MsOxF9mILfJp9HRgq0M+7ttlQ=';
  const _INTEGRITY_HASH = 'f0c7e6b6b65e83c205c75c92a0bc0921955eb0f4cccf2b37f15f2492b9314ef2';
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
