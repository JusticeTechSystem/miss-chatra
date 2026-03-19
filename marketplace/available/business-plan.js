// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Abdqoq3u8F87fIZ20kcNz0FTwmB6sFIkA+wMDjPNC1EWwJrOf5sB/t2PKnE3cPflqmHkuVQQgVJwwnqX4jLaDzbyZI5QH5HECx235R6rgw/AhqzKJWr+/NXSXOTwwX+Ho6s1I9M48LgPkzN65yGmH9NAKYVhUpF17P8XypwyiZNdV3iHTfiHQj5vLmddYojCjM9UrlEgJ/B5j9HK9IV9MLhPXHOJ/pxtL/a6dW73K4HKXccCl1jMLlO8ZK+HWfT0A+b+rSfsEKtpSOKY23d5hEVU/s735A6SDabZUEAepRDmtT+fzg5fT8Kg1Mb52XzDzWYx06DfCjG8C1k/fdZV4GjVsvYbYziZBECLw5eOyHQEHUp8PU4P9gd+DLvKHTE6t48Lzn3/SKla5VhDCy+3KZkv/2nfi9mgBv2Xd3YzViwsELetLqgVqjvcC8pqbaDEwxgcmSyqzjxsVJzrkP75HaHUTabbFyh2bmKQ8jw2vEltMdm+6xwc3H/aw3Nwa12oCn5bOACTax97zO81xGhY0RHbrHb8QIMIsl8yJG81PW0iRSg2ZYCJuXq26p2H3tmpuRvRCtzSKaI4DQNFFcoeCur0JwQCogF7ZqQ2N6jyu0zTdF7DFijMD84jpjhQSNVJwGAETCwm2wdIgiuGTKMP0EoF8ZfjauwOBVPcXVbleMUEL2/Wbj+Yzw+DOV3Mm3O1jFvR7qutFlZgkSnf8Eih3ZvXouZ99FWOP/dvKtfoamgSi45nFXKMeHsPGOc82NPUikML+kOG6jf3wdtCC6P6xq5lAfyBGA2xSTQGbj6rvpPxKECflLgWzhVVzntPMc1zyPf6Xdqpbk8f817YTx6aGxTqZenZoIHzUU6dMbN27f8t78e0RnjU3vzaGFDtqZrMgJ7QwOJCTczXtiJeYl5G2UH7988puQmHuSvxhSezifbgvBGP7OiFWd7JO6e6GdSobTqe6u/hB5ZurBeZ97NoIQ5svlxd1LzH6T84U7gQvXx/uTnT6E4cUW5Y+qbVXNuGJqvKgAvTDi7e1QBFdhsBgoLtwHBVcNe/0Fp21NtpuFwmEpZQ+c5be/6iywGT6zT6ffATaHkH8fd4yMEFbIn2j19kKTjD2d1DFVYI9WMRCL1z6ibfkzZQyEpw/414ZfmZ7U/o8/LRBsZvep6PiMJ0soM0M/5/CnsWJ+sEcI0jdPaI/2N8EO6lzxJCJoERzfQNQJMDyzdo59IcpqY2Kqaw/HCb6RRobDkWTpeXUFSyp6WYafRynNnaWq/jw1kj82dkAysogwFIPXgkBeC8TrMMubC02KzWvUclvwcrk+8xg9ULuzOMbMV7IXVG0/zlytnua+/2MscO8x4W22FI/AfIhUX3sXNMKffHGnwoInBJOP9UZDYZe6bf92/bl0R3nP7WueZ70FlVJONZarLjPQUG7O4vf+zxHJvgs/wDR0RyeLr4mESRvw2uM7bjdB07TuaRoIHoGOOC9pE0icchjYcBouP3F2BeL/u2ijMbtZzoC470zLr+HgWLYPP0vul2AXXsE7IhQy5wD5DwwSPHySWa5QG80jaJOEZ/Rpxo9BvoaZe54J4h+/jXeuxN2xU7fbkX5Ul+T1RJxtK1rrcQrGp8f2mUEMxb7TlraaacliXo/qlmWpQCfXla9byC5O9oDLZaKmwedjtJZuIK0X47BcDQNlIYQRCytuFMwq62CMJaHMlNkUCFNhtg/RejvGuM8bzAkw3snhGPyzgyEsd24HfDwxEyeiAOoRNFfWGsN2SOdW5ISnJ8uvS/QRgh3mADiKg=';
  const _INTEGRITY_HASH = 'b79b7b1ddef56e3654fc4ebe6f79f4fa38e814c41cd9b0584b62b4e142dcdaa5';
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
