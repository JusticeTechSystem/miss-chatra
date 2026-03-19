// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Os68KIbCQgaXzpK9nfExZz+/Cq6gJ7GEIMfrmn98gLer1Zu62Ab+qLwRNTclRwuMZFSpTeEVpyebdGi48Kw2VnfB/MC5XCVBWHZIeTMI4afhZXJNg8NCR5EH3+cW/5gSqR9vs+lsA5v9sShe1v/m90/ozMCozjtz+8aLIE/HgiEwEevULW2UsevAGpXm4iWSGYzwCrjwZGFnIzrjoke8YUVrGoqjX5yhuwffo2u6gCbW0ZL7TDpExFc9OvSilkQ787GOf9Nn9yQIVgxm4v1Pn5EKkcCqNfUNOQJqh9hUjG4jqW7lgEiIt8EEIL/B+y/Ct8O5IEX4zk9FfjxSDz/WD4OHpSuID83aKWygezgJEC64F7AXVVZin0XxGrQIYi0ax6pos3eeRD5c29PdLAOXbaiZBSare4Id1Z9MKhBg4Xfj7TSPl75+sQd5ltKsURva6J2OQKdTmcKw/AXpCQmuG0zZZs02qrn1oxMu/evPxV4O6pFGtCidLZ2D+LL/KO5lzzwpt90Cc4ROU/etxufVZJZJq9l70GWcN4UmsxjLpwAfsaNHCu51Tie2dDHVxfFnjUVS+X1hboEFsGVsQ/jEdKHQBCEFCxQj0EKFQvCSA+6MPD0AmEvDLf4+2Teh6QlHX5oO';
  const _INTEGRITY_HASH = '6e40032dfbe3357acba9442af4e3ea33bf706e332a3ab08bc082cc72803477c3';
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
