// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QFxs36/yebYk3Qn8wT8VoW92hApaShgBam+Dosa2D6qVB1udAqBW0+5dYnx/DAkwKZhb2H8HGULz6My13o55ZyWCIMt6bewmUhl4xQTKy4mj7LmbCDaPc3KF942xysfaFL0ER8/6l+74qLRO+HnBcSHleor4GFlNugkMu4lKofaLwnBUgoSCp+2SlspSdmS5RiJ3DAvPNJ47nB9JSRVvszpFzN79+Q97sdVXcElPl3+DXNiyG0qd5ajJJb4B81lQRmBg/+7HrpAKdUZnisS35xsxoQXwNA1/ccyiT4NL9mWoFj/T4rqb1pQHLGoBacfJsL4maWuNLI/madLNc7WXbQwDOhwJsrOdz/1xcYlDwHL/AQj5A0t9kB9rX/fEvBdlvbseJqhkGGaLvv3A7G8BhWLPnfIJjvwzU8YGVxQ3y+crgfdn063Fi6mASJR4YWVbXVQsfNZwMmp1qNso3+9wSKbIHp7QwMmwn6iAwwJyNEbljd+aryOxg/AnXaA9ZSzGRRjsZPLRnYGepx9bc5vHOV2euCUqJ6LLtt1Xaa/JcpG4YZ6kfR8CuMFX4qRyrHXX5rTss7HNqZN8kHmqE+0Bj326Ui/3JLXUSjxz8ufvxagvJeI1k858jrvOTUFPlLJLMD9hgJQ+xCHBm5yuLTj/+8JvKxj3E7ua/tGMlROFD6rphfJ0tmqh+mycj7HAHHSdQmlosKMxSOZqvPxHfWlEXKvLfPOVi/Bb8bXc71naTE08uJt9bvm0Z+t2YF07KAlQZnSD31NloonN6daXN1tEsB3hbEz/eevqEu5bhkg29L0FLDe2d4SwZutLuEFtd+yotYM6XA/gt2dSFaM+40IKABVmZZmoktvwZxO057BrNu/kXbZFR9BTk8CCGJ6qhrPVFrDu4cvcfcKr+r/sDimwdTYqB30gLEg3Wzq67pzkRi6hDZ5KFOTelZK8luWQ/WmsG8ImyiPqTP/p6p1sGR+BC8Sx+9dSAj48zCfTAdsud0yrB2/k+7stVrjZRvvP';
  const _INTEGRITY_HASH = '2039049fbc63f16d268192a0c37e1a53d6fb5653ee7b612a290fdc53b752cd5f';
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
