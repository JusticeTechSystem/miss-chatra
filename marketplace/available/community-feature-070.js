// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ivvon2hm9LTqa7NU7hxfO8uyc2EkL4Fr5t1ZcbNHyTHQY5FBS9D198Ze1kyH2TPItavB4JPpcJ+Dl56YINBR7wazXp9Kmtcjs5mpTeWRsVfiyHDM7Olfa7/dsIKiInwacWK147IhV4hVlhBfEdowi6EuFDXZ8phqtmGvMLnLcrC9XSNMzpp3tebvFQ5Oo8g+m2sHCQierWFz8tlM6uYrtpPrz0qCN8Bt7Ngl2UUwZSHX+VgJRWPP6smN7Hx3CT5zCpiNUMQmxc5e/iygp2fSe5UHSvqW1Tf1DHyLv2a8XEcO3dq68YslMnek/N3bh+6oH3z9nfMvhrtlrq5XKKZEtuSsw+t8xJKnnyA4+By4q6mF08VoY2ZpL6s6JBl1wxF9jYP0TcTU6L3/a8SnXUnRJZ4OO/RGJs8MABVo4+yF8qLyRV4UdUoSijCRm2BaaFKCaJvLFX492w9xPf/kl6GOrzz9bVKtr1ik3j6IKHdNaMVmGJMrpqWP+jNRAIijFHA1vvY70NAuzMLl4Uxhs814zyDdf0jH9vhHMCzheGPD+YRnwtO8ZKKPjc9G5ReAOuOx1btCOITHuoLwa+/JaTq03WtCzb5ZXDdzSmP8fu54fs1x9gbguIdIess5mtfoPwdJWRQjWRRzdLK05QTACnJ+cAbbYexkbmggzDMCQhPtGCPHm0Ipo8FPldGt8wXWoMro84jnXPHYemFFgB4RAZXdMV6REM2vy9hut0s0fCRTOu1aJ8vCDXk=';
  const _INTEGRITY_HASH = '88475a9df90b4f80fd26e7898c1fab5c0856635146b06b3245879a6cff5e2c5d';
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
