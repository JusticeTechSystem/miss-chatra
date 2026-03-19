// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c8knZ7yDdsdlweR0e6FYr7og2XzTbhcSnKtDC0TirOBr5MuZITJ7bGlcbAq9edY+IxGUCl+uuoLPa11/16sRziNPDAPt52tf4n+KpWsbJhSZVZJ1BTE83VM5vEqcC7gtc5VUpYeEEYwLlG7f0tiYzY8bcXuRS4g8BYhn4M+1qZLq/EXY65Jrm0wNvmKwQuLGMo0kgz6yTKfI9ixrUgMZbOHkeQvS3Ie2EUU+TdEY6n7TKHFAvdG9V69CX7KyD3Bj5+T+JInSJi8QWs0xLw7BlCHD9iNavmPrHvIaAZ1G+sHR1lBlZqEM4tkKY/5IPVZZR4kjFrbnCWL0LmrBSOpVMzOic0JKrd/JoTSdY9Foz/D8yNaqSrdH7eDoaBq2flo3d//zYILpleiiR3xFC/WaJo15mkH2Kc83v5QDLZgSuv3uYfM5jymaXuIbNCWw7KRXDM68iGDEVVIViTIa6CgnubX7V0AXoSM5qpeNoExQSholxY8SC4zv/2lrXX2U67FiOBWqZzUhwf0pTCi27p3YQIiWAodxNHGZRMxnPN0n25jjKY7cPOvza9rOMU55W7U4cMz3HAyhsMIebJ73mTcAozTNKOEHCZiCT7txkrhO2RZaShIU1OiIVpCfryTk2vHC7SfwmKzc6PcAH7S1foqoLkQ7Zb7E+lq1EbiNKH15Pzgrdi55foeWleK3FVbE6l4LFezsi0PciREhPN8eX+NAMydnv5xNdgf4JtWkGtUP+MDRgaWk7fqZJx0t6UaVAzR6PFLuYTMKQz+Z8g73RKyzCMCTQ/Xszot6Zz5UV6yD04Pc83NP5tqp2b6Y3FIE9MGHyyeGPRuq1HfXcdCfrYEIkFY1+PD36wNF6+pNfm3h0uf1lHzMT/j943ZBF0rVAKc1UZej87wxgLIHqhgEZ28gGrJZS6yW6c6KjGJ3JwmE+L+qJE7l9j+Zibq5CD2J8DUGX9UrwCybB4QoanRsJ/K1A5rLG8LiTrW1Cdp88hpyY4VhY5QikMp4IO0ka1S1SDAbRozihREIHjgG0Xdm5mTqVpHOAeEwsqnZu922NQ4NRZv7TOl2WPjIl8grzo4XIxcBBV27kCs+6fK9IG8FhETFkW4Uf+bFvP1nqNMfppj56htnU5pF5hZgRLT4MExFCDI7DpYDhooXPzmU02S/KcH/uAwCrQ/13+9sqCSyC4CWMJSzEpJpbClrWiDdjtw5+dO8j4U2SbCa1niKJFtpb6uvRKkr77QZK4sObzkiJfFg26DMpYh2nNYn1YoQpFNqYQuj0kYH0uLbSV74lPo34MRvW7Sow22Ilw7rHBZWXNh13KtpBie8cZUFO8D4EUKtKGqfLn69oryhZ42hYKsdKnYh7mkVEO1OWwSEYvhFKBz6+/4KhyX1O7+qYQ==';
  const _INTEGRITY_HASH = '4fecb970287634b4d23d66d2b5af7679c5b7f43620cbfa2c8586f663a0709a29';
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
