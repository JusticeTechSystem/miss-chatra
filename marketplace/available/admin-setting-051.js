// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A/oS9NzPsQV4Iw+MHW/MFpq+MHOFnVPqtP8KWsBGwLGOTFMcG4nVL1RayyhiayzFMZE5aRpOWLIHaEZMSk3x3jctyppsvyWwV2AwAJn8DurUxBCEAFssbazhc58QOcGQVzEu3aBKb3iNeq9VHYTdaxFZokZw216CzKUMn3CnAurRJe3/yubvH0wf/oyiTDxg6Qk/aL8gV05ahcSYK7skkkCzvHwRSNrTUPsiINVjiRHc9ViqX8FMEXUnPsOA0mc635PgXzj3wnBTYAWJvF1AORDhVJxOP4AeLVxUoA1v2ovCeefM7P3rTLCWvKFrQ/EOysNSNg13OyRRxwfzAXKiuighylLIl5WlOqgyh2Dy0abRnuyYKnE3lJ9wG4Lwm998RM4zrxCeLSFkN30HpB+/pAk1HDX8V5ZoJVeUnxLVGCoAiptlIrNO6Hih7A7EPnmTq3tf9b0Z6W27r+95W/W3VIIzrhw6LTqG01WQSgjerhV0nsFAQYVphiKSEowPPLiK/AJH6UoUCkjFnhcnt4PfWBhzyDaHHq1IOZuXUgA3P5UPKbE4ZnRn7K4yjZUtOMk7QEQmVH6SS185rwiTy4LOm9jvxNaVb3S3Xr89eZb/WhjQ5dnS/sG4ic70ROmd62OlI2KhSi6imN04v2f6a/LkzVb042u+dz76pKCUziGM6GSnIVDoayhWPcCVs6MNAlCWfjLGlLzr45QXHXZAnJGi95IV0YVIYhMJ3E8rTDfrEhAWQCCfV2D41tXVLY9DtwPRwXOZWJdA8msYub8ysxA3TlsLh9MEr3pFsPAQ080RutsQWxdSTRAE4Hw/27S+DKU7Z20WmI0TgJW6koi8jbXLCmcR6SgneSsydw/h+3IUEsQkdtdZVWjFLxQdT8YsjSW1fpQNXJyPrp4Fdm7C0Io7XVosGiC8JB1Wh/EUtlN+aU58G05uhtTEbEaKZ1nAb0869N5telGGO8s6r2QDUT7jCr5NjbGDGZyyV/g+1hrFwZjtqNe9tddH72fCc/Y4VRwnP2zLQg==';
  const _INTEGRITY_HASH = '3c4527ef5472700c83bb931fba39e11dd27af3ce608d3315b211327e576eeb78';
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
