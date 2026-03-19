// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UBh4ZH71l2/pcz8FjaH5EbrSdwpObcgKnHHkrNpF2ey+57anZoNRa6ny0n8+xJclovY1IJGpGsUA0sJQLlMGjgZWcKw/v0793hEvHSvEpz+sy/AjR2YZHGh9abadCuIwDz/Y5VgPl2TPgy6LonnCVJ1HHZkCj/ln0Xt4A3TjM1s0TyBO9WowbI85HBIp0N9nXDTosqzMMkovNPJLY+J3DJZHPemw2MYiqjvu2PJWLCVnkExzlywT9GLHtxTDhMmE7exqzfxTL0Ayr59Zq5Z65Da4j8nxJy5ul5um1gNEBE2dAeR+49d2Zh1596ATrogxuWS9B+EGZI1unwHsB2whbgQtr+TuA3AsL7gYfQ17SByb7nfaQa1pU3Xsd75LuhzlQiJgVgpmD+aZvEPlGfpwzoDNG5liyoggGBevQihCbJmDSHh4RjUIdclRXJ1cMGrTzuMgnvFM1viy+TVWSx7rVNcCJQRxi6ZdG9Ku17ZHIt6hf8AEgA5z5Dj6EU+wctQy+MNhny+VWtcMes101me8u6558SmJ/77wIgohj9INqo4Y+Z6f1y16txWtZE2zIVC0Io0T/ofEcnrveLFxAxSh5GUbWT+Rwe/h6Oi+SGjehssR/QtyvnawgOX2LUr+apvJShCyGLAMs4Fzhda179uUqMZ/W8B6hLBiOULmpjuz9GcH44HAMS6PA1A6TwlCfLRTJzU7syIQE6EAlkyGQ9sklyaczW29k/J6YXx2zgZvN95w1rE=';
  const _INTEGRITY_HASH = 'cf21cb763d9cdb1a41c6810ba8bbabe83d7240496a6c18b9ec99833f2f94b2d4';
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
