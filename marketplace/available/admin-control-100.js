// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rgUcaMEHcLCFbOXIjQpP9JGzkP2YxCByaYU7vAEAdHgVX8SEnRbnqR2JA1dhPI6brgQ1hx0louUAVwcEjDdhv+NT7J4/a23e4fsmlLz3jYQJ/x8hciiZiWHG22O8tII+u9nye5WLro+Z++tNvy7lciwqVyMkHrvtmyp/n3pdzfG8F0GOFOPq/xV5aqYkkrQlfWYHC58DhG8BxMGomoQ0xEDMA/vEwfzjanS94n0wWZirHy6FaxC1OtozXh9WfCfPPCxBOio1xSioTOdKgriozY0lgR+YLGSs34e86LGX5qe4M7YnCuyUzHn9v1WrB6bjl8SjrMedvLO+fqNerXfpk5xw9raBMqaOUKA57oGfdtzkzFMqdOOa0pwIcaWkMJDAn0Iz9iC8HZmwF01Ne0SuBoF+jQEcr8GskAzuTeUgm0yeCzb1dvt6z9OhLAIGJ0kPO5r82A7a9a9+QNJEriAbIO9Mhes2XprQJNBIy5ArGF4S2apJ6cqeFCcXTMcm6TfnYQEy4R8vRVX+SwPSDD3rKk0amkVoNzeJGrFunBlWf0dHxMZRzA1faBfPzUeBg3T4CRL5AR8kM23bPLxHmpfu5rZRV2o+RMP3LnefN0390MdFrz2KCWAYBs2AIZrV20Jdnl+CQZdgAzdza/sDBWn0UxM7NdBJ6MIJ0OlhaAmJ4FeEvWhwq/Q1qydN/KmdFtIrYv7JlOM+ylt3Di+ItQBS6M3xqojN3dYpFyQCDMw6xWns51phApZsxZWTitzOIa/JZ7eY7riad/lU8MpX5Jd35O253d+42EyoYRMZFy6XvgivGX3+A29LwuGT+TOulF7iA3J5QTx6JeSjZPq6aZH1g6x8n+xe8u2X53u9MnYzaWHu+drj8xocBptmZKcoF2GNWoOAE1YiFWNGwx1IIUWAkmkQ0OwbnnfqhWDwNJ49FqRvxYiMsC1en6mSOCU1WFVhuhdladgTPqf6KhHGJDq/578dIg+axHpldfqb2CYwNNb9Ao1KFIHr8YPRUTyTcGFNig1ZKI7crOo=';
  const _INTEGRITY_HASH = '8a8750d6d22c342a04e633e49c7dda0dd90764f1ea11499423bb6d715eba0da0';
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
