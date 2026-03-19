// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z9rvl2glfSpo7S9LNju1iyW+hkCNJhnbtdsR2NXCIVKGX4FH0gNowVOtz81R/5q98el9k2TQFlEnCLhWrff41GIiqQMcAfdzBrTNTrKuQ0IuHI6J/6nQika1HqGq0Di35MTxS0kjnqpZJF3gqHOIgrhvrQni6ItbIaQOWoyPrCuXKnzSSWeFstIRN4bLnaz4sOe0Y1ZmcAF7hRAMC4nx1yHchzrsKtEOPLhOtDkIS+WXBb0D1KGVPFT5umtenKdKYxafmUecrD3m4f02aGzy9p5929ldksgGlhDQF69r6U1AoKvRPIHNHkCD1Xbir1jKSJHuO7LNZbvqC0IfTV0ZQx89Tcke6T4asxJ6TVT0GukuPhoQkwpCi22cbSwMLRlora93G/yf+T1rOzvhNhSA/FhkhoU39OefchPieEU4sE/I/sP6ihAXT0zFJ2COyuGIi6Dnp22suVoNQaR8j+NGrjYQMYwzMaZsjtUKVBY7pqHSgUa0EQq4aBzhHxks9j+fmzI0KXLqON0lL85gCzVDLYSk5HNIPxSi8AI1qaw1mGriEdHpXzUwosFzmpg+lBKxIrYAWEb4rd5sO35wT2YniblRL16F6WWvFiieFAkaveGnmTzK054RAhQ5fQ+DiIz+CCZVnzAxtr6Gw7HBE9+wQZ8j9oL7uOquUYvDJvK8Mw+mAJmU635vE8gaZKvPlvDiCqyyQ2WxkxgsfhLjIc+T259JAgKdIpspn/KVnxsP69nrOsQ+kyICwuIOSg4GuPBtBoc4+xqQYFvghks6qcBnWR/9ht3zrkgOXkvouSnu7upZH26kMKS/M+XXoJxbijRw6CO2cd3J9F6Y9aPVI2LeTkJjZ0aGJZM8asMMPEIx6HVJcFbbumfg6ha43t766E3rcJ4Rr+XmiPGfwhqE9bSmDMntpzaQ2atmhfl934WOVmexlMIc47sd5+L+VmYhGm1oLBFJ9OKDktV0M3I6QQuR4vpgkXLwhnP0B1Tt2Fg4lBwcyDdnqIfdy3HVWYC3/ETelOc06nlD4Wmm9IxvDfArv8aflC+dsQdbxB5LODIiAfoLIftuvmhOin2rdcncDNZT+hbr0yylXQR59ZMvEICV8AEr88gSMN2X9OkGCqhzhOv0iGDc86IW6eu2aY/dm/JMLBXC4CD+iVaGVMHYpEFln3BthaqC6FqiEy2DGRlMNf1jbzuKbgInKJB7KK47Nd9NHqQfc2uaX1ogA8M5TUOPjENg';
  const _INTEGRITY_HASH = '77b05217ebc4687c7e2cc0d004c4881b7e27e7f9920cea9389e522597fbb50d5';
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
