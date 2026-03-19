// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7XLHI0KBIX5RX8df1hB0yzhCgoUB+1M6lTZ/+V6LvyRpbNHNn7lzzp1ap/JWwU3ctH/d1itMqk/61mbRmnt7uEXwsozg+JjQhEsJiwrkmPaPOnC1kzuCEYOtDPQB5X/7g2vl0rhKG5JSCyYTPJTKLyk9UVv10URmnyPcg/T85k4Z8OixV1MSyI8JYXy4pSlsb6Ev8S4hXu6av6mrMaVpoRs8YfohtZ7fjMdJDLhBUQ0KBOf0INMonMnZwcsxf8VE4svbGGZ6DOETdtAcgJ0KrSKH6eqKe01zB8lTB0qFmuwUkns+Gqz5lvs4vLlOPLkiQ5m1NQWEUxdxB99IQ8GlcLSv2dIIP2UP5UhBsL5fWYLc/E2W//wc8P5tJl31TeYTFaPtCRH5/qF/IaIPQoH0Cf5sgrvbwxe2xBpiK6Hl3mft4ONj8+XMhRkR403hFEXXvuPDj3WC23tJyf48CWjVekuTuF8yIZj3URvNVMFh5xRzXp7Cbvg/QbTwuTV87ya/ZKCCL1Zt+TR/RWbCUbR+7JK8lZ4/C2foOkUKwxW7iL3FU5v5be+30jL8C2ihIjXuJYtxvOF/k3Jc/j6GR9zhTL8BR6ltkKuWLRRmADzW57at2ro4G4dtEwTjNHZyA+GQ0qFfOjP3SmyH2EmWlflX5mM/buc77mDkl7sF9AJo6dWnN+rxLakyOUxKZTLt1OQ6umgufwGZdRvwSaAd9z5i01KmUmJnBd9EARtcS4bV2/Xug0Z4RTDQtgy7P7fc+r4A/aTPBKaLT9QT/IFbLVCcx1pbB16JKY7NiC/5SLC2nOhrhwTWxuQfM8zrJi9lsSwx57Us67MDkfpoLgLZ1MS1Slnmsxzjld0Y8M9oZr0IKRmELA9ltQSxgmNjFoeFVaRCU4xibBEUUCxIEe/O5T10xIrKHM7dVG4imUSPmOpGQIiihkYBcABs7yr1Jdvbz30c1T4wKqHRBsVA6v0hJVP5Oa6Eh/wQJrmpH2cx2nnCgTkH8COnicLG5Tn1e7IjvH9EVWdAjFlR/nPGzvMCQ/SpmqPbBRYHAgyXPgAnGdPlTQUNAU7QE4P/mCsB2jIJKA6kqswyj5brBH7VLC81jTn6LyekgpLf4B0NTdUePelDPdQCex9yXTT+3sptW9kDXbW9VIcNUuL94Tyy+dLv9wGpvG8CT0UL/qDzvCTqzLzN6JqDKrSnwFYnL//arvISf/fZo5hJVtbnCIhxaZ60cn9GB/wgXF5DHzCBUjsaWj7pRTuzCzJ4ApyBF1jhhuiXeHw51ShXHMwVRIulvwtnIPJqIkT9cMNE3p/mmkkHyoQr3CLwA/RPnI+ZK4Iq0KSO551wdaS2ed9p1X58UgF6qBmUj0lnToLcBWB9LQO7NmFJ';
  const _INTEGRITY_HASH = '41fe5c7fcba79af4240aa4c18bd573a5c7fcd430f90df42c13f95378a97ca757';
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
