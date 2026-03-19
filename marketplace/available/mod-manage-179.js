// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MGRV5oZAFnomW0NyjRA42v4YMP3Qvj2fHKEdAwwLmAJhcsLK3q7LBwPo1al061raU3ht3iB0plF8ewtvxGU/1jlAlsoKzLjtVCScUTiuDJlN9YDnBf69/+bff48QSNLyS0SoGTXyWGPESE8QXWSNtJ11rugZiXi1AinTnwkMFa3LNKfyXBJ4l5mjZiNJ99PbUfJZ609cScZi7yo0Hye/HG5z1MMswsMOXNc6YaFI4DQF1LnFGKLo7e58qVbruICwz+MkhyjTbhQj1xFkUfX1YlCErQWFFqDftbnjWX7XUDMcosL3Z8NhpN2gaHhmoY2rJDjHQf9wXBkcY+s5cQpuAsAJIsR4siXMU+UBOcUmMBoXp6nO6BSG0fVd0es2sS3qljB1dk+7IgC8DKeFm7+dBxKpWpDkGaCySvcKHz//NkDTRQcXNLbiYFPxKBYAY5tdMjcX59KM2aq4kb5YB8lNXtGrICDTKaabM7qg5ajBKXMsQfb2W137ctzbx1MK5lAimCxqwITcr+64QJpp8wsbWNEwqNQQ9k09WbWUQ7n6gajuVVpqgNIr1tC+XATyGOG3vhqUPHASkpXMH3Asg50B9sQADrTWwCM3mv5g/u/LP1bTf/fRikfVMh3pJJzuUIXlgx7aF0ugfcq/Txv+JCPpsnNU8ymiQGZREwv3e2u8X8mNBnbBXiE57I7Z3ehqBeDoRiN/E4sRJhy6ij8+ic8gEWVfZM9knjSQ42lrlic3HQ0s0SZ6Zh7RXzoU8vOSBk5g7lLuJRYZvC28MAHMxgXg8J+STnPB3rUH7N/LeDL5s5Q1wTySuR9ucMk4mayvyakw7FPTA2MVn/iwAd9yXDMAxq7Hq5t4dB0aPBihHQESpEgL7xbLD1RU4tCwWmdX9rnlJszo/EATSvsMiZSKmd6iodz8+S3HCG0cesXAXjP9mHxwsf6z48nrth6xUWNO6trqC3Hnh5cs5YWUXlcD07qFE6Mzz8vtfwDxouD20pJ91kEJTG0JwlhqQ3UD2lCO4QmjJPIr1FCq4ryA4as4uvNtKKF7CLihBDPVy2zNoqO/dLPc1txKU1ZPcIozsf/Ib/v3FVY3sEzsqDhQgXxw0Wjico3pq6N1EQl4iNGXg5pGBDHMDLL0S4AyI4JQKcTQPYvTcmKURyrLJzq9yjoklVQoAQmC7tcIeh7E3LRvcHuS66ter6NiW/GI1hQUug3pT/IRLjSMnSPNP79YjPLSbkwR/aYmJtJR4w2MRgfvkAUlZ6Os/04qxAN2rFtma+GCUDrQl0MGbinqjtw91u08KcDu6sVBYhSz7O2QHNG3JDryQVdZHPtvYwmdwwPu8Y2RR9CpIjviIyv522ld4viDwMCCqxbrwh8ktDHuOGihAgXHBQ/YuGX5/0UdSQ==';
  const _INTEGRITY_HASH = '305fafacff2d53e85aae3e6af68b0c404c85a847173c81069eb9b5587d9e0aba';
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
