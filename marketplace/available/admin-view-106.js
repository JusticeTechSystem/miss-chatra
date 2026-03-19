// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ldph+JT5bXcatJqrSRn1edrJQaJPC8SLV9CRQeFm7l2Jis+QX3yIldlnZICe0aymY/pj2H1W4CGErKiu4jEGi2GtaD2YqmsMjuocGnbbQ6Ex4YiZVY5LDsFt4Uhj6JPQVkZWWLGVlLo51ZxCsRunKkspPZHm3c9CKXYlOiPCKlTV9MlqIhcykD2ORpsYlfw1g0xXc5DWI+CWa94D2lCGEOsZDTA4+KSfZfIpaUTfAgCW0be+BXJDwbYmCrxYNcIV1qy2MPK1D1GCAktUERkJ8K9bEH1UqJtlqZJuigAfkPvcr7B8k5bDc2UO8TIgUCAeiDko/847PNnRQIqMrOCO95pj2JoXG0oXoiJ2eXKwVI4yqpezbt9b+7mB3oLQbPENVKtNkPhZcG+WpFQwQRECqmV3PP/mlcZ19lTfhDxzIAkMSyAPfidhedTGe2T09j/N1M0vR+uFQgsO84LSPC8nSMig4lnC+wTU7M3ccAoJfXSz37s1GjhCHawRlqmeBQwjMdmadI8kGuY+FkfdcSjtyHevBlwsthMPwswNFtGjUWD5KE5FqLbcbTiZEoLAW4BygkMZXFXFdegBkCSk1BQ/mwOSFWdLav5jnCZEgrsbwqpgwYJiB4hA5RTiTrNkSxX2kOIFNqveB/PMoG+3WhrwoQpx1mZSZNugwHRYn0XNSrzT3FPZNwwYaeocHGTbmthF3YgK2cC2LjOHt8sF64Hw14q5ioyMHaXjtWOejaRA/kSfJePxwSJ1HaHy+RLkrxoPK7JLdRkxgztNFsyRBXM763sjObdwTT/7cSkWB+hV1xorwr6qCvCgi8zICjQeuSMrB/Prw1FsJ3CQbBzMWn93zxdIZHDjJBbuCNQWfXN+Tmnb6IiFHzY+ZCFVqMkwCX6Grmq+5v99MZKgo06EKOWdOFQTzvjK/ReYq7ENZ3KWoHuxx1Qg2Yuh6w3U01XJdTuB4ZI+Bx+3D1YPYD0+duIbFjL81iH6dC794XeghIiGdmUzszo=';
  const _INTEGRITY_HASH = 'e5a2a63fc2617fb3f2da62c4ca6279e6bbcef74b0df97d6f0d9968c02fa7e832';
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
