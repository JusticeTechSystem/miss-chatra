// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Xsb0oj2c5XDyGRvgCZl10YYldy+8eni/s960DNAk+yOGQqgoFKQ5a/FlPqqCts3mC7lEL5RErgxkucQuZ5qEhZ0u1JV8D9QW5SKYKYicI0AgT2QznZ2R0Z44Zj2SjI+kYYr42wfCB6KOHOeHB97BnSBWgFKxQ0og8pfKmeQTRyMwbkUS2N4cGix56jlJPL1eHaCl2walhtx2rN82oN8P60vNQ3hHdGRhicfGCERm3nk7C8MV3URCwbfS7LdjdamqsG5Fj5ULK+Dk77QKOa7nGlY6j0UKVYTYF8cjmpEbrCr0n2VjJjzGnV7B687a1TmOuZycpjJNlt7CGFYLZwn/BQ0kPDTzwRxsulZm4n/BvCUQ4StjX3wXZWxYhYd34s74aoncwDtHV+LO1qq6Bs+hpJpvcsymDs2zswW7KG4FFAma7B/uF5C+9YDG37PTLZlHH1htJKS+a1w+C03n2TZ6bbAy8U9Ue058xaka5UlCg3caHs48KbSrOQStZ12SlgC1gYpO+obodQmi/gBxgA7zSv3YNe5TPCaOHnC+O2Y4nspG3g3Ydr1iIO+ZWRVuSX6OSUDHIJpP8bhMWv0BrertVCjSRbCNOkYkZ9eLYukvF05x3BPFcAoALSDkICWDB1jYE4xJ5kshpNJ0SdRhj9biM665H+g0kTSHJ5wTZc9AnQOyiFvAWBVUO8yI8dUe8KlIoJcdHVsqsPStjjp55/S8qxk9wZd0+6wswy2AzSGddUEnmKe3Kyvvfajy3yDsTQsIzE1H2g2QMpMDWAPvIB3R0e9qaRJMT+bgApDVwM70pngwiQWXh9kg9QzK4rFEk68ag+f1WIpsVYZzHUacNDs4tk8RFXFJ3XYSps3PqG3Dggv0Bi+kt7HJNQZ7Mb3OOekdwviZfbUmjSkz9wd8UPVBvbMtdmseD8ZnF0KAA50AEQTmqej0WAwnpPxrm5kYM3aOiNfyzgAGnIKBSEZBjg4+VuyN68/aPxyKQWy99bQibfkF7+OQihDJWC+oCw5DQcQxsK1d2DWU9QFwpdM1oUCwEGduFq0fKLPfpWL08G381w3KqNE6T+WDaXd+dQPgSzNX2oHlw4xO7VYD/lcbv/0u8zxG2tIrLlR2isKSMrbautNdTaBBRBoag0uuYIWib7WZ5J5GSZmGc6hOJHP9KwDwlRRtO9Upa71b10pMMuaXhdd+DYqko5//uNH0hysQx4TG9ckG1ZZoKvxG+NjUKYXxLNQlLX+zd7iGA5j4iFPWKQDdMEzcOeVfyarP0QDh9QZRUb05B9txxsMAOhRSHjdNVHcRks2vdwso4tgfCycxhHJ0UO5MEHEq1dCFyfc8dlR9kJceTC98LknOsS8Cf6+U+Y2w987FxuIXFi9gfMi41sxKn/H3P1Amjg==';
  const _INTEGRITY_HASH = '917f68d7f15272b0708ce98f5f58a6f0aa99ad876afc363ab892652d6dd2141d';
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
