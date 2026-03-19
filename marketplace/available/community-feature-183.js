// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nigtQ28Wf6clCClFuzFtvUvko+pUXOuBs6eGwvOPm92F38ZEOvm5/WUopIK1bR29Yo8OXzAW/ebL4iEM8uZ3bEoRPTbBvEpzVq+EhetvOSfhnUNZer/Sn1qGQEcf6vpXz8qXU8Zc1BWR4nCcKKNzS+cEJdtoNkXbOfsMfvY6MHd6adxP+HPy8GeUKlnrkZnEa/A7dt17IuUfXY0+cyjO8aDrEROazE7ceYG8AJYXxQY/njDDt6Hs5sSqzqGseRIl9JVoG1yWoGwIfof9VqNCWpnYE7fGXiiZMzDv+yeo+nMMfIez4CS86ATgrs1/HQb/hDpeg9sMrAPj2c5OGxmoZnN2n083ZiYVUQ03236hPQpjercoAz05DQxyY4Rp2nYfk/zKliCpGp4hmt4l2Ltf/4UiOXWnXhzxd/HhZl2BVe9wumZ8/d7ey651OfcVkJ4TWKK4tKAKXFfpRNKQ6tY7q/m3cWaRg/VH45VPH3kytCK8AcTYrc0yvICmkAe/eYBfdiEgVJ4YWIRMBqfsxupmcbtyNFhdsMEIHKXpTNq/H59wUowW9zF4JYhp1S3GEukCQvHC3YAuQlbBDLIDIFtr5DVPQRRG+wo5l2Zj0abPw8f+8Hzq2uMymOb7e1c/oiF5g2vbnRS94MQOzaB/tz9spYWDgi5/wjVrVcwzEMce1TiKE+YI3jziR2PIAGL3zmNLpOxSzoiKKEXH+F6pTk9wRICxCssXBi4187/T76E=';
  const _INTEGRITY_HASH = '6ece1bfade8166487f80faeb17de7e3bb5b9bb2ca5f38636714274497571965e';
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
