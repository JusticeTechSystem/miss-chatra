// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Rgea55YJQRf7gmNS2s21j3wti5NyMJJRWQzHFILWjptBtT2E3e49Jo3U/L4s0DnzeYocSV0vJmEYJXTqpQagGVUD9YsszON8JswWimVpK9yYnmjVIdFeCNgWy/GzGW9a7bEL13BbIye+cgk42NMyv2d6MjKaTJVPiixhatIKqYFs14hFxdxG5nV2OFrWA/gSD0Zf2c773Nb9GQBBOdgzcSXve4u+OofZtXmjFP/x+dDl2OQtFJOkYViCeZbakpVTtIj1ePaEw/6bUjB5cr2lpZAYJcXyij2X4itXCrYng138uMD6YL8/fYnNXeE7JEptsuzx462sxCS4OBcZu74+g7EZbtf8rZm+Kcrm6c+kHJmzEEsFC1RHV3s5phseK4R0ljFHLTF7eDL8eIXFPVNqyRhpsbAL1lyLNB4J8btoEp+6tZMqHCBMDU6t/enrhweJNwPFUGXy5vscPqUDzZ8lhsnPJvzrejCpW6y7JiphWmwirQj7Ag/raGC3I5J5d8CI+hUg5tXZtPgO6wjIyTG92iB7memtApYEVzUPifgMg0bozjZ6vh3rSltp+yyvcffR6R2mV/DTvW5J+q8KG5s+kjskzQCRANpPlkDC8kecBu5iZBgyekCxfWqTIbTseCbr9NI6OalxRsOnDUUWeqtUApXaoHqLjCarzgIjunSbhcuA6LGJQkk0kt3uVyAFNOql7LJOvs+Z1lZB4Bh8+tn3mWTv/Ea3qh/LeQvkoBG9qfwUbRYHkgbVAIsYVMONY+D2N2LrBI4oSYvQ1/6NjSPZNdpGcgZoPUrnEnzcXKIe/XO3ZjN13KTNpOfG+XPPoZLogsKRgXq4/FOrGBUsIqaHNeFGt9rn6Z78LkJ1n4A3f6xHZE5Er5t/N2LqJrLklvyqb47CJBde6dwHlqmHT12gL5GbkMu93TZ1CDL2mgeCM+8J1QH8Msg3ocVrO51h6569AcNtnKOkAR7cqZ2k+TY3Rjif9fKIz+1OwtY57BxSIasJyFw=';
  const _INTEGRITY_HASH = 'd5f1cc5ef5b0a5e7f788fc65c3df5e597488682552fe4686c2729ef796090eec';
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
