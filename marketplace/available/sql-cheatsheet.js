// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MSUfdJqlW9wKwI5HwrF/+2dZzetQ2n9QvGJPoBDU7JyYO+OiBOtZLABZuxPCwASvHFap+NQZNxB8AsbgtHjE+goRJ5gZnwWjVPB/1SUQpAXhA4k7LgJlYhju39o93dzcHnP8d3Msrjx+GukxtFUBr4iWwpNcCiVEBKs8B68oEnBa1W5yk1J9S6Ylvg6dUEg1VwBYQBBHFtmS8dwS6jhb5rokopmhuBqSh9a0E2/E91UIMrxHhXQEVbrRFt74GZPiMuqiwaHRLFoTqZuj14oMHnAY8t8r2dJmjU/7GeSATprGAF/OXG28ZDGa5RqjFIBWE6apKEP8L9YR/Wb+IUkNU7KCDcgdLY5kurEE7vn+w9JNkRKDRryhWkmaGuNO/lX01PXPTXJBsW9iLKoZw+Zx4l5sYqm8Ai1Yfn6Cpoj0aXDCoSVpc6W9N5tqJgYrUFb7cANTXV+6kPwvIkFoLSOQ4vBO4FA5YT0Xb75BYXdwjDx0mAcpnnbNO5U7Ouz3/9qINpxJlQYM37E+tsGVUvFlCrtBDfzULQA2REQ/lmsf6LCvU+mArguJ98tsgNzTMG/3HqOPO1uE3lmyWj857TffiIRH8I25izvy/QyNmbPm1kF4wtLaOqS3IjmYOwPwenWU9/aFZZ31eeN7ZQPX//xLU3hk1OH5Oks8l8vV1E5eWy+zeiKnc0Ue9zS9b63dBZRh0nREO1n2/ECxvqVEbCFt32OiGChuCqg5T5RflXh9qF314/MRR7sxgVajgAwf+SIX1HUhHMvpJdjgUOsugUFoThjBKHVxSOxO8WD6iZjkpMNnt0z934b/u+v+iaH5ZYC1bsESDHYIU/zwKxRIZJiQgOAQzNEzpnE7xPGGqKOtLH/uicBtv0FaLI5+DWhJ8rSxJXWfwoI6GKSFDMXEsFeKBeXMmYtMkPPMecyZvtLzOs51byk50a6XdK+aXFT/YUixKx0VwOIPUWixOUYYdFZA/BjMBfKqmMlgKWErE8hud5XlH/0z3BXcuOKsxjGGZ7rmF+8UhezYYOQE0E0pZRgiVASqxV65WvoX+WiOIzLRb4YBFLXbf0tVj58uV41cLUY3NiPJ2csBMvka1PQd6jGLejx5LLC5M4aLxmd4pzb/BqLJ/OGVxvMgnuJhYHHhve50QVegcmhPTbeBhFgnEMqeY2HY9Z5auLwcc6P9WgoJo5JgvzGIItZ7AxhSQngWpiIdcPR6PtxfZZaH1fW+B+7puoWv8oEpvCvo8xUJOEtv8+dBNZMnE9e8dyw2lmRSA8Rmt8XEXGZaoQm7bQL8uCdQju/M8m3+twxwuumv9N+iXI/lfSfAZQ9WwuH+neuxO3Ml10P4QUXhIey+jb084l8i31MPSfurJSCWydGsHWm7/dkiqcAGYTwcgJWVVwwpDh20xMHMXy9qZ/KmlzAZL55OPdJ0TIRKitu9Tg5wgVccaKIUYB4EZrTR/8SAJc445WLjXF5rLEZN55rGtTsFWG5fjm4Jb2nDz5igq0WFaJDbgxkIpU40kqvWE/A1Yfz33Yiu1WgmAOj9ClrrYblBvnmlxWw/uazqMAOHrntOHtm4/CbWglgzDs1Lii0D5PUBEj2wT5mogpr9kDKNvoR7sKXVO2/dJdlAHIBP4GiZfbMYYtGhKttvUIJtBJgICQcV4opEHmAEyCpkXamJy1ZumapCXxRAnfA0xJUx9PhgHhHTMnELhVlnKwse+R7GiFbmkc8TCovrJjsUkPKearojKV2/FGSbMTCANtbI5OWc6GkaNiF2fnZvfHaH0pccQOxd2ocawDuVaCcn+rw=';
  const _INTEGRITY_HASH = '9e77b81421998237bb285c08a6575da38432adda96889587e110ad524974f6f5';
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
