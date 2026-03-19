// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N+h+sj/k4rikSZPMPB2X5oAjDzGc2oN7yh7MgHIBRNpy/4Y+o8UhJ05NXQDcfD8qHwNCqIul4Ckoa4EhqLH08ISAx6+5mshsDErtfdGV8djevMTRVPGOnZtEk1KiuH1YC9+gN42zfhTspd42PcmXA65VuGrFDie2CuqI1YdjEcaPk3HtqdIB8k2VXTyzQAcdpUMHvq9JwKyhq7htDbAkFCxzUDo3Misr7RO82qVFhOLA4RMGwgtnry/0m+HNkE2ATo0KxVSUHf5Zrdkl4vS53s3RyoxQ+XVugO5Cluxk7HGonVIjHh6BqfA2ZAyZDZvfGN3Y31aSEcabcyb5sIbsJ2RIGDH458dhevaAt6alu3iCftsS33Ea9PHbG/t7H087S6FCSwVrN7dcXZkOjEvLG8wO1RCmTiaObZSf5gLcyP/OtJIq76vEboyHqitvOd82nEtvu7+wuj7ttRdaZTlucjeyHJrfyiQ8ONo8iXrrnGz1RrGgMy7mSfVyM7nA0Fjvzukp+aoJyjb7haB8phx8GBZbvXJbUEinENHHF/UcLXHpAyrNvJzV8B//muyloooQ96FgXL0DpDT9+XaqjM4WLqXoKMa5QiTIFEtvwzm4pxKqXToxp13aFfSvPZl2V5JC0m2f/xIGmnKfM06Sh1c92NzIUECqiN+dRJpYfMAuWutul9GPLyntmxzhW6RT9A0c91cJd9IAO4vgz4zVGcKdc6uuSMFExu464louzUWYh7M+i2mDfYo0YHBbFD9e9JWhfdwxx3bdzO4MJtNbPnCScWXc57Jz3qBP+/wsp5BT6D/QoI7Z1NuS4xBx+tfJRXQ6EJAVSkVMnzL0ZUEmx5v2yJ8AD1sQKyKw9qlhrrLt5+o7gi8dVVnzdV7SkuDB1Mq459Y/TW850gPTLbYAU6/am/XEBH3SnYswAiS4aF1nAqDKiGcx2iYmnvSjfneirkTYK19q1O/EATh36pso4s4iOQjUrX+si/fFzgZIYnVKJyZ19JcyKjCxjSlo4DtxvJMbroHFOItQFSEyXeiy4XITjfjxmO4CwXly6oa8m8DLHeIKCMfKAK33p27NBs2Gg7Yx3MrMfAjH2wK/n7DkoE14WxjgGNy8mY23Q0bVMRoeO64p7cr8Au5eKSBqqUiSHViizZ53tfWv3JTzG1DYO0Fj85OY4Yub5DB9CLWfj5R+PBN1+Ogn/w0oKXl2/MonMj1NZR8/CP5WGg==';
  const _INTEGRITY_HASH = '0526e214b46f02f1db75b60cefabfb338b932acc48a7d8162234c946e75e32cd';
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
