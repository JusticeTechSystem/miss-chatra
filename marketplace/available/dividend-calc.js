// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T6nuPHy3W5VzTjaEUEJkuFD5OwmwsGuV/agONVUO2D9YXNN/0t7OnYuvGphhffouYHPiTii0vG6dthCLC7FY3KXPEbJS2lbml5ADFenfsmKC2Mvkzucqu2a3RzSDlHENCA5256jyIz8tQLaFSKnLigPP2qZ2dH/J9ask5q8Xy2r3cgSX7qAjsGBGJx89rGlCZcaDWhb0kP89D6LmRFlu04vh8Ptnie/9oxAH4a1DNuYq94uqVh1k+iQD091UgxSJhQsTpJf7rYLd2ERBidKkBJv0PcvTfpyJl+JzUJI+VSS+V/NXelYWNEhc2yCK7NjrjypIArr8hpgy2+ep6v63M5CXbT312wZJTyxaSkwu1PGXNTPCIaxC6uXFDG3u3CV3V7odyAvPL/4ByOpD9IhACV2vLXy53Nc7K/QCA270QayZoHEf6IfgMlP1SQK2pM6HiOX5QCTIKv3oJh24uCKwqaw/0vxZkjj3FWwe9WOy7Vjr2+WPzPgxHHuKVXQMOqu5pjiX4aowxOwB5f9GuKlO+O2sKMuMqjC2chtE46lAKQQJUmMT/eloxR4R+sLvxcX6UsyK6rIEv55mmtUQMj9xMJTIrtolVpF70kwsDwy4gFcRpAIOAeGezWyssnHirshM0z+aYoeOA7x93I+c1G5uX9Rk4uaKOHoJvnE5ERu1rQckAxxoZKtFzqauiKjSSSGxy1QJDAHGD57x9r7v30XD7IbfLg92frSt90uRLq0uGBpYI8qRu3On1agTSaT/ThsyZBAzFao7uBcFMrPAkDgdydL/kxID6OJCrpMM88p+rc2MXf6LWcMq32AfRJtnVhAX0+wl2DMV6ZVfoB417olGEsy4Te54lsR68rdn2FO7XkmnZv6vnY5RyB9cY0eSOZJZe3DvrGgdP+aTxeVfRfe4JpYemS5VV5Qs5z9idja0RlBqOBK1OwwfzOiXtPiY+eR1lW0unLghAtA+GHKLGQ3ky16inKbyEZ0NVuwsX0TTqjZp1yVajA==';
  const _INTEGRITY_HASH = 'c06a22e44529b9af97d863d996b0fad5df5ae89aebd0f1dc83b9325a6114092e';
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
