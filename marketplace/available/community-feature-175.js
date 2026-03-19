// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iYDqlyOrRyZn+m0B7K4vgBCp+7NsCGDH+WPKzyNZovPScXPCXzfUrcmQFMN0WMymIBabosfRTHDr2h+pAKyqNhJXhppojD47xm+lqVDTcuBlK7EbjbickkI0e2UPpEgbJEMmWWqtQozc4WfF4mL/gq5a/ub0K3DMpvLB5tbfd988qSHbiJATOUP2Y+NlNFfOAdTLon/cLG8S2VfNLKmYuv3gahMs7g3j1UqK0FWRGOKc97hfdeaXWsovQdEjiy904s+jL6FGqGvEibv0OoTw5SZMinwUo/KVoYzQJhxJvX2Q7+22i3Dh/Hb2o07Xs54TKxS+0/eVxyS9pWyC9aYYf6vS0Y7jFEUgmq8aZ07j3iYGHIUNJzfnWM4WuFfamsNfwkcdVoG5kzLh5P48PgoDLKw9MVEsQLBojkM8fYYHTQ1hKyjKCwL0j2tUomDj4j0Jj1P3mJtvrKwtuObPSWu88rGab/i62KYHRt69OlNcjAnYk8Gg/SPtI21bTWI57gYeRW1g1/uBa2Ga82gGnJZWIDGZ7TixTik3sw7K6lU6jDgT+GulUB8cH7pVA97V1Ni0Fz2Y7Yusrh9J3TFAn4s0f3rAuZdZnKWL3pzYm+MnAVQxptD5108s0whv94/Be25G++LrXbfDMucKATTNC31Nx6GAqrE5EcSQ5WP2UE2mkW7T3Ehna/LO6BjMAp/auO3v7Q0kq35XvJOLW+zliitDvVyRtoE8VQtoydY0AYryjUKkq15yUWLcY0i0';
  const _INTEGRITY_HASH = '5a877a4e666d880c015a1f21f637ac304fa74fc73ab6fec2ad7b159a9e2733af';
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
