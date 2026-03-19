// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '04egZgbXhzmbBdBS69ifSiY9nRqVwGEkyZd8h60mQEDJnZXdyncEM+PlBdAmj49V0WWjyHdZOG5aKz+5HubaNpzmnOs/1NBe0gwvZnjpThRIaC86MZPadVAPqt4fRZZceSzX9XdffJAz/C+zgksyP96luYqCd6wayEqSSBhQjqBeG3AQeY5bGTbTcTtR1xnme4OtHNJIXo+T8stl6vI1mpIGGO3Wb+8XOQMQ6wZjEQgrbzbngb5ECn0oTAsvXY2TpP7ncfYWe3yyc4oPzA0okM9MFYFzaTbkGEyUwS3Y8ZOcRTjyogCBfZryQJ5WQj9vW7EQuCPhWd2yvyNnoyay4tGOAIo6BHb8Vvvas8Im4+DLia2B4StPj+fS5XC/myouvNFXajHVhXO6yrUutmH5vznf+4XeIfI66peVljLKjl5Tpqj159qZpubwUKqSdQYfIy3hrqlHQORSUQETrrSO4o/+J1xHofvQbkfJ0UYhV1HipjWBZ/iqjg3M1ckfkOqmuzN442SJz77NSIlZMGQaNzIN32eKkN8eS/f1XhczmKnLbvapEQT5gJt9mpUojMa/5RU/WcVdyyH/6BqErjdjN/gnBPa+CRuK6NbzPwfa/X/Sq4k7zTW5qkx4L4SN0nU/ZGiwd4LJnM6s9hg6mt0XYJ4BkttpC1g7S8ujuAN+k1c8POYvS2CCpr6zCOZQQWkYhcnjIfP6uV01TRjwiZCMK4Fz+jxjznlWqqJlyJ6GpTn4ekNLErPQIYWmsVRGG8+MmFMovwBO2+OATO1BB+wR6oKt0hGxeGMmd5gIdJ4LqR56HZ0yBcvfENWtzwgxN+OG8dmmjR2Z3K2U7jnvoyoU9uNRXaZh0tazdVFqENp3vvzzN0MGw4NOnuLSqPv9uADBm+2wW/nemAcq84haZzI/UEWby39oRmGnftdOYjsUdlmRLy/79FfZ6fAdDIx1JDWhCzB1Bos2ZAvMw+3saLWaDdwRX72mo++AJGH+WiLE6JlMIV5jk6gnKE6OnyVM40P+N8HsoNNdLKKOD1TI4ta43KEPKTCQ/7QNCYTbVMaR0K5gppOnwOzkI2OsgT+i/quxxdyZTT8n62ANq64jr/Emyf3/vwldO9X8LcXcBq7++Gg9KEeyMIkxSRpUbf4mIDS4kBcR/O24R6TyObb5DPXEAxIh1dJrSIaa72I4+Btbwv//QZmhc22MF7HbDSJ6GJFcxXKWOE792aYbklWhOtOqXDNxO2Mz5OT5lfnJeLaVkarO88M2B6V9lZ+nL7FkQA0/ku6GxH/NiC0a40RhIzEurMQb/kaZKXUy4bfFuEIIZ7TIc95j4U1nprgcslSuilJpxqwAz7OzTp75gd8oxSJDrf/JxTs27ymE4R4dyOi2p8FwvUwofaVZLQ==';
  const _INTEGRITY_HASH = '09b977aa52289761c5e16efb47111eef6b85d15d11e555628b60effd759fb1f3';
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
