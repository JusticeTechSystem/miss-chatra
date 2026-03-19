// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NPa5MJAD+B9oACh8g2ny7bwJAvJZffOzyuDFZqTCCw62nG1vOHpMI4m3gszcUjXoCxIWSfyBgICg2ra3uMtSGbb4LWxylyYROIGt8Rvp7lumf/M1T4LeYV3TMSHDFOvlBA609wTTQ/11jb9GCcUIFdXFuILgI3rSoQ9Doxw7rdIWDdNvoMibBIkhtH4tSOZOzhH+/5nTtzuFIdVFr8JSnDNdHGG2wcbzbX4cCZnI7x6nDhPoQNoSsVtzxHLeeNNJkVaxom1zNdZcFfi1BqxQrBmt5r1oDdvtIgotHzsqq8P3lz9yFQBA7oEopuiHpMWrqgLjnV/k1atthnjDQMgYuRXGHx/a1aklKlrgZ8keSPSWMXoGNSsYOidi+gJCXBkH1y1GtH12RdoTiZ5O40eh8+tHd6ILzKhwTmI8k01+LyyDK1EEAPJE5yIkC0ppqJ+KJjSVekgI2Wnji/t9kwXBgD3MHSYdMV/6Qdx8GPspfCZLvs+bWL7nYoFstDEa7BuNum1auiDZWtpfEMt68JawYDaT5uTNS47e/HAzTUVclldmvpSn8eKyfaLKMSfFZUilgvUriOUYGk8IB6OLIf9ESlxiG/erNlmxy+iKAqhQiHmoXuOAmEClibxhY+1vNQUiGJy0M8lno8wu2KWIXsPcfpeBI8wSw3ciYzYf/IsGS+mjPm0cEm9OxSiqeA4mVtbInyGjEM94G5IlhVHQyQuFQEbQPD0ZGUNkfD6JwTuep5XpIRwu0gWG+ArgABuxraXCi1G3UZYsxwiSjdaMO66mUKU1RpDXUGDfpAtwYpjbRRR8U3mqI6KKBbX5bgBPEshGN0Zt1m5bu3bYnOxS50KhqIS8tQU/rrJB8st+1MrTmTE/umpXvYSy7rbdiE9pIxXEx1ngAVC+C4aqW9zB7hGUCKGt3jw7IGBgZHr/T342FGUdcOazOE2mOwx5sQyRRxd6EJtLQSHt5Im6hbp0lxiKmu3eEwZQ37WlU5rIRwtcfYmMDDHW/eNVSqauBfQlqdjTo0hWlpVBcwGq09ewHhEnCfGz7ElEFBjaObvh6TxcbN/7VoLliF/oL4WtGUmJx7KoYzTwoIubwDn5Dkk92cj8r4OQ7zDmjkVlGa2i0T1bvVW+bB4LpkN9K4Hk7iza8Wbb+eTmqnXmDTG+Muh/uaQzgSrqSD2YLhExMMosv7AOJd14voqDuOTwTGguO7mO5H5Eriv3CS92MM9XdTukm1HP';
  const _INTEGRITY_HASH = '2cb8ccd30656dbb49e97a04deace0ae5e59728db1f7dfd240d6dd607e514e59b';
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
