// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7MRM6aFXVVSUi7CrPCTU3TQxYHD8LLcR+QKPRpG5MNJ/oT6tsIWDjv18yoRdiUCY7wZ9lZfICaabOe8ybEgyoK92ERmdl4XybsEuggQSnjvD0umbKXCn97mcfbc6RXiHBvBwcnPbsLzHgIullhfEYzFOnQcv5AperZjEhwQqCfcC1mDSzoW1KnLzfp0mrC1wbX2FiLm2BE1XMSK/99Tqj6Q3msI204136GhfA+u42olFru+d+dLZpSfX2QmaA/u2iuUorbYmAQv1ZoCnsWW0x0odGC/hdZJ/pZXWI1CnJCH16IwIOokEUAZ8zV0m0JVvmLEe0Hokdod0R0V9K2WfLf3c4xIxZmP8HgThh8pYnGenaFOp5C6M0PDFuHmvS87AK5LtsNl3zITnmlr+jRFe0LTA7iwtDWgFIq8yySRxvdEhvWU+i2hhTnOWxtuYG70IpyReh6iRYvTVTJVMLnFfDTMh81PhuZRIz5wZcgNV0xBURZiLkGD7LaD8YDj/9s0iWKIFaItGKvQUP9smqGQBOcbJ8xk4dxb316i2Ha43e3WeGV7WMQ13LajtxWZIuu6exetuM9ixyR+Emc3xPAZDgHk5oXyFvLs/XCbNp7dsvV9DjLxXJQB9YngcnQ1lliP5KgzrmFZz6pe2RHNAi0AwpVyKyrEELyPpqS59SU2d/ZzE9l3it9mIAlO4p3AABdibn0wqfPoazHYH9eAKtsACo3ZftaemvYD9AX4rl1QrXVf2DVpANTqUkRENXZSHCa4nUSo2tkF0zCbr+mCFeMkt5KHyWGcu6oo3T3LWxHXqsyLmgeS337jQpfzdhcCGDsEXQSNhp3dOoxUbQVVbEnsT3cf5YDkgmUx3dhaimZ24n5zbIG5RyztQ0B2BgDKRm/fPd2WGT54zJbBXESXtvefe+kQZm9EQ8l7bWOl3kSTmQ7YnmXqjTJISdg==';
  const _INTEGRITY_HASH = 'd92ca09feae3f59f000fb342bd995155fad5997d90a01b568d644c4ac9afa2cc';
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
