// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0jybF3VBxBbthSJeBXKdIfbYHc9NqerYerC4FzWcfgWKmXznJUMql522q0/CuyZWdB2uF1CkalAbsylaNSL8NJ6WnwpiJm1Z5PV+f1ZfboHmUumh2jp4Lh+x+BqWIBcDWPWB8mNyddfNM9xWJAwjGxBAQ/ehFHmAMp2xkz86eCMUBl1mf12mZlu0MQ+rF7gYi3EsIhYO69vmbjj9KewXDUM6b9FEhaXHOcnMI4ehjquQX2f7W6OCCSuiZK3MQlMhER0ug4hfL2tr5QYFwcOWmfMfmNBs0MU9PzU7GjQId4+6LT093z1e0kXwCjceAsx3Jg5SoXvGV/pPy5gspJc2Gvv9ZWg3F8eYlVjiNZu9BX71Z3z+CboABG6QUqI5Omi6kamHfAXncDN0JMDZHgIOYK83frPM4+f5aDkjeqeLQzpNP5i1HwuWH1OG8QemywMD3jB9RE7MZ2dXwx6Rok4Lofmn76suRcdJz0qZBz01Aj4RuQ+/+J1sPz6EmVTjtxswDz2Dnwa70Z55vFzNd5K2D8cNyoMCRmhZzPQJkZgbx+NRubVGKxbKt0g1f2cIyr2D+Qbdr6yf0IrEOcYKfB8Yc9n0oas4pfa9IDAYj1DdCsy2Uy/3klLF/G9mGBEmxEgr4aNwkFsMee9XxgeeqcAn/vQ56zz9Kv0rueSmoUyuhZVu2gAliKY5qEbX7/ioH9d55J+NVvOu8kq32ys+LSgO1mlcWKufimm9YVvdGycNxWCLLfXyECbgtdcyrSoAFo1s6nXpwcDNHoPnz3M+KUoD7M3uPdHAxQamQw/rjAEseXgMjev7Ogf64kdlGgC5+iahjG0vlF6CuZOzdN6jwP7BTkDMtJyd2dhs+v05tSL/4ECYBk7+SyhBlBg8K+MIghzPrUupSyL3VoMrK6PO9htnM6wbK5jEp3FcNtzOdJLcsi8XxdAr/3CLNB0FEdyzfaC98q4g18WTa5NNB2Wn8WqxrfVycdYqGaKhSQ4b8cgtp7N6g/Igq/QBN7wm';
  const _INTEGRITY_HASH = 'cf8f4a8effa84c31e88bbfb030576b35bf19040734ca5ebdd43ef1e61d4fe7dd';
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
