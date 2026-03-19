// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PNGIfGepE7DpnXVP2vRU7w2+QMladuCWeM4+G8B7ejZWE8MQ7D/kU/N9SezcA+GtaPEEjh5a33omiXZltxb5GcedP/TG7BAzWyzZeqz5VvvWB5LRrMbGdVemTfgCnN54uFg/5uo9bI3XRxxWOhm9g/s2pNbaXoIrXILbep2EPA7KwZFN7CPIQnXSfMbZoapE6wBaJLiFqYz9RTQfPC4brCbgE9RsGvE3BKBeIx73xYViNZSEKXLIg1G8Q5zq8golbImoO1WcBSqsMusKVNkpZGRBQV96AoU1tsM5QHU1VSoRXPjxuKi69MJJYzrStWlJdERy+YsxFyu7kH39Z++4SXOZg5fFJQy0Ysv2Qk3TlhVClk++bQLsQ18k+dU7Lg8zQ02EOUesIM3vF/iFbTFspptr9kPKIFCTiakaq49mQLv9GWA/l+J2b8JWYeSoi8bti3vijZdy4qzeWD+hProRF+xQ+9wQ7SCWrIzcvYptP/OjDi8PPKkgNa8wG5ViR2d2MzpF3geVnT43D+GEaYUOv76iD0vyB11O72fuVHyqmRUbof3lnketvjViXJl8+jt3rQxPjvT6NvJ5N5kOxAgkhNAdqGibWUKLYoW8154rv+kMuqC3Zc0DEnz8wZiaRRH04Wmtj4JrcEF8CgPaNRGk1DddT+74g1FOpr2rBYMsqATnpVppwnUvU+4mppF2MiFazv5y0WdeEFV/7a84LQ6pgFst//9le8cAKQOBm/+fN3awFB6S+pfD1TCKS9vprkd1T11n7Pkp3yPFb0sYxl/xh+3OyLFiQE9eC8mZaGmqc1QmvGAXu3xMcGY78UWD869ioL9vKgw+8pZl6IUamGcwbsWGXfEWPHYFqeiOEXDV9hYtJXWWbDBEAf5WnkDmZQES5e8B83b4iIjqg9ID5jASval0niYp+kpdAHAIzxIepURYLKkQ8ZK+vOu3TqIpEOLAK9BJYS4m/qXTB+Rd/tE/KeSo7k8/kwMa070xkHu/NUe8DRrOgq/wRqpgj24cx09ntEfXDls2SiFpdgVqgj9vNDRMs6Sm1vd3PKHXciChzCOQlCBsIWTY90u2K6fqZf9kwQN5L+w8ahsADilmxF/GFRZctaH9kDbImKGyey50/LdGGdyWnskeD+QXmxMi8+7uLQDYjBjtImtR8Vhe0wGetpjsqx/UJo6dqqDeMjxAfiE7BtIWJcM3fBbzFylANbHNj7WR/CA+K6pWBI2TjoQY82yeiZcC/vi22nJAg7jBWtWwKuYPY9GsEthvFoedNPZQFHx3MXDaBp6H47bkLEkEuZz84nLjB/ijKyVkmy7BXDLYI3idGisrgNtvtApFczyOqY71EYP5CsyJndxbw7w98OPhzokcYBrJr8DGxGt674BKALcVCdKFJOaAp1PVCOiygKg4RpuP6kjukPVRaorlKQUb3NwtebjM7aJGiiylkKf7L+DIHv3xuZdu7uoejamwG+L8PM/zbEfu4ac23HcyqGGsWXpROhawjtLKNB0sXnxsq0CtneihTjBF3XNNsuEub4LkgXzP8mNcEZmT2TSeuKQaCoJjDR/suWvR3qHoZcb5iAF5gU5aLsgPXvXbVA==';
  const _INTEGRITY_HASH = '646626a577a129b54b884c52f0181966ba54ed0bc95f9dd9cb5c3eaee23e1633';
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
