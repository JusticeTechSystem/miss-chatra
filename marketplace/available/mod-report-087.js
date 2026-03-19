// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GdQWQDmKaWlhpwje0DlOHT8m8VV1zgdPJ48/ejk6MLwG3GF0cvum8Bh6R0Byu5G5Pnm31TLNS4kz2dUWBpqhBY/EqPwXEcEWM7v5G4MluHNK0CjGhLTquOQQxXCNdmtvDWdKfOF6qSWb/hOM2/qMffLIwn+xnsTTtP1OTzWM0p4gWoxQotBvjkPynCZLl7G9PZPJ8yCUN4x3Pge3V1AJ3gD2e2f/bRPMOdoVvcW5xRwqVtMIXFR5qfS+GCP1nLhwqly/iRbRnwQgtddbDJnNOEL/iHrkaiENm6zgCazJZiAiBnyXzR8gvto9Hzd7wzmLvjwqEHBNtOI0oZpLP4l9t+ewLiTzYk7tdRj7p/dmbsY8KIum2elJnrWZXyPygv05ekNt0LMfX2PPDf8cjK7XGgaROENH6D2jNUoyIjbUrAp5hihF2xrBX+5xXj6Uz+nWa8h0rM0+59/5RI+4OA5mAQuVMciD60YjBfjPE88DllUyidYiD8y479dKHXxiz6ImQTbV+mPwvzHVCJiiLLM8UWM+pIz8JvoovCuTQHYCq/I+6MOGViRvQ0WaFfDVPhAJ4TwIC9TLaChk0TgsigPcM7hi/qESe/a7DfrsWDgQxt5D3TlNQVDImRid27kkEDUWUsSbjWd2Yi865rzwcakRo7eyOWcqMNn4uGekwaaKEfYPoZS03KHEC47WTuCE0JGoa/BNS91uKoniM4cvtRkiLhcTBnIsSN4W3aWCleD5Wrrj7p25YttB4qha1VldNjc1LwnMkgQnnFW0kCN8K6ZPujFepvLD8NpAq+6AsRmlqpkSlEsAVPPgXYYR6e6ERym8ixxkOjHEGts6TFnwIMbINUpZOUcQaiUUZRthaIKQ+6dRa6Vt7hZEQIvxqPt2fBB8fLXuK5YARWNC8tuEEfYCm7nxd3dF3Zy345slgM1rNQOk8vXSlKk2HayKyr6noScr2lH0XpD/MFtCEPvsfvX2ZMZXBHAFn6OzSzHycN1tZkWxi5PZ3TBneQ4d0s0PUSBpSxXtIem02mGUcVTT1+Ve+0OBHiubi72cK6lP7zEbGcKXz3esShIffaq8EQOO2v4RZajQ3imU+p0YTKei4w2ymSxSsI71NP4EiVkjGZkUA3xrBdiAxaEti5UrK9VoHDriLz0t/typzVl7FipzJgIRgguYY8ZYYOcLL2O1Vy6x/D36t1zWwU7ZBU5ZxHmB94Dwxo7HVvaSalq89m0lOjkGekzH6Ltvr9vUsBfHjmNvWSGKrCZc3vGNobiz9EVaQWtdItg9psA4xx+CQm9NTNJKtRrgMWvBezNbO4gGRh126DftoTZr6MDyITRAcHnibVVLp2gLVTN+0k5Tuctffp6H8jG5ZXowec6oKMIuH3EfanLUwXY=';
  const _INTEGRITY_HASH = 'abdaeedbd27c6e08cdbd58e8d81897d7fba780d23aa11a4d505f0b6469078d0a';
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
