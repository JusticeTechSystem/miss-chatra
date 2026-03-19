// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1IArcnG+K5HC6yuMgV6eTVdER7tflSvWsrMCxAbGqF3JPbxbeUozC66FQHMwg7e/yRui6YZpIYaXpv305JUCJZDQcUQwiG3bxZuyREcvqwRCCfr4H2ZRLNPczmXggYz9rDonVVSQLGdZRuN68XKF3r85E5To3XH5cnTRQNowjiEAlmsWjAVuVDFtlwZKQJS1xOWN2MLFPIry0gH5D7jdty7WoiSJFkO+BMRLxHtITdDGyPWGtxdmeVnCCc7GbkOZhLs6cBonSC0GOVZZfFodO54DBMT9b6B8O812/YpSPZuSpYlkU+atQc9sCcKCxlMrOZH8smn1c2eiCYaxv0txHitIB3Bc/GyauWA4789JMXLDaeuxSGEIP8JAhNZLXyRkLeT0ZrZKHParrLeQn1YHN4hew/ksHKqorR5exXifdxZ/Kv1YACeic5Sbmu2JNQOhBp6nfqhPw9y3w996uoC6jFJF06SxKLZbNWu4gKEYSaXnGKhqfXqE7FXDDVqJRsOyKz3OUA/oR9Akc7eS42hGYITd2yt8DEtsw6R9psGF+KNdfYFExusohAzFMlRPns/bQlChctz1JjP1J5DW4INAogOoGABhmkv0qe4LccVXcejKX9MMzATb3JY7lOiQ1C4DwVhT47mmTT48bzHhQYfEeUZgiFcAJ2E86s2kykh9zKn0kjeNOwMMNsmpGISZJwsLOgHavbNdWXLj5PfXpeF1iWAC4kUNV/NjjnLlNtThduJK40Qk2k8VHT2gUke1R9wAlosMOhXXYyW5OfnwjX9/8K2ii6ggf8wNUpzggdGUFTrsOZD4xYih4Ru3N1DQdTa+46zj4cWFqTWEHe5p8UZhBNfUzknSwQI0i0faLUv06+RZSRdluZ26/GJDyS113RwT/XNVH86m+wNGgxMfnCOF1TSHunfpY7eOMPTwdbr1AVdzLuDgScLIqswOMJ/x/4SZEyBEvGWpSxMYX3gHkMuC6UVIbojLncZWMF5R40p4c40EJshcrhp9R44+iDPvctkb+SR++oJ/VqMkNXhKhkoCPiy6O64FthbPuTD9a14giWiLE6etrYFa016eY2kaxdr1I6WkxFXLsrxeOHGz8BFhUjt4g8hBndFOkptSQ46X90FQPA55QxLHw5UVMrqFjEIbVA9LC/NIbssw+TSUaVaLcFRAc7ASu8/nUp+QCu8ceq/L3htL2vM9QAjArEp564KSJmhbVb8hnVrfetv9g34RfHB+Hb3JubzvcA3CC58bkutk43aWobbO9MEWPEVbFfkx0JGvw4pL1Hy6zbthxaEjIlEx7Bup6IlGJjVDgIjb7cilzhggrP3RQ9F2nIxFbPbPKF4G0vCYRayw76/gHrVWBmufZD6XmZM1N6HB2LaoZ4/FhsJBPpUYx8tAdxCx0YSNqZQ=';
  const _INTEGRITY_HASH = '6c50435a76654f8d60089d6328e75e7edee6cb40ee867827964912708a5a257f';
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
