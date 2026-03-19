// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EvYRTUJGgeIE1tFriSbpEZqj85wi6sSdnZDq//dCllofoKt5JIpfHU2rksonP/9sK3vYNllWZ9IMirplSLrx5GGxzsUwV+P2HvAnwiuL0NotqZ35u/S9RXsVvfghyBEJbZkxn1Z2Y9QZUkENhkjhE9DvCIrtwBHo4xx5aDHsG7/ptDqykFL1Ywr3J1IhFMgs2xethEGK+pQPmtFqCp9q2YsAeL45JrGqf5nOwoyjI+ONhNPSoREF3XB62hs0XJhUVdEqqJAafVrXnNv0PCelss2hRTiObpFWR0SWoq6SCjFAUAR5kt+WZw/XEJlgmYfWMiSmDnKv4WaSgEw2QkO33bXCerHInDYTduIAUMcJAB4xy5J8p1bm3DWFaCoO6hBYOMhBqBDpjxgFWqLrfNCk4JdJRLd8OOTWIrHbNubeaZsyGL7mRAScHL/PhtaxlnjbyNcymzNYGdHIGTFrR4HP/AZxvrX0irQwvBm+oZYix+3a8ruFncUKllg+PX3MEC2mi0HbHL+oCCsfhTxaPI+Ed3yuiAzL1WSw0cID4OBy+qLoAiJkBtHiutdGpqgZSJ9J6GVgfC2z/Hsvf9nM/YlbzUbuOH1fVfb4B7nidtTrqUqIDHSwMxY0bGwwC8ifqy4HnpPerQHprFLjGeA14hTlEMOQvIuFbmRQgL8RI18uvXpm6XfJ4eB1ZxPArf7sWxi02WxHqPw3rIpgS1zD5QedB+zNigUdodGmGCp+foyVSyg5uSFtD8gipxsvTn53xPGiMf4KkjewEjapcmRT7aiYUu5iTah2J3WjuVyjMio/WvehuIUzLZ2RoGtiskNvcfJZB9mra1dMvz3sdEidUuvo3UfS99ukgs5Qft09Q18tnYDdI8ryEvMtU1v3pjQsQ6cmCzifkIqoRSkOkw08NfLe3GZC9rWQshTtS3bgH0w/YHSbn61awEzCkhmFh+luO6cuN9BUOXJPLBxtFh8snk1QZFXPK4dUlJDwMYPjDi+hZDHGOO3Ws3MsiQdQrVRfrdx0rdLQyvoDnP4a8wIiS2vql51NoTjlHqZiQAdcs+oQKIBTGamxVb/F5nEN3QiK4/JRXN0p+HfT8AMeZ9Bak+WGYZFSLR6x3EDHoYKO1VbKbMrwwtJiPBvdnaU69BJz6Xl6jpHZ48z7UD39XhHI49jYO4bbcaDciT0NahYIbaqKioOKA0j64pyfKkOxeQABVHpyMFIZsGaPVaxoMj3ucm2UB3bRajFs5KNqM64rCvmnR2BHHiPijfqhi4DsICaFNB4YFCvN2AxvmGApMDXn1je1u55L+0wLY78I7BChbu3m7ALx63BuhWU7ezQ3A44Q42monSqB4xhDsiFrjTiUM0ycuLi+qG2CCfBfeYnUkY03pdpit3BEsUew7UZWcxp4/Tdkdu9+JoL4Pg8+KJ/KrMkjIq824LTht5pA7KbI6ByO6a6rlpqUn8mHS/JG/9N3S5UtirszraL7FK6tPG9HOJrf82yjVCjugl7Fqp4u05PPYCNDFmv0pi3+pk7COMdhhQeZeGcOhv6d66LuKdZ29rwFzRO5Q5drPJ7vVhIuHOr4DRgTgfap726vW3k6fZ0GI9Ac8/ruxZX+k32lW+YUCaUiDTrscOEsdk5G38ktpzq4o+mqQ3R5uS6mWVni+Dp6geY6rpZ4Q2WTrRuBUwei4SX6lUC3i+DyqKF8/5GmChZ+LZpYvQ2MRMILM0y1civu78FwLgsyZ9V46WHbFnbopPn+/35K+6CvEPe4mQ==';
  const _INTEGRITY_HASH = '53d73d8747793e7986bae4156a3bde88fde07ed51b1033b21fe5c18e4507ce20';
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
