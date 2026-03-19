// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'saNG8X6x9+Rtydq/BuAl2t7W5la5vnwNyO2zrRg103fyBZ83zSvkLJ6mPLJJGhLV2ceAyXdUpRYwBP3Opm40UTd5b2Obcfb0/6oTAL+4V/F5co78NcaJdT4lM/Jl3U1p7rn5zCl6w8/byxllmAQ4yL9kt30/8XLHZ+8K28EoqPzLWlB065QPuvagMn2xCcYPrp5ubPtR6lXJpJAaGtcfGQYkILM3tkkkCYdkvqhvjm8FyQDUQenclv+ueipQzqPOi836WcDrZ3mhXa30cIdMad5OJPdXASE/EQnP07XVg7AlmCMhgJ9sv62oTbS+F8MLxFSJP4iEQ2aJmluzivKev/IHnfH4toTFSZ8GlmYGAjH5KEkfD+cOTh7F56j6CAM91LgNLF9q1aHIsf1SYzDWeQiCansVtLF3TBcNDVZ5gw+JfqlzhMcC9qQ9CupAedBGBRlZZMKdGIAfvdXJHJXSKYg/ai9ppIBTE7gI6AskbVHbmNXLuDSkBi5FOHc8xmTHA2//zUM8KFPbCfrJm6h/2PYXvLug9nxYxCiY5s1cuH2h9dfPMP4/cARrZEdHEHnPPdk/MCI88hx7zABASEdHmub5bviGzhqsXh0fEGIlenS0VT3KoEqCpkEiyHvFDRYGFHGmKpAjNDg4cKePR6gwvrMiYE4XgbMJq3cSc3M14II6P16xayWBr0VibhTv0LYR5vBQO5Gf2EGxDMEUvO3LbymjT1VNLS7SMuGyKiyHxOQPn16QMEMvYh2l';
  const _INTEGRITY_HASH = 'f4c0b795213868d6ff98f0e9df9ff1a7092a038eb8b2dfa8c5cddfb5ff1a0fa5';
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
