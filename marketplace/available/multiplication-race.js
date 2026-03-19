// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IHvXP9cZgf5Ufq09rrzxt483MfubY4OPjWwYvMHdmcYP7T2/MZawOD8BPSVnlxZ+snqZC42Tt8EJzHF44WcPNx2mI0sk1M3kjGtZgbJD903DV0zg0fJxK+BA0hlqdXkor7SOhMtsNsresfDdnhJHf+dC+BCzk24uQvxmmZq1Sf8xahfV30UTaLSm4/y1SxLpU1khGodl9jvGoWUGkOjzViXO+BnZzckEWYkGKvVnS4m2kZDGwpa/mF2rY7LVTHGyZAL7tze3UJnKO56f7cHnv/b8ZT0bpT7BkwAN9UH8TkhW4j5jg8zHgK/kV81sMDGFOpKe2jYyvswngZhXIWSJaF3Y8PHhaFf7RjgGbooPFNZvL77x0xJPR+mffJmMF/O09Ct3oMNY01gpJ+f9OmwjgRtoLVMWCeNJv430V+VJe6HNQeUatGpuphKgNaYP5GkXh95aig2WNmMD4KnLBEnOMpZBLgsCecelxOqgeDEHyyrageuLs1mKGtKSxEBRKJq+Z8/E5aH4vx3ZTAP7u2RRhPq2ccBBbWfFf+St7+f+Up+IC0RfkjlGOdk+Zw2JNRsjP0Q1V2VbeAS/dHbub2sM0OOL8MRtS4xITBc8bVL1mQHGecJEErFYrJFqRuvcwSPKOat8IhNWyp8M2HBMBaCJxVG2Eu+M8Wfsg8Fs+YBaV7Xzv4C7JvRZpHJLJr4VAhlUpSkP8EZi91jRDp9Whx9Tm6e7N6DG4cyq7UBz1cCcnemxL+/FQNz38cVydHUnHqDZwitbzKl/IbWNt2REeX1+rggpyUcvsjTMfUtnqFypWPXfGQnkPEaPfHKhnMuE9C9NN54yHwPavsRJ4+o1vN2cPNlpiafg6waymry5kKJKFuQs3qWetsFVpHWKRm8TE3xMnO7+RljhdfMrHIA3LQeZrsVOgxR5QsT8icOXtA/UCLgTgadT+PEYewMYLvdJbaIKaqYYS2SooBE9Ca2r1mWhaPsMAhSS8gCuuFEK/O79V8Y+vnniwXHspiPXVQ9uEyUN2Z2+pYIYLlaD1CsufVeLHkUJoZcA+VtCRjSK9arooa4RFnUJsav2CkBKKI4GFG1eMjWdnJGOjdaTuY9MIpvf532TvFwkcIiiYv0YLjvCFmxgLjvi2VR+g9TKnOgy++VBa8h3va1gaa9g/89O9YtKbnWbf4QQIDnwxcXcuA+1n5aL4sWmolGeI8ZymajazsULio0vPWSvEE65fVounVh2SlBgoFTaakg0DykYoWTJKXv1NyVCfAH55CYuiUMqmQ1bhpA4MAg2tLMK0DHzBXHYq+xGBWiQl8GKV/n/IRGXH5u1zz6qWBlEZjwhyCoEDxVAjaCwassAk/yr+M5p06EyzNnqHY1gVDWjlcDbUHoMXreLubzt3BVdUmC1Yp1P3LdEnp0c1TVJkRUegy/FxVPSVheFcCe1HltIUVHFzYfMK6Tsc1cMnyA6Fz+F+Q715Q+/LqvrsJ6Z11qUJb0eiXkjrQjkG7Y5MTeX1Dz83H/s8GLZCXv4/U4y0C8XVHKaMpQM9wBK4V3JjGHgSIpjeN18un/sl+2P23AQEAB9wZTXN46aSGjYodNx5w==';
  const _INTEGRITY_HASH = '7e1cfd61fd56e1d7eca0122f845e1d7e7c9684d8d796ed6cfafff5ff05f905f3';
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
