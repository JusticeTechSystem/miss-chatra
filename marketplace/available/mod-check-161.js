// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XGeDF22UiXoQc6E21vr44643dehjlQK5t57EQSF2585w3+jUQRfksDLWGxajUEZA7ealjS+3SpY/uryA/dZvwB7QO+3ES6lPuE4xnSJK+eJ3gY9QaIP3t9GNNcgredtuAelM9Hc0W9ilkiqDy7yr6RBWg0MFoCp3+N3B+f6pzLymSOlcoKz8hj1pvS3XkammIL8gbeSZzAtjVvctzHHAVZPMzHUrXJfnTu+UcsbvczHtXHa0O4LuM2alq3UlQJCEs0ykZb5S3j7j++nmqgxKD06JTPUqd/0saUx09Q4GIOASUxZYfivxJmYY0IFdUB7XGCEMx0ScX4qX671crOy42A1wungBiRbwbssPjav8XGk/XDFifSNuEYajJjSdT8zAZAKkYKNpX84D4ORvTnC4pgANySiDcgJAxiwAOHaKF+y6K904nPdwcqoMbhu51EwRy3LHBNgl5rwcqOcQATdxxMll68SJhYz9kYmdQTlRNtyf+bMIy/TYlHpjRL6mTjaqvTrHZM337GUwghM2lMqIv7siKcIMqe3OFFAer5T9KlNZPokMf0pYQPJmE1YphXk+yvGBAabMj/fvnL+D52LgeabwE8nNs7vle0CRvBcgzuhtWa5U+/1+H8yUbm9zuCKH9XRzW5lUtsqvCfgSG/9lsYmSKtirKrGFjVS1rlAnNoioWHGK/6JhaF3UA7vk/o8Y0btoTwYFxVCIxc9b6DxgyZTiBbXtbxfjgjJ3fX3q/8nYPDQJgFSxBaGGUEDWocDq1rIW9o6X3+FxnypIlgK5xD8hpSiZ4e8XKAX96oA4Im7v9SG0zRfAyIhrjtOWdR37DfefTNvkCbQS6X5g4+hnHObBWIlwzLSROWmSNRV+6JUJF1HHiQPeVSOsGtZYQvyEfH8sY7hmRNtLDpWVS9tKvwBPOAL6HxDkG8RKZPxDGKVaKAC4mQMWR/hYqHnyfPyWfB4SVd8aR7sCxf3J0hZEWlYZ1kELz2G/cK78niIYx36MAlM246euB5Ra9LeAQaNLJt9RdTx1hcE108LQEH7xWVN1ERDFV0I2+w/konkT6dScsyCNWNvt19FssMLJ7jgDpd1hm1sqKwkYM+MqC5YMonynjGy19qD+U53pBTgGd2OYNj7A8dFEa++dfcJIm7r4xJ7QTIXNZMM+bhXcbkx2l6FJOH7za3BLJg5Gy2GtrCKq2GIZj86QF/iqj2k1y9Gj0kCWQkd2t4eSZbxoD0RywypUW71c/D2yf8Q3/YT/N7rJDZAY2GysRWZi+Hat2yF+yE8hKJhlLWEy8Jsy/SFYBlzAv69VXoUMkKmrPGinibFJLC/wkKCWKgRQ/BV958FZKwp/Y++FX7vu2OMBral710uno4swybb0qTgLyZT5';
  const _INTEGRITY_HASH = 'c3bce09f08ea5914857afb61dd107b08f768f0491ee86b6b058c59b18670c70e';
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
