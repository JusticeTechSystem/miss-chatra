// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6EQ67CwaKg+XB2NFNjd1ldVJSyeSdTmqBpPtj6VwFx65d/HcGpg+YvS7JNMXDI5eOH7YQREtYpXrOZ13B5wJmDM496j7yLROXVkIIsUydhQmpXFUVXuU+Ipw3OFzS5M/OB/nVoVZ71GT/BsBRXrf8eWxXEr3GkYCHmT3Y9lEa8VnL/SWzdB/ViWU7DI5p0fXp0jlO6A3rs0MVPATQAJlg18s5MUn9x/0rTmeIwLm6jZajdVodHvIyzZ+3aw7vlpc8LJxVAk1mxUyj9kr5cVhB1OuvdruF1biev9+pJCQFMqMIWTWXOiHY1pvz9HqSjoBdZkPyun0e/OyxwTb6A8reGQNGzoaR3MqWqnWAl1mfLrYEjciiiDvpfRDduHe7aufBt9k4SyUxulXbJyhfB7P7r67aMYHDPBOczzqKSX9XpOyWgAttM9iYVx2dsVSf3VWLLcXNf/PvGOYpLD226tDco4pspasv2AJ0O5yNew4F7p8eNnR/cyR7bnPRzQzpNapG4rIMVAMbKR8xrIvMi/eB85fPthhuffP/z51c+V0QcFAdPZe1/YSa0/4Ve01X81xEl3Y0zY4hpO4NK+KTPTrGdcNBsvUzJXDaJ3wn0WefYdlt/UOEAS3ZmbtmOazKiQblHugMVZkhebgBixrmv58LFhLQAJhOPIDEIz8v7qR6yA7AhBZcre0oUdoTPq0/NZyl7D32N6OjYvGYjT4f0YCwI00Fdj/wyQn6Yx4LitmSr68XlTCns7+TzRgzAGOyGiXH+6RZdtjRjSK3yQvfNk736MwwzCW2M8MFypT1mp8z5IHyivyY+14i7wr55dJJ/pKfcv5D1ZYOEd2gxHp/2+ggo5oYx1LytxlJ4uwneiHEYrCIjtlTahXwL7hfIW/nw5zpc0lm1ZQaPVZWxI7qzgTOCc+yQavVCM1rXu0QCsHSDkB08Kocp3jPhDDlbRWoDzb4cz4gSr7fH+65az3BuT/4BxxxGlM3FwN0tTkm0AGZi5YI6+ZB/Rz7JpSQ6b6hCtd8vxKYtlnDSgncr/QXGyeBT+70DxrpbHgBq0vsj834Ams/A==';
  const _INTEGRITY_HASH = '33de25eaae45e29a251ffef46b708810f62fd642101bf6f8277364856316f7b4';
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
