// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fjUMBf2+1pyEQJZSO5TToR7YHXLd6QNbxMlRf0Lx8W9jBZWnVD4fteQ9GaW8SfXIQJI/q+Jj1rerNQA6sv5fEkmLfP6kAJ+pIZcCrx9frAkDoSsR2bwBQCgU3UW4IAlDF8IO421rEKDGbvvdBGzidUxctDpWIr2RXIAnE0+/HrF89VZ4S5tlGD4dL0Nz5jnK+wqc/HUZV0HXTugVUlU5RcaJsNVzlAjs0X8CGu6kxZbp3ucIFPT7Ov1ZEm+besrXP25w7wMJdyK7j7GKPyJjxjV9y5Je0OlLmHK6NLPOSl5SNZDeiih8HClXL1aMH0u3C2U/m+tnPxZ70wP5mAkB73dYIZp1oQ9S503RTjrBjK29xg1fQsFcGekSDINx7JkRCV8hZXIX65+vcoP27PJfBQzRyZNJjWarTugF3Cq0yMlfmWBBFhLweKS/0xyoOQCZE2iWTibWIGb1fVcEyiqBFR7PidpQFmDdJrbpMArn5Yug5GgIPj1626o5qbJojJP2fTyuAH/oFvC5SqCPxdczswD9ZElZuiK1vZTFPpHfQ2Bo01/cizB7/F7QrRToJ9qvfcmtwwdoTHLEAV+ogmiP8E6utSsxU4VRaGgZ/cYkjbLXAhCS3oG1C7aTbZ16lJsMbOTFwtvJcvJclU0GMj0uu1REEMLhj4VJYoVhPqqwQ6dWGFJ/It/zBTbMD5l72xpdWYB6sLBNs7Su6qn8ZFHSD5+W4J43sU4IiEG/KoC+nhdDIA==';
  const _INTEGRITY_HASH = '2c9fd6c4c428c898f6c9ce47b3444ef398886659d95e068740c0e30dd9f1264d';
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
