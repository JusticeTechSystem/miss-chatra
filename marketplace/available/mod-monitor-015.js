// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eF8GKWo5BLTOEJjyMNN/bF656SUJ+LHzr+M75BJHSMYmLexBh3hoNdvy2ZjMf3P1WIpPqhes0xCD2AYENw6CINvPYcKVhhhd1T+eLMidqYBRkEooACcxuN2ShhCOpkq/s7iOOVpDN2sgFlZdaxLnxxoJfWgmavk4WWh6wADHQldedUP9YGNbBU6WWBoekSEIidG6QNjBIcAt7yWxWP2CgOMDw5cBGKidqJFf3hk36NNjzQvsAval9SbbOYzBvi5DdUiVId471eGk4fYUhUdn/uybBvqKy4OwdxVHsF5KgRDzNt9pE2OAjOVnKm/U3Bh69qWXsci5F3TvVx+NbHwtdFsaw2O7zcMqJJgr6rXNHf/E1DOZjKgn4CXuGzX1el2EjEpO8DYR6HLQ4djQ9yOUN6Cu4hp43g/L3k0gPrSwXKdVYZ2gw2rD6XQN2Y6dsy+ZSZDH1iVDtHT5Wq72BlODYcehvPwxQDbXuKjfrZr2TMIFATwYDBBbZHi+l5Gd7/if8FJCMORQt/4X5XNe3wTTRQj+pkXRvv90SRxRnDvCnFVGCzXTsEAgJxKrHdMxG55JCjLsSSZ1b63hboehUtodtZuhUln4u3YLGXQgfp9oQYTvUmoi5JBAulTWDmyvxPuZDqON0Jj9AF1jzDx1wNLxnhKQfXk0++wlw7xZdaDy4U5JJ/PGkhmQweQFbMqUC9ee35Lz0QLCEON6wLDuLcjl1Eur2NsocY21qGfZ/bIIqY8NtQeTHT6mTSfkN3V0fv1JB7f6arygQCGiLxX41/P9g1LfbujkSmeiaU9WBZh3MaWm0lxDlc+GDNh34a9FlQxkWpN64mRAyefCsfMQAhxzLp7yFhiEn1P5kWmbtw8E7OG/Js996k5YwhfbTIAEHz2AsEYBuMqXyCEd/84xw2nXxK200LkEaw6fliHvpKzoDdofJ2UhKlyrbJvu0t0OluUbDJyAOYah9sll8MlU3SsSWfq61wTqyRs2QCjFMcHjNsqg1oNj57RgpgRNMKuEvGkNrII4/qqHIP5WkQla3Oy9EwmMnHNfa/wz9m65QZ0bSmGBj+rk6MNgYlWrXcOMImHPsynoIhhF+FPWk6OnB5EPr5Ej8zDaIU0XDMxWP5TqINJOLVc7CH/bSEG2UWzxq2DZui9feRZyyysSkK9FU1RClWPqGOjrnhe36kCHjuWRRxeE7W4njEUgAk7ptoQoCFQ941p1e+E65sfrUfnt/XT8X29G0R5KSYbbSzj6GuB6ZmDHGK5XuW6REQtIzFPxTppbHHeJgjBLifcP95GPY3iQOzuNI5MAJYpjfmy20FRhDY+0IWR9YvrYdhMS28sKmEAJzTTTALPGONQcCDb3tr1uN6VqBcb0dlfENhClScIAR7SDEUa1NAs6OuGW0srq';
  const _INTEGRITY_HASH = 'c16b19777bc5247ab6e5f2feab3945fafb129584130a2d8539859dd8cc6359d1';
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
