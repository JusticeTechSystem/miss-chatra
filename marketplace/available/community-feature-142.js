// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'usVaSaMondL6ctKdEkB9YWhOCivqzjCXtxGnUFawRelWAkDKxz1xgzUAdDUGdUNSX1wuCiwJYSmuzgBO9CPUiJTZ7NMmAuOgDxYFzy3kvJlmFjzbJgl9bZ8L7FawCiPYaXp+MaRhNqn/ndCuh9eg0HsMbctEGqA0J4NQC+WyE+pHTx6bv6l6BBP6f7HW8rStuU8xbgE2MZT2Xtg/ucwPCu79lWzhLBlXkBAYQueK37pTKoSE6HNCdqwxZpyeIbTyWylDd0G9jI+cCTLUkkxg9PZo8DVih2uwhnUVYSVYv6nwi6VOt+j8wQ9g9gjTti3obCYgeOCqTpsoIcHqNbDuil0inMGktkp/OgaHrD+mnZxN1WO2YQop5YpT51pk/uuiVXytdQ4lR8rzAfP9AdUTtp8sTLGvi5JvG/PZTgSwQcGJRT4rbOScaLRhuWdytimU9Ypwa9L7uvXpPS1Zkgv9nU99KcnYRh9wub1s+J6/dfDZKPdXggoem0ngwvpc19Dx3QflbR8dtLOpYUCAcrLaIxQ/BYaHug89WcCSNx9MnA4Hd1xg0ZA9p/ZRLjV9j6wW9RPlNdPl3PXv2Is/gmSSmVYPp2muxpM1nUt+dE1Zvg3cIePeBBEPfzarSFgLCHLN3eKlYbLBgGd9GUcWWvX/r+Va7/JHS9amurDK2nW1s4NUZWfMYmw7S3QqvcsUwR7jpr0s5ZDwKmCQVtpJXdMI4WNxM80AwZ5YygXVSXEYC74wu7k=';
  const _INTEGRITY_HASH = '1d35fca03dc6e0b851aa1437c9b9e8a16448494e7e9e62fb5b6bf2a5212d7c7b';
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
