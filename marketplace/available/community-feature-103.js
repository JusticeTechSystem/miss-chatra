// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xVFtqIh3mdw9hFLpi402SM7m0yXswBKKaeYBo9s7AMHK3ShoEt0nYGlKpsMZ+1hUBjWSsntFsTjTDSdyl8Jq/WsBIZeo0fNEOJR5kDgCdINRBmGOb0dFk4I+XiYejIS6Wc87VFDxWTxu81vfpJN0thO66fy90Oh4/VyRDlVKNkwVNb8VkPyEVVOSvhlpPg9TQFjP8eJ0ObPVPQQ9qC6bgWnRo+iNqkgd1PVi7kpEMl7NGQ7WTn7x2tGPGIpsXUb/Y9dP+G1XYQJIAZTanJalnrbeqtDGwvZfqC9azdGAdvFXdD6NVDuH8cZWosAH9kNevrhb0H9syUyOUx8G1RX0wQCMUjHGHNmQUnmnmoYO4pXWk6qdDdS7c0fJTtfa/ZWr+WhD106vF3Rc8OymFEyL2hAH3z/ofH/X+ZlXtWDTdBMzo7+WccdFmKlUrqkVQuX4Gxx8uw5f9V6qwQcBdwhyTIBeUFCkO/VAwihWXaP2lrO5RZn78QEWu0+Mpur8ndHAbKEGLrA8lPP5mPMCfU4b4swA7Kxh98+rmvlKRodxlku63RAgpF52npx0iNQdIFqUK+6QpbKgGGM1z81IAfWVPxSkEQeoeLWkmOrucCxaypn/5/q/x56koY/eVWm7K/hy7jvad2foikqf4jB3krMktry3V2wadHGEBGymY88gzKtWa7L+yw/wwP45AS2IKWkxCqB5fzwwSA3rD5mZrVuZmingqWCBj+Y/zsEOcI8=';
  const _INTEGRITY_HASH = 'd5e8b75ac015ae745055214f99e17d379ab7d132797b080d3a30150e22bfec07';
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
