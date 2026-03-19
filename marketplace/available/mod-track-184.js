// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LAr0ao3nW/PDPKfhO0XxnVWkvKoxMDdvvHuvpp2qG7Oe2ii+Rd8yjiZ6xHDloxGlsiqk/uOtczFcOhPN0xXzngwCUSJDmQUxMBde/W/gINbYGTLV2DLooBP1h8iQQcrBk6Ia9bd2AiKBCfW75jbiLbttQhoncOFMun357QdNT2s5ngJvm9YXuFbMYWAVqms9lsKoDl4RpxuFb98dYg1d1uSiRXsssznHlb3lct56kMoydukpsuxsG9Q40t3z7tmQkuU50zJ9o/a9+1jdOGznnuLQgaZZ0SfK/gtgftBW597BOI0l6aD/kIaRPGLwr7I12kxIjJEHReNgQ67HOEeL7jM1c4g7BpR/z1kDEJAhH//jD0jWzMPg8ibrPC2HnWkD1jqqeYe5b8BW9aR6f5FfIaU2PpcPTWXEf45uAHrcOLazO6+o+emOvl8tqUL4RTisOJNpbI4QgF0t6qm6uwG6OETDkr/otyg48vYZWnRb8506MMBv8Wpxfre6YGasfcHjwFpVgV9BMKkaB+RpaTmz9Yc5iOMAH15w6MrROeGAfTs4fwD944ckyP2Jxd/hJfJoq+lALoWBKiVBgEOeAQIJgFEaqc6XV6L3P3CWqVT4BnCMWHIy0H+lHJqmd/CVrdBX2bYAxMryeXPV8ynY7u9/u68k3uo63yEejZudpMBZv0CFPEyy4ELJOMKRPBLRREr7j7vmCF8Xl/o3MxT8WcC7DMYhBA+rdhVC7uih6W5Uojas8W7gq9GUV8EsmQ+fLMrFoZFoct8iKAdiwtUqnQwNZvCUVwT/2/zQzsrimk7SJJPzyoJrogOZ5UHYMtij/oyDeNFDrbyWL7FdLRwDEsaQKvPfzjIoTsqFGMNQ6YxfbElKuexyhn68ImPHX5wSyOmWEl0OOL78Z5ZJblSxOEiclqLlSEP9i/tShCG00xzuE1ng5xOOy4GEFUfKzLm5Kxlut427ZHd3CMkgDlF2TquTtMlJ1MzuYPOizOS+0cM/XIvSl2sEdEqxVDRi3f/ULVJlRqYsRA5dJ9kiq9kaWwiKIRxyvAabBDGAtgq8pLgMQ50J8Ah/CaH3l9PhZe2RXKxKfDjbNk7ppBzLcozIhV9HRzKmGaEoTwq049hH0Hi1ghw3RKKP4vqTZaFLkUPWZmB0ZU/rG2NAs9tB5UtO4orC4bVlQgsHuctfqFjhP9opOGNrEx9sgCzj2+WzLiW4hW5o9ww+CoH77KJYncMk9kWyJBIgMQB1VXPVC3Zosg0fxH9ZTjwpnQ7DT2Z46bP8kYpiHD25BOCT30u4nbjAqtbpvEm86qk7Ygscw13O2rW9O31WHgoJ9zHEZK/jwJ/L1J3rS5VBem7pX+6rS46VaRZ4DzUmTyVeaUXodAkM7YhW';
  const _INTEGRITY_HASH = '6bf647fd4101af9af8f8d05bbc45be42d16c8824eb15197abe47be23eb5d5330';
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
