// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Qf/8U62IILexu8mS2FbyuMQIUineiUfYHlN3TkQfFjjYJEUjbMo3dvOjUR6MBuvpbGfHD8OZ4U3RG+6CreohsU5Uw2AyiTDYaHHieKseX51p0KzV38udU1ihHMuyBioeMwECDx709O/tkrIzdOx7RY61OQ2Y4MHmIinBev3iiQtTPcskp3PSn8BTJv1Jcv1CawgBT2XpOZTBeYWTWygcNgDf5VQFLMgnDQhNJJK2RMIzBge4J+vhKrznoJCgs5UOcVA36OEPQTerSt6FC0rx6sQ/in8ax7G3HYOwnT7EzrPB5WQS2z2CQ6RTDoN8hR5Rxim4nGorurmKgQXGsddpmA5+Ukfw7u401HkkI02dV4Afps3e+Ba/k0M0y2DGahMreGEIJsLlz1M801RI5A/DlkcFRQ9UlChWMAxDKCiSgUJnAdW8dDTuA7OPtdQ9TNn0IkWA4Z2Yqhdq+YvlQsVuITvsASSV00v6GWLQNau6zd9ffL40+xsmKP3yxQuijKono5cTSVukUrdfK3fYuBeWtQxup9jYhw3+yb40qgH4rcOYuyvEPfSMeVHGH1PlQNhj10uYRWmen+CSGSW9l/UzJs0kC3EsHdW0+19CG9p3xzqke+k1NFsSPHieitCkknSauTTZdr9gTy7Y8gD29GIf38z2RbsmUVvpc3IxVYo4NDDnWLmWrJbRI6oxvnr7hqHQWuzK8f2ru71e1g77tCbnMI14NNkMeXIrskcjVGzHCEW/XFe8oZBhy+2ZPi2Co1kaj4WJrC56k7BN1yYwvhYZqvUuf2tIa4lKkFlP16LVL1pfgHbfnaddvJPy9HehhTUZY6E6L6EKUcnjkjxXk5l45K78n1kFgb+Q9dk7jtnXJvbZaZKcFjso+SWwKrUcEkG5yjoYo4c+2pB3KqPdToQkrea0stR7IWwZeLvapP1iKoYfVtnnNCAMK6TNFI20wL3oO33bKpN1gEAYfmlLB9Mn9Y1xg1wPybRDNnnbwdlDsMA64QFVqAlh0UQ21QpT6y5RjoJxRuBHFnV4T5nkHajMhN1gPwL0M7P1brEOHha3WAkzHbRl58ryNQKSbomzVZL3V6SeGwlG5VpPpqDocfgxc+/e6jAxc6KNHPSzpvq1OCTlNCTJbQUdfgoV/L0lvVHoaZdWNHBjTndhX0EIGQoK1YmDyY8+yQiPyVD75BfPmXY4TpveU3wLJTLomORJULXo0nitFCtW4lR+vHHWGHrcmk7hf4mLbGA+yMUJ8BakuhtX1GkCNamhMuumhVGQTKE3CetHUs8JRWBcCdrfsrUKyZZ3VPt3Bz7IrUVxokwCMrY2cEuqeXCPZVZkF06QHq7cV3SuucEKTzW3lm21BdvC1cHCZ8QRW3Wa2n7V0Ely3hruc8o+kWmzgHjDStNOAh1OpnGIsWq929XggDYB';
  const _INTEGRITY_HASH = 'fe7420f982a12194ea1473fcf35747f500d801504c5d3b0b88cee9f0d81ecd8e';
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
