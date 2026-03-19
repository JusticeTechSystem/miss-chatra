// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nJcU6LKVNZ3DDoqkZIF3x0iPbnPQM+XSCHSkORdh/WbfmfQqh/QN9L3bNQ8cOzoL4sOwY8dJRA9METS6INhTPxVdhuAjRs3oZhh1HhnqIl49MxhK3kGTQtY/Cex/r1aKNqB/NkKk05SNxmb3qfqXF8qp/3X91vDecANoYGxetx2+yEKfCpktRjgVPpLjdlImF1/0Su5CBIuC6p6BtJKIgBnD5ESJz+Iz2OYSeCCMWXehFKS5P3cGz7B+f3cCY7XLwcDQOY+BTvcnwWH4o3DxlBpb4MtZXnl2W7uNLY0qamyrd1mbEaDPojCa/FuUYcv7vIle1bLyC0TfyQmqqdTqI86PTVWlR9n0b41j9XUSCQG/TU51npHSJ3ICxxvLMJBzeKDx6lS+flTjvzv67hdDgHArgLbatCYFmtfbLXbVvxNadMujelXRKLqzPCvosOnSOsgq0hh9qkY7HYTHoE3nPCtxqxBG0dZfOUygu0Oj7AyTdKhpG3cFgGFEnNLrJSlr00QaCxcFJBHZdWTsbbIuZyTZiHA6AQPtIk9RpplrTSSmoKlu4MUWQOqx/oJr+6eN2NqptXLwIr/TTusrqI6HguSh5bzR94JY5LT8o6PWY0kYgAdsoFQ2QxKAzn8c+8Q+pV852pRorUvBLV+RomePpSeJ2+joV4/DMftMXKN99SD7wD1rhlCpcrSdgZu80Mh4Z++LC0YAUV26w9RJfzLbbDQyBj98ogp9jFBB35cXRyKsFDNzC4Yc0Wq2rax9f9BsU5aerBiGHycInpkKYQ/TH8xngHIAlQaXgI5FEUYGeCGP+f8wJXH+69UJLRU/2YBhCXGrvD0iEjwKpZTNWH8j+Ea80RPsBel95MeF3/NPUHL2DKsT0Pfz+/Cbejh28QPeXifRdCAVi8MmL7o1ZePDbbfU+IT9tXV7HGXuBBupZ4wWDowI7rVhyFYoCRnoptFgWu1xhpPAlSNbnkoVbJp8K6Hnd4v5kXYZEKEU2/pmVl8cB7qxm8FtG3Dlz/Vx7drwEkCcalDs1Al4/BT7dCrrCLC0vP5t0TInQKyaC2iTS3zzlD3+Sll2ciiwI0SMz06tH5L4srVpq8uOtySbcX/FmD6W2bVd98iVmtjmP9fcEHGm2XSSJ6NlAxwrPELOVKrO9x9BJWuuHBzWjV3r5pjaKfF9hlB69jcgJHrFJxefxwdX0VUt/uR8NkhRXYuGMMa5AM2D5IHiGf1ZN1o07Qjv/MZrU4HF5lk7fjGXJ45JMay16yHUXPjjMNKHNeZGzvm7ywcYqeOdo3VYwW5ONwDmzigd0QiREZ9kpqvwvyr42vZ9IoPi5vM/zkGT426tHbQ8u6vy9auS8srUg42edZMMK6p838mcQg6682ghbMHRuMZODXHSrm/WuzLYndvhGQy5ASN/Nz3TsRCo8tkaJ5SQDKXAAd3X67G/tbEYpSLLKxFbJIKeoOaz16xVReNnYbt8XRjj0UeYYLwqZKnhOV9RCOJ/MEONgFxZxVlWOFaROxzSECjpPTQ8MR2Gn8qCWlbaZLG7VsaBaHCdaVQtSNoYv016OrtAefXozxDhKAHifoeCmzSxZBc0zgjUp4MZlyxWjbuHuvyIBunJZiOU6Fqo4an7btJLwGmupv4Ot2do';
  const _INTEGRITY_HASH = '74ba5c1976e7e9f30fe0fb1931cb230b5792c2eada0297945fed7dbe93a4fc6a';
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
