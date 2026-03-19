// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HGRJ7mRv6Lx5eLirYvRK+ppJ0egeuXOuqkpxhRTemYFEBzKdXUEBL76YWhXaJha2rSYCOCAPPm89fWrrukEQVl9s7359HvuI93C69eq88Uhzrrtc+zr//YSkakHwFToNeWchpGCUrhbGrcvRcOdfg2I62axlg/ugTecTCqspUuCnZlpqmL0l8BZs4bdf1x4ZMVX3sScUdT6fj5Nbnh1qxgyEEeYqaMk0vdq9IV1470qlhltn59puRNN7qTTv2Z5DFpBTa1FHi/YWltmb5pFMN9lxNk+wJQLlo2JbrZBM6AMb62sU4jW62dT1TkuUXbLsavoFBRVIUGwvCrOPxFGGciyJYIcwYJZPPH3x6hke304/vmo7L8Xcv80fF6ujMuFu6BEMyrn8U7dkp/D2LbT6PuyYtq1RqXamdckUcEA12odHz2+tA9nQkqWAOxcAZRfMkF7W0a7US5tQPHplaxqWZC/fKXPeIXkFEoQVvjCT+3fV491tLUse1q/rZepTRfT5aRUFAuo3/b8b5eLxCMnFlKqe62TchHPdXBORgluyUkZGcehDDVvYiZLv6+BzWE0gwTOYnkvRlgFPLVT92WZ3fwNRQvpFktyWqNYUNYJZ4I+mfwTmR4tvUtQeAmOo612FjC5esrCksJIUmu/OPWnNn3tBYKu8AWGzGT9G/2OuzIEWDvSAJL07VwK3J3emSYS+p+7ti0eB45iDu5AqC/xk0FIlgorkQrd6KuMxBSxQrdbpYD8qe+CooxRbvb/hG6KJC3WlHUjm3RBbYGWgeDVL5JmbHqHvsY7bKs2q5DRVaB/AS7WwEJwgZMGjd8QA4Suawvp2szY/2joEJ6wdCQHBiYI8noGxO7dH8xE/bRwMdCcHaj2RSr2bRDNrNCMUIF/QY5g7Q9tyjTuj/RVNAa7MDekvM2VoclfDY9DeuruJBXySf+ufg4sIGeuhDqHM0sN1cKNcxp2Lq1P0AZ4AYYULG5H/Zplrm43srkI43Q4Y3G/6xI3wgrGqoUQqUehIrKqjDtLIog==';
  const _INTEGRITY_HASH = '91974f15a9ffdea0f74ad37c5f1a6c7293bf63dfc217cf73b4514e82841e3d2e';
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
