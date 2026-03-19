// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ymYhxRBdzaEMxBiFocVSUPG5cX8qZOral64TcRCZz4ceM1IN6h7clNGv32yoXwXyZL1njqnud8tE1DnEI/FCmdD9AI/aDDHCybj+bYRi8fTRJoLMYXV2PgYRbbdJ9KXg8shbqNM6Y2VvXrI1Oog8ul+aIl/EYvtEMMG3MLK7Xm1EGClJW9r7DKka3sg07k0cuz4FjF3g53zYC4UxRHu2g6EdD4BoDNRs2NkQUsUHyKsEtonsEeB7j2VgoqE7D0HA2Ttq3hOHVnBIsT00jMLTOQMieVmz9hecL1CtWcWLSG0CF84m2Wtysi+ZuDSPoMlfKoswceUVQ0Sk38e4GsvdG2Z8TqysPDTpsD7VlVcFvXwJp6sVYfgwL1W54pBD5I9+TtghSKNWSFFewpFaDfiXZq/ahd+W4h/E9miigh1LRvb+7G10oyvOPwh+9V8RpILHxTkBjuZiLee7OMyE/PexZcq7mIIcZ4wSJWrR7+M4EpNX2ND6gIaD5SYslQDIzidEOKmqqNkPpaigh0uvC9ksYD3Lx75sVZ5fJvJJH/dn/MRdBrjJ0zNtAIRdNqzKCS+RxMratcmlW7juduJN3rwD58+yH+C/042m0iJww7/hMZqEER4rOj3E9feglHoVK3KctQ360NQynjV3PfhQdd/k9VlqG+0kEVy6wEkZgoYYlwIwKqiLGWOEBAaBfMM/AG0IPgIccy79VmovHlf6L3SGmZZY1/F+cDhN5g==';
  const _INTEGRITY_HASH = 'd96bbc8723b7f0aa4d10edf65e49fe01c6358154e4bfdef2c2b6be15968d9403';
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
