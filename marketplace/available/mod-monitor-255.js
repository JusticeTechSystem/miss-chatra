// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8ahNXx9Zn1LMVaGdQeRTo7mFU/M4huSC3E+J5wAcf0YMS2XUUdLgTDX3zQm36EVdNhpMN6Dz1W03H3obIDDN/czo5PlnA7SwLuIZlzbYH/RXMCbdln7Y0r/adm37J/hgtCetqv2HoNGZmmQzq9ANuJVLGYMPr3v2E888mvMVLyuD9CfMGwfXqJ3bNXYeh3OJJpM3gL0U2tzyEbuiNmdYy4ljbOAO5HqSaYyaaqoWKuxTWV8Qhm5AB9kE3vNbcp/Fc/PbRVriVVSm3G6srw9TeBK5ilZxZO/zepf0a5875ajFsWlQ6uaKIW5IxpVWT/FSOhvcgk+ISAUjK+f2KnqnMUxm+UNzdn2RdQpG4QMhR5yxyYuX9j0SUO6w6Lepem7JZMskOEP57otSDvpvGwDI2tVmu1xaPBNnV4PYWAWxTqjXsXNcmJ+EcSSzVIIGZIM5GqRQ+XayuxDsobhBjWh88bARxohScEre6HTfPQUqi3NqP6pxzPLXz9wqziIVsDS7hNtmOPa/2WnjIjpi0CFj6yVjPB13cfQ+JkZem7uOvSGmSpbBmSYcBSQ1VEWEfQEiz/54vzu9a0yOkHSM4myjynuhqA/0q7SxI3Kx8GY9M+lqLwt+ddiq9JSPJd1Bgh9b+fkmYaV9Ixy3v8HsD7/9F1Dgj2dcio+zcuzI3zj6qE8dDEy92DlLcb9ANl8x0t0XUgUY16vysisnwnM7Lx7k7WTl/I5gdXVM7pElQp8IJ1ZV7HzqzfpnuqqpRXyp9350xYapR+5Bi3vOJhlwUN1oy61ZqU6wZ6iG9iJoH6VgT0Z6tvXUcIqj/XAzQ8ykultHl3lUPMXRw8K5/wkxZi4VIGo+LkihS4OcJX8q1/i/mFM4FuvinY77Rpy0dCIn8G4EfbC/hhBhP4pkOlRw14JAC6ZHZN53w2WZUfVsAADe+l0PqlNUYoZAhoaNFg4iUrIjeDt51G1VLKa4U5zvtspWfPvnLoeSBV/cSmvJ1IGtnE8IYXLEpJciOjCjrWw3LSvfhg1SONRQ99ZTm+S3j3DSykXvzHbMtX+l89Z3r920Gc5LOb6VmfvVsnDGWgsVbJu7VlSjmQwpU5eoMOnADPNCuLjTFfkBXKtXkyuE0bkqHuR4ZhK+UOSU6uIjSM2NEckq568u3N4OU6moEjOh71GwrScRqStVZv3wg5Zbp037VlVvK9mxIQasgvQtH8UJHOQJFT4S3Td8YPl6E3aX+TvyY5rXQn/NLZ3xcapDYBNrhbbGAGTA8LCO0TWuw5xwqQXSAW1DTP2nGEkvyATIqBLB3GoMBdL2dCwNU9ydGBzx1UEjXwQJqyLjkQ3j6BGQkYxTnEDXIzd5ZjIx/fgCvRx4uc9zfpFkXku8xVsK/dBGjzYI3/k5kcj5guvyDyh0qV6L3hQ=';
  const _INTEGRITY_HASH = '711fd082c919955bad18a765ed1d73d7b98117c6680bd81e5837ebb2641dd086';
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
