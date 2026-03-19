// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sQ6bXx9KoEBkHUsDcoMA0wFUHQT2SEgGNFIaHxNDDDYp5JwcB4QkbFb4iOdqlHHKXI5eM/ObzbMLSpFNfAEgMVrz9XxqT0gd/66I46qNSGwnUhJoZoTIfbiQzf/WZgBF6wlpSMjXvik50NgagM4qqSIADsi7AwOYT0D4kWpfV4sqz11xtIzJthUwI8u7Sdpa8mVCWTCmMMu5XuUwJl4vQJ4qR99uzqYECq+b7VGML7dpRlU5iV+RlgUkJlHTm+Z60/LGxBxqWG6TGEJBa5NSMjdgDOwzIvgvdNIPdfwpKgWZy3Lp0Z29Y+I356Ql5C0bMNCgLl2Hp92xMaenu0VkHBjKxE/eDU2Xc7ibkw3npc1PcWZIXqNTh2gt9C4ATQbr/L7ZoJFGOnZYISbyltdV5mLzU9iOWIfAZ9EsVPAqqe26dbWsyFd3xfJW2A8oFbhN5NmdjNOHn5UIF/x5wSlq5bZZwPcflwfHmmLOvBpu8w1CjV7zAoGMny9odhJDqxnTcoy8p/IMG+6UdzopIkcSENURg3EhZlwVTljKRfI9dfmYq9C5mrQqbMadlUNn6loqFzPuOlccGQyLihvJAVdEjT8CKtD7FjtX+ElWW2NG0n1x81t8GJ2WQGebYBa0dHBg3/4OI4Pibl2bCNitEd7AcwQCPaMNU2EZAjTaqvuwZfl8sULlvHQmGdxluRt0/ZIXYNmRlK9oHIc52IXBMjksQf3kbEcsad/Mtg==';
  const _INTEGRITY_HASH = 'ff14752dbe7e19570f0c1ab0998faa1f96f3f992fa0494023fd93249ced18edc';
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
