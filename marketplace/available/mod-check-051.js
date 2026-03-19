// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NTbfPgIwO5FBHUzQzGeGndyojaFCnOcTwyHn8QNO+u1FFD7TmZ/8sL5rcYnF6uQPe//IsRnHIgV6KuOLiEy456AkHvFNLD3/swrX7h4IV2m/sQpdyk3fkaX5lCGmOuNBqxZcJ7AvF8lx0BdAEB0s3kxOz/b6yL9WxEXjCL0fuhjEBiuH1wzrU8SRPS7Mn16+LkyiYv3AE1Wb1omGZDS3zYqm6PbHxIqMD9qpO840u9Svf7Fc79ZDLjGU+j1REiaE5oVeM9gUO0Xnr3PnniRCZ1gaj/2SVhjdNBFmGoxH7ha0iDonj23oAGsHpatkv+2a6aExXSRI264olYTWjtrEHKBTBS98BD9vkOM/GUL0g/MBfAodW/AYBGM0BNpNu9JQOMiJ6sHjW/EMss6jXkaZdrwG3CE1TDxhXRo7qYpQCw3kyAEREYWwlU2rZ/atS4q1urP76PoOZMWG7BVsFo8ZDEny++GX4Vukdj82qAaBQN4aZWzPXOFpgAAC4ONyN3DCZI7MkWvd706gAY3/Wnl6sE6/mqb0iBbS77cm8h0Xb9DKUw66OqwExpGdRxua5k44publjGedLGwVl4xn0gxX9rJH4hqyz44Cfic4nzloA4+3ipLwaOcLVWjjIdVv4tOVR9v8VKtUU2vaquTeGf5QMfZjTvFrhhlgKRyCzt44zUQqgnsS955dJ5Q80pDFnmo6GBs+nKWRSpjeOkjm+ApW1L/aWO4CxjV0TI66rBhuR0EzdrN/5ZY5Sm1YJfatKCo53YaCWQsLalafrS12mFCFRgXwwMTIbXW4UKTV7gbhKvE9/0zQgvc+tP9tAxKxD/XN09gI2QIU1oO3JhlERO9zOXNkHpHtiOrsw0diNUGEh6p99P3TG92mcJwQbnhd1mTtlXvO08zz2o2vJQJgej/1hoyBzuV1HwO9Vl5h6/p0g+Umhf0nGxVOsVc4y+e3mQE0biJHiAtE7HS2IiP5FXUAkwOYGR1wFxNVntZtYM734wPbSvUcusjlnRWl7cHUkP7toMvRcG3ieM3XA/ueLswhyYpyntuI2fxc2J4/pZlArtYjk4opk/wsTO2LutJOTHnuZG1opbr4XuDsFu9SianLyYgy+rN/R85mIvuwrneU+m1nFU9jldgc/r9Rb0cBhnXrmggIV67MJrcKb9w0WCC731taEl+9Qj3MAG/1cQlWCIRIKER4wkQ0TSTeYA3/6XFRKzk9RxDbteH25EbFc0IyGhr02okzEzgPdgr6Kt2N46QdvTcUMXSyCe03IwO00LINQjNCKIvD2wFqJFoV0pfKDTrKxqToNYBPpelUceA9iZLFK6a3wwz71rPyjAjqDQ67ctpgjN3LggnsrAHB15uhvpNASlZfzb5DJA==';
  const _INTEGRITY_HASH = 'fc0539c366378dfc62914fb4346a3fcc6db8b00d4b848cf3561a63d33a50df7b';
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
