// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S80IwtLL6IVzMYGCSrObdrBRskeWgT5yBpxwvgc0YdhMWOvwoKRE2NN93xgYCUYru/8bFS4vuBYDLV6pAkH3GVjI0wMsjKh5PUpoM896x6qvCuxPK4Hm5JIbgti0veMf2e1yZiwJhtmEqwCnJ4MvCSpINQ1w/aufgHUJsxgTSnjsPfamwgvVj6KpFZGgXDkraFtyLDuozldOgPJzV6TB1wHQZsAj+S3jaNko8YpUFBiUl3Mp5cBNk0G6UHBZuu21OtqaMEzSNBXnhiHiZvHLAZavQmUkWogI3+VDgSa0St1rdXwO9GJMigptep1UHlM45n2pBa8P9bTTQvrDE5S6Fb1cPEZQp17Rz1JxzyMkycu2E/Ps8eLhyRfYWvFLvLD+nLJ1jf6O3yYUmdb76sObITICHsHvcf1+j+wGB5lUfWAlVDipjbJ/XTUl3/DvBcmmOBmqaFgKfMn0XC4k37oX5PFIvPUGhKcnT3Yyqer9HbWlJz+9K84sEx3Xg1Y6rCfOt01eZ0OBpC89ZXSkB1D5ZpWIJN5CgsmtbZus8VsrQhUB9g9TlEeHkKSW/Uj5gHY1qDm1EgzAL6qJpIiOGM8UL76c96uRFx1KBGoo+YbrORYok/KNh9fPb/oJkW/MSfvVrzUBbhPXvAi4Qbn9Q2hQFhAimMBLn+jYNuJ/+9yPL8+ULkqu23XQPBQ0pca4kKLtJlAAECG+DK0rjWUujrPhW4PQFwqyMcoevQwS9l0WJPQam9jMQ7HG6vs2J1KoMmKb6pcZ3qdv3my6inTrFzax+3G0IpcpO61hsSLI1GkAJDh+Unz+/v+45oJNzEo2P/XYEr+TnBndWIlDbxf1kdGJdAAhgbKL4Wkk1PZ/DZMmpk12l72XGJ6178rQBXlhmglvlSI/mAr3VP4uQNJ57GECTpvCmAA2qxV15lwt1YzyxrC3yMxwZvw5WuG6c0t5Ez6c5uE5W7RizsQHF4h50KXSCbNTtrfYu4J+EdkhOP+lAH6W69R8D2ltTet4V8Ba';
  const _INTEGRITY_HASH = 'f170ffc9dcd377be9fbf90b604c990a2fcdf1a7411e4121c7c8c0196c607ebe3';
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
