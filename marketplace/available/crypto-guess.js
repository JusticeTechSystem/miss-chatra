// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Pg28iJkmiFkBfL2HQJh5bwtnplZhazA/AW7A2Q/RFsqfRisthYlTWECl3pizcrnWe6Xi5/pl10j4FI2X72wql1u8l3eooIl2/c3vuMx2lVThAKGzU0YOHbQV8ye7zNvcK4O6Y/AMuVV2j90m/ZtWEOhP2Lq1PtKxUuh3IJA1Bq8t9lIWmoywoqkM7Ku4+7EjTzOE9rbPoHv7a8hdX8McfINm3mqAfOOgt8YaRZMOsooMW98rcQSeaE49MuZhvnxpnyABmTwpcwTPJLfgjGOMKMemzWKVi7X+aNS9y07U8Q8sDGnHSwWqirK9XSBNKh0Ao/xTj/QFPBefWqPc2n3wb/xNA48uCDeNeqCkfSLzmpe0CWklo23Hfb5EsrYmlmqkWac+g3NdQ/r17qv9/1Dzum2GZqMgnkh6k0oWiymlPFHu1TiizIHeE7Zg/TZeRDb9pJiYe12cl3YkSuzoZ+9rh5MIqPfgKf7JSfmYiDUHxN5Ws6D8o9reN5GYdBu1LLRYeDV1EWBo9o4qRIXHFEo06klW39IEIrrzuZM+nGHmmgtDEZ5GyFRJkuHwN18tabvpgXeGlraTuwg8mNX2MOUKUI3A0nyUadSvjMhBnc2OJyc5LYLKViGQ4XGGvJsDSF+Haa/j2LwGnBlO0ZH7HFW84cAMEqEylqpYQSQQsuRFHpQetSNWDweHcYf7Aodhpi/sOPPWZmqUxLaiCdiibUDWS/rE+6c1ZhI94kBcx2IjdxOi/KGCf5ZlseEoZ4ZflZyWT/Q7apfTP0SBC4PutsrbceNFB4KKdq5cSIyRoSRLJF44fmMzR4h3k2oiGyHDEKl3FcXSLvwl4c6A8MSkxDZ+DkZz9UUF8XpT6FyAg1kT36b7kK0ussye3ZN903zW4MTL3iwBUyru7NmIYHNterVDEoeCgDJciPlgrxmZWakYL0rYz3FKYxa3kDmLIa4+B4IG1AET+0/PLabg9Cos+XjN9JwrMz/fitF9kr6lLMW263/epj9Jxkv9jFssuk2uzs6NLpaaSeVT1hqgos1UEgZ82VgEQnAZlKffpKkIHb2KIQ5CuM6WTTxO7LST1mVHdTG+sGa+kZstVV8W5+v35B/zAQCSCF7MF8J1QzPVgXSvbbakDpi30VSkPQrjd/JRdjMdjen4ezG9lzLbTyKmqveUOmL5SZUpSde10pJmg9WsOtZ2dxC5dNDHP3ZCEFsrmpuGWLj/Nq4K6kEQqMonKNFZWW2lm2l1+rYyTWAn/bMI9/L7pS6eHlnUMxdhjjk10PZ74U2rRe6EBouf2pvJb3PuxcFhQ5XU/etpA5uH/CTYQmz1Qk6K43rL/WWLhOYNHHSoAxm4u9GqYngE32QkX4H7K/tvzNroMx2CuGphP5M22z5+PpIfyQmEW/6VkUOxx92zW2iGUVinhKsEtyybkFls5gHt+2MV/st++wi83ZSHzcWozTuF60e0TBKQH5g8P/iYiMi4f6T1GLxZXi39aMzhd4k1G7KU0XDaEwdBcqBiY7xD2SCLMnuiegASzELXZTkzZNYDwEcsRA2AQ8neNR56HGQiAXKzhkpGI3SpQKnq0yDNh52tov2mNewzD3v8+d7Rva3icCUnpM340WyQd2Gb1jJ8AYh6GJCiuJIG0eaGg9HeacTQZjKicVYvYFbEDf6HrB6gyuWS1Sl66pRfXhy8HGPjyTuNaokL781PAUdEfpO/twkv4SxlGdezNeVPc6fo+/PjwIqqxfVPeZUotZhOZQ68PdMOR//NobQNQh82BxUSahOeLVi4rvFqG51mcLX5RYg9phM=';
  const _INTEGRITY_HASH = 'a6d4352909b4b8d12f49d10fc71e56fec2cde8998d9855508dfaf7eae44a8733';
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
