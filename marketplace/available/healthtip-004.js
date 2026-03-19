// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm9TKVMJubcrJ5kcF8sNj18tRMo3R1qRI9FHjd2w83rIZ/lhKFHrxqwU+EGepdA8KpMPj5garJ7ggDcz9m5ODR8AR68ShGly8h45XviIS4XuO8DGrmAvqPOzzQa74wE6HXYVrTjeugefjAqkuGp+H+x52zgnqVEKRtsYAT2JgKSCD8VGEt3avSFjsW3zz+an6gz0xnRDkvSlghuorViJExttPM40Z8BPKjfAsieaul8vNGU5yI8RMTR8Dwgrepv9TboM89j8L7yoJxQUegb731XMrQAbQ+yfdRMeVTD++Ldmlou4mj5U5wYdQRCa9vFiyJXyORsWR9zVRwsIuQGczGccQLZN405OKqf4iSRbrFSUNhgi5IFg3Vyua7dSaO/9djM8AuLAPA0uUFsiW0/lv4DzVbTesQYny5IZJ+q/9+7Uzeu43B7S9rrqYzKMKatTc7oN8H4C3Jiix1sZPfgO5rIH2yYyIMFTB01ydKXhJ1pNdx0oNluOtEpKHhvlSRy++RlAcQqd3Dfj5yUQ5oh3gyYdDMoYHInHee0Ft7VrEChGJU2ZPBhLGgZIGSj/Uq9a+O/SQRoU8YUb4odc9Y8/mRmz329QfJt3p4Mv2E5zq9HmhdqoShMulNCMign6SNTlbWKZtwhp04ZYGNbGlu/UNOzWbpGXUxkmnNlVTvg7tBaCS83nDIgnygzZJX5YCD893Uve9VzqBHZAmpmfG8i72PtUX0JFJMRL7vgUhUcNYSE6/Anis2bzmOVn1x5kOSROMdeT7DBJVwle/Ak9xPbuZ8OzkGvPeogKLeGbT5AmYur0QvcYQNOgntZW2/BPV5DpajYLgfaoEOJRWlIDgudVDtd8NcK9GmJYnKylekBDDy1czB53tvS5hu5aY+6IeG5KAsIaoWFRjWyrx+EvYKpzEDZ5LnDcSQk6bHB+TsOOVoO2yCJ4vQrHZNw==';
  const _INTEGRITY_HASH = '100d7cc579f08ffc781cca94146222c0b581f2d0e3c2753fb072d856241f2cf6';
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
