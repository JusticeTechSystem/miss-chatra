// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EQO2y9hz8TsNSbYkXov7KFoBMVFjleVZKusJhl/uxPkzTFFHM6nO2KLn3GN+OnS/Mods2YjuhSmrzblZ5v4RtGxxwt0HV3HGS02atPT2MNrO6fCyI7NnhM34Qny964SmEwvJvHlNBs2scYYdvo1cdQgUI47tWuGkvrYD1a2hKfvzgIneIi0pTuMujKJiNo9hTwZyr6YN4psHr5NH5cH5bnsUZgQnbTezeqKDa+HN+RO0cZ5X0cA/djddhcydeCeXqtJ6a2M2KT0RYxyZYu0x7/gSQtD0ucVs8rrr7D0lbt3+d0PpQ5LdZzBtOykS6nhQILQ2d+kU8gYgSkaoezJcaGfhbQ58XH1bbPvvO8VzG1nEn/ywLCfXnW1ePossIJzp/PZFfLo80SkhPi61vNqYPKcx/c7PRg528dHK9wO1/xfiGLZSaMtV5PB1O6JupXD51AiUE9HtPizNCFGTanlZTC5tF169gwLuW7xJXbY0i1X0A10O2aVEK3yZkdIgQQe67YJS51aT2rjZKkQ/yt+BUB0GmnJYnHhJqAJNzGSebHv0KJ9xKFbP7t6vCgImXxX3rkZUyFW5i3yZWfW4IWzS92f1gM7nC5JdsVCXlBTDYuB+RCilWtLBltdYv/WR31xUxYqZBlFsSgxOofZ+wjLaL7XNms1M+Ffh2A==';
  const _INTEGRITY_HASH = '624e78d75d8ceab522bdd7b8213cea4eea35cdec5a04a6807c2a36dbbffd0baa';
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
