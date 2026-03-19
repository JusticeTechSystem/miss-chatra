// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kLpXUzWK/zr9CH0jZ5Y8WBVEkB0NK7zKWuCROdn7op5KMDxfj0lGcHumhRHvun4wZ/XhvewmtBYRdHC6mjzLY7Aw69uYWrHi1SpEsLpVZXSpaJAbz9XXyCpJ2Xe29xiGi6GjtWiaPW0KfW3OsTgnqzk4bOgfCgEa18q5AuuDoNXIq6CoECNmUnHE5hvR2lTmb5PGThhzrLoyrUh6IBIij85cqmandtwej2ETrJxsPl1iDTNXx6l9nb2le/S067e3jmdm6jL0Dd0umRs2R4nxVFKTkICPMYMbYCXQIjd3LYokDZp1M5ZM/yU+vOHvGwPjaqzUUc3dei2cyC80bes6ya84+y5xgqgF17EgJa1kUbxRIj6zoyn8mZoCKpcV0URh6tFQmhLBFJZEIhQkxxSlRSEYkIJcbLoL3kG2cm27GqPjE0D4/nBlFShyapL0jUBInJe/mWYHtpO4SoG9a5P9fs9ysRjkMtCyc3tbOz4HXPan00eWrD9PUz4O6OtCjEfWjI3btXp/oo0tcj430pQpDt07YiLQM2i8IVokBV59IHEnOpbUYd0FiEAN57hKTGmKWeoH2yiJDvN1ZG/xi3SPWfRe918xk3++ve1VeHyTxkVsoP4ttfpse06m/IfFbCXb/xhUkM4w83XW4Vf2/zGmWNdywINg3YS1Eoxmvxye5QIuG4mAQs+xxI0R3HFOcpgG/IkFr440ZjPajKE749Xk2w3TXPZZ7G53/k4t6/RCDBPJ5DfduJC9msS4gT0fpPg6vTsAL9rg3wBOcXz62AI6thKkOK2UnPOv4fD0TClPMAK09tJhtNNE3iOq0nI8PrrD9Q9x3Y4QMZiLw9xppgsxQoNCagb/LlnNPC6kSjeXBf0nbhgMbdguPztpvKwmM8bH6CV5zsRkwgajNlUMK7/ccTXnmDgL2Yo0fHG2scnTgsinzYJkQQHMFveaflg9h6RXZjQq47jl5SWVFKjN3OTZHE80pX2G6jAK7x4EuDRrZdYVUtSofZJuT4TGPXtw/1jPZTk2fsb+f+MdvcMmEULSegURSx31JPJMd9optEOaM0lL3zDimdWzZZTXNGbON4uLAEy6tXNgFEZePRgUnkKBZpjtuLVy7pL1MgGMXw5tfXpqbhymCRvvPnNdm3Rqm8EVOQ8yf81bFGGs3wpwi1XTvmIij81eqqHQY0uFqltL2XYUZgimgoUfcCmxqjsImpHmIA==';
  const _INTEGRITY_HASH = '6555d7e167e2052e2e20d7e651b6b76413871992ba2a9d2cc52b05301c7a2188';
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
