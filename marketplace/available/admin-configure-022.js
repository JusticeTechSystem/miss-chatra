// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Unvp3R2c9xMcBBbSPQRdX+oEHZ3NfvHYfEEezSQV9Zt4UnnuMxhI+srnuDBui+vhtJwWDdTIvbMzc3PGTEOYeG0iusJefou1T1NCuZKM6APwYevQ7iRsZKJPtZqWQ/YJ3lvy45IgX010DHUKtXAhIYxue4xBmI8GRAd1BtYUz3n5L06YMHQZxmSN/60GTgZByFQW35o+WPVwC9uhDd4cFu053S9eyLOoo5woNwyqs7uxipiRxJWv3NUNb7ME9CliQXy7iPdVc6Kk31yc2a4mJgy32Bdw0JQAUx3ekQmH+waBH70qCyM0yk7NGWWAbLFKcowtGnXu8k/iaqj/2EKL47wuejyMpcIgB1CAaj2CaFQdSTo1VgjeHlEcfrJtjkDxjXGCUwCypm4+jmMYnv00pDZ69maIVvDvvZUsgkPMrimWOLueoGg6rCuJuJhmIfDn3hkWILMk9JNKq91up4tbrxdvYnZA/DN36gM2LwivacGopHV0vKSWauzXWN0WdOFT5dN8EqpDcYX8a5BbQGsD3BYfRFF0uoQ52j1eBPXTlEVaby02XA1DfYP6ISwK614l5ee+NZzKsIyKdch4X1nMn3xAocaeZ6a/9fVUZ7qKUL3wWwPPKQP5Dqg98ydonZBl8PlBXoR7W1MLqvbI58jw3hAeo/MrhuG02uUiSukxLjsijXKur/OoiBTQWEC1bLVNQLzVRvy8gFaXjPhfW1s03yTuU4uc38TnMKGNIbCTqSAaMAJbMgvE+weEIk+RZQUIooVQQkcfUdckvTtNQCr3LOxyIAswbbnNpHD4R6dIp3QuluDit5leznVdy36rwl1O4VcWeoM1Tm79KIud7Ivr/s3T9LaKCAy/3hMpZmCfiz0WG0wOw1ytg6U6UxWxgASWXDebXChlRjUPLmOiMSvMcWOadoEMRbKUJ0xfT+dMHfEntE/Rca7On3Ge77rr0FWvnRQ97pI6Mu1NkoV0m3vmWrtJyqVfsytT95T2BHfzvdE5V5HaJc8z557L27+g+Ap15TCK1iH81sjx3cIWdmALHKvA';
  const _INTEGRITY_HASH = 'd1961bcbdd2777fb4d64c89d3dc1bf65d61abcbeeb82f237f89d77a636d1aad9';
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
