// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hT/jUPCWRW1/8q0m8E7ofTWJfrCGnjRXkBepp1VvrwBxVbJQzyP/NZ3FeAEOksFkjFWXW5ogckLNYFyCjEjOvXS+CdNqw/JESRJNHh+q+7ooHBZUh+eIOvIEY8tL+KDzOl0mpSrTahYybwe//KlY0nWZMnMtGcLD+TfOQU0sW5rD2lqEhr+PMpf83FxDslypBP0SD5gumO4AKdFSZlBtedYeriMqj2DVhOC9ZfHMtQIGIzPtprDEF1GLbuhvgdBbnSCEBRMHCB/aBStHWMXgk35ixg8msFCtlBf8iuvPs/HGy+QXIN+ZU4r5pW09t5fCXvDfiMrAXAtl6rRpmwXYt1EDswRCbl0WvH6jivbIvVn5IDTGTJWZ0lVu3QqGcK050TJldrcJFcrn5/2GKiFajT4YLelA3S49QR87F194cofh1FZoFmt3JrCN3Ml/96GkdPyCN4v768bWU4BeFijyVgf8bvDD4G/hQkCyC6xhYfb8ehZCeqDmOG8Ym9YQTyfEKBt49H3gXUUt8kqOUwTBydbF/Y1/l4hiXw6Nfh+GzDDXsl58x9OS5WkcJWDs2Zlx6F7kWQCWshyOLQl9aOwDQihbF2rDs8k4etANzwWHLiMCMlZrbj706jCVz+0Vi9t29JAbpnpUEFyYHazs0GX1bCdXYjOiYXUCfsaWorxMM5yd984NMpWf+k0YMBao6Uo5hBSh8ci0c2MLaH1WppMo+W5hYmQLNXr0I0m04kEvaMeJW/ghwVr+Tzmxu8mtxJYc1f13sdBfTuOllADeqAZmK/Q+SP3qzc4g8E5MybsDDaze2uGbKvV3rFP32/iaX5OD9ku7whVyLZj29/mKMTKxD4xfVnygjtCF3WmyyjgIOFwcIt82pqQInM3gl2g1qGkbyzNXFplTw1bnmtkibf1aaCgf4nK3zVWy9SfljP+sa8nDolcZLH7M+h4UWTKFP+BovixW5aual/fETe3eOwWXQHJZ1u6T24T3yxENSX1njt+FDzngVo8IeJS/oJQZ';
  const _INTEGRITY_HASH = 'a3d07abce09df9e206d9ad811e3f16d5b0d8ca9569a9a5dd17de4c12c0b7319f';
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
