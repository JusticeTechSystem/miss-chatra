// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EjedzkPpXkfJzc+yg6cSaEZXbozvIeTKCz+aGeM2oczpdulJybUApy29Uwsmw44Iq4ltUtFxqJT3zjISZK7S/Wr+qNU/MIDO8j+NxRqdjY8WXAoXKd7cTXdKUpIH3nWYTPvV+7A/w20FuamPmid5Znd9WHKbD/Tunz9fzm3Z/l4J6kvQ5gh267EMdgwEJ84Luf/nJLFID/zKFUXKxQWljL6rJJnPh1/CN2PTtGEuw4vBCWq62qRgG3umXCCLu8UuIVMjZlrE4kU0RqbJ4PFCq19dENHuK0sqRTUCsLWlkUIpY/MaoMPMDmn0vug9/RovXFWuH4jRHDKTXn7W5zy0V0Md+tMWyYXrRYMRENw4B/Ehbzr1crlqqVMr434bs4+jmkL2LvZERQfuT2IenhzvU4v6GuAXvap4YN0ce2mqbM21RnNBpMWNpqT0dabHBbqjsZstkz4NGFrHWy2mHDJikz4ajuq0nOuUHbHYMjMkNBiWcJhZRsBAEFGaARJOIRe+hDP180qxObxJywZXjs6JQB791YUX+a/hNdgN1Yxl5SfBh5oIS+A6I4lc3Cpk/wU7kuX+G1gfO3XV6HbFfIEnGYm54QrPISNiuyETxr8LMEg/8VDM/O6qTfVx/I9w5PBiV38sbea+WyCCn6niVQoJQpfqbd+W2qfcnjYJ9NOQEqjLYMKJZ3uoedUaTRh35tkzLrtnNUN3h5F6H8wRn3bc8eJzdHTP7fDmCsiADb6mRCWj46i17dgzS8E1tG3nZ/DNUCXkO+u4GU/ykBwfdlowFMf3Qg/YaCzeWEC8E01QEOQGBy6s9MuWMJq/Z9UOSzfGwGnmNzRUSD+tM0MWzkxkDItCjfL4Nk3jXeUERiQFctEnwT5xzPwYX/5oOqUVa9c2QOgUSeoaymiEsPirbFDg3JEirQ2XOzPtLUOmp5juPjZa2mM+5nGox5djrzU8RwCvxyzEq3HCgmZTM3UlzIQmcEGxYPtINW+c';
  const _INTEGRITY_HASH = 'b1573319ff97c45b235ffcccb805fc1a8eb501a910a4b1dcaef56471af0a3747';
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
