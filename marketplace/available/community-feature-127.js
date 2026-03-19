// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wOyiCEXId6yD8FphCVGt/MWQQUfixAabDdMXtmcoMQ38w73LLGWWXXfShTpqlnfU63+jbwPMxTJWIsjJoCO6od9bFvX3rLyqE5YsqXDMsrQ/hl+9aI7xcKZSFZ8wKdldCDUMQKA3T2nOYIhdvAM7Iw1UbobW8Vnm+QE6DdC4T6IWrYh5uRtgeEqR4BSWFuThshoAR7xHEoRXTUqkmUuopLukCe2+j66cchbkWT6nghI8fkYyYLZHgw0HjLM/OJZwGzZ8XpQUrHQa3gGYvmnI6oYH+cKLdu2WF0s1J3hPMNhvuutfAHmCU5cJanIrdo49mSg1dwURmY39BFszXv5WbsoDKdcQhlwwxRWfS/LOh3Fq7rhNQSPTkWLXbWWUS0kE06NCYmlMT1xm//C0wvI4zZpkIYzx5tXHHZKSrGsENuIAFYgLuDC4NUl81iGxVitsRWeV7z52dAPBPuMutty2qSk05iFCx85m7GF1lFS+xuQKG6dEKcSh8jX3zrJ3p5kEcNmSiZrWBCO4kChULSTyaWeSXXwW3Ei2sSk+xpDe0+ax1FDamu8CaUb74tJ528av/zmtz1iUYjOy3lKO1pG3Sk4eL+HEl7CAfH9h8GWw3xzZccNGgPfvHZXODw0ia7xbULSD67ZYz11w/wRTh/iyGNjiORS4Ay4/sRPC+PXOfSRBnLUU7MNnhCtjIbRhxnaQ8GRBCOTSMKhukRHguGgpRq6iOnWBGvFZVrKGAJUmpPhD364=';
  const _INTEGRITY_HASH = '5ab9621befb7ac8a612b7badcfa73988737955b0ad6019e56da24fe4f4a0463a';
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
