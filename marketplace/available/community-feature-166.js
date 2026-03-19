// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V1zfTGob2vOzHPJ9gr7HPyDMiO9f9SVkwybYRYx9StSqZeyRaEQYEeLxw3LpNTRKLVL6Ala3CBZ/gjUFUzQdEHdREBUEc4AL8GDdEKBbHL2nO+dg0O41PV6oPSAQmoFgKsWWpv2b2512IQa6lk32Ym7ywoEso8OiVTqNSD/oRwssVftG8U11UqSNXMgbeKvtWmVLSwOXTd7dUKN58tqXewyh/KoRsFBoTQyE8DvtCdYsrZKo0f00Qw8ziyD1e5p/ZQi+sa4RN7ahmUFhcDHmcV2q78FnkDpkITaq4r4Jdyd5jzUDAuLd81JL53IWGJfsrcBJsUE/h4d+ooJFtmP9lEYj7wSSN8qAKkatXqTShXVg4xOZSmEgUY6M8IeB4dDBY8pl25OjOZEGo7aA+ThX6Rnihw+fRnjHlt60MgIN5dSVFL2wKvpqTsFexrKaBeJi/lElIoXO3AoWkow1YxoNe6oxi+TVXCTV02XLnzIuKPcL0xAQi8xgTAqXljBbHJDzM0vXe1HXEN+dqzKAwAWXxfjUOVjaIxB+/PjCpe0WF9ZOPCeoZiZPCiccYGBtBnXC7p+g9sXQ0lQGKEqms6g060SEt9NU7z6JB0RGpJRD6d9w0m5vGCfvWYWEiwGdPUmcbCeVJZsTuRRrUURDBWcUfYpnV1qhnWMdgA90JvrZvgLtnn3HIoOlptLPi4d+qfIXjdFAR+eWq5yn5qAOU1oSzBDTub3TRBVg';
  const _INTEGRITY_HASH = 'd66142ce744ce8150deded718869f50053d89bbc3d2b57d62841367bd42beb14';
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
