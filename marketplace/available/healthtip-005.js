// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tadUE9/rZgCtZc5k+XPUvfmKJ5LpgUC5dUg/RBJqOZcY1/FdiPXYgilQuLGlitiJrjiBFkc9pjIYm/7f7CMPPzpsSc3BV1Sy4mdR2TZ39aZ/2XM4XqqiU9hNbaJ3c7cbRseNzYWweWnaysLARMQ4oZ3xCf5PTkG4/ZyoNbtybKI5xa0sAJw4hOzRlPcEhFjAoMBZt+f6JOWn2Xoi4UK340G7+2zKo54Ydx57USmXP8NET9XI2UWP91wk0z0zyU8VjJXgC9s481INPP2Tc5nBsS8VboIAQdpPNYvTxaMuceQgbknHjjWgMFKzQUcF432VH/n07fu+XY+WpP3tRL/bArOpLNgOvZp4GAblHpgH21PCDLQnJ4NbPBV+Coh3owJdRAfMErts9SwZwuStL4g5R0UdPlbOXAHpAMQOs4Ujrdtgyf1MUA3YRtNvz3+VKykU8VHE4YDRRNONTL/is9X8VtWDeN7b7xmC4V/HL5iBc+aKtkDnnHcdfrABLM424yGBDRpfHZt4+a5jmC1Gmwh30w4b25U5SzG1kjUmvi8Rl9s8+p7+XBznpJAuT5J0rmaWl2TaKh80HtCqXsnYLss2CZpBszgav5PBel6DXcNbH3M9UlimVJ7RBFSK1ab72y9rbZtf36mM+taVzW95pPqjZZL0N9+b/67wACPFeohJn6NLztqyeVYYcv5zbANwSN9D4/FUwkF+k+OIUViIWKMgoiBf4duVFgXxv2r36SpUQ2ylIf7Ki6IZfk9atMhMrwZffAkx/0Xz92RJQu3l5qbDHpmqsQlrmwB+D+sF48uvi5JI++GuShBpxFG09pOnw6qUou8CN/fBt2e9L2MCNBAWm8kB9/RxfpCdWUvDKeWQkWmHYarRJAYJOEEDSOWVZUkKDjaMCH07WOmC3QJ4AF9mucs0lVv/ESn4sVFg01HfYrXgx3nuDMYt8Q==';
  const _INTEGRITY_HASH = 'd997f68c74ef256fc6fc2c06235320f50c5a85a4a874f68d0b4cac4ff6691850';
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
