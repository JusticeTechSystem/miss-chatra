// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vMopKhSFgoDfCeNa1PprBmfMCYtXenfOwTrIsRJsgggidmhlrppagYOH96XwHwFUtJqAenQl6MoyvRcDHV8tiLqYw2duf2sjLRTgEYHAzOcWlx+TTkfqav4CSkLjJqlMevXxr/IHxT2GuhpJ+YmDE/YX/OeX/MWuVqmR71C8aXahejEE9f1nS2JtNoi+jIH8J4mz7DhF93SI35Sxg6pVuQVPK2V0N+IQhzLPoSNovLO4fuRg49GF+4cmG+la1WK0jKGvsgXxSz8enSnxDdA+e6li97oiYogJjUbhGWPr/WDfXZckFS1zDIsL029brCjf5kUCK5GRPtlktpuqloHPP8q+PknsWv9Tp+gD9Kf1mD1EWD9h7/mcyw2kQxbParrV8o3EobPH3vra1Jp7Ra/lIREaHfCZyS5YDm9b/IElVJUvfmykzre9S0WMe/Adj8Z64LkMGbKT/3JvliC3RV8cIWVPEtb/aEzTvt9pPFeU1xvtxpJVDn0VXV8AKCMukUOqOI4o6VT/QbUkwf2pof/Y1Uep+SalZS2GTlswnX2+rU34SlP4NFGKRewN1R7OfLOE966EUi//zL3J/M9fVRfrMq6Ga8PlD6RJLT8zqo9cfNidfpVFwt0/1Vg/sEJaZYRuVY1w5oou8gUaquRHvDKAD9x2O3jPDnWLuczCGDqw9YVkb98I0yXodk3s1dYxxDmlercq1IM35xBhJPahEzyPswsPjUgT01L+0kufjfU0wEfP04jSXZs6u3UcBtrrUJ6l7RcbSeef2iND9mYW+18EqlhTqf30QvkIaz6wgzA1/EfsEi2X3+ke7KP9pezX9r5a3v0/Yvc0ZqVto5y8tDhdBvkTCpnuXCzWjcyWiR2rk08cP6IHFt56Ua17KqjcDnTkw+xcBxJXV7mQejVWTW+xnxNXMGW4GdxWxa26LEVyW6H7QI66IutfZcxrFETfRXVf8/Z0MkzlxFqljscKXbFULwMGo6QiznGN+dQkTR+PuHGN7Euqqlg=';
  const _INTEGRITY_HASH = '1174bda275069af142fafc2b49b679371554ef45c16b4fec4952148664c24844';
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
