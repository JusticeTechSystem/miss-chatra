// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AIksSd1XSxgX/2uKsj7x6PKq1Dv1rdAcL4vI6MZRx7JWhRMSD00g1Aqg3g4aWADbfLuYxx1aVpbE2eflrxgLImZrDZHlvc9QXljLOLJ3Ofm6Ci05qTRuLcTdnjrRF/suqEWkBD0aekmeFDv96XQXcAIcdx/xii8luLwbg8YfNwfhjdgQ8+sYbb4tJhOpXMzDPy4NzOJjol6GCy3OtIX8vm4hWzaK2jHcV36Gpi/ATSILHm0zg70wP9g2YDv6CMLz7EsnnXqnJ8KAOPKKhY4YZIbA8QOzTcUoVTzdi5e6dfKsADlUa4Shr7PNub2BfDqEJ5GFSLHrSnSFlAZ7689JLmz7S29dO9wimLBecKYhG0938BbdIoNcdUlrfYpIfEu6Sxczv4Izmzbb/sUE5sA5ckia9rauZViVuaoH6NbxJ0LySbQmFYBw3ZZDWaQsnC10k6pu1+Nw6y74p+LIxf4wZs2a9HmCmKUFnr3CZZlUDkoGkv7mPFwMiNku+zDdwCgxYZ+0qeBcPPQARSNHCr26WgPsj941f4XWgJ8yhCgYhhSoiZXQaQ5waFBkrQatBOE09dggirUNNixnsFNeZ37ZVB8aVwm0TUPbtpINo7BCcY/mbSroffqYNtj42RYgufiAKtALU3NhpJA7XVXAy/KXrA939A8lk3PdFaCZSR21ev9EoNutnU2waccRKv8L7axc+gIbP5NhbpoaXUkfYJEJuXu0A1DHmDYaIMv3BOES1nA3bwEgVm5mpR9/eEAEjPGd1G1xFuLFZMSvFQluKQx/VT661tTPECs6tsIKBKo4T5OjrefzPFy7djeqCWDMwrtA85IWNJc4DIM0V2qLMVa1K5q+Wq0e9y40BgcWiIhBVQnb0QzLe9o6GkN5kwuIPqSALeIHbupt/kuljqFoRcmWAU2qZ1xjrLoSG6CEHoQ58xEn7mR2aFAxgdNUizKTiClMMo7q85AdoGPABEbi5JErTH9aNP69rJyug75HJ0poDczUpOG2dFHU8pZXTH4aAEXk3uruNJ0+15UbFvGNru7xxdKyclce1xk7gHWVQ+sfhOCXByyr87KhK8UuXa5FJudo01kynI+idb+UK1axJ0nKrDp0uzHxNciVOGI95ucz4aGCQ4v2hbAC5fg3Cqw2AGyYMa7iru3RvO6KyztYA72czX96ggm3mRI6Ii7vw+LganbrrZFAceSzz7gHuGhyqVbvuU8lbzbznMacMg4f2k5A8Wid4Qa9SsqBywRZ3HbIcjno0vmm413uRclKSML+sQC0cRjfmtaj/VoKSXl9PPC8AAM/Xjsa4DiouYoDpJgPbkEn/VStq1gP+pluuLa0m3VJliUNtnU2gYgR4+S116V62m3KvqY6wvw5/MB44L0DRwThLIU=';
  const _INTEGRITY_HASH = 'e8f90a33797e1e036e33cc189d9cab7e6c17912fc665fdd3537a69cfdb018448';
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
