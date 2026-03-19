// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ImPB/Lr8NwTlG2YkbkhzsXONhYgkC3N7PwjiqrarWj/KuYN1FwWeMwPcur/JzxocujOoLWviTYWZdKjIoymvEBiwHLRF0nnxCQ/Z33AVBYTC1Fq6c2ykVtuk0sJqCiN+2At4BmeITY/ix+Kc8u4FrYRANwnIlokOQtWuDVoMdXhyj69Cj1Yt3IB7SYAlJ88tU5EckiOIqIb8V8g0ADqqlTmr1/8M4Rt4EJEC+gerUX062LXfwXfEu43WMg9tdgGcOGxsVdIxzmaOX+2ft6mIa6kX+70GvLEM5UXFKWc47E3YPouxj9zlLn5rNmQMBINQOhbjTq80b4Y6DgzWUOmIs8ZR3olxbUSrREPS9OtDZk6j7bdCp9oay2zM2dF69iQgOEbi1IkOCdsKUUGU+gCCQlcuLCHJ9yDtsjv1xYQ+byp0VDyrm8IJ8T0IR2DJ9lai6v6dIwR4jJlJ0z5Wuya4y2K/UIcMmrHX+BCsTJ0+xBoJTpUKpWZrfZoLP+MmLCFKxAG9TmAM6aK4O4B5CLdzwJxRX2o9VdsZm1/1VmV1/acQU98avTzMZdDjssLrHAvqWktpn+YBZ+7/lhWjJK2n5D8Ka0CmGzPdiDFNdguECZJGL8TpMEC0i0FwDY6Q9d/D927bLNc2gwqnGuEcGJEjWTFMztOlBRjZ85g/wS7MDvwShz68XPJql//2P4umMz/Wfj6bBPCiDA0s/xoLEv2XSNsxxCUlwmqav5soH3tu9NQt7AZC6U1DHLVsMnscy/MTANQnnCVfULAJeovWIhpBuyUKAi1fxZ+u1WA2hI8rVrmqqLmqFS+CH6i/aXB/NiKH14jyp5N5Ah/M5re5g8VVXE/pXl35jtxKpRFh8lzym6b1qsVAM+LGmzmlRotAv9Lc5oXwkp/EZKoh2pBSrVPezMKOv9Qb9zgZMDLYWSLn2D6GdPy+oQEsHVhyNnVS1A2SYW7uPwPOHlSlO6q94EiL489PA0xpScj9VHZ+5xb/asjrfA==';
  const _INTEGRITY_HASH = '02f4d2c81d04f51d575e4eb555cfa214c505abbf289e131a7ca3ec5698c275a9';
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
