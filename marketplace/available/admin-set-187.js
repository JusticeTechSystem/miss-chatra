// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9MzXPFrwYv5U+TJZFuty+sp2jX8PRxA5Zm3thNuMUCBzzxTNSHs4LyIBckf7FbqECIDCE+xuwc5JaGSKEucz8zs3dW9LoGe3yPucT9MQ5N3T3MwhX9e1vAuidhmHszNgnDkD5RF4B4xSRRoR4cS+tALfRnJ1l1as6bSq/6/hPpLA6tzxKQO5/0BI02nnJJmhxj0bFpOZ5HpyaWGVe8qgkO4TuAl7UA6hJ2rc93C0WM8YJp5p2RlMEkXyK3vMO4nH7LP6LvZQrLcGM9AtyvkyPjM6ovtw8rP/U4RUhVuN6aVNOFUcqTh0XnBU0RZzw1hmJVNru0UtSpJcr4r+ggm9Vv2yuipTm66Dz1yhkg0HBjjIyCN69oXWpgOtFVtAMc4rLV5BSSGLZTvM0LYDvlP/2Iz0cXcT5AygOfHiiQw/83m6NeoI+L2YfChrDLltumvSTDvgwJKVrVQkBG4I1me2ynqcH/kOVPskffmtaisNkSqAd54GdFqLOipaETOxODQpUUACP03uzppZIr7/c4pThR9uWEdxfMnT1jh2eLl0z9bDOP0+ry9p7ENShIzZa7JMudA+kjjW0HCmvwHcx6CaIWuJX929U01vmbmoc55m/vTNoBsXliJgHPJDxgTTziBOJeABukTlWuqBB2foOsSFhg+lwQ7/6MacsxLGD0hQNMylrndIicAJf0OhFhg1RvL0jLDlfRa7CiOKgVdzevPAhzlTskZDRkh8YEqoQ6hT+Sihju/jkvoU0/jft6yK/z+gXaVgPNdGBniftDD0TayhRohPbP6fTGW4P+JsGku16sSDB/uATyLb0aD9bNvnVR/z9wCoRWcmLUjmkcjETvCqzHXha8HGUnYRXw4ETHuTgHftdGAvqGd93YtAKX3u3Y1ausvgf3eK2V5LetD1QMkNoZvXmG17iS60g1CD+LKtTjh5wABy9HUHM6M2KNlDgzRKIP4vLf6o7R5hM69cCMZhGlr8N2nYiSbdPX0Gcw==';
  const _INTEGRITY_HASH = '41fbc544bf96d4972ebd14b2968dd9c7c7744c2427ef840713c3c12f76be726f';
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
