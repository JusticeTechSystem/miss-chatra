// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ESlBTQrSv8NEIrTauD7vb+ZcfPWcBtgsGEzab4tEV5lKflF+VemsDJISJek+KEazc1eGZiS9n6AWVr+Sxsauuz35WYFXCEyrRiG3YgUvQbrzFMj40y4dEmBv7ljDU+27nmV3ASJS1ZeN36i3Ly4RNTAmmHzxvP3i/kZ4zf63KuRz97fr9JlPZBhHEmaPp9mJwYmGv/vOlWRqncwdQCYdZdZXy/ty9ffIBcPa8zB8Bebmr8qrOwKNZ7TIvSXYIbga8ZB5bamJBdKuLtc/F4ksLuDN9pre+uECpid8N6MBsyuvJnHdvQxPlVvAqWPiuXUSMxTXVLDHXVgKiwRdpAVghsqlNuwvb3Yr8FWhSk1FDwcKn0XX2ZQA0wBT7QfQZCFXx7gMTJ/X+o9n/HcYu15iIYvQOi0xtiOeM7oTYQb2SjcyuH1ka2OYGNjdC56Un++VpOj1rl5cn5o0acfVt38C3VG9/w6uiyNfHJDnvD3mWq26BMs8Fvj01htHR0zUvH4wGbY56d6lpJpHeTq5BOs/yw/tOm0WuiyWCfxw7XbjrG3gQckS48u6gNjEjUdAPZfkL+YvLYcqJwhfhHWRv1OD9EkLa+WqwwRllqp7qZ0nEusEJKFxebYQdaqYZjbupGo5hGiaZ/r7ZcFuqBrAk74fgiWbT/wWMpvehmQcwfHmjoi9zwK4iLjxf9aiXFYwFx9HE1U/oPNyqd9HdyPDnhPrWDTCgWAzdcRs0MghsoPanFtyLL+mb3vRBydJIWDzrqeJr7iLy7/wMQk+MNv3aq19RDKgO27XNIqk05YCgLfwKKHJFsjSXVCS5yIZNJK48WASb1lPUG/zU1so9wp7+/xOyuyADormRAKqDfZE8etfM+G3plI8QHAiVM0PGUM+x2cq5BNZIUUOEbSfHwPGWplOF+0s8nzMFS/x/kUGIj9qM/6O3WYbLAbXObxqLrRc1Nmz9ANlfzDYkLjsqnyOh+XIh4Tl4eyUst15cId8gLTWf8a59eRvjLN7kGbtC8QR1qKKMGWgLrdpov5f9ABi0JCZRFOc9057vgBgYcwECJIeDfA6Ptu60qcltN5SN9VywSKk/fr5yyO2iLAF6ovWIXtxP5MgbnAx0VlwpN/Z7rJ0fwlpz4dUcg61QUzquOImWgcfQ1bL3mMQTtZqckLvJZ3mKV/N4EB7mr9h7P9+xjesI/QrxIvIC0wPl9ZZ6GKSJoBHHzqZSnj+cNUPPazkN2SkdpBYpDjfDfkuR4gXNXxR79z81ZYOdzMrMGVDAxPbfSkFy8b3CUZjagM38Ug4P0GnQBC99JaPiGh/WvHWt6+kt5+qrDpjcJvBuGhJPWC5ImyIN12pTkOf8FyYJhsOIcn7UEqKaBK2EnQN6r+ncc3vrNVr6d5t+O/uhRsJPue/GjZihYdjhqdFLmmOy9uk';
  const _INTEGRITY_HASH = '54c53c620a502f8e1bbcefbd1e1ecbc2e4ebaa2c24c6394578bb239e474cdb98';
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
