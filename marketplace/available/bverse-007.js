// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mzMXhaTc6haCrspNcLE7p8m584erBZ/oYjDpA3De/PYewQMHfsSkP8foC1JH6my/RYYp5GiQLsjzePXm+SdV91kB6UXkplmfB6709xfsKaEJICjd+K1qnz70uySK2dLzP9y8k3kvdc3gEFRoE/cRnsEK4UU3wplyxXyIGJ9RyKtJ2XpnK789b/s+DdwEiMAiDP2Z0yWW6VYEEbnUHddHY3Ve+kMYWWBE8+dVMpso9OYKkhQXrqXgRUBDrf34GD2A/y6e5BJg4jN+0aGf5JJuTuKsm/kgyScyPn/46rWqU380mIk3DkymzbnClmvz4AR2DqPD+nyUPEN3LfacIxoKPYgEUjjjeCGBopmBQu54v7pjtvWbS9hgFN9j9SMfMeBQ1h0Zps4VyeIaObAnGYc0ByHOLCJlypKoyAM7vNyqPW5KG53aVHqXw6BmC/vAgnwJqDHZsoK8S44lFHwnF/PmEGvlxLawLhsdsPnLk4AMekp6JAmOE7+9otlASNQN1ciMjfpyFbFFyZLQCTHTUGd6giVxeDW2N7c/GEvhX5r7CZ04Wim1SqqKGQCsjeNbRBYr/IzkPY0hpUVN0Ze1CG4VhgbKXuOXfeahO3kThaWZXGglWFmcisjCAaIc3vrBp7aoLMqBAe4EP09p1yTdH4wskb1/mac/zh6a';
  const _INTEGRITY_HASH = '5f91484905117c1b8bf54e8ddd7009e9c9327ed3356fd50c099e8a7c58e5c9ed';
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
