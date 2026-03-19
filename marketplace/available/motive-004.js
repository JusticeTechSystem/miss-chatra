// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aW5x6OJ/UnndaZvCSooSJA4UhAprZ7IJRy5Z6DZQLlZ9NRHGo8euse176pbETu78v6+F1j3YeqhDI4jJ2jLnjjvaK6X9wBghpfoqw3TIEW5XJS2G0nkj/buGoBhNQINXvB3dZyAKF4hfHEBHE39UsV8RBhLHkrmSW2CRXG7iF62y3BwjLdK3gPJZPXtEUWM1F183KUaU39/OFou9mZsbmEgKm7rluGCpcL+HRlyRJhqcfOFotwpYgcb/Kf/+TW67zl23w8Eb5+Md6ydJEHMi3lk9abZNrxlbZxQpevzc0qZElQ0nk105vmunYchqDew/5yqnbin0DTgNde2fKDA6EFXv6VfDD0Y5AEnOSYAbRWBEn1JgAdSQo+/BcvoT4FYM1HWgWwoYsmpLLyyVYbiu1leTDO8l91M+sn2L6s1AcU0x6s8QMYr7g0tGdX/x0wC+HIjIBDU0lFeuhUTjxTypsKAYt0Z4x034PNpA29fmoHgdCzuXBceXhkF3wmxMRV2qgBqD1m4CoNGNikoWZZwz2sMjLu+BvdSyzKhRWpJmEZKAqEfrrQLKjE6LBMCpOdkpkOkvKC8C3rqPCL3pMVpP16UELh0IeXKDp8CLQ33yjtlWZOOjS3+Esi/igOMWx8clOgMthF+Wp9BjUirZR4zT8YT/1TOmFYyEgwKqBnSQUXYQWg1V+rM7r65dkJZaEZ9nzLbAEC8kIqki6kKwkYer6e3y/FWNsgirZq7GitqRdrh8e9wyUavHkEwLUa2M9AAFMiKdOYb0t20IIiFtHRH7RlvmBqew0OeZ4PN/gkJP3KpWpNFr9L1swNrNoe/a7Aa1hy0bK1VyyRRASEBSDfF7faJ7X8EqxYXkjPlDNDGhC0uxwxULUfwZcE3cnPjKEAtguhbdYhL7UeuREfzMxMFy8C4mFfSifcHJuRpn3eJK42nxHRkH3DY9XIRPSyg5BBrVe0wEP1msLguOaoPJLKy3jnHo1gdlhcTHMlQBEVwqrpFjsdRkuiiR7jbbHSsrqXNpTn8QRk0ymfnGMREhmzQ=';
  const _INTEGRITY_HASH = '255a0465374ff4173c21d3e258da66b817779c453e0c5cc44ef0a9df8d192d3d';
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
