// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G5TjwRaIicItv3wAG0nQLZyhHHbc0h/cs1WrpfrOKKSn5u2eafztsrJ26I52jR07BikGOQGu41SwX/IwEpBfiSDiuLKunFDDJB72d7vUZyWaFuIe9j52nMnFGlL5ao73u90mPTOgt1EoP1uzVcCaHN5S3pZJvy4cf0YwXBejLmJdBXreLD2RqMtipEAs4Cq22FNCYyYnz4WQKOMac3Xkt5pfTSE8GwC34Hwtdg/z3F5BVY7tBRLP9wXBz2EVbHbnVHmZBn2XoUIPfIZoxtV/wDZUZm50ZX5WYwhdgyzhqDVoApyMygYKQix/n77RjU4dhARaz9yxiKTCmOBetKYmjQ0VuRJhDpsCWw+uqHDigOczr7A4yr4VAX53bJs1sigFgP6aYihnImUfnksV/gO35ST4wz0uoo0MNrWZPX3z1bJOoRFz8lWhXrBcHHtFAteSL+j06pgdyuUyFN2QststyrV4NHbTHBXiMeCl4mSZ2deRdLAfuVmnXj/FKF6Y7JjY3aMnXaBf5UfWNVrFUs/FG0ekSNAJ+YT8LrY25tWOjJ/r/sGgnyEH1xQku06Ky83RKK991bgiUUjp/KBpHt2wbVMLm/VQnpI6/EpqOkm6bjJAtTfr8fp3/YvWg7EkqOWYcVSAz17U7vK94uK5UQiC6puBqL0/dOmuE3mIx/IS7LMS6pxWy4YFQXGS2x5JyiHeCojeJhN1Y+cK1wcU2ETKHK0VXIEqZk1GHRLhdqpIHI72+kgR0gkKTrbfvqD1c1SRbLQlUMewI7CFO3Rf63alEu64pvy2EeESbM9x6Lc68tYBmh8nJdPtgaopu8vpK8uMPB6xcA4e60RqWHXsnxNBoWKuiQf6tvIEUD987aTBdqeuUww8+JmZxkMzaPZvi1Hi3rPJlju260CEo1zoWWIZt6DOpsu4BLT4kuta3oyKTA9o1ISPwOK3tWhu/ZYb2n36kvLmViJArwMiOITrpeiaUQax7Bkyqry8GOX3Mjaa/efoFgKy/+Hv2PPQD4JB1m9B6EnxH4lW4GLBDu3O0MfiPYXI52YK40b/w1s0jVHowaQbQ7EnaJk9jX46zNBIGBPABqVnAoetWrk1wGVKlznI4vM04IcXAsVUTuEayRyJLYp6xkAv2T7RZaSBZYQGal1XbGLO+FhcVcf5f2PGbQr15z4Dvd9L2VQ0d9lJF7Bi2A55FYXtGDYFSWi01g/4mFlMuiYzW8uW4BIevgaBqFQYNPnYDzvhy3RwjJ9XqFuBPNGBeb+qlQUTd/Pwa3UmefL16R/8YkzNmgM+0GsTObxkwTCmJn1V6Yl7Z24m1tnqeATOLc/Kltu98nHfQHurRRPZ0Fce3qrCrcOnux6cRXW20iVgvMKGDHIF1HcyWNcQQaIbKyMJeQe6OHEXrLABMf5sLjM0do9MPlH1MkoTIa6EruSHZ8ptqTfyPtdMMih2ewonpuuIxY4ejp4I9AAjsuayfbeVd5ozmyfjovbU3qZfWD6CLc6o02SWRmZZTaVpsaj2TkijX3kVj3sbW4lA9PQ39ujw/id1pKNVEWIhQ6RmO5EKydkacTMdAgQgCqpOZ8MxZPDcD3mhF7kptFzeAxNMvmksTUG3z/0hEq7e/H9jgYmcjIlEM7WM1sezlGJiWj/fG5p25MoWRakshQHYbZ1KqmjjwwjxMAdhsMWQlhmkktSGaut8QUjvGQ==';
  const _INTEGRITY_HASH = '54bd2ceffd35c78dee21a207ee6a612f58325354c7122f8f077e9e6817219194';
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
