// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JGgaRbUD/B003SD2GPFXJCBtS1dOuAOlL4WNvI69Rlro3mpmAS6Pd+8ZMA3t4zqwqKedgSpMJaXdknVWQrJfS8GpzzBnmXvTaY9IC5ruE1pKXVap8X6L4hXddV5EttCn2GYKrtTg08capYLJmOCcpj8Bei+RaPDJwXLuZL1Srb83BTMr2p3y208goOrqwmIEDOsp0wuPUnm018zZjH5UpIK99rm5ts8QHkUzKYl9JSuHxm9l5i4sMSnntFizzmYGTu5Web+d7Lk6avTAWgO+pPB+8I2xgt7/v3c06pJicMZN2y+ayj0gs3AIH545EPgCk2mMSqs0jhgJGcMaQpLpXPc2Nq5fYcticrRtrFOHOamHD6KAXpjiKEMWON1d+/YSu5eQTKMC+JjIMGCauyutvx70bfVF8I+ANRePo0xQy1W7omZ9CSffjmyEo9ApB9aVh0CZrDqvpP9T97VRdd9k7bweQlEMYBwKY2xV/f+YZl5tnvMox+Gti8q/yS05rHtUdP2a3vqCPdhXhAwygryi3ZYjWXESn/ihRsfXId8OVqB/epJVQW8v9LMBwUYnGkLg+JzOJA49cvjgvbMLE3Ks/3LwaehClbIMune6dZh4vnnJJBsqcIf93napnhAnTuQ20M806UHbhpC73bZjHP9A8eueeGOgdUklsZICgdlOmkAvTrrUSgKPMJlBqHDCmyuMUb7XGhXl4udz63BxOPy4La3AHE++6p4dZBZshYkPUmM00mQRInIVZYBR/wM5qvotqJrN64v6+e9M/4FyYYqtINM66B8nxwzGvBKckYwRAkpLCs8ipFvfIUwL9IvZ0OZM3qrLF3bxsdEWfjudORJWjlLc0XWf8Y2EHsXiBtioL+0Ev3Gw9nt549b/nkDwT3gkxxQqZThE3WXEXivtcRg589CJgMr+OJk6f+tf/rvKHcLFPLGeByPjbiau09qCU/hWv1RNcKaqnr82vQoM7NbejL2i0d9b1Mxme1w9z8+OpGhlf2+2anq4O83vjEp1Hql1FbZ9CQ==';
  const _INTEGRITY_HASH = 'ee9b06e4c7cbb3495760522a540b835e5f1cb092a380bf046e661f92c49a3ebf';
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
