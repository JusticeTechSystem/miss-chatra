// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JoPN6HuFS/sdCq2rX9LkHWsAm3jz/bCTTC4Nb74H4SSheykhMCsd8ta/O+K+yMtHZNb3hKx3fLt5bDHmcHSgxWTSu9EZoGdVWvsxMXAhi/Ng/9O/7T/FSTAdQiNJ5h2OGXrBfOMzx50E5CjzjzmYP/whOybekGuHKe9G/Mi5w+OxDXd0J35biAeHs4Xhc7CEkoH8pUoqXdjnYD/HzesS00oJAHIaeiENidJJC1iZr6OgWdW9Xs0z6S6spM0BYNfwAlOD3Uog0Vnk6amBcyLubTRWgksZd8QNDyGLxGr35ufbSkPqiApNWfB3X4WeJjCdkRaG+qJEthjHm3LihjqKl08Wz6uYf6aKKH/c+8NLTI5yPT/FoOyshhT+wxiTez5tRLZtqh0pAGiQ8IXpuJKB5Q/RStSP69OJAoQ0sobrFdRoMxs+g7wSor1pjNFVD1/VsH2qenFbLbVsfLiBCxwtojnXvuys9uDdxVXfvQYMRMF2Aahm8rombh/s2ZU3LycmuQFXM+kfCuS+7AAKcgbK5frpX1aHLLrXaqeoaVG8l3Kd9oyZd0340z7fQ0lHSZf4KDX+M0aZPnqtQoh2Z7ynzHufV2uMB6sIKR2gS0qDnZZCe1GMMIXxGMOVOpH38efoxsXNpdto4wjGKQEKz90+RYbjlEWo4Vx7EuCcx0jTj0wyabf7bQIA/lP68xKbuTN5aJRdD1YYZqd2yH3mA0KeECzF2IXa6hVEgFAh1aiPKrGhai+j8uOZDOhd3nu1UT8iRxcTwQB752+P4fxSPNgDhr2gI9kyzJy9P038ivRO9r2/PzIJUXDcf6Z8wLvLll3v5le9eZh4tH/WridyiitQRZdbsdIayBy4Mp1cGxcA0z6TkE63HDIjv0bXq3VHz7MneeMtHvR5eU3bJFhe2+2hQbPF3lFK3ZMSX7gp+fJR4vOVLV62AzmXfl1LN8rsNqFMSa15EwuoGsJpvp81hVWViIo9C9i7PADErGPg/SJvw0AdxA6CRq99lF04JiLQF/g9kvwYlEgN2Tkw+rYDEyu3uGh2qZwA0jBbV7OkJ+Mk';
  const _INTEGRITY_HASH = 'a6a107a8bd22c690b038380670969b6f287bd0c5adf008747d5e8da56d862973';
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
