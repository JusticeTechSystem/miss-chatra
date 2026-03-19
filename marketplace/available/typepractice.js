// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kmmNFfXgiiQ1ySrZpjsAwAuU+hvge7eJ+PQSzdlYzebm6cuKqXPKk4WZ0WjGSj43iRvjEYZTdiB0UllyURYIqCG/LDXV7K4KvqErWqIV6vXpnCts7XPiD5h+DXi+zAvmFjLCqFFJI05UDqwmHJYhlYbCDsxqlqy3fIbCaQD4GX7XE+en7vfbtnoEF4UbwgPJihTFDeB0qKgLoWYbjk2I1zRflC1TExnSnTBgwfBZeJ7DPZOiaHZHoEeFlQdXoU4/a1wmXwIT1cZhs2/hzfR2g/mOFeGc3va9GtqgUyVfXs2sNfU/0PY8nvB5y3dJTCZva921V/IKe2g4fA1Gp25z3xH9jckxstU5UsMqacuE+IiGG+BoFjVTEQqFjDqYOluDch+MHmRDxpcHPUuLEb1WBy9Iaf6d+F4K84JKpEvB+4kCxt8Wn63lARvwEO186WeHj/IF96CxNLiiELTyPDYvgiUx3FMSsY54g2QMitrWB2yenaALUuAP46aeEI8GF5wH+fnsQm8aAP5LjaMZoeBMEqdDgAa5LTE9VZcgMTUn5UPwcnO/C7VcqhJEKNQDr8HsIu4Hb6LjqoTxrwzZU3Y9a6KVcmiXV/2v/hM0TmeZ7FiwHDktjLVDsLKRT76qNY+gNNHdpwAWh5mZrkzyuMmKgpNXj0H6ny50R72Yuj3yCd/Vz/kp0VY65g1biZnNZwq5s/SDsBUOc8ZTlhlthrk4Z+RYlFgziyY/ne/xPDBlB89qt8DR+EOcN1zy6bvKutokVe1PWZRW6nWA/dRBSS8hnoW4sGbHGGUlNvPb7LJz8sBRnOeppDn2AA5zu8W2tPuGXcBxI3NKbwJJYbH+/d1gKN99J3i37tHwSlxfMFCQjfbjU1iieyDsB8n73zy6ipLnOqYDW+RTeX4g5sA8VCMOMF38ECSxwM0s5CJUuF4uEPc0dZZat2D483TXvgS5HeYdkTe00zbyKwGwSCweepsAuCYjP4+NqRyQGCnkvWFIVvv0pO+FqjH4WbnOGfN7kjdAhBNA5sswmJ+KhtQb8+fTqynqsws1ca2UeLFGVUFR0pAg42NCXTFsFiawhUaDL9XaZYOuxfepz1Wqp3BtLBfkH/5hibEFxyU2EDqLJpV71L1sk1FBfj61VK3tAgT5N2zugfji6w5UJ94vrQPTPVKVexhHa7cCMn64XkYmD1DBN0DO5I8COyTvHoPw3Zr/7cvnj93dDPON';
  const _INTEGRITY_HASH = '15effc32950cd2ef91b56aa5258dea5196d848592f3d5732e033b16b96e4d593';
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
