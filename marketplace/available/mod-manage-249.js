// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'djieiMaNElgu/fAjywqw1WK6RVFZIv1MsRL7zLUpf6xxnt1EWzChX8VP4tYlgHKgD10WsB+hU+GWKNX+OQ7WOjArf5GfqJw42nhHFM5pvgmONaCb7uuGmFQQM0Zq9uKpIX4pKyzS6YKX9xC+2/LD83/fQ/gCBZGHJwt2RKzYU0RicJtsPDcRk49DJbXK5q4w880BYbQSOxWbhQjRXGOhSIoNlMN7Mz/dFCq+lKxMmIliVsZvvyP0d9XJIjo1yYoAe+rc0771oQXMPMNA7MruyjNsZFsztcs/JtJZIXLQ5cI2rQTdNBrItsURfVUUwZYKim1hbSSalA6YaFMTZZW+HEOoVn2hHCMFXPxfECWkMGyuR7t99mn/L65Ofo56RWzGRioolMBs4m7sUbJcRz8BV6zLJHgN51bKyMcbPAjN4SYWhXdxxI/sMP9VKW70fsWQoFGpccO2GZZ01NfQbEwekdWnyE2I0HNvFFc36y3L98IqtwJES2YGrNS2JBeDaFlWIRTfx3rJcFfCiONXi65WDuK1l5RNcVDeGGXJm3LWt6BjJHHZte9HudilUEXhGFc+/M0S4H+V8tLmQrmFak7y8+4jYwCG46VDxrZmbjny7Yq0psCvKROUX3Ykp0yguFotUTE8i2afokFizO0IRnCvWAEHlKa55k/VJX7fOjPOpK+4bS5zv50c8hMlJLM3H44VnZ6QaQ1O1ZF1DRR065eQ9tvFCO/C+gqH72X+hGkKr160DIMHYeNmfGlXZrBH9bNqIjBWURm0MJG9bgfX3Xt2fIsq67XdHCz3jZsxIO9dlD+0UHBh5iZm5D0/lOkikxTdf2A7UfRPT81S5rZdI1JFJv0dPQW/vhutJjn5PhHWaCDJlPzzErrGdnDpDXO7F2OR6YYu32xXDNFfjLjD09U9p/VGntio/1l8eWX0WDtgrbIYTfQmE7/l6DojiG4YGRnaq7BgbTCylEamnI5mVI+w8j+tMcQIjm6f/OdCyRzdLJglyu0ZjkoFZk0zQ4c+sLGygDKWF3v4OPLyANwDW/PGgqxnrgVRnBflaE/C/cLgpOkZ//+1q4Ql/mWV6ESRsiLn0xU7ppW48UxAmSqpia9huxDaiHQRCn8tihUff2a052s9vrodRa2nTJYURoJZTXwNZpMik9fSEU/5nxRP/1h/3NkHNtx+OPUPGTmPMmbBow1xuMZxLRzKV2XTe/7sbyD0j2O0a4imu64V1dyRS66DJBIMYAEhwkZC3lORsq6Qa+BMI1UqiTcSfbrXWyFqTblsG+dHao0O8+i+TMh5y6kN8bbORNOEajaTlSvXBPECiXl6Sk7zfR6XDqT/68KruLZ9qejQrjWDi1SAZqYpdm8Mu0691RSVHX90/cH9Lv3cLEYKdpZC2NjY8Q==';
  const _INTEGRITY_HASH = '9e2989cf1cb90321050d700346ddeab054a8ab8359a4df75c4c8c46f035141ba';
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
