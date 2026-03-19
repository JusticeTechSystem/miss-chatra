// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wfUECmvyXZ/BeGBTcbEMUGQHd5tv7iVQUYKdJUwiLOI7zSSuLz2TSxU3fq8wNKYklkn8H7bQt2tX2ixp01MHUEjwBasiL2JyxL76ev14yUW6bej35LhOPq8i2sFDcEyWz3JLEdQKsnsDba8m0jCQQzJ7SzDn/itXx/y6VSqy2CxmH8o8WwC60eum+Xj/zG+19jQeW9oGT/xUpgv2G4z2y2HngZrLkSrh6ykUginuWnMAHucouKIxUUzBGQLBfIAeB+3nGrdqMx8HQEhm2z5Q5ywrqmnAjdDvrbc+N02/AyCz49flI6x6Z4nZ6ttLN9YQT3tveszTzD5d4bbuS1qi6ZuGN3GTQU5k6S+l9eiWb+zhGYe/495OgSt/8DjwSraqXBy3REmQPQZUNCWjjlkV+F6Dlw8cNB18Ymd3Q061jr1+54HfQBqkXg91xjJ8hh6lEYxMUSnKM6kqy40EUVd+KgtA4ayC7zQ6qY3nYfmQ0OKI6cH3d+oNPpxC0TCo4nDxueQDQcR5v3AhDCmbd4/J0KStkrOvmterr8V1YfgvGKe3BWMMy204rAGfunX62MQpRVIVX0Vx9dMHJOXmd/fc5v0vNpnsmFkfi1JI9PFb3ZL3irJsbZvcL04c3vgXuFKHmfTGzxAk4UxpDcThc4S0Wu5itmxUt4RVjVh8/VUdhCpUYy0c7PkmuvDAoy5KtUrsXzFtXrOB8Z/X/lrdet6jvO1u6FaDVEXuALirBTjeCCraVH7Tvl76XtWEfZggOWAR0AhAvBBHeuWrihXrz4M1De3H4K4k8wZydQR2U3awLAhgXdEKh1WlkufdkjtJajOD99z2xR59i2SaXOywPafcg4ODBMUaQBbFLY4fK+tulv59ipanb/n8E2/Wd6YjE4IOv+ea+UePMxna96x35gGQrxmoDJfeLf0TS2N8oxBRfUuLrzFWxJiWkcG6uRe1QS/VevNMiF77VntC1AER4YbUDfAxfSK4GzCyse+TIIrnpDVwRKvMbXtdKjWVHOmk5j3jqQpLeHifpv1dL/mT5SBRYCr4XJBz3zKq+MXtJmzyUePKtaizSQ+V1FLwyaStXJYEl5qpC+FD0Iw0BdnsXQU4YVC96bYgUiUXrzzt7saME3H3s2SnNZjdPV67bVh8RWI6pguz5uljr0Fd1fQav6uayKJSBj3C+rJEf2QDEDsUCTGmKGm8cdI7f5MIcURXwzXHahB6ng==';
  const _INTEGRITY_HASH = 'a26435da611ea41f15c39757f06faf3f783cbd2a8d17940d2463335084167c3f';
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
