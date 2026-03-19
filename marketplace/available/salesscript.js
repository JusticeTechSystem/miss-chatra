// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kSERnwc/eo516cHkyOCO6N0UzUlUTDACWSVn4h0NYRoqYfNIe8hpmO57biLWbMaVctO6UwTlPiFTc00GKMgKAnZh/D7t3aepbfu21KettHmEYvS/edhPCEGP/m3+KmZTx4jvK5N3IN+YE0AGe85HwkiT0QMQnEXBO3cMgM3WvW2JkYF+6QdCUupqUvFeh3sGFQU4i06ggVGwkAhLgcjk+WZC4zfqAxsItDP0iwfIUCHfA9RVBNNjR2LNyjbeuL0Xx8jnkdwlX6F4ZRSjRJmxsItlknazXsygid+1kQXRlIDjdsiTYpU+8pSVlBaIQeFsX3rQxnGvqvvuwB+nvgquqLzyooMP501Pmxnx3TbMn4CBrBRDiblpGbnGNPfSo+MXR3iYRQn9huE4bl8lONUk0Me78Fd1l22jkrG2ZDiAK+xezA/T6X/vODdSdDHvoa0ozRd5w99zxuZgmGRHsE6DUp/J22lyhjxb6R1spLfFHE4N7r6Z4Uy0818xqWL5SqKWjpRPSy20XOyTAojxThasrBnENveZ4JG9SsqXwiCBhOHlOTHGuh9Ui+j+aJZLZA4QpycgKlIjaTkP7PbCtrHE48leBf7x4IeZFIRL3JycZoSvkLkdMMYvyP18F5dlPIyxWxK5iUTvoLp9M6jFiw6RHYlkjdid1MtE2oXMJgkUvvZhy0xEzR9VMZ5lcL7FmG8YLamrGLOSmlSWgAoCYGAt1dtV4YdzRnkQmxkOeU4X+EXoTfBqTI8EIR9N/BKeewj8I2HKcEzWoYtG4OD7MG/KrW0q0vQJcdR/Xv65oLKSVBmyZdG1je2XP0BCUFnr6ly/pxS5Agxh8YK7d2/2Z3EtZC1YJuawwXUoL4W7bZh8qxCcV1gy6VBiZy+d/n1MckG0No7W58NLvWo6b3x9K3lbOyMpuVllgTGiwb/PCGUObj/0NMY9rcaYtKkpAL+5uAYgc6/Af57tYtcwCpyF28m1TYSgMRAjnDFL02MCFIjIs8jP3B12Z6HJX3w6ZUh+QbiOIzPBi8Fd7ArDmbE9bNWTtfA4ZOIZyUZlSQsDiD7nSZW/pVeokhUIwMeI3lOo/iil+OOVGD8VcW6fb2rx6jAOEhFLoO/CJFK7gIiOp8ATQZ7wImKSS4ESKm48N4K/QSOR4AQQGEQ1gGgKU0fYF4c2EhW9xH1O9Pt4e017MsrQEfoZWnSxLCQMTJFZCE/iWbIwazFh';
  const _INTEGRITY_HASH = '59f8381c2030bd5dd7b4d397d74d67c2499493404c4b6c33dcc690712f9fef1d';
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
