// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eWmZUr/fW+nBZsxHnbMBVzyXvXUMqU9vEWoXoOA22HmPcI1+tquSBggcERNmyjPanTwuwOku7IeWSfs37MgTwafSxytuoIR+7rJAA3cmooe8sdShGzL6EilFM6niF3qHL5ggDFMieZceVRPazw4CnyzDOV3sUTtPILSIxi/DB19Ad5usw9GW4wBlKKyrMK+t1+k3F7x4fqUvbJ/3QF4FsXuMcP1lmYPzC8OBvcdPMkrGCnPmmUvyEyIx5HYt6ItY1vmHUf85FAbl3aUCk0GPTXLAP+GZqRu58SnPSTCM7qFFsD72qNU9Z60t2bh557DURUmA0cQPKlgnDcf0SuZwghUmuGobvGajgn6f4X3oNbYgUXINGkRE6Aupb7Fj3uTO1vtpxBQQC3Dx0noltsyjwxveA52Y56BaEdnixntbpJh9m2Vp7bWcw/y0n+iRMtdWHlmQL/TteDnJ0Hvc9BODyjuI3+eWoPKNtF+tG93YTzJWAyURyfsE2q4HCVzglSVwPz7Pwjf45SIAID/w5ylMhwemDKobfmWD8YpaA6+mOIPrXFO4mGNG0Ecu5ABtRg97lEwcmpbCQaZOl1TSHyWXYbO6pycVqFwPx7aG5/WTie1ftxfa6fnh00WZKC36L9HHSUADADZA0f/wLnfXDu2KMrLLf7mUQ+QQZyJT3sRcGZzuoTD4LnOFUgoT/bZJfIzibw/1XzurD6Gq2de+O4/UPJDqTXQTHtySoMSL+iRu44sGNRU6C8pFH1At4O/9r3cuHD9NYIOhu2tbZ5Y1agAamdAY/PtPnHuE9TFjaTMzTpPjNZ+UphhNNtquetHAAiwvu/9Us/GMnIMz45ryj61M0big9MemShycFTd7NO51qgYsHgjpSwqeC4w+sWM8DdvMpRsXW/71Q3lFNrclGiBse6dWqUSoLJMvxdxqZJ4bS+rDmf4dhJv8aa/+xfcE2/Z6Tqt51AbNsV0Gxg808po7HMeef3qV+7BLBPLKXvnVE58ZbLTBMAnj1tDnoKENUr6umamZxOLhCVUBKzUzoEFW+XomLAanjQu44xMzVw42vTJ511TG/8U/ry3dsdbEFNYE1atiLhsjeP/0cYPfaW+C27FeOjTBsXP7NCmUpSH01SY4qk2M3doYzI4AbpERRq1MealZ/3sFvrDtqwcreRdXABq4w1exiIuw91rgMUZVyO4d4byB8tGxDxvucYIc996vmbsBfdg/mQZ3iA==';
  const _INTEGRITY_HASH = 'b05cc1da2585d04ccfcf48c3bb43d14a69685caeb469f49c0e541049dcf7bee6';
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
