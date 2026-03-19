// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5GmygdYTWEyG7tka9UDyxG7nZLUxWbJFefxN4GpIN//NE//o/g4fpDm9XuF22iKfa0178gjYH1WzubaEx+HsAeh3A0SqGIO+e9h7gSizH6/iWF9JGKLCLnWIJYvRb2wiA+U1o63NPFScDlagX4T43ZH09eejNymIXzqMrtvNXk+hJ9znuLlunnnAV0iyMkPoqgg/SP+d4ObmRB8i805Du0WT0/ml7qopjDpUa8fgy3ghnuNzkSsWKEkf5ZEUBZKcWaHpohSQBQvA/3J9jMXo1GRPiuY7fFD47DQUDg1NyoKsM6KCygMbXqUMGxPA8bp11FEgnTfy85dA7PHpQgbO+809nSWrqxJI7ygvFrSinrurRDobBgfpjkKV9Y6v93ZvAAGom/fnIR/zd80+XxLySCpulb0r1xjlUkjtomO3lUZ0PuDR5ipYI6wdMZ9T0qoTrHDZrI/n+kZyym4ytgjYmIlRsoIx2aMRINJ2ZLK9xobYbgn7ggWKzM7g6mOEfv98BruVHkFHB13fPTUKLF2yHFAAW5RLpjbAfiGoJLbVkpgOlX5ENyPLhTY03ewGuzzgOdiVigjX8fcUkChu/Cd5qk17u8sagfEYTA1ZmJ/qBCAIO+lMUPMrTrkHgRTNPWzlxZ7cYtTZ1ufC1+iMzFDXXS2K5I/YL9vIBORBdSK+XgnlG0Q5b82S2ku3McXHxFpcl0Uut0ELh4j+U07DmX/5IIQklsaIiI0lQ2BXHSAgqIRhd9DDQFFYOYSpzHu1vyHXMJNraGMJbaA2ReP25C1r2Jjz2trX02F++iLVFbQPS8yt86gQTLA64Q2FbfjF5rSAyu1PGgUW5q3dD0+/qehBXP/6udcCXiVs9NcNEBgEgUvOJlEApePil19xiL2vFcR5SYPg3B+1lZxNRNFGPvquUFbLNQfKYKQOcv9QvnnGK4+FNnAKtqAqMn4PqTzuBWQMCD3tHvqgxRTc3ZSIZ59AbpUqpouK5L8Fd1fuRO9bL/w7M3m8ddjDpQteQtL2Yy4jfWQHbWzztSJomsrCHz2eGeHrx/MEQRyg/3R+W69qcRkI1cg/5CCkCbyaZfSW15JiEYX2RXqdW67lwgWiy3gE/BYZLfxaum8LF/JZnkPLjSforAOrsM5FYzxl2d9Za1ykBBd1KHjtFf7VjzwbnmM3zknBFMzMSxwITtas5BHTsqzTTGsRdOV67K3lpG7UYNmi0nftJpg=';
  const _INTEGRITY_HASH = '0acfa44085292595e2c6384a635a6c7ebd6f28f4585816fb8039a3d1dac16a37';
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
