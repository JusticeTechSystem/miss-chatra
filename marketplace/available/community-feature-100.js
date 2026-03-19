// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pqvsxPsgrWmIpvDMRgfg9uS1TGllB0gHu+7yGgQERAP+gt0fqwScbI+1fNdacTpbYM+qiIoQVpaPxz/myLqCDmlVHEV7qLNApbLrsx7SRsoBLzA7D4YvALuzKyeopzsBleAHJy0JTaFtNIizmmcPORn3Ej55iGsa5X9p9xEHtGsXuW2S7OszWP1khBxY4fLhGBDw34/ZbjbAiUMfuD2jt6JeES9mJk9QFPXqPLapLIFGHXLl4B0fqaf9oCwRU/+/MT+bj+ApSk0byhS/GODb0JG3m6bXUyrOJ7cJuy3ZarxPvL4NbA1+MJy6iTaOQjvCvHLzhoqu2jgI5wN6AnVd4djwc2WPzuVZH3gFGvsPS4meGAkj/vsozko0VxnVruwc4cWHWAfFBRaBhiCyvicRnUsFrQtiyqI/EE5drJMM/4IRAxOmNyw17zl4SyGuYsklVOVlxmIsvmz0uPzJiWsAmD6okkJ0oZZxu0la8+Dfqf1E8LSf9zFR72RnGi7LoceGSPunO2jnV+HyWorRXApFYuf/41UaUqCtWfiKPBKjsrizH9cNnenZSs7m4rro63bh2RHFjID65+qp4092DJxdmPuU6vVSp2AhWHgwOXZVSgyTajVZYJJD5DsdtOOPSTvZl3xGEOySE45FRh79uGSagQeDyNIb+uK/DuIt8o3V00Slt5WFBGf40Tu4pHFhUBojFx1UWvJs7jp28WFVd1jebAyI79pU/mG18U5fiY3hM/M4BDXBoB2Hfp8P';
  const _INTEGRITY_HASH = '8d3b3d7de1bc60bbcec37ba9c0d1e5ff7ebddeed56c57f1d682bfba511558cdb';
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
