// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x+eBmaQP614nBQGRG172kjlgsxeYenLcwHvLzRNl9HNpSTGhVq0XoAZcpz2j8K8GIt4SeCJLkazavolVvFUhPq7L4lM7OHAloMG785YL8KIL/34SeZUnIK54Olfueh6DMOjlD8mL6z+3fXiTdD7fJvyN9B0Xtc6PFkyImLwWrmwMBAHvKneTyjUYwvUPh42tJ9XmeV/Bsc9JaFfJ2Ezlu12YGJKGTYO6Jvg6/YIYrWsW7gDjbXflWQoOCeWZZkPk6ZAtiFRtaGuc5cFdB2kchx6AmPFtBWf3AqCqsLmip2QaC8SA7zsq6MlCoAU3BYnUBvvOjhbzca2L3C/D/qOaRWai4MLRlktyQBzour04RCA2Vcmdxyy6MtJ//hfKCt8AkDTIKDhpDiual79qBIdnWN4eSGH8+1P3ZEQxDZJe6yl2qiq7pCw3eKlnuXBltoyk1Df/dnds9Wj7IRpWP4yipzULJgBIX+3klYc4GVHxsPM3CfOheZJuRiyvVdf/n94pcVI9AO1bYVS65EqjNji0jaBXiirKBOlvLxVuimxLXxF+DpDdAenEc7ZS9BzqLWlJ8iyzFQtvdbYrE6xAZNP+w40uDTY7cDRDRlRoAK3G7sJ0WQytw8lWutc1xKAX/O4KfK0h0DyeB9khnLQrTY27OlUPZmIcpoFHE33F7ksj32qH6jCsjnYpITuJ2N9+Z9B3fUTrk4xHEplzQFKHFFkhXX/6A18tv33sLmz7crvE+w46oQ8=';
  const _INTEGRITY_HASH = 'bbb6ed686f37730b1b63a0ab4975a3703b659a4ba27ea6647889c135cbece2ba';
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
