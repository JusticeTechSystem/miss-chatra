// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HQ6XSwepFi+DzHtLICFT8M6o16Uu7tMQiCz3IWK6jos57ykWBREDFM7CgrtZmyOUF+fXJ0NT3iKBmULLGW7mF7SrHAJ4MgfLJ7LLhBB9QojJFjjKKpzKctn9JJQ7kzUgXqRylLNIAvB0iBNipDwbb77T9492W4IZBkOXWwGIsy6B6xOBq60ZfObEU8QLja8jne8dx7XKiRkTBSnxNWNi7TG+k3PM50M+eyue8OIWZiMIX+qqktVYKkyBrNbL/Yp6fNSZBHBtgtNJUAl0Df4rlVHcTvWh50wD3VzeF/hBkeI5EtovOT38wCwJIIOYu+lamC4I0G4jYdVggRGUoWJC+UBCABdKtOqnQUH+G6Kb6zE8sX7IyzhWMwtd+3FQP9Fojgt0L5O7gBldHp6DbxD4udurd6fwQ0Ko2BuvN4Z0h0osmdbGxAz/+8bWDfz3402kA6wILmhXebbnCKahU+Et09+vq+6qtjgaHqxg7ZICUOFyUC/JeZoFK9E51qxDTM+cASyrqo03kv5h5tG+Cf88zW8KaDBZJ1Nn479H2vPuyFpRv1iy7EG2wZHEdrEwSwvIzA8D+Is6hwif49jo5KZRh1IUzrj0UcyaRd3q+ZGxg62Lb5B+FYZNS8EX5/6277CRq0+9KB5Ob94AW5JiXryA+F4AOU503MwI4y8wdp1xn8kbRAb00Jolv4+QhyJxC/+HRg+0vLhGf7hweCYil6LkeY+lX/V0aW8Gpz4HeQ+MGd1W3o3T4H2Cjhh84quZe8CsG5Qa/hMHQJjxnKSbfGjfxYmsWAyw3OdpE0HWa/5aMDjC2j93/BK6vLhzdF2lilj2HZdpzvK3gmPlEtIYVkYF5Qyf6blN6Qar71No9PEojIqI3yfB6YAKl2gXK82Gi39mN/DmbfwKeCfAKAhI9PYZ8S6x5pFwstP0fxxGXCXI6w41Men5sCFgZhnaniJqlGbnWPKMm1+Sy4dwcaE40+kpoZ07RwVex3EpodS1DDdb6ho28I6Nv7gRkUvPzzw4KcBqz7l2IdIB62dg7mrjrgq4hYn/dw8f9r3DGSWGNqzPKS2SW9wYuztwsYgccE5/HzNA/Y4hxy0qWzPlW9lvY2XrmpiZYqUgz7k29SX1XtdO2ZBvEncros9epBg4q0vBpdOTNCpNbvC3kKns+3t51uVXyckSQbDMFMd8w+KUUTFIZJ8FI0Fk+fnkWEKxlNuDoCldBp/Vm/Q/4GhCa3eJgnuPkmIDfOY3eRGn3G5IYdozCVYRTe0vyZggYWzEmHYMyvJFeix3hbccRFNy1s/ydtDhBbL2vYb0Mp8z1alHjcVFM5AuG4FkgmL2ZpUMMBk7OLQc4Mv/UsMH9zrQbg==';
  const _INTEGRITY_HASH = '9fe6b59cfeaf6b4e6cea1afc99c6649d53905c3cf3876aae52f46e183d1b2cda';
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
