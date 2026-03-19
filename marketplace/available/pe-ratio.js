// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Lbt6vC6jGEKpx3D5FarWu9qVRLCuq+SSIHMuxrEw+t+lbEZ7oDWxmoLE3XWRWzD7GzJRr9zDAKtp47bWwxqvsaDc7m6iUewO1FwKqCfW685r4uPkW42r2U90YRQNItHRt+MW0PiSqETGpxMSNt3Hvm/PSmJqXBGNoq2ImtJHLPWHuwmLTbbUOX4pzINjpmOdRv0TfonMDgY+ctbrkP7KlK01vZ9R+7OnACyqmd++0plTT3AG1dtYyRqTv5JeRTfE+Wr+zclQJ9zd0VjRKh0al0Zs7uwOFB/hpcJ35OGYq7Hwznez7Re2wOYX7Xx3kARpzaCyxSe6ch/x+pSb1BzJ622ZRoxYMBYKp4ZXSYg9Nl9cfgVMyYa/MMnm4wBixlEQ40GXpCpGhAhzHdb73WCVuaB/2kDAjnHYTvjOc0h96y1k/PP4bHsH+D/ZmT9nbWKuJp4EolLP4ejOjEFRGbkqtEWnX44K6cmXXXkDTuMzDL6vSGqAr/4b5eS32vRTmr2cD4fUUorUcJpejOH8mvA0ArW76sow4tinQHDzPbUthdlUD1JdMSXpYWIIqqNItAMv7WsucudGE2EiwKFPZ4gAFJYs6NPtdBAMk3dMNpeTeMKcUTsl3FeYAmqMrePEmp5ttBBF3qsdUhDAfIuRcv5O395UVqQACr19aPI8j5s+u9hWuVseby/R3Bj6rbZaXWzF1vg59Em6ElFTi00RvqepzqFfOCtJYjR9O8xlKHyhMstQPllrqDrLNDOwlFhgK/LXR4lob2ysKp+xkOc56FA+BPeZiX4M9zvGEz0jXtt5nqwNdFVVnMXHUMVPfUivfJUr1zUhsYWnCU6H3alv57YW9rplVHTF/Fxr9Gsh6tYslUu3xxoLL+pHvzCY3zY1qQlxR4s51IGYG9wUKvwsBIp3FVmGf4D3yWKvNW+CfV7S7SsOkrhk8p3BrV/sw1YEC+xeUyG7z20c/OTHREbr5KzNEuVh7LtSHnhJS5S9owUEopnQIifezPZfOSvJuN051RhXarCuOwFkZmnMpIuPzMyE1RA543WHee4eYLgE3WlJy4McAi2aOOyRevAktaG3bQ8deO4pdKVPXlK0uqZ03WbkZT6SD40c5KuvEOBoDmYiYvNMWTGLpE9WilzaaA==';
  const _INTEGRITY_HASH = '2db9ce1327c7675a80534a7b0a7b7ecbbbbd7db235e9fc21bd14c8614fa95bf2';
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
