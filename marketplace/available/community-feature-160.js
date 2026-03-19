// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sEZTyLqI2uXc2et5Q8XEmvQlatQ21HIJnGKpI9sBD1jrWtcJluMIYuca+xgnzJhKm9opXIJq+0bsDrT4OGFcEReKCbO5q+ILc20e9RFVb/Ap1F5yilhGmS6jTVYUop+gVf15KjPN4ONr/d9DCd/zgPIjAlLrn9OV0swJmWBCiRd44GiZIKaYD144R6DeCuMAbcAG4zMteJuCdZ6DUrJxjy8+BzFxQR4r4W8yjpTfZvgFY+8Z3Kif18mmOp1oJQoY/Y81AH+syWCkTWypS5lOZzgrxp4w0C4+LIzih5UCyV0Z/T9zOGgZq4YbCBc72A9stpxESGx2wRgAR5R9SxofG1AiorjoCD+txplJvtjg0YQM8BvcivxJwDaX8ybMcN+PJ/sMVMl3pb4yhrg8at+Wd+8Uvzm0p5D1O7L/Im2UM0LbX3pKe4iAagQ9B05xK9htT6gncXveJMzPMnTUiiAIKKa+Sr2V7+83o4yitN7L0KoadtuY5VXayQaVsQSbRFMQmcEvGm1N2T5kfmYTPkfjvUj4z+tQhY+pplVYgEaAqZ47T7lSNFGt9FhfVyMpfPyoX/jzfcx6cYrZ1bYQQi0/b7jdVh6Kfl+Ohw4apzM65nCDUv3Wg+XifFFamPj7qIRQT41/X44fUUlSD6bzWMk99elY4+Dv0XiexbVH1IfLqoXK4SMeyFTwmgMIKP8xcKIaHMkcKYQXyGbxtcelNj2y7vxyxpGqdOM/BIhAP/HakfKozdvVVie+np7i';
  const _INTEGRITY_HASH = '63731c68fc644f4ed66da6fa9400e1f53e8c1c1ff8b4923f07b3e016117feff6';
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
