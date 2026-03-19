// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0mktnw0PLkd5K03mEcRKrwWjEh4+WPIXSiFEnlwGBOErfWlVRNUs87PDcYpon/sDlVchyrw2NbLaVHDu3DlOyXe2RySX2o3JLcEP31G/ShLbUGueIlgB3TKa7H3Rd+sDALT5lN5p+vvfdY0Q+uHBPm9QI5YvxCi3lAVra3gYaj4A1aRzX3kGXsZ8hoIeTLTLEZ9IwRbEBGXMsmIw8s5u3SZ4xhC2q+6mP5rKwRyGpxn9WJb/lauLlplYcrhjWBeV8MgHajsurAAfEYCpNeySmj5hhnbofkFj9g7EC5CIwhKJHQOumih1aXe7KC4T0rlwWN6E0YpzVdRZEu8vi1df76QkvgkqkJcSaCl+/VNcJGOq690fTUO7RGJcB3EYgHTbN/fsmtKjE7LRo5bAdj4AsL8GpFc8sxK2hnlrSBI8t3J3rGptEaE8SXvfKRQIOMUGH7Kio9tBCSSomstpPgMIRQYWUN7Sts1GfL3pk1xcZPf5jk8JQi1LQycOjaUPN7+ZS8Ld/QPR5Gk780WRaeY3t+zBbvAeV5PK2ii1XUK3QHmENqDi1IvliCSwlrPJnVZCK8zpO3mkbx9q7HVfnZNzd3zDI7/FT88q+6uMXeNt6Z9SrS49wdPFjvByDLSPa8y1A0CInzpzf8IspycCJOne1XPGUUEox+NKruEx4fz09nOBeuE53tCbCjXfddo022c2qlHaM0te29SUR6emQJIkIUW6VuctnX92XNDfPU6QUAGjRv5zycrJ4HcPZs/iV+ZNIkPe262HGD6PxQbu+f476l/vuNaVYpJWan+XdLS72WtBHSO9XxdBUcAjjz9nHF5s1Kh+asikIinYVvjaKQwTCpV92Qf1rs2C/Wl8ZGFJc01XC+S/i8OCxJcvozACArW2VFrIBBx7osNlDhRVecw64oLLYu+MUuyjSPnt2vT1dNYPzKifC0HjAHXU3Chgc6JPWQUpw1QJjO8ugeEuikZX1EnHDXQdPmpWs9QEDalhOA741rvugBa6Kv4WocqsENC1W6Shyxdw4Q5eJ+J1IRY/W8ut/1INPLF5bZ8CVWDBlNaVXCQ3ynYHPSVTNviS76Aturods3KGaWSzFkxUAB/Hwr0POccF38TXqgMf3u0044J3ei5CSfj+zaUMAbuPXfGsug9j8H5ZrTFqbs9rEZSqoFEgvr9uZg1jTuT6lvu6c6IObcx6xOOUXRl/Qf/iAVVMLMaXYIN81X3ZYFKnOgs5LVp/5AQ+reK3yzjAej5A1/v2s58DfmVkUQYFQD+A0MjysicemfEic8ZPGP8VYfUsK+bmZvT3AxRj6u/207+ZgLu6BX4DttYU1NpcTOoytCCr3USmqQ7RxL3LXZIvXmuhz9YQdW6MTs44htbw/6Qc';
  const _INTEGRITY_HASH = 'eba429e97bbccde979df3f6c7fd1ccfdc09c51ec7e78fa3a0b3dd3d47d7a80cb';
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
