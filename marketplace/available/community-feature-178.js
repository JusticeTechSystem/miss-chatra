// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AtYmY9mlKuzrSPE7vhQGk3ANU5tSH3XtjGhZgE3+CI47bWc6Xw1jIlk9MtQHf1NdlzoewuwTsIyR2ckvyQM9aiTCPrWdo2ySSNgFcIvrOWpl/5chJEE+dAEMgWflni2KvaFPrV5rSJGoP8yu6BfEZ5TM8n44kg+FysMKvyEOdQU85XFjhKvf2xhARZtdfDaq7O0e/g0TnVJm5wYqjp+MMmuiinussQeegnkhwkmUaXvEPydYVEurX/dOBRtmbNmpTjbsgEHOyZRSlldo2jzjQ+haSC9kwJDsopy/Cj6ORcn0hVlJ+K0ASeDBZfgIA2RKJCoLDN4sE+xnhv0YgWwuDVrTsYwQCI4y3qVGFRw4sFsWVdb+N+N9J4Mk/SU3oqlpe0EXgw9UDKH4X7AD90+395w77nd9Q9iZTDDX0cmhnD7h8FWP0IU/erqSZqC904v5JnnU1XAVN6bFLQEH71TYfEme9F7hpm5kXYj59b93AVspdu03Gbj2VLLe3Dgi+rD33SBInrVhyaCpBjVyWbDIGoPUEm/rqySe3BICSsdnN7Ihievac2GXccf9V/vKeQ8Ped0Hz8ZxCvgoxXtT+0THocj0Q/+VPQy6pX2mQ3TJJR61IPwQ4BM8PDZXwaOSrjaQ7qyJgBE5ur+gVHwuk4xVHReeIB6U1UQvjY7CFemKhZeghwH+wORh90SwNtpMc2Tpkdr80V+HOGYLEfpB7rtD3DY+yTOQV2Sh+LHqaZQ=';
  const _INTEGRITY_HASH = '7e9d01d21d61d629cec7faa01b789fdb1e31e23a3b4161acf27083b6f2afb7b1';
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
