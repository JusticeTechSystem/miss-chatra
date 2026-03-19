// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6JuqQDs1PcO6JVvl+DdTSlQhS+5gPBOVWkDHZm1R7fa6i3fUgpnaWg1o/l3oE6IaoLUvs7H59A4Pq5xurY53UmO59dRvYj4PJgxIeAXIoY0jk9KNH7ATTsQjpWsveOzKa8PX7eKwOrNoazdRqwzq/YMCk+iG9G4fl3ZmGzxfUIiqnKDGavInmhOLv2vM/B8xK2FfFP4+jkEm8Fq6ZPzdw9ppH2O2JWsTPXA4q6/w0wN9O4akaXS5+0hgSGce0w570g5qNKKql8aoupXBkV8L+4Siv4iOb2Qup960o95nRzHvKFakpk6vwvyzZmGi2zsRE7ipz0t6yGaxdOZOzBDW10bD5JJk1rUpzBu6mWUIp+OGg4hRBMuittH/kvQ4TCBKXW9TX+kyME7/zj1PfsAtSqCycl709RZlkdPad838Bbf8mbmH70KYfWESOn/iVsTTtbW2r5BDYMks519XPAICBxLDop+6qxOnKKIWjOzGa+iYysw/k/wpsvm6IWD54Fp9vy1+dsk0T6Di6hogiEV8HPZaO2EnovgOmGMHEjwhfmzyZor+/juOZcso/fXQvDMTyXV0et64h0MHLnz9apmRpHFAgieD5/1mwuLe5kTUSQ6srxdNOR+WzqZtaueu2VeoNE1Zi5FKLmhlGQzaRk1IVAdRpp5crtUKVOhaAzg7g2VJkeV94HWfXCPYfpJ3PILg2UjaVi3f+QFF4TaWN8DwYo5b2zNM5ZIyBoNtSPvGOR67wal0rcn2BfBh+dCj7XRyHTJAuNNOKHNXC86xcVY119sBHlrKkTbmMapPwsxXm0511gb8gXPdQk5Tgqlm/ED9cWoufjb2OlWtkZlLFK+Tq613aHB/DtLDNzJHHvAh9mZdXLlS/2dEkkaC81mDZIIk2wxYWbozgjhkcbAyTYxSgPLTBE2zTD7WBe5oLh5zAJHD1LNYbcsW1bBaY2aCzmEzjuB0f/hB40uWh0pay0VyYIGDgkzHcy766C0fS0uTRwtCSKCrbfcK4l4kTe8Qod8d7M7awpde/9XAqGWquyd+nFx5gB/EFSAMGiyGdVg+IYXBj44vX6dlLpB406nAYmSsNL4JD0jGpfTwjj4JRZwyKv7+okS/sAwL129B4H61PfQRpyCizdGueAiNlW3G/7W9kFc5qFOsfuNkJl544msSdtMv9qq+vMAhFDYL2oM0X1VRYOGdd0Jq8eWQsN1OLKOKpgTnK99MewoIN8CzkkZg6YJdzn3FG9vlsT/G4GEr5+2fiEL0uoxtU7b1Nf06/3EzjopQjLJ3Q+Vf2Nojs446P7ZtubZJSc6VBRd34QIVytrLi0dPt8eMZdkx9/rmERQgIk2LOaC/dePX';
  const _INTEGRITY_HASH = '5b227d75ba10b58f7ae15d962eaceb49d835cbab0292f04e5531241f796c19c0';
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
