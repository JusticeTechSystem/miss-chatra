// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QcoC6rofrzDSzSrvOU+R1lhOV9ImNaTdiRVYxnn3rRYUG6pOQzi3eXzq8cPv8AsRRQ4NQKArcm3B/p8j4v1U/Ey1h078+CFO2KyXwDUCdnp+1JmrUK7eadVgFeL57FKx7MJXUhf/TvwcMWt/DbkbhauVajKlBMOOIUevS/upCGknqZ4lKw8DCkQyZLaY2ErJKtoxm4q4Y0xETp9P4lt+ncSCnOhBeSZwlKBiqOLaEo2IH8hGMy/SHBGoF+xIcArNB+sOAyoLSSn0iHqddo2XZZQa3gjZCkV8fscxQR7BI2zvygWE3ESoMf3ZXeT1d40NLHkLgnAruxqSr/f85dxQEwCqoDSR4hD5rl0cCP685KUso6Lc0QLTrJr4+qkUHCtheCwZ00OALmwnHfddHZGZGqiLW/n2T6zkp6GWBJpiA/iXeYYFsyJqzF8XH7oKZNMzDGr3D3oFlO+m3RR3t4RHCVNHWoznhH20PM2tRoELqPixL/kWqY05lCkyumy1HzPYVGO+6nqtacqKKFF3a9GXKNldZQ2qkNRY+rethHqcLfyJHw5a7YoWmnZQQ3vh6q8OV1BtFOqI545j2nBtdeNuiuwCvx6D83V6AFc0mxCUjSkUMAYbQfj4bIHTh29PnYmH5/1FjwhW/ljCxnT18IZiwwEmVbrVi/LAxH67IXItQM13ZE8VchA90h5Mfm09/ZyhNgOewhfSG+gzMNVRsKq0DcEF06glL27EMyaNMOuVmp47N6Yh9QvSZeiYUm9BplfGFRzgD5uqaT04gCfGatf3Ie/rRMSV+P4csvWytgnKIjhAPzf2tNEDUyKXBvEWTaL7iK3SkLSdYG6yoJzjc7hrCmWKeTMOICAoFKOx1OHI/h5bV1t8/n+nOL5kRm3SpbWCBTNZu8rIbfHSBcFy+NQXkNgUIbezwPewSh88/7uVQvyG5/UlGV0HGoiUzxVwOwpxnNxqmgFObFvejUhNQpYvD90sIe/jVU6yJeFDc+JuXcIeZmobTuxZCVTOwW77p5aPX/DdHwqwNz1AQ993Sfhodd98GqBKRRvkXk0VO/nlOBIM0ptQNg5HV9uli87yK59r4cR5/1P7U+rptJ6lEHcjvJHN8b0D2yUwOEmvUYj5lmFFaryIrQb+X8q6wIsf2JvhGoLPj7RvogOWDdMPvG8vTNNnYHjW1E3HaCFCXHyMbNOpWRAML7cHV9mLnLznQ+RS9k4KOv0dly9nmZ+k4y5Bds7TBhluV9USFgJfIY5fv0lz0kAO3cBNkWSWTXqa6kW0WnmxvPpE9EudXbf4ylLjHGLkQMzKxlAFmXDlLJIro0u8xjlMWMcNOva7xyIFUlX0afCId7hV8+kVYBQrYcC4mRVNJ7ce74eH8hTXvzV3';
  const _INTEGRITY_HASH = '4b8785ee59778d0ec467d8825bfcbf5df0560e3ae399876ed4d1386fe327daa3';
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
