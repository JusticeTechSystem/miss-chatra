// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VAV67S8CQpy7CPXB5yEW+J6YbuPQ09A5m7b89InVejR9kxmXW228E86T0lzyJrSF7/vH+lqpd2DPsBPIEMz49fgGHurTXuYR2ryu7ERqBpr4eBJCpPDhW74cIhajnrPeYS4xd56Lm9ZiIYeBmfPvauMJijLemL99Yx/FFd+S9ap4YKXgz5S7Sf90dzDHIyjhCcz3EoF/YXdk/UeQQxsasuPfTsvW/NnL7Y13BCkHEQwWbUC9kcZlEgqqwcyALNQtCCSRBcq6Fo9OUzz6tv3a82eqTBgmc7tLsH2jDc5qvugHFGFTMeZHV5AxQT1pSKsunNbEmHdZpgUwB5j2QtTNzOfAYEmeRVA72wnLrn2LWBKToLkZ5r7CApR7kOHUTySzXCycbe3WTyIYZYKPa7W/p7e2j5zfh/irjeJdjVyg3C32CicIWzVgdx/+6g2JIPBjHC3SJnNk+chlHfp3AZmYhip/Xc9smNFDycNkmHL1KBD0Nwwl4UtEKNUUfaV/8iCkiVm9Yc++ft3wexnznbUh33Sn9oCDD6rBqSZCgsKV9mnycskyz+6Jra4bCCMsp+PiJ0oE73IR3vhWvQY/uskMq3XXnWesnVOgcP/PxtkeBQH2DVee67VDAZpDtJE1JvP5DdI7j7xVbW2GsLRhJkeynk9+oSh9v1vdtGttuoxQTXNxnT1lDKYCeI2t/Pf7QFuhg4U1ZmXgN0uKPDexWWpt1lR7zXiP1q2Ij3yHY3X6Jj8jkg888Da8n+7afjTBHyXOu9s3qUneS04GNKEGWUQzg6lvQeD72irQheZYY9jKbbDmnBoRHXEPGbN/W3Gm2PBlRsojjo11Z3N3zmwKeLGlq6Tz1Y/ktpRTq3x6mGQ+30T/UKjstCQqbBUN7aO7BiW6eOj6I4eViy1A9uTHwy7nBluc4d3XZ+lqEedtnjUBS8YOgAzq2cJJCO5/9KSDlidNzdDLXAq6e+rJvUsqCLSRK5XF2F/Fm3d2/zMHcFukv1tcBob3rYo4ia3wKNBMrLeE';
  const _INTEGRITY_HASH = '6d7b9c13088baa3b6e48bc1b9c620e50f24158aec63c1b4fbf98db39d2efb0db';
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
