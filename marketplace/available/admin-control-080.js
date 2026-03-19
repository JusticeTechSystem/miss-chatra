// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G/n2G9s1D7azputXPV98Dhgd4zbQwLvAqJ8WRbenKRjA8n4/yDnDpvNK4sxO5E33VFzlNHhilRJlHUHPzBCsbtpS0crIWMV+E3mCra4vJZel6ifQkVTzPmmLXS4m8pillwXr+N/l5Sbu5Xix4h7axiUHIRQ9i30S/CsBtnJSunPHWGkVO9s2N0x6s7ST9RLrb2xb7bx2Um7TOA3eKuKEHQyMR0eIRGVHWnT7sPe3QmvyCIjbd7TtjmVJVZs+tgouQOAFb3PjAH7NchPfk019SIZJODfEUHHSFq2PAdVLgRoze8zY3ThKihsCKucLG4HRivYzYokiTQ0C762RGUb92A23koN9pflbxmD73+tt4CSDQiOAqNuuOoXlWBuW2FKg6Crm2sAYAEeGm6lPr+3IlpqMC3gcyPoes8AsGi12bmM1WL9rHqqAqwGRsqT4uHCWGKEfdUJ0/iQ7hMK7ryTS1LM9FHJt4r0qEPUMNNNY6hyL5Hm8L+xvV3cjzla6lHXWF7dxxlxU2t52Nxu/JQlKGhgPpIBwQAexKvxiaW4Y7xfLRWJ9//mSMNpEBdycdzwMKi5CLDsMvJpF2/+O3v8Ym5GYGUTGAF7FaGyte4G2xcHW+PhCwc/DXc/OXXqvHp6vO8dHj8g3iHlTsASO/b/r63x1DoW5H67/F1uB5vgPmPfQdn+bCIvdeBmzO2XBfdL9OJMsEn1Ku2y+Py8vaO15l6hZ5LWqJ8HZ/8dC/JMs1LpwzVCo56hk47tZXc/+irDtf51K8grv7mfjGfI+cr4s4ULmGuL3bC7Hf7eg+0bxbNYQQU5qqBPC5LMd92Go1PKxZ9XxPt4fDH/LLNFsLrBLi8d61mOqB25t7XqMDylDsQTAnfPzVnJJc9H4OpMuB4vlF3ksF/GVokzJYcgmyADBb15E9Wx5DpvJAjTQh9GLiCZdIGRU9nQqV5ip1qDfBDsfvG1lLArT4CyF1MmmI7apf8MWy6eLqGYk1nTQTmRfCgbNVs1ZIAJT1M3UVXgTe1KtWWOg/g==';
  const _INTEGRITY_HASH = '40ea982f2b83768eac1ec74b3061e5ff6981ac6df80d2a2e362f2522426d3224';
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
