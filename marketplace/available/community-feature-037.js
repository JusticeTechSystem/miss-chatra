// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DLGqN+E7Ez2Eg9g1pbmuwEOuLDBIqHUwCKnxeqU0tAOfgf2bxtXij7nkj8hDx0AYU/0gMD7phQ1Skt+2M7KtLsxptekdRQAwPAVxvZObsto8eHL1AKCIA8ZEGSgXISD0613ZP6ByTpOt+V7PEfO95OvoGFGbPLlYcREpPfxLvx4WuD1xG2Jwl5q4KISef9+z7Z1n1hbrsQIOWgle2NBOkHOEROe/3XNiUtHEZc3NqY2a435Br9NbNuU8dRwM9DM9G6EyHtr4fPu1bKRX9ZSxojHKb/Fc3hQC7lP8DJ5qz+8uh0l8RTwyxLE1TjPCms9MU3fra8dTWSkAVrTdZ6oLh/KmICb0Br4IH+tCX0znQTTeoixrN52ciloxxf6TsJhzFzdxEmQT1d1HJWNeHgZZrzu57FumMRndYECS2hAUhUSKI8WktwRGcPjwZcPjXUySllTDHeoRY7AcnazXF1HtTV/A2z38Bvk89TOobAjQiH3TR7ytwCyIiOj69Fw3QwVDru1Ue4XaeBkI5CJEoLMlKQx6619gU8Sew3eE+fifoCIOMVVewZOltdRkqWGW3kv865b61/qeHC/8Un8eJYP2G1Pzfz8Xjh6CpjOcULFUb78ctI1wIU4uKzXkYkjBXH3gmy8kVoN3dwWRqiPesx3KPx25fATq2hZlm52RE36pAzFnXO5sSvyStVHJEOa5D2SdLX7wjHyHJuaI2K8Jzrj2FZF2aT8SJjTrBuuZ8djbpw==';
  const _INTEGRITY_HASH = 'd3d67cba44a6cfbdad2940bda6e0241307947a625b340febad7e8650a6cd216b';
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
