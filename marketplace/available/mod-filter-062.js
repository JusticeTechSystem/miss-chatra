// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1DWK8/BrM6tTRZGG7+JVwsziOK3lNlwcvh6ZppsxdZOXczP9syK8izZNV0wMcbQH1w9iqFCZTmPbxAvX6Yj4YfsFPPrs65qAin8G0k2Xrxh2hJ730hu2JIPhnuugRGFmLwdlPBCheP1vmAGhCPP3/8386zDudyVtWIGwEwbycLEvAhw/FYny3jeAhm7/Zd0ZpdtOXPyRP7gIWx1BWSmlJoKCw2gUFEXrTEQq+W3gtgSOfBWtoatiQn5JAIjtCeYQiZWBNT48wHCPof4HmR5iY4fosn2yGBrZy21yu29thz9dIWd8P5ufMKqsHpklF+h7jsN12kkG6lZzW+n88YWEI5sqS0+Vx+0asz1bNUteVn5Lab6rrNJABbMMrCKojm2uNa3W6niu+RN5QlSSMVCtycq29WyCHcdBYVte4tnHsQ74Q0PK2miwOFEdn1GE5FrMCxj6qAaa25NKaeBcw8K4hSbeKFFvrn9O3y/rUn3FOXG4xJMoS5X1JbfZP5m18f7tbvLxTKbnCgstQBpF7qqkomLs8G4+49ZmlnBIffTItlYsvzv9Odj6v//3age+Y13jjGxc0F9omrJ8A+j3r2cqkt+xz8z737tTYPJAoaYloh/hk18r/Wn/zc0CpwtsIyp4aoE7ieVB8qfFGkHEQowmCcyH/68RTiWx6wK2lx5pnLGvH4lLbA4e4QtLi7atwF5tGCtjDPA0poHLlSkKM2a+OOkuCftAaJXXkL07ifWunt3CxRylKpk1XinoYeQor500JFqzZhew0565pbyckZ8fGoMg9AdJIdXPtKKK7dhFy9AQaKO4wnaAznkwhjB62EkM191tTnE0xnEUEA6t76t+TnqmesLvVCO5aVYILv5is5dgWv9Jtz5tZhbBzaD26fLdSIFZPt8bmsN1Q0VnvN+o4GTiFKgN2caaj8E1FKDGYDugatUjDTohNG6q+hlGd8miOn62u9ZU7ANnSYpSjHzxQjrhCOgR1toHszqZd386XOtki41KltXB1Zz5XxiL+gfDqd0J/q9I+DfchB8jOJR16UnyiRmJaQ5Zl8QAKHGUC6XeADnFozsOckimeuUeEttW5vD/oP+8gh5MhG0QLClQmLENxXpJ72jDIlVwpq4Gyry+j/T085dwCxryBIwQUhj+4oH7u3xXZRC3a/yNIGv5UA8b3Ezj5XAxaFjLQDhy1dZAU11GXANaF2ZeDvKtq+WCTAHQK1oLL/gDHwoIjwv69NMcTWXT7VfO0hvnsyC/BBbC1996f3Efuxz07uxLC55KFfErzxPEBcpdsna6uZHnBnmt6kjbjcL2eRC6kQMIyJjN9haCxu4kQ9O3QghI2SVUJmRqOt7OMXK7z5QYrvITqFXaIZMAjxu/jmhNncKZsB9DEj4=';
  const _INTEGRITY_HASH = '10d694266296031dbdb3dbb60abd99429fe2adefa23eb41782fb292a6978925a';
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
