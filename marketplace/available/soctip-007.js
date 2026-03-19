// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ti43Gg1ddoB6ETKkTymioUq8u6a1b/GlRtEIAhYNVtjoTxS7QAI0WE9Rik5W7jFdiCs79xZSrnO/6ka6QYstLl8u0gue8HM+SD30d+P0fu0hTMhTk8pmlmrPlJvAYpVvVcCjN9VxY39FCQzDeP0refoVSukEMGHi13SqcunNdNI+B1YJ7cH1aCqjkQz1OV70K1JUCOK1cVYCYXJsGArgjoQa8zQRgDe54szha5ExkVLuSbKAdn2jMyIVHGeCSciuKG8FDbPK6DZRX5FAvAI/NU6kIBNKzKZdXDgPVMFZ25wW+6zHumPM6hUDB3CrdfM8m9+yfs04XJ0g3r5SS/sPCpKj0M+WVgCStV9sDKt3zgvJfyghs7fWQRWK8HFLbPkkxt3+VFHj7ofKDNCzy6G98qOl045v0TWCzIAAdXbSIxvshSneKM/LX5iOYaVmc+s9EvjGzQt1hcZBSXKjYc2wJJxKJ++Qf974EYENyeM77Nsv7a/FJtEDUwcxoCt1oUB/65saqt4f00Orx1oSeU1bBepVTQz5jvqmDKVTbZ7v7HBfO8uIa24sx7h7EX95kmYlefvmTHdBlH4ah3zU3Pw80guMKc2LzHWZZOf3eHeZnUfZzhlfJHdCFcfvYdTRrwt0kTkBplyor1GDlv/d0R1VreRI20NhoUAjiE7cwvO+67qubIRAPf+Gqejuhpz8ZZ5qIyyw785IRc6PNcK9lHi1VMi/Sm49/w9j8uABRrQrY2zp9sAYg4EXzUVjePvsuna/IcnMzaZwGvEPG4j+RME/yMFtYjJl5q1kXKzjxJaCt0q40DvTrcxXEkexVfBxDTRek366ZBhoC/8uTGvSpcOSlgD+FEhS9v5cAEGdcfETCsQ9ax652zoTlLbmdxxXYssVS66cmmoKGxkcnvvFn8FlrcpcnNcVysz9xd9viJuIuocCJl4xdfTnIdgAa7hsrRbLGoKgUBuXirUWyujQP9Ilis/0Z9d4T3cOX+rforPcwke3kYIVRWkjQXj5LteLg1gam9iaXoAT+CJFr6F2GSgY/UwB2KCllMCVZKaDGLBc9yQK/nkdTyJTB/Lb0SjjsEgw+cbdFHUefbUaRnA=';
  const _INTEGRITY_HASH = '15dc2c9be41a4eef35eec128f533182a231f4a25d990071438181b027d82e9e7';
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
