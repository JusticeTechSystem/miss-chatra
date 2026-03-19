// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tOzLtM2e4EBQg896+vqxlsWxODNIVe8YsBqKarat/wDCg2+ILnjr6s7jCfwIiDU2eMaNoAYYbR6AcmTFKZQM6pUyzB10zRt8rqr3GNtrTUytf/fl52/fI5X1BOY16+chlh0paeMvVqT92qOy2I2EeqnZq3SCiMqi4EgUOfkHIXuuoym020eSFaT3hFY8rYj9sKMt7nMR/MsjWBUQ6kII6e4iYxo9Pmmip497BE765ZHEHw/Y+wAm8j7/gu09tX4U+y+F8JzPEMiKAl5/rLN2S2AyP9Mr7ohNk09lyooH62v2bPRJqWsK14Qd1Y+58gu04eb8WwpOp7hrZDS01ym7+ZLwAgZAV+hfZSbhM5IFGZLXJ3hhjj8+nHcQx6QeI/ZbM3cwsNcqxwLlYt+Oqhti4w3Pyh75z8OrjiBdKHetbbWyNTsVd122spW2nSkJB4eJkffl+H0K+Rsq/tUL5ZzlCJDdFuR3y1VUaUUV0CU6PRNeicvckv7jKLU1kjxFuc8ZbTmDjdmyU4CmqxQCqCAYcWxylEc7N2jN89xyN/7Vzp09jnhpUtNJMOD+8GTp99mPzYQIacbO/PLGg/X+hqd2U4lEecgnEAUeHvrAnDXQHxUN6LZo1F7gGDWtUqplUr2Ths0ame9bta0qOupWTstrQ6VymJil2tmiuBSm89HslwQFQuZRmxP5YzGFDK8Rp0A4C350WQvaxNFGrGU9B4JyZMmNcjm8Fk8kRDfO/N/J44+rYA0DFf8HMfhruf8O2tDEyUus3aM9JIV+5B8D9RnHob9+0UzclSb+UGM5UsDoRuoUDGLO/u6ttmpOeRPdzaQZ1qP73FbEWbx4og+PX0sfLi1rbQXZ17l2Zbv0qWkOeABgW9PAercAL6LeqlqWM3KlitGw14fWpPxnzH6FGWAUb6p9rCB+E2PKbYwyeI2ItCFGmVAeJ0+wzfJHYbJtfIeG/BqjrRA8PPEjublygexmUX5rIdIOPNgP1IkLra9/nn5dFjPHuqSqPb4=';
  const _INTEGRITY_HASH = 'a6ad82d7b84c3e49742ca3b277924083f6b1ad07f1fe105b55f4743cfa9aa329';
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
