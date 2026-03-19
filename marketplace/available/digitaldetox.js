// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '06yYtCafecGx3t329L5wcI8FKMIhv2vUdE3grc0RcW/cnB+k5sO9tB8q36rEYuBBJk94WyMKKTccUGvp0D26dM3P6pQMf3ZZyn16RgkmcuHv0ZRgllyf4HziS5f1SYAYhoffMmA+cSMWpzqMmts86CH+yKnUU5arU638rTEjgR0ywAimnUkSzwtKaxx+jmoEfJ2O3g8rrh6rm8mMgrMyhsKESJalAeRv9KUgk8VjpmNxZhKX0sqQOeT9yud6Z7BrajlC0mvESugqvr4aoNpVYNkfESsT8RdDafkBpC1O59DXDi3nJIqJZrQYN2lWIDQD/1wujo5nFzwjecvpM6RBa5AgKLyyHZswpuZofBNqiz//etFjKLinY2G+MxTrjmjbd3L2AxX3TOb2rrVsN24jH04VugTGyBRTYsORSEUyv6l9htG3TmNf88kW5zJslIvYb/OUMHfZQ5U/NpR2qKQpOA9xdd/3mlaNYvgGNXtDGtJR5uTf91KC3VwedDrsqC3t0LrBdUUQdBe0LsW8aH+SAfSh9UMwPvtmnWmnTnmMgGhBSQpkRdBKhknk1SOgS8DTueym6i7ZqSbafQ1voU0sjEfI2aRsv12RwhUJmTWpxgGCuUpRB0fk8hbaZexzfRuj2doAusus9/xdcYC8R1i4TDSoINXTfyyMzhVeLWSJwh+MFGYxHmOKw8SNWdigeAP8grU8tRyJR8ac2uQlxJVh36b7HrSzNcHWodypiGcM545KoWA8g9xT+9R2+1CYqI8LXWjr9WKZnSkXDa/hkdbyfbFj80YqU2dhBN/Av7HQT7gCtmIz9CmCYUhWHvUH9Ae1FhkWcbnJGp4Umqrc2ZGPZMZtZh8OKiFdW03OKmMS50nybfchiAO4OsJw+89YraqtJyE5NoDnBjYxaQyXjDSYpVcaqGPuXlMzhMeXP7xQdE/RYDAR8wr7xX6jlxcU3zQf4SpNE6z7Js7tOSRtWfD47VRKmFKw2GqWvTWaEReqYukqNghJE+QYLwVCZ8YI6m4VvcI7AFcp7JNwb/9Ge9mXRDRxEByMuurq4DwPKqlGOtgONnp/CuNhtpUtxtm58s0Krwq7bSG9JbfvJ1z7fdF4W9tNV1V85Zup/P9LMpoVaRpS0qeTWbaud6a6VRPfO4Jbl0Gh8zKzyXWQ2P6+9fM8GgywB1DqbingZT91RwBbPrPCt1yT/A9IU96DkyWBKeNSJfhObbJRGFJR';
  const _INTEGRITY_HASH = '2d0215e8cc22d11861942213881a7659a5f8f65845f297129f96b65418d85707';
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
