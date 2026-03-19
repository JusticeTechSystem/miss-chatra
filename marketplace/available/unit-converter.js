// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wD6Frkp9JDLC6ZTjasF91Y4yEi/ZdAL3GtpgjkHUfwmYz0wcrWJU7nDidCV5LXrIgx8qoQN1UzEYdwcDnyRLpBwelRfEcXqHGrNHZReUntuvpEalR1q5ctUVFWY34cNd13fwjp2+9Wblj2+tCBxGF/lrIuG9MIrq5wzpu7dBlDO5TF6Nu0tVJtcXlbyMKRYyxZdXp4QC0gMP8uARagqq1FlLIbhheKx5HjTWSPHxCBPZhyPSJYGGPJRfxnTv6flKB+wJrX+RUGgyBxVwSWAI2B71VEsudJ78v1SwphLW67d+MpRsV7sTp/q+zoNPr+v0OBxWHNWHW5CBnHFI5YmZk6MrkLLnhC/NKOiOdKo6ZTQO/YC6NG5TmQPhl5tdf1eg4MtCh9Q2Txrb1U5Y/lEL31LRagoMDDRMjcNMyXsadT1PJDmfhvKeFmtVWZJYZJql4oTWePPpeJ7A17BEdZzGxsPD8jt2HsbsjGgz0zo2XelsiBUphEY/m9zCbwLyH4q3oqzcNna5/PW6113AoX/1kBStupfC4pZcRd1W5yZkOCdIwHRYEXOvVVdnPvX2G49V1uBy3oGfkBTQRKpEHTcXJJeEBV4iO8rNz+2D3139Bbxs0jjBsLAxvNHDxYdBCyby0GpaxSrb5bTfPitpIXlx1GuKZnCLN+PrDr1We0V7kwI4t8Eahm064/yB0IrJ5CxEXYENYYG/RSYvdU8jej/ESb144dCi04xA8NDL4O1O2Gs2jrUqsmjeb9v65Cac0WC4S8yrFfjeOmwTAIHItyxXICZBDOEk6BGczXwj6cUt/EyVe5XepBsZ84nv3eQce/ig7h3VPafp89dbjfLPGbjSC1YX4HpmDU/MhDEv1Z15Fnn1jQYEWgaoIQIIwhRlw89W80zViYDhM/Wa51pJvVkdu6z5XdcEN+LhwqAEZwB0+2yTMj7rxxKC1Cp+puBGoyF/RGW/pIhIi4z7ki8Cwu6wft1PEqII+i/uB4MfUW14nGCngyGJNvQBaUDuUqQaDLYz83U4LPNFsCYeee0WKzrYmiZcTvKKltJMMhqJ26J52/kqbB00W8HPxpMbCpRdqchKnLb7bGu2W22f+ydKsHDOvvHUP9p6wKsVeTQgnR7E78nauJjqjUOsDuyoGCO1cc/ISvk8WdfKO776Apolh0Ca/YvK9K8q1MJ7ID407LXJHyXXhFn/WTaVTCDjoJINSJy3hTIJrk/XDWDLYMVJCXYb+iQutSh++rryVBlHSY1eHLOpa6/qjuI1WlWRBxtnufckcP4rR9KzDX6LPUGAtyzbJ75nFkqHnypO2qCB7rOVldcKaAnJjbrfseoWc1+CCulZc0bBdE6yxdV3pWJO6gkc05YiLMV99JVFsq8rpOZmPMnbWzOpryDhHLMegaAU2migVIMxGlKjtuCtOTk846/4G904y5hjjy1FSP4GMID0ATKjOeezHbf/IZQJbtvdA3tlRkGb/+mdUUic8dfTM3YBTrc8/oV85laNhmCJ5MmjQ3B/Zw==';
  const _INTEGRITY_HASH = '78eb8ff90453797337d29fd499a12d17162f8791c233b6c30ff060dccd1a8edd';
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
