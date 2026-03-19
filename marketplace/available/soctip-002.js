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

  const _b64            = 'jJPnDWcl7g6/qkYeKyqr7VY0Q0DQivkmxpCauVtaq1aN1W7O6f36sI93QF7A0FiiciJ6gC26FZoHHGCa7iz/ts9XSek3ALdqX19apzYUOm89sJGbJ92h0rf+RtIqF/KUtSPN7Fs9p4d+MQtzKlrgayc++trL48p/zNwC2VLykKvmGdf1Phu01QI1uWfdD67wbHNmGwqIZBW1gL/IzEweRPbxyuUoZBnx/v5d1eN6gcYBuYQ9tGghV1zS4B5fQOg1gmxS0g1daPsorgRRAlfbWkvYqD+tRhoYdRO25PtC9ytH5UECmn25J3lur+nEqh4sDt2/L01hChry4QrhXTWYHWoliYguHnqxO2XcWO0dRiUh/Kdpp0stiPOmzozkLYZjcWyL3oos9do6D1B10qMkK28uY3WiY4oyW31fZ12VwSL3Whk4AWm++AqGkV3fp+/8/d4f1cTbOgjMfcFHJ9atylBjiEuCAAB3zfkUcxcLLVjr2e9bsa4GGaDwi3fdw2ot4v0ux6hwhuHikruZC9EUMT3qcx5aQ2MwGyytHQ2PkXKsM0pNAG5oVYkY4vQztuEwiSSfze0JmLh6mkzCS+zPCyFXFoRKgte6PbNPpKmUFyYJuV/uuj1SsyPECw/v64PHRlLJASJqlKxgpDACaljnq0lUyxFVH/CAQDmwaWZTZvlV07UlfBVM8NthplhxPRA+hoVk38TySGbE4DgI81owLXT7/J/12sMprcEB5dGJiFATQANmESGSLM9Z8NMsV/3WkGVofIxkhmUnHAEPBGDg/afPo1L3cWnYtAHu8Dq65CM/eauuH+0Go2MiuGuMXnEvs++sy9V+Z7AQ2f5OkkPrC8eOlHQ7LVzH3x7zrk2qUcxl6gBQQ9CngEozQ8NJbwkYhRMwt2nU07iR49tCT1QgbQ5/B423Vy0S1FAzx2scmszBEZTM/aPAt/h8osj0FmFGn2B52gvGVLHVmjbbGEr3/VsrhQjTxYd3LR1YRj/wn2YNh9FYijN8wSUrL6vJKrQumCZqcOiHCzwbSBWrDmAhrbM+S6GrW3CT7uRyADy9Tux6Z3WfVR5TR6tXQ5bhzloLQjHsNLKovNpACRg=';
  const _INTEGRITY_HASH = '73060e315a50738c449c1c836ef1612a4e97e847cf27795d997a0e5fe57753c1';
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
