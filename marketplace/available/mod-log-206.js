// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J4ktBC9I1tcKyJ4/skLSL7brtQhXMxuz7PUXO5V6H9QB/rIF8lXMkaMu6KG41vPD0PDuDOdUUWja4xNw0CCropfjrkUhmN8RUwX3SDDJMJpDg8a5WeosPaGsyCteTyah5lDoqgIxrKyDsn2GUTQhywZX2d9UDC9/h6Etw2GsHFApDpHewBmGrNtVsADtn6p3ypFkjBBGOiDaexVFEPOZoV2Bj5HFpbasrctA+hQ1UxSq72kMyqzPkMp4grMLLaXo/kpZIKYxbNBmkI56M+V9+1sGzCzluEA+xBJAVRWnF6oKdhT81C/ugVwPiBgryDTCWSUW+PZWZozS2b2SAOmFAIbqYglvkY2zVNOzqrS/iOnE/agFNve6vPPWLdUEUfDNHIaL42cVKwyY02U6ecnjUWdm6uC8/nkreW4lnykGkAJyqQ+4qT1bP0dfvuY4W4xBWjl0XSD8goRrmMfgH+00tTxM1ljrm4BZgfHGEwEo39AaAEwsFjwcztYLdUSsQLHqXaq1NQFtv2W862UJ7W434BzZwIgXjfyrPx5eNmAMsyEx2pv5QJT/W4zb8J38v0B4cZDYvgVIdA5jGXCW47w7ckASMmp8zAmio5eUvWDt65tn0wGUk+se1foVxX0oTEKo+kugRh5mVPaU5muvPRvFtxJSL94uAerdLHOv+9epSYC9Z7vjtZh4Mh1pY2za4K/2EhuN5LazMLCfPU60G3xHwCPjxI7qhBw6IzryNjP7k7Gbz9qksXZ88F39OnJzVUwO+lczvrri9P5EM5jrmTfeD+uI8xPJ0NHvFQz0mJkj6iL5rrKwHCfWuKEV0RWDu6ZuQhkHVpPkN/LDxIYK4xNIonx6WaKtVnKc/uTJtUIC3XBPJUQEzOzTp/u+GS7aJK2QbmvKAbqkbZsxt2+bMeY5O7IPk/5zc8eAHnG2I9AO7JrS2WeAiZDbjP7WoYwn7gIlW6XKWUEGFiOydnMA8OOnTAOhic49iEsc1nwO+WL8wl22BQJsrRDbPplxgi1zLO4Y7jGs10ch0hOG+Nrc+g7Iv61G7mkzM/5otj3FA4RywF5hOcEXH88Y2M/neBcXcOCV9/R/aBDRxK/NjYTUN/Q/h5vL8zeu43p+71EiebZGcUFxo37UzsQv3el9C380KZ42yS5a7B+7dh5CU7x3FilyNWwU+zX4K6Q9yRWS4zq6ucD1qOJeZmyccOFWEe2ZZZz/tgQXKkVobastWh7OBiDhdkZmLWPeA4zOGvKFPJ3YujtST73wgYcE6RwbmmjvCW0jPdcnojkFNix0AAZUSW8bvcWQ4U52mtqFxtfkgv2ab5sgaj2HGFD/e8A0ID1M2wJVNCd4VUIljenYgA==';
  const _INTEGRITY_HASH = '4d8dc3f1ce997c1d4d8baabe42c86771627b32458acf5baf169385f7691f0f58';
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
