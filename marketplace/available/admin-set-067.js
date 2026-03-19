// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GDfN9sLq4bZP534Waykhtv37oOS46pCxoLAMQTNQ2TFuEmkXIemR6MbfNEbFgE6a40We742Gdm+PvNdf4nW3xVn4cw6ZT76d2Bo19QMV62lO5waqzk9Rp23gvsGtxNk61bvOLAEHxIvwuQ4/GGkNW4cvRYEcaxOBvqkM7b7CgHHr6YW8l5TjYFy7Botj2GGgc1CJpuDV4rCh4W4vRN8JqpwbQbl1/neRXlFgS1ra4DL/o9vQtzSFvWKOj7HYYUooP/X5QgNC01Fs41MoYzIwnUP+SZvEuI3iGgts7Wo1BnuYY4kFEf6p+5ZMD4cjsJcYdgu0XO+lmtRUswJh/gnniQtT2SxJW8o8X4yHk13/tg3juddGa4TZdWi3FLhuRs4e/BK7y5ZaBTOxjszhiwaIgMEqxMyBhnc5rXgUnW75fRLvOovnoV2TqNG73FeUGrqL7xyfBMZWX7JbvF3sSwxCGum72YYoEdvtidEsuQDXNbVNBQECQSWzmGpCYHKKn+w7AlyvvSk+Y+JPBw01Eg0s9xk4heKaGCbe76IlisIYfFAe7zcDLi7E8CzS2sSLgcAi+iZRzq3wauNUCRS9qhOvCiRBiHC63NBXEOQBJvgvyuyEzLpkDyPtQFyX2ij06TzLe4L8RsOgr6wxnRxbjEbLE5T1Wi60uknbPzfjWtW+bZ71kBaDG7bxWD4EDF1gEI8o5nfySU7HHP0WadNeyLBaR5QyT/Kv2pPX8AzIWBX4oPPmQm6G51rlUyPBK0H8GqIwEdz8zwvSgfuzulvOoGcm2D6FDPOl6Fa1lqlXXFGWfuhdoETicygctCsx4OzO2Qtz3ZNZNjlAhVuI/wwdbyYZr9ad/hgczW0HiiQnLdEsHxBpOuWOus1oWRz0jCDGLupmZ/d60k+Pq4Qb88YI8vZTh+DOGZfP9VhGg1csHpC60cynRirqfncOv0aj6Cmp5G1QHNXRGsHezOhyisPhwgieFpsZi0MsXHXh';
  const _INTEGRITY_HASH = '776dcf9b0bdb9218d917e033460462cfe28e83b62ddb876ec2192e1f5ae3ca59';
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
