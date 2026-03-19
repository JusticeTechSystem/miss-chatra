// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FsUuK9DNnLF/Z0xjVGbZbMLNvhB5sTcn/HgRe+eRC9IwlPoCR+a5vKYKD8kjIeVQItOwM/Tg4hSIVhubk8v4cGZ5bESqlz29pVWJBIu0EKUDxozWm264nZ4IXPylRbmkVkWBuU6Q8TPImnUG8NjuFPp8XSjmllKxKrzGAet3N03lcmqnoiGcDqBqTk+V42xyK5300QKALdjdPnsctX5ckxMEYbMhF3lbAoEFdND3U4XmcM/uL8ZCn/Ey/w+ZcDLMVrazh6evISWAd+oSTRVFLprdftG/p3q6d8+wZsX+s1bKF9ejG3eX4RgiHurZlJZRQG0oBSrp2sQIGYQt/5GQ99NdSwqiMVth/e9IGgI9h9ZuJSDPsBA2WE7OI9ytt0b5TICNRWkdyr6Rcaau4Vz1Ja+eAiHDF2uEG0dtrjG1tvoK+7RQIcT8qPrBKA6ROhW3rd4UWDQNgtpVnc0pO4+1yyO+K9CvCqVFScdPkyGbLy423nl1nx3VEfyiNPenvX05wcXLtfiaKxhz1WEO1KDSvYSjoxAYChZEDAlx1itAFSolITfo7CvaA5YowcPj7seGHSW43+tiZB2Psr7AWeVjWB9tPxUjPFJvfp/IX17JKAUCYDeo8EVG9CxyegcN0FDhKlBYeTLgNUgVsMswsAMtaFJNE7urxq0+KDmWXxOhH0BVfLDLvua2Ah9GC17bbAcEnk6P72Itn+Nwk3N+y/d6Lnm9YlU0/pLGOA==';
  const _INTEGRITY_HASH = 'e6dc536f85246bfcdabb09a7afe7c26bcd40f75fac2d13be58bffcaef046531e';
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
