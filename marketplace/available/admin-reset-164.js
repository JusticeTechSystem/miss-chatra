// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gvB2qVE3Vi189Ex+Bn08ZruAaQ/tQb6Qe5l4myXna5VpakXe2RrmU1DEcaMYiTMOIfUhp0m3SoVBtZnLo+qUJ7FbSzkY4SDct3gTeVfXyE/KrJr1wTANAHkf8VPva2Qf5FQc3+YlRwTRpWFG6qOr0kNugW04Boa1hpWMGeTC9bFtsbEkzwDHemIdHleDd0yjT5HqodJl4uhF8BnzEys9VRFhslyyYrsCeZ4NmhbxT6uOQQ9FupNyBs3XGEViuHSLnWM9/P9pOUKHvijfPyOrqwrRcdyd/IzVAlngq+3sViAkrxGPPZ9czQoW93hZDj3r0I4Zftq6FiAF725wouk4+TDOJ5656x3LR2LDSOKFMm8k0rqbLJEzGr30fSjPRiIXttapNuB6xKx64Q030h3JJ7ysTkPgPgm5BILqZVN7Ndy4aG+uibOppe7YAMTmyMR8mUY8x3ppgJJz9acRZTjeN4nzLXb7Kug8gA/b/pwO8NsLHavvpXD3HpqGClO/NuaHvgtOJziyTXYk0uJtgqFt0Ipw2hxy8omG+Z+BeEULYqPeUkE5qJ+sJ+yfj+xqWqTbd6+QmNTZbFLF5mFUDj+9OoULDn7hz/SVIr7tl8o6RZPIj+FOgzWXYCRtoxE0opnxzeGVwQhPns7yLsj1xSx99sBrhIX5xHpOAZHfNwol+1rk6vVa0tVvpLF6DcxggffDetyuGKx4yAlE8Vx/wZ3Hzdi8HhDKREzqWHj8lQVUo5bMblwZ6UlXdSa6ow8BpzbY4WwC1w0VnF41RTewGAjjZqCTf1K6BN3p6Kg0hXuBwb1huh+xZFwEu9rArMfVi6N1o44E+/OQUvhvntu9BOVzUt2RZXIq1dRpQJyMT8P5TGpx5pEqhM6pxo9BamuMFB4NXayuyNw6pZfXW15rxQleU4m94Rm91qSS8rFeg0FaLLVL5nw2u2Gk5Rv2TxE6vMfx7QoKsaL0qDPa55m3t7kkwe3/WRyL6WMibjGygg2A+JVTqcdMGFkpwMLU';
  const _INTEGRITY_HASH = '9c6be0d692e91a4b3bb9325f060afc51d36b8e00057ad8fc89402471f32d527c';
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
