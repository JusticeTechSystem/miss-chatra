// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NZLP84/eK6nOvo7lJIhEKtkRbssdV8YDeNbj06a121CYghNOv+T8hnO7Wk2ACS+Q70XEH8xetFgyWh6IlS2Zd1hpATvkYzyK/EpQr+4kKMyxfrXPHmTGDzPvfCEiS/C0dkx+wy9NoKpiVxUE6y/IsNI76nxFJZR4BQjVCg1Cc2Ig5+97JfRRmfEV8vio9iD46H8gM61RCY3HTvoEceVAZgq8wdEiPWqPShkqTgn/pAp2rRs6Cs4+B5Mp0AHfrEcGpfy8nq3dTO1Ij5d0kBavTyQcdkhPrOQMIcCiCGGokJV376I145DxYtSQ8cXPmNG/fBYk88DoIJZ5/P6die/zaF57iuq9aH1B27LBV7CCBM3JWl9H3z/7PmqfCoAo/T4rxlSFTPuKIwD+lsrL2JDGyLJynoCURQVlRYv1UIao8EkfEHBqpFErj/JHVg52X2cg/u4oslmcDRyluFhOWiBp7/50X8J9sBMkWxA8p5Y8W/zhfY4L84Y4kV3WFJSu+uR38pWSHx2K3U/NkBC1vqNSTG0ue8c+X3Yi7s/j+k0/0PGVgpy4M8feRdQVTjHL6lyQOoh4OKd8R0LYKpIuihnuTGR5DsF/laHn9sR2oL3Ynbh7ZtYoVZcNOuQnhcnKfFqr8doAT8SOxIdwyttS7+GWhi2fmyLASJ7Hb1OyCdiMLj5X/ZtKsqfjTYeTRp7wcOdddVB/oKTDKtIifgWWpTT+liTS3DUPK4OVZu/l3agTiTt7o4JCTDp0YtCtLdU1FhsX52Wk23nB7cDUucobfXbNkrWQ5fU+uftWhrd1Ffvusq4S3wv//7YWYBjEc/Icoh3NpTb9K3Tx2xaXDBLQNbXY5Y4kR263iskBPRNHFudFL0DrmR3gwshnJv4fnAaK75+XwboO5zp781gqOeqY6d6kjuDqxb7icxISgp6g23hJ3ZDCEYekPJm8d3IwMWIMCQL3PbUtlo4HZ8VK9xa0MZNJWzuVf+mYGHx1DD291Ckv98RZaTZfaFAH8rBsOgOO';
  const _INTEGRITY_HASH = 'd21bc6ee51c8ae393cf8da701618e826b8efd1ed1a644d1d773d97555317ea0e';
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
