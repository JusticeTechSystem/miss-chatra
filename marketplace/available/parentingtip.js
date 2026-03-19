// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xJqRFg3tcE4V0o9xehtKjESmPbJP7II/P8Fg37ja5rtPU9H8+uUi0JwIRga1XgxEkMN3ZIN6wUnH1t/6hRmiOBucc0907w8PSIVd2m/+t4jYu4D4ChZfKUSEBHssNjNzC6pgo9ocMj1Q965IMpjYWtvYjITmB5kYQxdUAcS7AkBy2SBqjVEZ8HGDkJNR7RoESegX/GL7q808Z3jtLNTj33s5VZSL9RMqdEVyPnNasRvRn1Xo+i7pRri1S1PgL1pbF33ZO0sEn1mxW4jy6+7skQwqorjpaUokpGl+RguuycvvjzSMRrPrKgDVFgdNs5f5EHS2lSJ2F5X6v1YBVxFqtmuZ1HaDnA/Im4IKuXIki4ij2vTDfihY00bJORaNg0nMbv4sbSmqMj3V91+d5cMwNAm9j3FEZxdRU+Ur/KpjiYjtJsxrEtip8bNpF2sqb3WhqJXpgXwqILKVJXbf7ZQycUjBSpxgbBdHDkr23EtNjYKf8yKNW6b27HabLWAgVGrMugt8KMazrQb9vJghn6yGoG8flYWOBmbo1nr0XME/4+EPabKaPKLIlw5QppRwuw+GheD1js914o/032Xy+7+uqqmF4nhFMwzJ0+RpUsRKK9o6Fmeh2PNJDC/0r2CJc9ZOuPEQdWHR4ZY7QlrFOJPOs06LqyMlOFJRetQb5R8f4//rThe5Wtk0AIKzkTLutJCnXJ1JryaZ6kk/ED66lSMG75lisRVU7gqqzJ/0ZTUTCxrNpCs6UzIQn0qUwfI+lMSx9C3lN6Jls8h7adN7e9kEIgXzo3cFxOs7hAaSBqinUrQpxvBmkJjjR1f+nVCZncj96TmdoIQEoFYzT4f6zfYTlAbWbvlgat6eTFstxiK77MqpOO6r9dRpki0SfyWJZGJ02BZfa69tcYOOSPGuIEWo0Y1DOJm9VMHfCGk+Z0MXV2b57xSZqd6/yNf33mwBZ52y4S8+TC+IR2BUCgSqjqMcHYpVD45zDyKaztRQ/H+lXM9o6PkWi3YrS84UyjRZqpgjX6GfT8mxJHweToHFDhIYbIj6a6YTOV7P3hWyU/DnhHEq+UJKp2p62y32H27GlEjPfPYgDNaJIjI4OnTpruY/YNQth36QQTR1dMB78bZbA4P3/81I/Di3gUvAqD7vpZAGN8iqnCukHDIOsPGVmaSBK8mDULwmSs99V0HqxqZ0RrFMYc8LZxXLVQza/STCkO2hRsQ9bbcJhQ==';
  const _INTEGRITY_HASH = 'ce3cc23d8a7a1f93f967f88d351fe010528ae2bc911126a8af0591b314fe3e41';
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
