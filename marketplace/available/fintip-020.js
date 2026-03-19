// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZNDOpz4sFz9jWnTdVrw4VQLPkhsUnOX3Q3AqiFgvBCZwwyC6y+RByK6LtGNHuF+A41y4f9alwsHO1cOIFSW34BHNRTmCMaKunimN07JkxI9m0v0AWlqsEZFGdkBGAWnAvR3ucT/xeMMkjkSgyolrYuGWYhRlXoXy3lLln3LYalCRAnA00UhnET8B3KtXVABPd8gXWThKSLcT0Gf2FvB3NvCFH5T+YMNDbnxRv27kasJsQZCaXr7J5nKftP/X7h/MVMifFrBWnSna89NPDzXompVyxFPOCOqWf6eVMpyUIS1deJVHsfgN5FWGk4QlkIb9YvVLDLTM9hpKhj1qVvWPMJ9SC8RDETQe8rzm8w2W3taZzlw5BwO+ukBeAmML5x9xIbCedqWxCjPtdJTq3H2Hmj+NBWa8mc2+RwtdsKxnAAyOUcmyb8ECheyPZnVWICbiqaLZNaxa+MWN/SHAnUYPgHzlLdHbvCq7mPEONcnUduaa1f5F8VwPy0G6YZ6QWL5QvWtrfHeKcjVOSFue+HV27uhvVfUKz4Y5ipBu5WWKOrIrYHTgy7c0f/2KEl/YaJI1Qaf2GV3o7F7b+e4VIYSF77VMjZRmHwXqf3vH5U1SE8XpFqV0gjrjeYAiQjF3BG9NYhAEUo0apgU0CtPlEU5tShqosjYZfyHTOHp9ltAZ7zuanYV28fqmIkzIIv/jRdHR11q89Zmq4iXptg6+uQ3KXohzwyxkV+XozwaiN/hh5AcxKuDI+gknLQjOML3ZiHQT/YaEfRm4l/WpsHxwyYh0IFz5owyKsIpfK/FCdhQkEzjKuxgDoVXJHjRsu+uEVqKXckjfTs07wiFhVtZEn3TuE73PMSpNw4hOa2YLP76vnLeZuFbnUReT/e1uG5rADFI/lp+ACqQ4sKZVx1sKGIsnGx1OLB9C6LYsiizfdsCgdfbILvyv6JtsSbdzdIGs3khLYQT4M8m1qUq6X+qOA+z4rE/rbWDO8YEtjGV6LZGs1IIUiI+/22WFfAp44SJKCH3KYjuxOUYl1PIRPOdmWYAK2w0dEZRz1jYTQyqw0jaTVYTNYw==';
  const _INTEGRITY_HASH = '527823287549850105212dae8895bb5a23c3805c28ae8a79d4a611f3444a6335';
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
