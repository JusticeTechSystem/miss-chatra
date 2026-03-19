// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XXs9QMLKsiAIQn6tkKrZKU4EKBoYYjiPOGmnhL92fwlxhJOAjUEw3CiVs7NJ7Ed6Mm/jpFgn3FYJcsKyy4g7YNpj/AzrKO5Jkc1F1rtC3Hx9qOd3HzLPgITmMFZHAiq63vVMAB6Bob+m7bnqmpKGzfMgen5STh2rEXWKz6wfldQkjkDl+38FkcAZFwcjh4sg3+h8S7Yn5iLq83/Wz+/xlFBLb9d4VbExQJZOaniNC3BFWSNFC7cwKO9daB2YrRrlii3dLuuzDYob9g0HtQ5+w4b7Vr8Wu887rqprVTSDdIpENHLO5fHNNlDg4ZdJvL39GNhBd8GWbfhXmDy6kGl7ucpee5jX1mE4iRDnOdFc1X5JCX8L528TiLnqu0/k0YpHT4k5P+yW1wN7/fT9G+QgUcqsdaasWlD0Uol9jikMy5800iww6ls2K8GxQWiGmdEAHh8HTcOUSfFunZNxVJMqlMbeiyY2fgcvGPZxB3YUjV4mZVdtio546olxHhIbjGI85Qfb+NhBbDa8EzQYtAgbOQgHKOT4Jb7TmMU0cgBcm6435Sdy0UqaXrrsffJlr0Ojiia9Cpuo30iguKd7MVUEDvR2xBDrwus/7fPEMyXC0u7eJgvvu7VyaSFp2M9F36uNC5KpiJV2qFzhmgCK/nORz8LjaTasSbfzdxAZd/2GLcI515mj4sAuJMaDbgLxhGaWKUQ9trKd6DqIqXTaDKyMMKHrtTTAZWNHtygsBB7aAJgqd4Rf68D2sCwTkLavZPlaZIk8fDXA9IWd8maCwvLOQVAVtqwYPbgcgUS5Tc3sGIZz3UP9xsZeIItNCB4g7X9lx7kB0IfdduQxVDDTiSuCPqhbOl6mxEAIssySF8HrAoUg2TJJ7yb4fyYbQRN8hZ+UnGFvWUZxO3AYnmutLPn0I6oly6Ef+xvl2fwmC54SL8fWUWnJaL+vrWBWf7rnXSK016E3mXCOIUzbe7es2YTIF/fLPiJfVaXxTQtPTdn4dZ3grob76HxpuceBsuRRe/umOYGqA339LgmFfM52n6fjzSch6lVTDx6xPJI5PSYsRnuf/s1SuV/POioO1PwufhndqD8qNwsat3nCPgw=';
  const _INTEGRITY_HASH = '37021507807bb38d2fb54560ca8f581395d4598ecaaa675caa47237d18902853';
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
