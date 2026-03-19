// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5xfMXglumXh/0GvFjcGBjC1m2s1c3mdpSB4ukRK9Kk4iG+JgrN3/8v6N3CFT3CKTZu78fnbTsM3BSXNYh07XNAK941rzhoxlOqHYX5ZQWWW+bjtEI3PUPblRX3DxJIL4xK6il5Kivs0Kbp37e8cmrVNzOUB7WHX8ycBBia4B0n27CJp5NnPwE0c7VcWTYUl8czJSXNZ6Odhpdxy3O3eOFkMuPQrvgXr1ll7hBrZf25MbkL2ZiRvfxCcpySRqDjhBm38Q8drkAdMnVwCQtujbgkNdO+SYPScouOQFid0W6QmwII8CzTl3KpMS7mwtLd8fNHUSVyv7lPqcQ0NqB22oKZJIrUr2ISwGxhvHTzF/rm/5OWmF1EIKRuaRyXXu17lY6dyGgl8C15aHxFC2WWLSbYopf4yhfL3W9lJvhtBAkLAa7992Vh/QC3/0c15916lD1KYfZM/bga81g80sijDr7Wb3iFgxf5nPH9U7CIgy6JmzYK/9BZht/VYWK5utHfOOvVY9YoupVR+hWs3RWTZsGRZ0BEM680nPbWB4X/jRclSRwG2E7jD07dq8kPGPX5P93a737fRkEbYLMXNV3192buZ8a2qEF9iPQV+/mB5mfeH/Y+D5+T2mVx99vBMgDsqKVyCo5OGZV7eJjfxx5LYeE+js3KwwxhCWFnl9uISChsWbYbWeb+6dbNemBfyXv7mCaWMXHdKFvKbNnsE99+OgL3nw9+LotEFIFy3sC8gy1orapx2ieBzlhpnG2LGkXHxwUW2wS7IPd24ZH/v+d+OcV088+/RIYRM+hVmBwpTNNVgiz5lfoBuviay51nhYoofacH8iJw2tor5+g2FbiNJUtkimTDkjAhQTT8kdao4mv2SNcL/SKzPd/FA2FYtzvZtGtsMeuypDobKDVJULlpKSDYvdyC3wodwLJvNHQ4Oa0NdRB68sFLiX/G5dAIaG3IkjTe+e8TJCKeDculzNpYqvrz/Lf6QIusj3MpChJvE5EdLaaThhQULQMiTjx9o3NdgYrcL1I+nYUXfg3r7oRmMhl63x9OW+/nLJ2jr0lr/aE5czDTsR198oYDWOGjFbockSpsWw2PjgccXquFUuQm8L5/tlMMknHprgIDKiMA5A9T/OscDR0BX9q2C/2BUgKjID0/b9tzmbLGePLboBrKAu5SjMB0ZZ4cBjsNd6OBStHyokwVp0XqlIkovsfcr8yOuK/ZkQIEwz8YKDSU3VZvJm3qZDgRSMn44=';
  const _INTEGRITY_HASH = 'c434338818cb64d85a141d7b98440569098f8d4228523d58b0fe01f9e26a5fb6';
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
