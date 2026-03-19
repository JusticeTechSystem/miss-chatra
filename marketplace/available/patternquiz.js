// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9lXywxZxEs0R2d/yfsbWdLJyBg4ZYy9Fme7zXhK4xgJiW6QvWqiqoXCCFM6PkXIgymyXMRQLJmZW/xJYyw1CXO6SvTCODjETKBYEH8arnKJkBsBuYlLhSod8YB1G/9XIaj6hf41LM0kQVwnvQ+ORTpk4gyi0T9pV3PjDaUd+y+BBhfdJvYuB2lppSWr4e19KGhMNd1zhWzqzB19xEjAWNwsjPWRlYXkTXO7NvNjdulP2b9nbLKXwelVo3AxFDgsc6MyC4VPYpR0ON+Ob5tmWXq8Jsd771GNw86qVeoAQ5jtTeIaM+Xu3+Bs5XTR5N1W6XgoL3vDOxD2i5ZgNMtuT5ZkErX2goBJLG9N84ghXHuSOFtlLlVqlz0eCoXz7q1VbU5UXxtccfh9d+T/aho6Xd7Nej5d41mfzkhigKoaZBe1woJfNs+mBcRLTgz5Q78yym0/lYryv1zQ8EAEflNHjrLk6tLZUEttF1y7igdb7X8RD/F0Zb8QzAQyv+gHHpLQV3f6nYG1yBILhbpKtMTXKllYAgnga1Xj+gvrSuIq3qKKiTMnO7DGxcgauYo0an4DDJ/IWD1bA/A2Dtl2/MMImkQxPup5T2YAJVNXneHI2PpBKK48A/s2bishZKcyInuGHg+zV0Iv4GQa2sF1LsamHfOjngK2bKDDTx1HfZNbSe8+9nYQkdpsdlmD/bZVb4pz5YewRa3jsDWlwZXdoNUrYQMFInasB7nR0h3A39bd8rg0jCFkpK/V2FNrsUUZ73mGQhYtCNwoKGr4c2mcEUAVRuczDVL6ebSUdGLJgvuirsSSf3MZOLzooHWpMtUPEfqBkQBvMR8cTE1kRgNu8tjBJu1MDBzBuL7j5cYLA2iibafXMB9+G+L3WTNscUPBdh4AsV/mmbw79d5bTXSv/nj4wY3006shbaYKLF7/jXqxdDZit3jTK9+aFa61KUgcq8nZwRETlGj8vriBO82M65AwXUxwB/jZLwCuz1PqXVAGUwfDZKLwlYrudW2Kf32Tl4KT1nnbhwHA2ooiH4IubnjOM1b09WDd8mmx/BC/znUGVjzzqr4Ze4B1KNmh/7GDk4+8yANAOHaWDZkzSUMxho2PQhq1q9mt3BG2uIA4CuYvcTUBsTdu9OHZ2ekMm2OrfHqQi5ypBsQ5Vz1l4JSnw8F9i64Xe7rVjI3uTzFbhVRRclmurUsVskAxTwyM/9GcbPd+/BbRPkMekkogm';
  const _INTEGRITY_HASH = '767a7044b53ddcffda8ab00636850f50e89b03507089141ed09e2a65a74df57e';
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
