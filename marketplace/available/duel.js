// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ty0IK6J1ag1i39Du3RQiAhfQJdVhkU/6bGM3ZmIpxnVXEUSX3xTPsDgiaXtedpOp2ZWbCIU49RguWp7ZKttwbkOZBcHlq1KDwUC8JYomaSrFH+DOOgKjZGOluj5NcveDz5WglDPZ4sWJNOtTnaWAc76Msz+0tPqyCV9wqic6gz6iZTWuMajy6VFsGwJhwe7msllb+lcEZDCHZv641xDqyz1k0gIznCMTQs3Q/8FR6wB01LGJY+uwcI5BDxZ180dOYXZcLfmGSqv68ixyfv/DvAqPNC1kwtxwBH7OqfYsxz5YV9f7QmC4dMWqgnWPOsPNuJcLa0hZ4IzLczmcZZK+YgtmBaSi6JBzx1bV3Jd+mxoiPqBZ8ODQzf7sBlpbku6dnYbwQyL6wlk6cnrvIYAzhDTYEq9IHXqGtjwNOc3cwOjFgmvnoCL3tQCGjjKNc30NEepIet0/66fwmfRuwYg5uhaqtr1U9EzCGQluZb0EdkTw8+VTIW3AFxg002ZCtvx1G+1S1gF6cGgn+cVUitNWEXwl06TL8U7BP4bEyvOS3qjJtzn9740/9fYndNXhGGNiBKjrBEjaaWjbe97NE9rPXDeHrfcw3o4WgTT879Y6V1Y/W1iUp6r0IAkHlA1jS02aU48/0wEOC+CvAAXiYqCFTjYmr7L0AeDLH64LVgV/ZjBgQR6OOdpG4BOufgvasMrkWpCwa5+V5i0UrC0Q3t8OUJzmFINDVdX5nDR1qUKgIFGBu7KdYqEzb58bhRio33eczUl599VZ8vZXkN/Oi+vmEpMKdrY9DOHdnwHgiF0ZQYAeEDmq6UKJOCMaAO7600s5aqhslSj2RkinsOZCV20UpwjyHItuU1IxYvrcdQBlZoHgFjwhUCT5B7/vvLkgO7vZRx8Nj6Y0/8ZmrShtd0NSCZ1EMpxHFDaIGhyW6fKapAS+OqujAIZGfZTPeuxgt7mvVqXUHb+ahJJvVNEqLYr0ZkB6JsN1TlxZsZ0scSco8nD0sG7fiLHONCGSo+EslexYcSYfasUisJozWG2FGFgq+2ADLsH2ZGSZvSk3RPz6DmEiSHfz9+gSNTvar4YfCzV+0YfkYmRpgHjKbnOTbgBOlf4JXwbN5t5bo6Tqi9Z8wdi+HzufxAuyFKNwBrn7dpSw6G1PLqX7x3mbbpId7ZMp77hgMx3+1SPOPGNSpZwm7sf9/tM=';
  const _INTEGRITY_HASH = 'e46e854e25d145503ccc54b387849d4f10ad8bad9d3aef8c2a06bc750c554fa2';
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
