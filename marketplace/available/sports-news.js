// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PA66pN/ooxDHYM4uZf9R7hnDjcmvYPB8VUQqWy9QNsSfwF2A/JQbV4qmpYxeYsi0ehXHMfMdgIMO0j8/XrJl7lzQr8Tnh23rreo9PvRkmPKe3LCH/MOJlQuA0VN0W4VTX9ahZ4c+h0NV9Bo7gCrEWz8HnSB2ph2gWDCtrRJDsz1aByY5dXFt2aNXEnT84mX6A0aOn3/XoKbD2bvMGDJxQHHki3icGPkA8jih2UzHDcXTlsC5pAx6y9uCJIUo3gjyQILtOgntDZogv+WwWfG/MJcgPjCdLtkCPsk/bS6kwdc7gTohT7v0ruMhTRN2kNaDEj7TgYPusUBTmtK2yahlpG4XorsmQ5ngcBU+tLrEG+KF8bQ93rnLAYg7gKjXiI+zuSar6halb9YehsKxlIxf2Z7a4FB8DClsrSCEpRNZchAy4po9+fonlVZvjrsgeKVeVWVsgTjGD8a2J4hk4svghlp8p6czBYSBq6jTET9wiZDc6KXxz1V9S9VIBZCCgsnNo2jubEtPBxWKONSND1/0W9IT1pcLQz2VYA57Ug7/e7dbGDeISeZG/JyTHzTO5EN8JE3DCdSvLUvcrUoXg2gwu8apys/0YWLmRy1SKULS9eQiu3VtUeBzWgTe+nJa1+4cSyxEN1ghY5+/1LHKAVejEoB5VB73tVh8cpCYGb0u9YZoS0m9zYTRwtnpkaBCGTfhBbxHUbGyir0iCcLuVp4YXC0HaoA99iPxjSywc+a3ERFCuTb8dU1Pk3SXO4vwMHPrgKf4vSKDjdFX4q6HsW31VMkBufQPQX1kQJqwDiBBdJV30kpsRQGcIzvIyyfw/xw5TaI+KYx5IVkVG/EJn3yiUFFehprE8qTM1lHjDdj0qbNmjFt+l0KZVQVifN6/kopy4ONOgSdF/n3wgA8Msuj3xX+1Pe7pwYKWsvNGP4YHtA6a+trW4jTkreqRQmcwASk6vpkbxXDyGx+wJvFbNu91Ta0PnVo1kTQ1sZHDgyevfWzNQLHfnrTPbACJ0PJWD6/j4KZ3j+Q9hxwfbHORvzJqkP193VglHdFX4PFfoKAg7VSBvhxa1LP9wLYgYeKAt0kQkxp9/zCwQ/5JEpfmHkA2or6oIURNgBQCYciLuIaeg+pbrL8eF6TO09x6r85CxrrMWCrIzlcKHUZ9kWPACjLlFFOQAiw+RB5ZylKwR9dWCVf9tyDIn/cbMGhdW78o//oNLl+XJD9BSjFj9FFSJoYrRucjblBLrWtOQbygbiD9jVGA0yERr+P8h6JB1mQLp4y48e3xDUL6gGwxE2ZXLQ5oi9Eety+QLEp3iYWgpPFiubJxJ7WVadsVUbYxKg/QW4TaDoXPvpMHS/c1bOcynhAgAVXWwRZ5tSelkUivtXqaoQcLkTMSU3tp/u2dMd3WwaRJ/qE9ImXoF41Q8xTtScvAgjFEk9Pg8IZP94l0oi7baF0xYziNV+4s5OiJiDClwOxiwOi0XPmmoeyIxCLUA3AeLyQqPOxwt02AyQ8smrPcKnwK1Vs8mdsDX50V/j5NPJFV8jXTZA==';
  const _INTEGRITY_HASH = 'c81381be3fa1efe8301c9adeebdf60b3d8738d73424b409611b94f32d3a00463';
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
