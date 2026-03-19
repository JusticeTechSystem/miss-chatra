// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'guzFdXE+YNK5f+O5si3gI5UQSSZ4Ut7xECW6M7ZFYjH5jUvhAVq+AFH7ORizq5MVI/5HH4XL07EikQRq1ZjtyTj4msmBgz/qcoL5OSHtgItDhtHs1aoCvTgl+pkufq9MdDGQM9Ip8CuKXvdk25g73x5EVpXZNRY6uq01atRpMgp9bbOXUlIXd52LcuQwNk0F6sbvT0Aw7XI82TQ4Vo2EKpb+B7KfvCor4WmviW1EoyeOD9xvmljVNFZwFL0srMxvqTX/KeNi3UnLvnAGoC64fgybbLTUexnrqmQfeKwAoCPA+Nbf/lvajIqnLROz0eowdYSmieqBFxL+B7yh15yuGTCUT/e2RQpvoWW+EtBcXFr9X4SKa7TF6dX8XhLyioirlLdyGR9WunTT6xRwVLIGvGI6y2mTISuWJ3OaIQgfIRKkoWxK7P0csiEJnutyL09zYPj7PpLvUjN5qX8AM8YYRUbMW2HfTXw7GypDJDDEo7N2ymrbKQH3vBZPm0C6wx14iSeaU3rs9r0rSK4M+ATxqjDw+bSig6G+A0E+4mxT0xRA3luQxdpxi8ZhW4LCrupyjCsPaa2KDnbJ+gQsfh1MioClDUbL/mnEFkMcSwEkBD6oFVyTGDdumRuqnQpOrKajLQPhr5V+5BLbHoT330Ei9QWB/YJLYKc3zmDrBsSCdl9Yf8yZpGwjpPrrznH/Feqgjhash3/0JbCtGoBjqLSpPfDbCfULpey5wOZsMOqaFPB5cRW9V/eBVM94mq+Al23dMH9ojNg0ZdyuhLyGzXCESLXo/mklLYS1ZFpts44kAqiBfxbus8vRRGy8S1bLkV4zIq7aWOdkJ3N0/iK8qNy54ySvb8mZybLNmSQjL8MNIm+dBwP7F5XO6G7/p7Q/5UH634F+4wfDa7Rs/b2SAOBK/omO5Cw8WJ0T28C2ZdKRjTOQIPk4oIkdpHti/2R6lfJIzM2HxLQ2cTiuIXzVtWyowk7+bBv+MNIs32F0O54QqsPcevMg/c3dVjdppb+rnXMRxIrxrDXMEQiLNzIOJtNm7d9MoOQbh5C1Jd7k0eol';
  const _INTEGRITY_HASH = '11dc7369f6b34ad03dbb93ce5ce5812620133644a063449a201e185bd07b2fee';
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
