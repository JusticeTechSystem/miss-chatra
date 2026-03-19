// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8W/40YLTs6jczB754DVwCRv3X1uH4wZoVP0cGhDKJyZEmUQeKkA5n/u1W+lCysvb6SqZNKrTp7n0HrhLE87sBI6a5tSAswQXZ61kvpf2hpPoXSTO1+G8qTRYoGVY3d5i6ZeCGZlueHvpwK+vksPALwEJDrATrrycZbuv6QBHcESprpmjgvwjGvXt6BXO0tmAVZARUFmuy4VGD3L6vw19wHCkhzqR76VOTV1uZz4/a/pqffMXnF9bKNrvxAS+3j9kwmnevA+kz2DK5JxjKNtpjQSeRl+AOvpgiSjlJGInf8njJvf2pr5hgXfcWNLAc/+sPmGpND5I/bvB4wSdDyWNeixFXsyiJiRrbWU2BlnkWfzBW7MkF2XALb8MUXkRDzf/UdW/QEM4EysFVnAj2zJcogIVBMv+0vGINBd2djldAtc0W8uc4ZA6puIkX0crSLIR/hFdZqzkY/UCPwuJ4xiyh3ZHxUL6XzhwFtBQlSXUHKELGgpPjuca+RW3kEweFg4GNIZW0U/x3ZZdoO3a9w6Bf193UWjeKrUXUTKvb0MNSQ4Dp4Uq6V0dPg0wEQ80RIsJcjFZH2P/Cq0NNqMdh5b6DB85xlzFVaCvxt6DxjZiPp5aADbLJMLacVKjHUD7qaV6q5SrS40QdxKodRRyt1kLcwf4SsJR+rJ2s8IN+AZg/XcSXXpHVupoXhuJqu9f+TBTe+mtWqVsXzWW7X3CRzhIF3nVuRItzZNtu8ecEGfiTOzlHBMIGzfEdE/iBb56IqOg6ttBQMDztd2tM7F/Aika7EPogP09aNHaVqBNuuQ2FnZTJPja5ZuR/gJ7HUWj/auTPfXGZiaEBnQDL30iVWiFwgcam34g3dRLzxo0S4qgTA/bzYkTcrLTPOIurlFqzPl3bDhHTUYn8TfzQ2As8QMBsKBAEyUGsSgybIeqx3WCDN2g1mtmE6Cf1IcH04HF3e9HsSIRqdElhxvNMTdFRqxajPpsXnxLIEwK+YD/RZEuZJ4Zruq+4/tW9os8AJ+3iOyZ2ugoCwCuKWNDrdlJtjCqjo8kpDqng9IPpoAYZ1GpTranh0Rr9VIl/nFOWmMTovI2ORcSpzyyniFeqj8E5tg2ERXb5dtQ4SCFzG6cqedQ7qXZ43de1lEj5cdyIH60X1kcaZ5VwcoHN8gtZLkAYh332EZlGiojynFcQasqHmCAy5VpR08hTtnTFaIErYcgxkeLrm1fc2mmFTBUgHRFj8nQPX3HWR283iMRYz+BJf+PN9hNX4PEXZ6wiD5DnguJcxr7Gc1HRR56D10m5isFsiQFsp+MiCYut4PVPJedG06MVKIjHv1rOifUTzIvhAlDK3eTdnObUd9fM0rfB6OAarxSqISUsjw=';
  const _INTEGRITY_HASH = '68c28acb184c87c9a58fc6f65bf6831eacd188e97faf10f6416b6874a2416a67';
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
