// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Fkm8JaMyHIdPyOSYJGDNvHWzHiKkz8TDkPFWX/C4hILmDk/2X8gu2FO5euBELV999EUFBiMev08fiWFpSkGi6xpJCP6D5hlHLFfRiPrQ4mPaDtuMLT3AnkkyJzKwTRkc2gbNMaEkeaPiL2AIbM+qXZiKM9KcH8vlFvDGRP4lW7b8MCYBywHKp2BRj/n+lJxMDdzyV2ToZ58eo/HWkkoNpCAuh1Sj25J0CxpAxFkR6PrvrVmrqGrHcJsoFIw6s11RY+MeMgF9r1C70tYfEbv1B/cjYn7rnuuWiAkvHvxmhtKleeXiN8r2IjufvhKlb068hxouT+NdQ/K38IXxOsXOlyZjXah/9dlxOj+499sE+PvV9ajQ71O77K8kpRkgO4S1B2lu1yrvaPZNAfIjDuJY8rdJtbySOmCg+GTjjiK/6lEkK33Iz7sEYQj/0uC6slFoMu/qOoj2j35FfRQyILet4cSS9A1j9oauB0LberaMqR1I3OdkIBGNmRG5GkKzfVprNocAgct+obUEMpP1LBl51QzkDYJTwDbSCSji/yrTQhqb7T/UE6CG5X6hd3lCV+1VR0AQDhDl9IeH5v4Pw/TA/eO4evLYb281hAIs92xtklSajq0P+eE4fOY7f+UNyBz1XKUBya/Q7ebHrFTyhG2sSOfSy7GAxWxvLG5SVte9FQFjMAgegvv3PHJygk6QdVEzu9mZEUiLEQjqJKXBtuCo35c5/J3nS/qEwOHFHRs=';
  const _INTEGRITY_HASH = 'c371a98a8536be3e24e6a6b19b0037c40cc72403e775123bdf94101e7e1ccdb4';
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
