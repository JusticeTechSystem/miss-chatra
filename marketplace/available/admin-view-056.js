// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gHnF1Tl/+3TacbSiGvgrtESCz9eJ/uZy2Mk5F8uwVEufcNqq/BczM69zRaqnM6alPbIWp0BC4JeFvyUYNZllNILmDrdSS43BZP7553tMRuj9xohlfPq37we1ie/YLi1OPL8+rWnL2N0XJgpvHuVH87XsR8y7QYzejbPnFzvwtwqoNpPc2RN+bJ3GaFKuGlXiFSZBvdHL3waxKTQr0Xlacrgfmb3/2woJyvqvS5jQNr7cDEMnV9UpEpfvFp8o8iLUqne6AFSNtQbETqcc1jN483xLFMyJZ67TKhVRx1yg8rXMZqlk0RAeOwUonpYVh6BAm2ST2aVVf7+in7cJH3wxZITvMc+myAHnHvVbNJ1xTRBBoIE8AiPCH9wTeDGWlAWjy/N+8gGvt3YHUOwPXF2pUa4UUBpOmkRw7WVtS1jFzMQ541v0NFNVOIwm6quIaJadriMV9M2QnTRIdRogDuoh0XyYWXpviBkmYSlVQt1/tp+jwYCaiQcW1cYzwubf+k8Ss1ObF4PluX+2F7uAYcvqAmVDJCYGdkc3WeYil+D8lUTy7s9iqGgHe+zuIWk/KNPvcdzL5gDn71vBJ4s+C7kjXMs4VATa9FnPzvp5QPrhc6y6TfOAGEFfWWFNBxa0V4skamxr+8ezOrSLVIOM9mAdA/Z0UzCHLeh9CA67bw2zdBp9SNxxEF+AeO0Iv3TRPfoyG36luv6SmynaYQdETgos6bTL6EBTovlIGdAug1st6rHWlEwX3EJcUWXTTNyWgWU0JNF+gTxGSDVDw4PvHY/qXPRqPJvLvttkRGZaE1TwHMNT8agP3SxgsfamOHSAqliJwDG9hisA3zNApVFeg+Oxyaz2cFcoemuOLLfRlsBAy7vnZM2dWqG3IDokQotwRMzUsqx2byNmR4Eyqu+K9mAbq5KlmfRnzUhaYfwh2PPH+TgsXl7gvNoeTWUlCbCCRJx8agrSUV4cA8tRWcN4f19uJySyMGKIJNPNzFHcM2vnpg==';
  const _INTEGRITY_HASH = '084b4108ae95941888c1d156e384bcf3d7b1a43f84a25f278804816051c1f669';
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
