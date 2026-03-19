// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sSfjK94ZEwHVEkl2V0AkUpZdDUeF/j/5Hqt0Ofbi0bTiJWT2QJV+6qJr6GeN6pnyBufzKTa9l8VqZpKK8lZKYsz93g5kAi3PwHqqRo9x20gAx/t9zKXJR43ki8QzfGIZX0wADJPKx4ec2yP32TzRFcew1n/RnC3jtlEExjrdmtrEkP+2WxDnKpD9HSGdYIvVwyHQK1/fPk7Oghnv1VEYFLAO8ZP31Dbsgvi2jt9vNsGIMQK/FuDPPt8gWzbH5rthamf5kbK91JJ+JvGGOjBe2F0M57Kht1iasrQUfBDzdk/5LbtuPHA2Cd+y1b8IzSRauplPkAHiF4q8gYpPE5VgQxxhTcyI/+mLEg+oAOTIkTMafYaMm8+k40DDGCMZvoZ6739ImAeUeWVByO+UXl3iOUMdK5iYtE7di1lD1EYy1AC+Xia7L5V0G3Yijx42YVLQFAvKm4hKDAnKwmbjCeoclTa2jU/IR+QONdT312VdGptw89S8bedwm4VPdFKExVTsMfC/K9GDM0MgXrdlIg+q3Zfn9On6PB3ZZXq5HF5ZyJfvMTn3yy1jFx3+uXNFR7EZxCOAfopXPTM1pbYugRvZW52DsQk++b20he/KnOySCF3EHgJhu6yrAoSs/xQInfzN5i1EvZhn1acHJaCaWPJwZPCUUhHjdgkAxy2gBzwEDUWzI3bgI79fiWPTr7Z2Bz/GUdhhlJLdJ1IgGGXFs9kQQfUMxjm0YdNbM5klBeYFvtwe9ANfqzkp+/M6hrvGJzSGp1yDoZHCUeJ9M1ylVy8QMk8/ZOnuUmgjrSrw5+k3mIMknaQxE1pQPmZUzcYneGF80iWoTU6iEk8xPwVArCiMbDqh2k/N84RQcGpukIrJjHRU3WAjCnRSsYnhesbhn6D3vnzFh4FX+LYyJ6yXK4CE4Yd/RKVhNRQ072vsf6GjKGpijffbq9/fPwWSev1NwOgmZA150WdyH7a8NyNm/F7sqXDvLgBClint/JehF4HqrqQgXB2Tx8jkBGvLASQ59qkCNw==';
  const _INTEGRITY_HASH = '5771c9f0f8da2dd85213c87c4018ad78cc7691b5b6220fd265f6242667842ac6';
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
