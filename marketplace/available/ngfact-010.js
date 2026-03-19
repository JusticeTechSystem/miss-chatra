// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jedIBhHb9AJBs3X4DdEGIhhyz1bRWBA6Y4ROsezi4MBaAQAoyaJ5lakvS6qPmcBSFvEmykpeb89Ml/rHEe8R2k2e/m+lzpklSO0X488x/jhbbkPJQKwtWijMY3FUBHjF+N837f0Ko1jqcs6+LN+4FQGks52pqs+P3KYICK+1IxbZb1EnON220aGRmJFGblHCNdQ4481CTChEKYtZGUczuSDpAVDRdGbHWDL7ekl1Q08HZoxUlm99xuAyFeMiKzyMchk3P2pcitN6ZmiEsgxJ/DlCx7vYFDTew6B11MIaSf30ErSQJjuRJ4NSxNjuu9JGLDJ/uSHVSvcPSADmk6VTev0UZMJwNapVCESkZUeAQvDfkVwJr2/vFdNHn2yQMLRBuHuGtAIbL0+5MBvmQziXJxkRRwRFmv0Gy70ormWKOZITzT6vZlxSR+tA+C3UESd8fs8IuFA8QELYreKpwjjXIPJeozZBwyfBBKO3LpvrJsNtV83CtsPyZbKKtC/ILXZC/+swOoreiGcX9kVOQx5c9SuDHr0BMvysfPEfcTJuQNTFqhTEmY7KDdRKrYVR6IQ2oofdkncQvQm82WBbkW7Vb+lmxA8DCfED6hbuIsEu4RAzHKPEehiok2vWc2juk4LuswLrqy1+p5MuImIfudRcQ/cXZ5SHBnMX3Cs0Q75FyJtl52lnwn7AooHU+Ze/9favzaaxCDYKN+0=';
  const _INTEGRITY_HASH = 'a90d2a3d3378adb1686888ca61d6d90d8a504fea71167967c98d3d8e4e7ccdb9';
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
