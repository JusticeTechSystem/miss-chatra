// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SksOoDz34zNivPwwr4AV3mow2dv+e/njnm6dGYmaldfnBOvbetY2zC/Hif3aP/7zp7oZ1HCryqr4S7lDmMe29c1rjiCcjdhAqXLlWzMPzDIyn8hd10ijnHF3YChdZQX/qga8B2fwuQZ4VM2TqYaT1Da3V88qccwBa5NPNfTo8nV7jWxqCzrfGuoix4eYJC+urDwkJy9BMnL0DNjQoiwhO/DAIzZ5yr1eQwPKKcVcAp8frwFFSpEKXFdw7k2t4+Z08JF8VrAKjEwySb4hIQUXwamrNswhnJw/ax+2E8lw3pJRiGWzw/4sFBN7LiRintR4BcrcKCI4SyskPUQh7ERrOrM2/HIXFswHMTxZ2/2g2VL49WA7dg62UgNEhaM+2ZkdlxkoNwF4Yw7IVcWSfUkdCOZY1ZpbNKsIQoHiIkqnEARkJ+2Uuf7ABu7vaO2ery/3P10pk7QWIlq71DwbXTLJyjyQsmmfgSjD6lZYrQebkAJpx8mR69jfDv7Wc1zv3Th4KtmcFs3iLa9o+weg8L/4pkOwUFWK/jSKawTQ0gHNfoo1ieFxh2cC/r3HAFHat1fbFNYM3J4zdGzLr594U4Bd+6rLHo283NInMu/lFuvFfeUIHTWC3p6mR7i2SJCjEqfiR6E1rOVMoyWEX89C2UrWtxgweRk0icECOu63OQ+p7UEd5R00ea9zlcCjeJhDb0tcFHy/0YWv8VvABNY=';
  const _INTEGRITY_HASH = '3189074e465570ce448144f60a61fb744c4bfe9769290bea2327daf292c7f6bd';
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
