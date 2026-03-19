// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'etOavfh8PCahYApeS3rTRKT++PcOQiYJkw23ZolzITtxjHcZqBVabrwOY8zRykDkCPPWQ22bLglxRtt/P7OJ2S36Byg5kmppu3i2N+Z6T9hw15zMS6meMDE4sXRJBRpWZbOGw6PpaAP4WDirZTOlk/IW0WCEE5lNz90/K+zsU0/cIL7jgQlFPr3JJPB5No6zDKjNmBKKYZY57i4wFv+nZPP+Hb4iO+KvMowyv6TK24o+V0DYYCBGc97c/IA2hNr5AZOTG8p25y4nK00yByiD7aJvRPMCdg5+Jdt9b1ye04YFOmqfQjolYEBrbB9NNoKne+1WlKULQFuRftujF2sbbbi2FM62Cl07zJ+N7PWYr/VWeQ5crHscoVmeUjkc2XXZYe1h25yV+QgekcnJ+D5+wfeMagBpzFm3lhm/Dda/x5tD2BfnCpL4s37kCdwPt6wuoi/HL0iPv4mLOjQz+PRmDVKxx7xBdrELPfdPsw6rS5eTI8hKeI4rIOooSgnBcam0aZn//8TKquaraLrWts530tmJp49YKR7Uvr7QLTjP0OyaRnrKxleaS/lAZ4zkppKfs4ToOXD9pRbUMDtYLfG0sJxOd4GNKIL1d4Mz5r8txO8/JpgEljXf7dLbuwV+39lbHRS2RT5bqsHV5QFJ0aiwn4PWIpm+ptMuyn/LzpKU46HzlI5bcoHNo+zQPZhTVjRJNYw7DS4Cp16B9zzrwUHwRAKN5WY88wir3uytOtGxyvducqPEhjEp9YL+klMVE0mUm4LKNfgNjDBFl458Wgoea6GIJwyAJhaLgW7Ln+dCu+esaf24ggkRbroEE+F/HaJg0rcx+Kx8DksK4pXHhnAne+/H+ZvaxqYQJT2whhuL7CTYuZN7jaXSATlz0jU1t1l72T6LTZuYaaQwA2435yCbs+cIt5X3aBVghibyKXQrrpr0pN2x0TsDz2tsPj7zUoCtF9PNuhhxtT3YJ7zaYVqGDiYOHVcKOYYEdaoMkAOdrvePzbZLPmXEBYZmLMt7lk9n4aIb3Kg7IP4eRAR81+uEcVqmP9FC273bQoIIU39xkSisDH7tLtGKvuJmqf6FpC+L2zId/HRtXmAKQW5E7eKmUYN47KLn4i+LWke7KQSteHf7b/bQvRZztPsvuBd2EYoyEXi0qPQQOkmXBvQvEonEMoHDuoPLoCZ2dRGgYC/ihJl8CIhJXwZGHG9xg1eh76oPqkG+HQ/wKK/waidohzEGRtoA5y+CcHn1uWoISAkCreQDoKEFfJuSebbkjjE/8KEGBR59F3lHtM4w3J8zZH/7WhKvtqNDkoh7v+mh2ZY4TiwZQyb0tB/e+SBOlDsT55ZrtAGrJS7EfNV3FOfIrV315AGlvW2q7LzCuKdmaty5Hd6ZZ7mw3Pr6ZnIoPXW1z1C5OMf25Ub0ZHORubZlt/IKnS//ZljedMMAcJpDNdNHsrixjZHJorAgxXROX7SCsvmDmvkrmAunochd7iNcDgE4WeHkY/31xnHdBgoOvHLkg31laZ/qi3SyI5uQq8iSwidh37DJzWWRXFNbmFaGz3QcyLTL7dXDvu/zHsvLwvqT05rozyfURSEowCo3D4eey41z4Q8xyUGhitUo0kKT3fW+PI8izQcYwGCR7oi218J2MpcpaMaJqLFzj8VnMiSMzjK0GwABcx5vOIxbjx/irGeXqsWVsQbMXhmXbGfm1zRwL26dbiDpdJ00slsw9a804XL4w5IrR870dEuhKalllr9eGo4bKORrrVDRwVN02DLU6edR9VhazSHhzKlAs/BMZPVyAcblXEtijQpsP0UldK+zHglDDlOr1tDuwZEtX2ojNdXonEH6voJEYXaEg94sUVcICAAD447hI6S9PIvSxOgUlIsekkX9s6NVo0IBOyseooxbJJLyMZAQ8D6ncT3DYWTVbUtCYs2XgkmSstUXj8inEBnV+ph5OhbQk5MEqQ==';
  const _INTEGRITY_HASH = '5d8c0e604820b85c880852f7db46b6ee85287104a52a64766c01a276cd5ee7f5';
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
