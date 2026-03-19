// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9cdeIAPyoklOHcp1y3ohzPkqUfFVJrAJIhQiclIIQg4sMeqgIeds6m3AbOWMj3j6hHcZtJOdeldT1micoFybg9kAk8Ub1mE9gVJDnxova2gDNVhbq5d78BnWr0PuFWlU3EGP/O6YthmfWSf3hE/HGls0DSugJGf03ByeqH2xV2HbMPQrNce4o8FtsBvELfJlTgiiSmr/PU8wVscSOdZtmZgiMLHEsqcjxPQOSFwVqvOVV9ng4ZJSFT339mhyrPA1msYOmR5zbbdTVIrZdcsh7i+Jmx1eubTEWSf1CK5gwyGpEGE8ZWVuSVZv6SImECoa9FFu/w7TAa0DDtTmhmDlOrNGyigA+gbspmjgKOKxW0HmiM+poOk7jjaxSTIgB5dz0A7BSbdfThEK6xNWMyWiRmAdtFU45PVxru0qUeO54sdMKyjnQHMEH91U8emV1VcLu2XThse3EzUIMQOktyTkiXoeKNkgy4h+uqTchmPgJrdr3mQr8z2XpEZvixu9wuhPUEDVMkmpr30t5FS8ieAXD5P/RmZ6QfH0wODkGsz4LAk26rZkElXvJAsMZ10/YtYUspHqug7F+g==';
  const _INTEGRITY_HASH = '51524e448b4984b5a6600ed6c247e09d09e3d23269313cac0804a97f02d7f62a';
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
