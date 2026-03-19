// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ek9NnJ6jeKaUGX9BbIJ9quUI/EeDq2DTLjxy+ftz/3Zt7MwCyVFqdj86PxcIS9/UzwN/m/rIQICYSalkuL6ZO2Zu99GEQANG/s8fP5AF822y3693yKotRZL2Eui7FA+l+OLW1xBz2PuHU6XB1hwdqiYLmY0lcCV33zu/ZeYQrB0Ha8Cez9NZHY6180EgmMDJ1L5Ag9WK+ZrZgyGbI2svQLwlKguBeDKvzIWAYxvRto7Wl4zvG5v14GoUogAtQUaHZxSE4J0GsDE4HttfL4oLxofDhqjW9syup9m3ShxaPR8NWzKKZQN0tkGxBfM857uqezVMYnBnoWENO5s6ykFGt8436aa6umaDJ/ArB9SOH+AjEI1cJDBy6h7gFs6kyfRE2QwvGb8r4JNGq3oyb8hFeLzoynyecSOFep6gB7rV9sIDKlDrsy3EjezlLaQvyoZJpLEieUcidDGsy1i/AWpxhmvwDB3yvS3Fb2piQ+Bi/gFuevY9c44SDU3uz4TiUAW854iF7Qo6HXAE3XCF3c7lZtq5ryFKFTdaX8T2u+ZVhSeRb3vIr1TtECA5pYTz7CABTZrhiX42ToIxJeIQKUexxwc18SbJDKQQ19EJZyCcBl1cwT0U9yEACTrhB8tDqO/o9C5FTEENZkLbnZB05UteeUumdJhgbxsltMi4mi/LZI+SsYNtLOm+tliXMozK4KL684iZhLRmLVDPU6icYRu0YROjh3SWaIm6llQfqQpcen2+vq3pHnTyuDY2rHgyclLXeeeoCE1YJiIrmQ89fNpPuwEToEK0R8uMfaq7F/nvGDMZ06Nhoz2wA/4niEIcAXJoXCGC1uqlDIcIiicOlyFFrrtNkI1GXRBuquVe0JlVC6NW3bvmfY7SdNWooOvFHVFPjlCyvy0p07aNCorDEjW7zhLrAgbvpdWLPilMPfoHHa0KzMJMBAckKD4laHge1ATJSlyzXRF37ZUDxh0G5jgNYfyE5V+CGugCIA27gtAHmTB5SGO0F2cmmLoOifWtycLqytvNYu+ADmuWxcTaO4YKMIhGrPpWstRUFWe9khBs1wcdlPm1idXPMLbV5q8kV6dKjbbaZBVSzvjgpKhSyHLXT6NbU78JKetukCeITscZm4mJjJY8ROlefCqGI/Zvs/eQJjJMl9Wq75XQzFPiXb4WLd3cn2Cd5SHdmhbcbplmFYoLxXKXdCc7mQLAtdtAp6FDYoXf3PwXoyKBN7cZwEZFuM4p2sWaxNflmBFhueePbBIAONQMZ0pcy0uUAStcLrE5OadUOCtq9YPuxPBm/vBpNUUrs3Ktm+4DD3Qo2Twoyhnj4DCmCL9C4cCrkXRPk1KO7fpRoKwGejh/6N7/EN1WacHt9G+/Yrb7Jt18mIyc';
  const _INTEGRITY_HASH = '978f503b90c4b53a629d812382e3556c2dc3338f38fd375f7eddb250875ccf1b';
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
