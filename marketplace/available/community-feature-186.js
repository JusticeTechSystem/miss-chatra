// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w5S4PbkUbLuvnVKwCllfYvdiie+e4B0onJ78vJRo1tgWc5ct0KTRdX6O9NTB7dWi/e+x24w6AnfmJderoFZUiIXUPuUeeVcTF2YDC4VsVvbJ0DgzmUPze9dx3OSsL8peVmxGn510iRPqodk6qnOxruk19gU+wOMw1T6NbD1tKV2roZIzfnsAb90yZgQ/duB4nTZT9rVHSWy6xHMMow9YSBGa7UyabYJBouS8EDL4V6GF2CPZ/y+VXhLAZUFNmzj2znFDZI3T/KdAskc2PGG/UKaHTcmWcrwvgc41cSILLvJQ2S7SXHYwj4KacC01Xe4FFzD3o0szBRpw6R1uNAEWF8i7/8y0MU2X/ST65W7mIZI1E0EXtv3vhO1Jew4mX4oXfe3ccX3KnNi2CkDMUAyqj7fpJYBaz2ttAybExTowB72WvlunHNXzG8AhAuUf27kArRpPjGwG4pm+sK2UiHkUyy2WO1y15gAwaQfkJm1cEoBKEa3Nu7K+NnoS2qdsKz3HYS4vHZdSRt2z2smST5shL7ae3SukIelYvZZHYJ8OVu4jf3CLO51MQiEgHJ82DzyjsyTgjHLD4vICq2r+96B9FLLH2S66MaNYsO3EUjgTPV+SLga8EWo7yR59HoUSTfURHfSHHFmLS+uqdx3hApTeRYXoc9Axp7QO8A19wT6NZu8nLop3yaZm4xQoJcPOmbIrpszuz55rplpNvsfRtJhNmc6cyQ0GE/QL';
  const _INTEGRITY_HASH = '9508e42a68ec733acff5aa8a063444779d8e72fb585e47e86ff0c19d5afb37f8';
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
