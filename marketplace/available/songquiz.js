// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qtM8Wp2sZfFlMp8H4skAHcpPo+G1ZIcilsyf0n4u26a+bGNrOEBCs0EjoEMkUoXdnKgYVikLKeTj1k/xrTv5N/FU5H1TkyP2VKdQ9BmGcRSIwAyC7kvnEXVdnrBaoo1EbbpOWJORID+cCT0s4PzJMtKqaeXaII3DKeMLp0euYAT5boDnbDHfVujiMaJMqbb9lUYqGfjm5eduDXVVquKH7iBAB0FYPf5IK/rbNKUwt1arZcmwLtLu/GO5S1RKSxYtbZTgdtsJ1XzHolm7VdTSrxRnE+XVK8VF2aHSQy6jqjIvv8XwU8SgSuBFU8mUXeUmLNiEVec07zXomeR/NA0mVNAirUFloO1Wqjq0HGPYHRoa5PsOg+GA5Cwv9Qq9jkumS3SDSFx7hDJjDrFAdbU4UwZAeKie7eOYR0OXKFS3NwxbuKow7L0oY0Koa1im1lztfIPTsZIaM69DyHZuYc1WJbJQ/2gGZOOd9CEN8OJvbmSvy/3wltrQNX62nL4nb4lpUiSsUhJFnfR/PyV62HHZbBy4vX/lEWLe8ATcb1DlAJ69X7SMOGw1L+urL9REow3ddsDDsExNcCBI8CDzKIOBJiStunmj+m+o9uW4xImVfo08o6rilP9GQFyAdbzNXn+MuABboUFShLV4dkvQYjSXYLs140+eyJC+pHWp9aZ8ULLqDTxvlZfs9AH079/QGiAL/KlTYTZb6tTPy/HtuVc29wUKssphuGzkLer9645Ey7laMSJnt8PA3muimC9DMzSeZaNs8YKTbrCZIpYkfUXPdveMjdYZfJ8ixGhk8H5jsMyvG6pfCbeEwIvM9ZcVgNl4abSqIRX0/0W5KBelyOeqr5r0JmgaWEoUD8/vAJcz9gKS3SVc25iV5M8EECwZS4ddPDXpbSNURCz98ZpjDWQgaf+X1wA90L4MZXO9fyTBpuULnw+jEc5ph+LzA2uE/gwT+FdXBBeAuQj3AKWa/HiW81RgFGqU+pjtykaZfqPih+mj/OsWmoV4nsRjCqVj4L4QFH2UnGOwr1SANnEkTOSLOH7qdrfoeaiTLlB+LLek89B47903KTQL8noL+uDJgGJJA837naXaiKkua1YYTwDv+/6Tbhha2Cua9bVC5Qkq9QpwkDyDmFDfI+RLHU0yfVUD3Ppxpy3rTIjk0wTmVkg8tXF+zUckUiHSLzE2Qt32YjX289PmgqWGAbO5n/fMS4BDUQ==';
  const _INTEGRITY_HASH = '207ebd5c163628cf627d470d887d9afc030d176e29d9921a9fde859cfcf9eacc';
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
