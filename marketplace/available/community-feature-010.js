// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L1DS5V9/g74SMf1DVRcqfhGXXwTv+WmkG6KTGecf9lcqggPvdoDDziqxOby0XFtoLriKd2HXEmLDWahhPi3glLmMlYFQ3PsOnQ/Ti4ROiY5OrerUEh2wmfRwxXZBOqTg2DaWke/69NisbGSDy2EVspZPU7HwO821YrC405ewhDrcJmpF/xcEc5NjXcwLUHxv6lmrX5j0/1gcDFQ2gbg+2dNkz0oiGnf+Au1gyxEKMATI39X/Oa2dy1gGyILY5Z3w0RbprU/bPs2oqxG8dH/Ew1RT/6+AY2FsfxkJfMd8oDNJBcXxPsMpmo/kXjal8Ax+uau0g83ZinkvcA/0LKWwccm4G/nbfi+1Gm3xZsJF38PJ3LgvVD93FLtOSAMt0aCzg9tpqKmccmwH+d3/g9Ql3vViRMQh0+u6gvVDRbqtQ2bFUrgZhQgPUlb0PJ/K3mdR984C+bQpcWEtUB9/HwMeEbKK42UyI9LSVWc4398mgvxykggpxROhUKzYqF074DZlRQk47QiaruW2toDwkLYDul9O9Tj/uY6cJ/MBOiWMW2eCZekoZYUm2Fm9Z6ybstYM7lH6zYSG2QhBfD8U8fDWrFXx0nYQKm9mo9fzeeGZt5tQbNNm7ce5bDJLSft2wpj8PTWrn2Rsn20yrg/6KekAi9kAYrpHAz5pfYMhK6k63eyNzgnMZ6ivOXksd3bw0XCVctrYrlm8R2dsdl/OsYAHDWtoQStAlQkVIpRxnCevc5Th3TS+cKU=';
  const _INTEGRITY_HASH = '77434f5e189eae9b84845ca322bc58cb231e9acab588f528d62ab4377eba396e';
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
