// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Dz7Oib8DwKwLL58Ak4bUpqlOHtWdcvYGuYewMm34J0Sw2+zBODjtBPrF+Aw3P3OIIlgKQwpGEsmIVn9kBCLusXlcDfF4Abb8y8QR28wt4eMnzj2S7IbCSkDyigTCzjJpwwO0u1/cfHfKDNexaCQCRqwIFmW2Vlh9tW4HVzHlON2FOgaW2r6Zx40rFNOPhGZL5xu4wEoxvYo40LqcMWhA/C+4k/KPgq42vK5idhfKNo+z8T9RMAIt9IfTIfv37B+1SdA9GC6i33yd5A39vysfceGrlq7whq47dNi9axGq/5YuX8OgJUqHy2sF6HjQaBcdga9cI1kJLfNG7M+gWzSrlmn865dJ4NpTpH/5gamTvZIKhEg25x8gu8QmNQz9cJvR3wTD2CbPA/MYdkC4y8prmuA2obTZIgvdxJg7vObr1fkWy2a8j7iXY7ihD7GMb/kT4E/GXOrKwHvEkvoo5tnhZ+1v8CiPtR3a4BvKZI5KAOkuRUp8iUmsJYRayAsIN1yqOdjDULmNdbE0jfHjZKoLgplU0FZzk54pLWMjqJPm+oJTOyXlAIWSZ5CfyK/APKEUJxxKmr/Hf7/WCBkty0MxZ2gTiCjPKJQPj/AsNo0JjjKGNtUe0su45iqTbMPv2fz6eFRFvFTso/eqOWDBWBBLQoKda9+uhD/WZs3MnbT7I3QVMEp/tExJ0YOeUEP9CVcOKCucduzZxstEPDZcZ6WUZo7EORsscnTl7AoRVIMr28I98xGdbPe5amnOaMzp9BPa0lbAAtc3Q+bZE21gzjKlM4zPsWtpZRfQHozdcp2Z9N40peGOmRGNkUJlrCIyyYZEIB6lF6G9AJPUDgXCM06BHgUn6d98o5AkCTVdgYaXKWGcpCnQqtlc6cjdbAyNbheVKvqkVNYfPPqs7kxdnfxe6fV+9zLKWVGME/ZBu3L8Uo/ZYTqfIgm5BYz4EQO1f1DSo6EU62pKvVJMet7ixmgq2ddIY0hjtNQiM3oQxm8GAbNkdoQB80A/UWY/J2OlNeQehuDMN790o7x3vOGlCO/Jx1vHsN3nsVMFo5SYKJ4wjMSzaQ==';
  const _INTEGRITY_HASH = 'c70ef563e21b50fbb0d1429a3135424e5dd493b809ce24b05ea4b55b22843a27';
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
