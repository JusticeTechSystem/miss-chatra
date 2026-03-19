// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xHj4LMQclOteOuaGiGHjhG5JBaoBlBFwOYZfXQapl/z/+TwAwDVHn3hBMQNent08i/mNfzFJ3l5dH1Kszga/h/7PU9+rTE7T3YNuLna7J1znSOCUrZHq4quwt+yjmvXt1YcFqFlnIogK5Oz8LTEvHLPI0vYRb7IwIM7XJkqC65vEmlQFuFq4Ir1pjqgDYqxewO9jrNJUrEA2tsjDdL9OeAgmy7wk6JoLB+sOrHNB6lVr8SwZgArQJfv4jO41osxUhCeLQEEQOBm5Jn3wPN8wOJKNnfxHikd/DW/gnFfuAFFgdSAUdMOL6LylOXXMKAJ6APYc+o8S0j+I6GVdsxzr6YtX4iBWTHz5oQ9RHcvOIm+fQNI6TR+bN+KUrhMNrWO/GbTJmYoFmRd64f0XB8VDcHGDJrRgl30abYnqu9M6GpcoN6HRJ06W1EF2iOJAC0hPrb4pf154g4Plry8V88WyjnBxEtBGvck0rLOTQ8UGsTylfkIudjl1Z7WP1yilbRh9cpCypVQexuP4icMf/r4hfgidT3AoFy9Vi720cVxv21GgCp4N/cnIZoRFpOMgHIY/O9kNJASvoli8S2uEhEorp4zYVO2zm9rNxj6XIbynAnvaaCKGCfM5kUzq8Ld/TIcZyUf8cqS1K6Bcnmil69Tm6Zp6P0jLbg8KN/IP50nx0+fllp9GLqf1vPu9l/OyyU03tVRAZ/Nl+SNjMjF5TRnxBjnOxnqL2i2WUSY+wBQVvl6+0Kf16E8gPjGqS2tcoQwnRKycamDilT0RM2MrM+a021loDxgwovBMO4alhbgyZvqJiH2yd1om9sMByxvCyQMuStSdylGmrs2QWlYaYjpRBEkxrpDBCJlpqf1AI9H+lnvCc/tdx7bYu2I2qXwGbhYRs/AS02bT4GIlMKgvAW4MbQzZmoWAeM+mGwfw1+r08QVCHotaYwanHL9nJgn5JWjZvsTyZVNdwLXPBuDHBNrtDJL8Whsjc3CyQPzGJp+b1WmfhulmibZVsDZcSMI7bs9yGidv2A==';
  const _INTEGRITY_HASH = '0e2724464ba54d71fc7792575e2b96e860b0488938113a671cde1aff3ea6893a';
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
