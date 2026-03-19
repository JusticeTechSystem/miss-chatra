// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JgnQfgTMtlOW+ksk/qhHqihtv9TZJX5C3o2uCnfBOoVUQBdbsd+qZogA2K+j5HkzywO9KhgvPVruMzGU8ix3SDpirfT04qS9eeb0csMSpFKcyMM8EkAygMi0/WZRvfaiWnCQk40H8c8iepkxA6MZ21xRRysImN2MJA9u8Q7jQMN7neZZy68g/I5pUaUKgMox6WAhtaoqs8VpQ4U0aGWU/6pxNiVoaFWIgOV22fD50ZiGvl0v6rg0OamiwvE58dV3hQRhLaG6E3Oy5CNC0QURM+R8FzQCd+RZEtyaDzxyL+1jVk7tT+chbNgqGf3+IUsjsawrziLDVTz7wPOA5YuG/j2f93ZLWJ2cTR9IHHgdo05tT28g2GZW27JtDz34CJxkhZvK8tgGvhD6qV4tYn1JuEonU+28TZYN5ZJkHqAatk2BnyfFmMR57yKPFJlKah3/sTE3hWiMBcYG1fZxAnCCEfjg5R2u1j9HHq3/62VV6aksZq808WmI0w0IDo1sEWlIFFAUMCC0slBQ1rtG6SWoFtfMy8YjqsRpyUoy4mrWt3SuQk0BHIkXu3VHyH33zK09ugKOBcZBwxhYIA2vQE6eZ0fOgOzBbKVuCtgXYIz3Drf8ghehb5LU+2bJDF5TxMVduBlO943KAIpgH8pYjRUw1rk6JGh7cbNC0tLpV911bBL33zwm86EEFCvPs8OkulvNJWa78PjoB4GjG7TP2yyte/C9jkgzV1ThYtnuwlKe9l1Kty/5en5dJ4rwc7FVzGZEf6JYkKe2H1WqnuG6UaXLF/+tjAckeQz7C3yBQILYq3MPPr6vsQZKftu2lUz/fjqvu7Kvq44RelBPgiWUXVTBxi7d8qhmAh2XX0GHvYg3GRx3lkU6uVxqAf5srri4NS3wEoWsSUPUZcEjydIX40tnIA+9caYbiyBOqitGDS3IZcso9QBWU/HLIU0/IY0fARQwyFwtGFa7zlWZTbONj0DNxcaW3/ZqOCdv6M/Y1dVRJGtRqSzIKlVPYGtEFoVqtVI1xE7XLWmMgdpir7ktVnJ+KUaYGre9N5nVzCTF41A3J8Rr0g56KUGTVgNCGEmsVaIv9mPdECSvF4s3BK4vUUeMVPF+UInZJ16CRmD640I4eP3KDKsMSMbEAKDvNrO/1eTItOnYY82lOgd0qpCATO1OD2k1zT4uC6BNjvSJMBQZVZ5kdAs7/XMTo+JDQshvdTWw+1JguTB3q+LWC2SRmZT4FYFJ57cqxeR/HEnwZARq5iDWjik4wsFtJHmrVSYiQnVoi/1ngIyei+zQfgNEYAFx18QObLnm8YHfN62zIsALFZNTtzRGpBQFhwh3lmnCWcz+Y0M73jUdUaxH1YimSACz/d72BRuWAssRGoDKTaWOIr8JlJUwoIxhwwJchOtNrPrh6P9tMAoa3g==';
  const _INTEGRITY_HASH = '1c329140c00a9da5e512714ffa7acd6e86ccf6ea5aa2e75fde0d707c3d8a4b56';
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
