// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aae3WbGQIQqxOCKm3DfCb1io/WxE3SZq3e5GA8Yf8zmxd+NUTgTFDcC4QVEVLm0pDsfvnpLibnKo9eDJVoXoojgAkKTCEWlY7PMp62/l62obnvYydsSwG53Q+nsAmYKn3cbfutTUJoeyWiyGT/75YqXFTtM2AFcwJJj3NS9nkSZZpZdv1+k3cnzo5FmteRiX3q6B6jQu+XqBL6EXdioD+l9kFXmUEu9WRSlIbLl3a29t2VV12YRMYQ4zA7fKPzVq27DzmejP+l5v72fLxzHu1bGy1iBz+RW3tbW7eM4cjTXDNaVFa72bz4eHCKM0feJcW3DvBTHsc0/lxoXaCQ5QTzGczkdQtu5rGQjZHF2quZ8RTVIu1ONZqZXr8DetQfN5JuryI5noj+CWYdc3XRNjobfVa2UxYYJ6j+qIz3EGmfJBVvPv1Bp6jjJYji3L54RpkpYOJXVqTsgQ0A7OX6zD0xW7UsxvKM9h+fKA5TSOlFnrW1KDzFwSGoJ7WQYf6fFu3U2A30cr+X/SJaRg5CEAmM4kFkt6R1s+0nPAhTLsIv05TOd5gVK6ozItlllGzFD1ttHib1FyuJ8qVXDf+Nt7L7TEAZinPnfoXjfufOxOkVTPAnMKJN4gG/UZcl0TeCbH/ZU6bWm8FEX33/t+I6UhugQTbIaVIqHTQHKiyoEF1DG4M0D5bxTkD52Et6RR3mkqY3bXBOBLRmoqG4F/3LyhHPrAjDruhGNWytP4RLIcsQ==';
  const _INTEGRITY_HASH = '4be03eeeb7df43bb53707542a759185ea7645303003c35a63516266e76233dd8';
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
