// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J5MKXQoGM9vXOKSO6JyOIyWoIPEoYAlhJMG2RJgtwuxkSkk+lRdHGvC/p5dUkXTFxaxPNV1ylMlNW9ahFYwRoT+/jsZnAmoctfOPJ0HI56sbAa3/+dvQ+WjUwiu38ewi9R4Kn1+tv9TsIGGA6jZ4qBti7tZvmkIsF3uLbWedL3ELsLnaauZPQ9xng4zB5ITHDwOxO4CCSspGBysbrcf1p/S8LUCX5nyY65V1rNOxoZArQEcTn/Z8vFVhpMqTv7UJfVfqGDdyX9gexrf7qOmICPQ8NvZ/pg/zESzvaxORKWPY8MT0t1IskmVurMwG8n1uG3OCYFFKjmlsgbpKcnO+rPmo/4tDU5vQqItH1MyPGsWTeSQ610lTcbFgRDX8gNmrrqfYJrgpr9v1jPJA2otqqIcgJU/sVaryqf4S8cnnXGfl8jY0tCGYBZziMvkmdUQaJQCkkM8DDM1nKFX6Trk+1dVxwrp5yxsRsQ/yIOn1/c9fvv8SEhr7VMPIJom8qE2AS9d1cHINzp/zT8ZTEWmbV+gziRFK19TNhANgmPj6qmeE7vLxLfLcnbVFDXmO63ZMamyW2fby5Mdrs78c/iztSwwMQt2zF7EltIKvXh4996zZmNuQEOqByk+ocM3+a9qU05r2sGfgy85UpNTsBTtk8dqpJlIdwHzOfU98G7yExL5hxIj63NVDPyo77jwse6pSSdxfrnd7w7jlOTgTTyLf6iiLfC+VXZtjoYEh+j1OuhqCYYzLe7WEHNdEmI95R0abg1mo8qyk5RPhsEz4TjRbacP3PUXpRZulOmoafYjabH8QST6qMeIzBQF1Kh7nteHMlAN54tiA1V/uIOwrCiUBfcMQudVD5ggym362NxcecgzRr7kRue8XLw/cyJuw7+Xa1HiNK6rXj0SJj64TrP6iMQ1CAjE9qKSuULMV/UnPq87zM3C9Mk0Rohlp/Kg5fDW8AcZ8h0voUNFBypHYBA1zYM236cK79W6QXvUI2E5Yh8SxqjE047yi1KM6kkBtdxyNRrIpq6mys8BikwqeY1ZUJ1Ctg7eC4rTH1B0zxPLSQ7wNrdQi4zADrJIJhOel0ruubPbeGVJSSx/1Y9wbY+vV6AEPTXw9sBULT94Fojpzqo2me9/iKNj0ZR0S8STXCydn03JG1uFOJPn8qjrcfWE3mgzz8Aej9WYN2zQ2GP+81WoTrm6jxvvCD7AxZX7K7xhUC7xJ81xzkFafcMFGFg==';
  const _INTEGRITY_HASH = '9ad1262511fba26e7f8b2f0e95d35eebacf895fad573ebd7dfc48938142e767e';
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
