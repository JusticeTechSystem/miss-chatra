// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9uHjxItsTKDa2yKLoBJkNTh8Rh38JBi/08AEonUbnwoHwOTCS7oYa4wPfMHn+EiWTXSdgOSMTwWrHknuSd0vCZFqPs2HPLrlfgE9PAOLdBWoHlEmVNnxJ8L7ja+bASYKy3tilRck9Dx7WKNIjfPIph7rN1EoLX3O8Gp+1mcr6OlCmcxm6DswnEuU5dCSmE6OKGoTbXkc4McA+BPkK/awK/hV8PCTBNXnC5rGJpLpZpMuYUR6dG1nhbj8uZQCU+ssIaZeVY45+NGfzIAcZBV4Mk7W+RPKknxCU0Bo6w0aDmM4KDctgQKLeKlz1i/QI/R61ECgxCJRW/Mzqjb5/JiMZtbYvcLRdIS5UM10fSbcC5CQ7l9jpNl1AkX+qBQbMRF2csX8381l2oZ1t2H67mbIazJIMRxIisyNpmzvQ6WPzZlEFACkJu/ILyiN6KCXYAeiMfYQ4x8zw4/CLIPrUpTwHUOFn1c4MJ7YQ5MH8nHe/YZQMA7KHdqanBPcQviEbx0Y2u+yGEg0wHvuvzK00TUeT0Y1hDREl1a7Wo9SJbADA4Q1WMVHUA++43Uh/mNeL6WNHFaJ9gIa5xrVDkOCHFxQcQJtSwfNQMC8wr1pLEOK46f31a8mFWc0yEZJy2vnfZu67UOInnvzLEskkMlXJSNiz3YJTfwPNOZLqBLCvmj2mU2w7UuMGYYhymnBkPDDbLzP9I1xTRFJUFBObHRh5IVYcANYcw6jXhJ7fmuistZy1HF7bJh+SP+9TrtBsRvjAdMPEmAv0ezqMfwIU/NOadW3SiF8hrl3ssnsnGmiapYnGXUeXaZC4kBKChgH/WwkcHWtBoypfKCOSt9+Gh9CeqbNSjGtcLFNrgj5nlbkZj2idWfDEgtomhih/xxZjo0E9IxlEqOYDM7m4dXU2wCvMYT46/q7ey5RB7GH2LK0xJUzQ99dFZcTBWmTocW3DE2pAviQ5B1ikVxcGCNP4GRq9E5kED2MAoIiDM++P/iyEQeKZl3zkgzPjRHbQb50gUdSjDwkfvMzBw==';
  const _INTEGRITY_HASH = '6c7aac382f7c992b683598ce1eb57738bd8cdaba4c9a953dd63f57942fd4c893';
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
