// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TR/6vIoX5NlkQMJHUgBEo1HZToLW30bUKck3Om90B5BHAE4M6UUNuSWa2T528ShfVujrqzA4mutGmxPmgQ627e6GBVpoFDQpEk3rNRiCv9df0nkv9Fg+UsXuQ1nbntBveHLNa0C/7yKW9HC6+v2dX8QesMqt+YPVdKd/R3kUUqOl/x8cKTc2Zq7FxTmUL9FfgHdhOtmdekgtABCbQRp5ibX4qzx78zOvhk8si5QFWFTMN9pKMlrMmRfi32tW09MXqiNSBRTIO7N1F2c3C/Z95I3wCWRXbesN1hPJwNQz3rqEEkc5QrkGEMLXpIQ5PAwJ2wEv9qQQYbX0zvGDfLesAzdzXzEeMVpfI61BGvE0lrHcRLsHXxn9fJ3bdnPQxMo+9hao9uO5/vZSDS9c8feRfNajX7nc8WFetwCHHrdYWVI6Tbfs69SdYL4zvXVfbxq149aEPjfvbpvrwOEZtd8jW6Kb0rrV5dnLOR+tTxECl8RSt/KoNotM0uF8rRJVLCrG+9wwMTf7VbVwCGh7p9f0ATNccKneM6QxUVH3aWr5SVFc4mk6qQQ3upnzkqC/Ey/gsa7WsnEvLMMPAo6+hZpLWA1w9v7m6LfyiySYOv0CC7QYfsXSoyReldNZZ2Oc6ls0zM5kzHSAzb4s/SY0YVDrTk/VQaCxxEUWh11qROXpC0jwKsQFbiJOgmIpq7ia8dVUBRjRwhKMDu9bPN07mDYyVHo8LzCNOm4i4bHphT+mNlZxZljqKtvgxkvTkJ3WzYBhP5oKrkCqRkLiaWVqRTFu7mReY47IfdYPyvbLrufgA9b8COH1NouZJNx7+eznk5yZBLAOYR9EGFnx7gE28842l9HB2E+xcd3TCDlybkY94aWgHxf7ZE0Fw+w2iYe0trq7CZB542vTR568+XmjKdq5KetqUAvhAzfQ77wPNcq5HzpbfNwYrSW3FX/mOJGCRDuOpBT6AukQRChsCE+Uv+0HK99KSam3H/hRi8szdj3qKkp78UO6dgg6IQv05DjGDMYfaVkPVg==';
  const _INTEGRITY_HASH = '3d0187e3797756cc98bf3778d90cde9c1b10846cbde599f23d2c9d968161fdf6';
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
