// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GUqhDlXd0mmJ+HRmOIbu2ZDcr6j79MwfLKvo+/IDZWEeo900psTTLOffawq6z/vsAuhYBP0On3sqgHuwTMOyxVaNYTXPXNeTVM7ck9i2QT3WoiiudjKWVW45KqNEGEYQzY/u10RI3qkXeqnAx0J63aGmvGvwsbuOW6KLKcAOOqqMKwOcMR5nzTRhtkqaelm9HqpTUY9bPzAz1TCkcB5N8WgIU5oAQHGVjXHAvW3lsY6j5ffQjttmDuZ14P0SyG+AHs1kCeivPX7ch/GzGfFiwJ2rksRoANKG+Bpbix9tUqoxJgAILFG7NIjxnJjLgpJAtT9UJjaoEgiyQQGV5/iLmFw1lLohbfPdty5H315NKGIReO34IJ1bPQ8UXI0DECRWu6L4o6BtmB8jebnyJU8wO+zpuOo4PbiqAMiEjUhGWtwdLMIE70bcO7uHzKptDMXHnWyMLHe9Dbh8aGc+Www+zmEgd2GiVFfMgG0I1II5fWrjkQyNGzNZRy2BPU0G2tiCp9LrECuxlnNxq008g1kv30ExJuNqqy1vKANitQJsTCA/aur8VH9zrwqYGHyTn4Ax3B/kz27kU7SHMZnBytyiHXgI0BuusiJiJpzifisb3AZiGYZqqt8PtiheV/emz8Ct97NSURjmm93IukKK0LP3aRS7/HI2D3XBVxXIPIjbcj9cm7OlZVP1rmySfSm7ho0k4Di5vyfBVYIgqw==';
  const _INTEGRITY_HASH = '316ba42c5480d32217295429b232e6a782b55b418cf0ad5cb451048577768fa3';
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
