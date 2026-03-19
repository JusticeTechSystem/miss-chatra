// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w2G5Skls8eMnmO8LhQK9kFWCidJxeNCaVE38cpwcpxex08V9VNyXQvfCqpshYObJwAn3MY0jRRGxXfyuSNl5W9yfJI47FAvyWgAzD64IeFBvNY1XS2SkX/79k/Wd6SNFzCv+nbQVy3kvke/HvAJyxdtuT231KD4d3if8+Z0M0mfGcLnPiTZpQ5QWGlCxn5wMmdgjMS99Kd3h/4tEp9sFAYfkW+MPdcrx7T/xD1D8YsTrdi6QWA01+STzOcWtlBrQAbLbtlOQyxja3vFsGILvEyrXtSx1Xkd7E/nAlgOKqSpWJiZKkQ3AfyyqCiafZke5jvo02s/h0vEUzXxsUIVao3jO2MGKJub/9m1z76CuRwv5UX2KDGJea6/MzcYStfcBPWvimY55UYVm8YePkKVkEjJRvjZz2/RJy8TE1NuFYn4YRAi6mbYt4rc9btA8jpgxf2wJCgo8kJuNFfh6eL9Jn1OLhF+k1KUSRj4GEcSnfc8wW9RuSDZBWmZDJaACET1Jv/x0ikgEimQNKmfv8XL+IOa2ZeUMGioCmKFbwhnGcf0Z+Ej02X1VNaNiafzoBLGVI3x6SLJkQG2UWHixXSCEa2CEFzyRV68RJ4wGdB3K01wYj4Z/PJTv5RJMNM7gH6A9lrNyHKknPBj6KXrZ3U4HXr2zp0L/bmC8NOVlmJ7ufg1r/3YYS9P3RhscjT/5kDf7mBJokC5DRT4hK7EbpIEpiayfOy8=';
  const _INTEGRITY_HASH = 'a043997e392960ed4d9e5538f507a1771c6b30cc2f0bd315f35d868e703d7ef3';
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
