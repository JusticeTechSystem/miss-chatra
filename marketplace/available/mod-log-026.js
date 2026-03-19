// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'avngl9qFO4j+koUQJfjNiVvdLxESaqRSMfglur+AA61gRl5S78XhTdMiATb0lfCegbxFSCoFN23wnmZ/N/g5job8kh4UYtEin1VDYAdY0YLUjZQ7lQiC2mvY8Y1tU8oiWDe4PO7Q52K2s3DzACgvytJyyryuXr2Zbjp2fMP+H9MsmTvqCmfN6RB9NTv+SKrT52lYulvvR3YptYwJLzbAnvuFWhzciY7PmgtO0gS7wfY8UMb0XsbJARoyKw8h5SwxUOwzv+tUq/Stc52ateEErX7k0mJEEcRK/o5C3l6KfFb2t320EctLvL/gan5hxQFFu6UG1/qTCVd5UJD62NzucjwpN+0Tj/8wlbry4Pr6UN1PStEnu1LgNI3/+HwHmh2CelcDEUx28uuNqsr/l8jU1bz97Kg31VEzTTDFht6pYflgQ4RubfuxXcME5s8MPiFgHRHzouvCdnNsSLAoEvA6bvFS7yIULgxgVJ9ZHzTRpPiG1Z3X5/Nt72Fi7ZIP07aqyBum1sb6U9Im4jzlSVJw6oBNaTL3RpOfk3G9AUpL/mHeGNNy2vCuD7NIcqAt6QVfgiDhvxdq9KU+bWOopjDGQHKz4nYAJBwz1Ze7wmglulNMmljSU7x9aGoTdl6y/zD9BZSGV9J4s3KHCzx1mgsmpa1kunK0Uu9Klr/gCICEVbwLRFJvkxhj3Gklx+UDibK2Bt/p8JnMGcmIirXYbSBOt8mdr5sdValfSI/dejw0qCh6XepJ8wtZEcYhzzu4rt/nPnkBXer38Psl4/XNx/r+bxy8gb7PYG0a5mfFB1zU/lsWNFbinqe4biekb01/hhFvu6a0pRAf89dhwKD4cqvdCp6Ugvcy35J4eusYjkhHBZjWboTUpGSwjc31nuvuXdT3Atw+4O7Te+gZqSpk55Xe4T8dWDE6lzXzy/fraVxrC1vAopewOO9HABcbVpGsFFRS9/ebpx8TA+rdWCxv2Fd6O9MBcmekgMiVeIBh96hmJwG1CFSbi+Osnh80JNmO/tQ7KI+zE7xf421BzpREZjgvGkhtVvlGzuBKcn4eGy9q7LmZTcYOMSk8P6k2sCtzEs1Epz9PUMSwr5ipTLGuureRW8A7BGtRdtyUIR3pGLXDGaDil8N0G01hDHoMs3+MrCWT9lFSSSb8eW7Qg91azKnWZXe1iJC6NIDseH0X8TXYHUxRs4wSY8e0M7WU9eLuXZ6ZSfbc9qFlZx2RHhK69oNSttaOQOFDeqP/ZP9p0nO9z+zcxzzCpPLckDy0TcSCTE8JSwEjMBttUpT9ARrUD5j/SU3cWJCIfj8arJ32CSTd8PjH4cGIZ6URTqKpHTHy5rtZuy8CgYQ=';
  const _INTEGRITY_HASH = 'aced047ca32afaa908a170cda73198c52d5fd5dbdcf4def123f1f748830804f3';
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
