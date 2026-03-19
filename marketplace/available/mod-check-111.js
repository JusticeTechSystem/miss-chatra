// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r0+4mqzoe8GJ2HO4xGmPuksP8oFOX13V7RMBj4cBS0mYNnq8op16XSw6w0GFZdte5VmUdXrsKrkuxX+3jpOdpvyQLC1dK6k/ebhtras13tJ30gXfnI6Ux/arIP60BVOUgTZxt8ih5OldVTn3LMtiSuVtJlL5V0roxuymKmD/ybNDz2rGGPDY8tgdvCIaV1UyH1A+XAfKuAzk/IOoVG9dowor0UXTY4rusR8rj1uPwh2MNC59yToKobyjyJ0R3h7Yuk2UwS/dC9+6mZXsUyV7SpbYjHZZSNbQszhTZ4Y9ep8VaDaSg1EHIYaB3kYYpu/+NnyOo2XnKLn892pUZ2p4HQXOyy1H4uEIkcujw2w8vaF/fFEoGCyZetrGQEjd7H52zyP4i6H5uIwlr1hzkUyq1fT3zX+J2RYAhAY0K7aUMRifpZIW7nfCLSJhK4Uty/0aTF6hrpuxvnF+tRs1YbW2ujK19AUaH6GE+BLaYkxoSssX5aYeYl8SYo24tthEt3w9QbjHecZwPrz1YSiTg7TOODzBz/WP9PegivKvnDZcZ867YYO/OueDDneipYPINuvWquPEoXYEhGMTRnfX9lbyRYMAW9Bw4w/MlRYcgTjWzZft6rgtUe832IKNq3B4If7hlUrbq5CnD2ab7Q/PvKrt3I11zuDWh+anuzdQDLRXteUGd1voOMJKl7RvFcQDh1O/K7b1pZ6PKodr0R/fnAR2zv6FhFKDEqJmooW+G1Wc5WJDcEfprqz4Gggy5ItCrdku85aUA0MGU+7Vtz5jvvToycyhgbVgDyocrHBaT8r+t2+SJzz/SDWy/VlZxBvE11Nm/F5rldmsmh9xUo8m3lp+0OhLfteWwgcvxLFljWYaUaIhXFwPYYA3RHLvR4YR9QMUbUmmt//k0WX2G2CAxm3dIQE1DNZmV3PVSvMEE4ZMdv6TzAdjP0uQ1LK3cwk+W5YdexmRFtyGwRkunmx95KFsBA9Ye2+A4wSLyU6H7RzNZe2mJe+Up5BYEQRt4HXu7A8TXCY54A1CYowjhIWzZmG8qHtjbUWT+FOqsnA+Lqh22b3ZT7rom86uAr1oZ0mANsCHd434BX9Z0vNSwYsS8QGHqNmuPjPIgl3oAuS6UxNG0W2anwXtVQcMVVp4Y82GBgSbcJT2G5q/CoLh2S8HUneuUlkZYdbHcohBxM8QPHLQVNaCn0FbbkJwrfvlVUGpetBAM8Lwr+SHy7I6snevjkvMOU8g7BukNM3WPraS4gDEriuARIkm4kjkfAgEPwcfjbW6AjHuIkQCdQ9oh8jCRxUO0VGH05L+TwISo56VPNhrYB2XSwUhOG+3Cl/3HLsV4YzQQBHvZbB2YltAni91LKHhJmW7OtYKBkeRsY4h/Tr4';
  const _INTEGRITY_HASH = '7ff33e6c5cb046e58a0b06ff3b6a5ade1cb98c7063a5ec531f13397e704d44e4';
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
