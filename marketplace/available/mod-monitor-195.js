// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AZnMW0n9SkwZB+nkmyXe55FCBVtwLm6Q5c050EoAVwOtF/4DurbCTMCGj4ftO9K8clgDVsgtdL3eEioUlzrfAwDzAsepGua4ZgQaOw+HlhZZFzB1J8uJFUfYZmgm1/eL53j2cdJ7YJY6CAMp9/KpEIkRf6+/61b7+jo9RnIT+NfJivpGRwepW47DWXzJxGfYInL07+xD55BYa7gp6DF5HMZwFK1VXTvoO7mcfrshObyY1t3zrWsM8P7lq2m68Xa/+DfHMNSxbXHSydqyrd61lxY0mYAkfqpcXH8buGur0bZr7q7n6IcIK3jL/T/o0CEe1pOIGFt25i2Ge5POQBSMwFY/1YU0J93sGwiPnu+jwyavVi1KpLLdnLJ4M2BS1sLMxw83/5x9iGMFi/pJKMer9IGcC36GBpnR84Xr2TrKOAv3Gglk7vbkf0YzjP4lPWBMyKL0yohuWYpodGU7+f4N/ZkbWJxoDXlbeavGhoNncMMY0UdGXe8ehW5BN254qYVWKVRJ8bdRAyJYW1xFUqM3bacywxFsiHlK87JVy86Bg6wXA6Bkaj+8W3/hkPpBbj3oFLBfx2pyFEAP/rgrii82OIKzrz+7caWL+90jaAffpl0p7ctMVwCVvMDP0zBxeAXKR92RV0dOWaSdXeXTZ/RDx7NsMQECsZpcAhuxDkNac2fOxuTYJsEREpKu+2m1Nf4VOy4MTkoO+iCmg9VJ46AVlItyUVTHVqTJYKw5gRZb8xvjhl4ZInLE/OvUr0CInC5bOM1+27p4KfjWgXv9sgrtnEf1Q4CxR6a6o5d3WMOxwxpCvTSx17Fp+TtWlxmysn7K0kvdRaPUIf67Iqljd+mda0EgGJB+iAPxgH18WIJffAgvS3k+zo6BskHEE9Cyowl9o55uSSaJD7ok41mTzfnO2SWB7mtsJ3JP3zHzYlaha5zGSPbDTL2MICDmHg2JdCJPRPWcfb0ts0L0yusEf/Ro3Fl295TcZm4foli4q7ulI0pfbKlpNcfXTTBsokpNEjc+Lc3+tEPxp9oW4Vvfo1+QOZ6PezV05HRvYzJj3iKcUVtOcDR6oeF/+IZ0RklhTCfhTP444wGHggHKbva/bJxnPQB7uXKPJT0Lz6dX6ksKtHkxrF+ysm7bmWy+4AVrA5kkwgAGEXR53YLbkN1D2Rm2ZG0AIJb8OlPdwIG7SbIJUjompHbEAJv67wddJskZzYqpi8haYGM59aROw9pc31RDa47WrRaIYAp/gPHHnEJvAocUC64R5L6xQGYEwkEl+EXlhUYUt3s4cowcYb05QDl8uzABYwfjouaiMlfX8K50m5eLF2ry+3YmGvyaaUWX2NtAJkYKiPpfxYa7LYw2BjIkgL0/VfIlUF05CL2gX/tp4Gk5/8zQYadiQ+tYDPDO6YJXFDw=';
  const _INTEGRITY_HASH = '18d1479a5cc78dd099f74ee15b18ae26900f80bbae7b3d7f9c7427dd8178d362';
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
