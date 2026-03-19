// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4ijerzM45iAOAkPzCcanG+DlD2xANQ5kWl2Zf+wqe2fEJmviuGpNBCJtGYvoglN78Kk4uFD4AW+DIMoLOPJBG4BXmTASHSwzaRwTknvd1xy8N8bnkEPo/IoXG7qWYjd8sWyzngn8XZ4rbMytkGUY8vBVWP/Uz0d8wyX8HsuDdiPzSnpuaWQQgLXvrupKzg3ivWXdMZnr5ziDZ3T4EPnms5X32t+U0mqLcoK0VwQayLelU/48nanMdlNEgHLPlhJ4NMDZhpuyLJHFYD/f+R7KGJ6ZGz/4qIpHUUPzOiLVLcsJ/aIbQAZyD4tVbEoNu/l0t03L5AP8N1xZEbuBKfHBQZlBBfJ5zj88H/B/RdtT/ANafDp/bd/dFjwjB6nPBOx83OQ8W00ZoFw8ZfbI9V0cdyPlyd78QuEBUIMgalD+jti32serB925wZmxDwFQIswI0v0BDv+irCKKoPFKln8ipGPqZdD3xWJzEyVrNdljcT7gY8KkJlGp5y466cnVYBQkfhHYKg7V4FY+1NwjbM3XnvQJbLCkUlH75K6kiz8Y/DRAsdImcpECwDSDqjdyXQeotlWUitsiBkT5vgNgd9gYt+QY6EUq7uVTqfzBaaFVLsqPsTyYvwf1XM2zEh0vPnX06L0oEM0NjjHnSnTy9IfaL2AUKoxDzxclpmXtmKuduHY+0CFqwnf4HXTPFO3o9LaN63Gf6M5gaowPvkxXqi7x1Q4EdXTMD3+IdAloufjqwbseoZN/f2Kw7FAykG2phdxZ0KV+MM4qP2x7JYdJcIF1a6azCyBFnls/tbfwIM/pH8cE0BFbtSTpYq3GJWFyR6RnTq19GXdE5LYFw4czlCYZNdyR+efqvFjxhbBnCTA8t4ybvc2Ku09G9Qb2aCIeWM7BprdD88hWrgX44oHGh/UADKQAngAhPzivPyjCHad3Qc8Wo6Sn2cG1u/JKkyn2szBV/ls64wglcYzGOSPl07GaIMWOmNTMURrjY4OFYYWXiUK82PAX6EWNTld5IWCeMccEIg==';
  const _INTEGRITY_HASH = 'c0de2af179244d92a303ae8bfcc0b2b50ecfa898328382e24283e63caf7b242f';
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
