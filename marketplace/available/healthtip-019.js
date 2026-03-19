// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RWyHUBBAU+8hYK61hhJWu2FiaiG84k9WydPzYmnod4w2Xdn3l3aXY1WPPh/sPQr/N9gQGcfk1KB1PmNYPoAo8q80w+jTcSM6g2P6FE89hL8MkwG3VS7PUEhDEzi+Rx4Tp3yPAqWA8lu6Gp0sqxgVy6fYEohNNtl5VWx+cJu5cIYRVb6I40q1a2n/4B5GGRiFU0JG5exLyZI2f4Pq3oNBkxUzTLJmm/szS2joy/1QXdmF1W7lK09o5bzdPmBmAont1GFUbzdvDtiKCgCxKCDUKxaYJaLLGM8RibeSI5HXJ3Ow/3JGqsJTebBwyVdx4nzp8fdq94fbMdQo53g6lqFS5H+lhoE4fj1Ek207qNAJSwJ3pGeNaOLPBF82HDxCylz0erXEOAilYBBHBgTZFlPpHsBuQmDQT4/3IKh1Td5AKUfpbZdTGsXkZaymI/Jn5iQPXOhjomCIkpmzU7feDVLlLBB5fS70yvzuJGU+8UMrwbFyZR6bp7BskLiJIKUFcs/PrHBUEhmlXI566NCNJLTo8IXM9WOXOJHfG3dzbbkGCt/VQ6h9xMNsaHvJ9nyFA4P4Da+nrcAVhvPsFue2f+rd9Vx48jVMaBazQOOmH6CIojqnvXEIxtfJ2FeLkFdSdCO0qCH0aRU+fLlyYkkMIcG4mUqXHu7N552RrGDgrboHqb9X+mNaIxSM8nLKoaP3FYySsodzT/zfiuZxGS8TerZtlStC28N5DnhnU2v5EHFe0klQGoamfj4pHmS36Ae84e4H0Eojy6CqR4MxB3yT8HBAXj/kg2Gx22dOp6P4IOiwl/qHTs33FKiB6EnFjJ9jokUxg1z+6svH6d+YC4CMIwPzFJod3Qj997RzJ8WTRYNOtKhTH+2xk0q+KpsXlFKZaT05n1bgW9zt1dkPfzPT3vpMnnnXrzI7Jugbm0qHdBNMP5H1HU70nLPQKV6o1b0=';
  const _INTEGRITY_HASH = '775abd886a1f083e414a2680c98ed4e6fbfd929319fe0f2fad6c663f9f97372c';
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
