// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'abO59bdfF/mpK5CKpmgQtxw+gm7qFjp65lRpw0Awa4NEHS8QNOKaN4WURnRCO+XX+tb2pCxNfJUQkhY/lJXArtc2nHecE7MR6ZIMPzAvyxN4x2V+dS9w0wQGlK6hJz4tZfLGWhJjcDvTwgq0kJEo5UnaTrZ6wAjiL3VCUZmVhBjbbQMbbwUVnXVJXBkFq1tuMQmo1aNjfJBTzkhaMI4kNRHrOk4kaVUeIe8CRP7YcPFLReJYOLHqxL1BG0+MtriXfnBKB2esKADpc2Xf7RtIKb0xl8it6t3SVIIAna3I9Os0icgDlVEE+20bksl0KBkjvwgH48HarE319qBYZWcj691MurMtK2j5U1/oJl/cCtKpDUTuEhuKyiAVCAxfM/RmKV8MoyXar2NI8VjtlfH2xR9N84xlEHKvrliKto68zhdRy8XbYmpXwNf/qDzjFb3qhVgVlczAQJyE206MrrRj2medtn31t4awYd88dxNPpMofB5kwXNPeR/teIq1rr3FDH0YymJPl6VbQJPnnZSNvlU9trzNMBdtsFwoqHJLrj8zJYn/jiRQFZ6OVnoMVMywZ8MVzj2/2g2ykcEjTqmD2ZipA32o3f4NZMGUhwk5uWqWSBgkHcS026h+w/LTqB6uOSNQmANiXuR8YpAFX+Z5b6Sy8KApY2LRKwlFOC9VyGzA8URe+PxkXUYXugae98KsvX+ueIN7Wp4kfEdiLbruM6HReMiug7iSnQoopaPIoPMPzTRCnwJ0hrrqRFX5T/92+C6AsNPxe4v3oC9AY6UrPxBlMOjKuChnpW/5gX6WhZ7xOhX4+jOKRz82ZsPvOIAQ/9MxN2k6BZJN7HIqRI2f7GGpGwd0nP7dteuANQG8Bge9IhugIf9SLy56d091aPA7p085Qt7vVwgI0+prtn0NeNxFBA6sYHVraqlZU2lSgldZy1c67plYTo7KXMnfQsEhhzchF/JaCJgum4h4x5SG4/JD8AOaktQYcF2cPbtP2FV6N7vdlgls=';
  const _INTEGRITY_HASH = '3110dd41cd079c56cd8214c38258e55e08c9bc8760f9248dd98c4863ad17b389';
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
