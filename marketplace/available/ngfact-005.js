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

  const _b64            = 'RZ6bxsofl6/OKeYTv8sk461LyOTyWCgYOnPCCyxb+n7Lbz86O0sm9AauYXFARxbDzGLPalXguopfuTOHgvbbrxc7D2aZQiNXkDF2A89RIBkIT47E+M9i4cAvYC2QipxJR1BoKo4mrXFg3W/rfMOavYelLsfMB0sT0bRg+RNxo9HIfaITA++QzIx/QNAseoDg5CyreOti3jjUVPHuksAK4r+f6HZC9VqiBGX8yxnd5x3Mhv7FLdbRGoDNDJx4vkbonuebvaAOU0nF7OU6mdJoQbgER9V1+FCi4GDEIkZ8tRycOL6zWvXIffFeSgmInFBm48AidxYsyhX4lKsU5Rcm+X43DBmOL4rHGy33X3fMKcgnDos+bKCkeeSvgNMn+1gpmpJsEUgNykKmCWwiHlb+yxAD0M5xfeaevtkRUm1Zn0lwjQrhwyUfm6e7BqEIdg8kZRpheBG1Mcc4B6xJ+ua/j5a9sVGPntcEH0l6VQGJfslo1k9N25E7cQpPoPLLsijMi5dthaT75vdL7ZdxcSAAte5wOvM9DUCfWJAYhnvomPEi8Rrgwl9wXXZVULlXIsFuqkMV9AIUiqMCGFtS0ljFAzAc2AecA/iMblkk3PlYjNn0YHMj0WwBjcGR+SgZWXdRtZz8XmBhMNiohFCKpzL/QJnhOFIzztLYvLYlEnYt/lGi3M0a1T/Ncp7+/FoJwEg=';
  const _INTEGRITY_HASH = 'c032709ca65140e61b3497b78849b8d340b4e329099422a573f1f177456d26d3';
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
