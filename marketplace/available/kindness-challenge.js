// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+MrtT0Xh9kgzCkehCudMsUBf2H99xXcZWotvGyR0cpqdNGdOF1W1/r/+rUGbanjHUqSJStqY7BoPC+9TzG56PCA4HE7xGJxkO/lPl1btkQDcRrmNKLVrwTmB1znbFT7d8clA5v3kAxTTqcCwrn7ANtMYDvXGw7uZt5Fa/C4QDmoaGH6OSS9MhTRiNZuzlMiITdi0j7xeQb7xdhut/XW/Z2F9cdoONp2PP64bQjyvyDZYSTWe8mHXoQW6n1KDzF+nCx3f29u1K3TO//v7VnWtsHjrIXKjsuv5uKKv8b5NVt1NlOZ/Vt0LQ0usSY5kd1LV3r/kMgofVxFawLR1+FaPhOzaf/1R1pOhZo035R9LcDrNCFTCcTBDsF/ibEiLQ1Oo+AJD++dZ2CJSNme9lfL/WD+KJiToFa4kwvciAgWGw6C/r4KiWiWGnlmbMMRrXzt3jcstpFA/n8Ox++VjaTBzBaRTReJ3vIBbFjmx01O0HDCVWP+gnSAqYlCAyKkLYWyH/dTd0ShmTXaBljFihrg8dPDk2wjOpoCZxVYojWRv1PxD0m3W9JxaPNSjdwaBV9eLOPbkKNF7ReqmQqnbplyVCIRqdNksfj2qIQN5lIGDad8dDpmrtzsarSmexWqwO9NCz11/swCZK61Vn/knySBz2+oVYx8FuQBcGQ5ICLqyGIXselBQru5+Mo7fgBmqH7ALdyrTN6+GYTtNdAhrXGfQx83lNslRkSvNVzM0SvZAbytw8TUfKgh07ingyRvb6gDlWug8FjzDWgwaxO4ACY0g3Euzek34Hjrt/b7+VFvxYsqgbjYXV/sfhEycrI1xlQyUYJN5N8bqTL3trs8qxehJYRa4TTBn0jb+sYjIe7zYup2e0+rbgF1t9Xgy/75POMhKwi8owOTpyF7ckTJr/hp5fbu0Qy6yC9aqkfoLzUfXGVB/9NLUQx/Grsa+Idx9RJ/M8u6iPkaD+7Z4A3kTlrSED/NyE82TGgfO/Y2MhLVjTVLe9Mf8dapTKudK3lLgR48BoQQ0+SchPt9Vyp7ggc2uNgWZdgeAKjOR830BaZfxASIRpGFSQmiNcvnhpw+fShxdNfCis+10dkMmPTKd5uyfnPfyqR9tbNkA5U/5xteyUBQRLVX9x3/2qzoeigMGuGJTdMbj8t0OsExfbTfcYQ3icB5o37aORhSK0Cbm4NG6256cjy0svLk/p14KWe9i/eEefn5F35WXAvFhwBYsySo+pJfqlStXDs9tDPw3MKjKmt+sWQPwdnG4JQ1AyKx1sS0pCFHqE0A7N7OrH12NpbfCsVsqNovw6mw2ucPxJxnqJbM9AtUuqWBSR51r4LrCIz+pOSZiiAz6WTAtzAfhEceTDN6ZaqmTdKN56lFkC2ir7nHjZxHUa0A41xic/8D96+8QoHgEV1csaR+Kgl1k7RMF6Yq3sUnJTW026yUq6gWY7kAUH4PC/owF+NB0dgckbzVnPxh2F4hqtZsxvLihOnAWkkozCU8le8Epeyj/huAOnqYO3mU8UxhMyWQltIDn14RT3Y3yutX/x1TiHiKY0N/fFrLhCp4rvmIvdIRSiKKO1kmQk0RUTYEM+uj6iktOBrl4qsUMjKzNiKoMEhu1hFy75uqiU4K3yrQDEjuUng1Kzu8q6rS44grue9KhXZPL9uZWgsNdEBfer+IfK/CY0N4JDziTkLzvsgnc9dUVxYc3g/8mp3eiKfv4LLuaYecn0BvViAw8RzOLDxai1qjrWy2O7cpFa3SHsH9bRM25Vba6Z06aZ0Bk/ZqNp3XwU2QLFL27piGCySycs/J1uvoOtf0pbPyNueSHJa+eIpAN8nrzMNy3JYGWqpRjEoqIxCNPJmRZazcDT+inPfy6eLfx99aHHd9lWiwIcx5p5uqgSRq8XXn+gSfSj116MXI3TBxeFdFVo9obBaPKTxrTFoAODgse';
  const _INTEGRITY_HASH = 'bc17f76d668e305100f748a2f027315ff073fbe3635c35574b0bf782b5fd80c3';
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
