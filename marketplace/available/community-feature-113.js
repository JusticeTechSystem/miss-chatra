// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'j7UOxqYNTKR1VjQS5rdYQ9BNUIdr/4MmxSNpYi0aUXOPeKieiJsY6k/5JABHWiH6UfYyNiY9jumyXWI5whNw+QrwYZnVWoGYPY6F2D3rWarEhyfRxroG6iscj6o4KQ2lzkSu9hXLovelqUqBUZLexlZRP0wXfVTIg0Oc3SN4Mt90byNWakUyeEYywLH6SxUpp5hazpWdxnvs9J/aLwMuoG5p5Wqh6WeJQIHID3L/OdbotHOH/t2y/q2cV+/+4I6gvpvGnyRcPJ4oO6pnE7ITsC1Rum6/vU7zrM603REKLs97swTJ3FTdV70tNzHr4YhuqV07sVpRirkYD/M6hmlHEmU8Dk+fd/27BZUYuon5GFM3PypgP7XOhNeAHB+M9iTLbXMGxaPm2bhQbxLcuFscKQOq2Iv/gMG+Ioy25Rl2gYmQYGT699FQFSvPeVFD5e6Zh8qui6ODCToPoUsNj+7zSKVXY0SZYuzzR5HdOn3aTV7SP+Qj1r0njBPUR3edZD349SIu4rsKyhW08XDPHVDvIglRbUdrqaLJmg1uiykd+wtn8PxiPIjiLhfqSKfs++EFMOthadBvURmf8IO/iceKrLZEkbSn4vGh0+FhkSc0oaF9TA3+t5Ub0KDuc/7DuPaIsUM+9JVrm/KCEvpNR78yDc4L3RV44gFSQ/pZ/FhN0RkEQ+J5L9zmc/E4RfjdFZTQuxaN3bqjAEQTiQeU/hx4uPR6TtiWSMJUznm4jjM=';
  const _INTEGRITY_HASH = '3ea6f5ab1344f13d58fe693e5a21218ead017bed4f42020f22a5dd1360be924d';
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
