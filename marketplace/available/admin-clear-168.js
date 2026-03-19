// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uV1Q5cGrGOSe2H6SVOc0MPtbL18utZdYnZeWSAvlSk6wpU7TeE9hrBmzK7MKrUb/daUMGicM5bI3ffH7T9IyPysVfNT51prrwOvQifwxG2jZN391l8YtIB6HExGJNbVJSeCu6k4XL81WckDZBbT8afraIR8fyFB+i3i8rUPFy/hGNMi7d1bmp4U4T+HvO9jb+ghrV1en/7Kh6AuIAmPP5VU2cxKu//crwfVA6dJI04aiSbFcc3i8moAU32hmHpQwUBhGE0wLF5gkx2N4po3GQiNjC2vclRlnUAkBQxsCn2ZsurEtqBHhysXSBv1corkbO9OuEQU5TOdqjKgpiink3oRryKLKhuNcssg/9zktRCEYriCpsfzkGV33E1yVu88/gz4tA61+sZuu+/bHb3S+aOKubW16zPO5IilKc9YBl1SPvfeH5XUDNOoZZ68WOZeGOyteUC7jCZL0w0DYNvl8tZebJRZ/BU/iYqh2Ylku36HaLulJyckn4wFn4C1tXXzg910gaqtN86e40w8UHGsUB2Cwsj5J+L8mcqecj6DdLDdToESdahJ6x1rtMGNA50ObdPdyQ6LocrMhPBHDHB4fUOKAQXkC82gSPGTBX3jc2KodzVv0GQbmZVRnXZFMK0FhFlK/Q+NjyB1AtXEuipZCifWcT99k6xQHY2ohpBq3G9yl48FYjGL4w2eqSfpCi8OMUGYPNtH8fdJC/XIlArTN7x03IWUZtBbOs3Jn4Xii0T5coXMVrT8e1xu5W/zdjuewdC6GLaW5vp4pNqJcAAokKp9EwgN84aOQ2e6BAW1p1QJL3UdJY4tJHc7odfwMwplveXtIaLdbp/LMb4lKcsKKiEchg0WbSlVgOG5t/X909hSm6vqkNVAbTRt8vprte6hXtcemCSppBUBiTBFS+Zc1VmRKV97+Y8qRZgQBxBoWaGvoYtR9XKR8Ea12g2g+StoCbtwidOu+mQuPCBlisTLPxprtxXbkVVPxwXIGyA7AHpOZU11vH2qfDUrg';
  const _INTEGRITY_HASH = '4417078f68211eb2c564b2cdd35eff71a3b4562aeb8260062687bcc7fa9901db';
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
