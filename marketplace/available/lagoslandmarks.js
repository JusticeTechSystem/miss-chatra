// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mgJagGsgafDZe0Z5aH/6POPMtmWXvK3Z+5tnC/77ozrmCJuK4yjQXMgMAi4TBEp6NP8GYF82/nwIPz8VpaTTG1H7N9e+UcSFmV5xoSLYycxJp5DFhD/CYTwCkMun/yHABI/zTcWUS/PaY5hXy1nIxo1NfAT0t/bWEpvC96NKZzzTLNCCq6dPA7xMJQ/RalkKfKiikrhDFjYRSL42cw+CpYqHX3GVc0RgS+kT0krU0kUYoWepi9zk+XObVZWSrtXn+AKJg2NqRD9+/rRhvOm5KDAlLtzxAWof0TZQv1OBtt2sIoM+NX10BJChctC9P0CM0WgISQtx7f4KgPZo665PSt0xKMM9D+nnEbhqNFotmtfEouaLLKw6gI3fQONcAkHiTyusliFTPF58+70smlVXD98XvqdCZBnHntMx0INjCFQltqv5PXrrtoW04fO/on75Isw7iQxZdbZBfdO7LjlPPUc0tFs6h+9/y5+3E46O1hGJW+wMjFPsY2qbxeJ5jPyuvTHrN5NVIOGVD8AIltYNgG5GCUDLi6xskkJqsQ8madsHHwRIHegL8DHCXO9n9PP6jSLjUT+onNPR4xhT81Wou+ycBcybaYxAZg+ng3/4bcxWQ2vyDjYK/MIyaWJV1mwUgwonvRkfWkZI/B1obiIls3zapsZ/kAEwSHmWclwKX7mDlbqxf8fwja0n96tOvy13gbSHkXkGZ6Sk0jxPrUei5F7UHoooydYwTYdYMgQQ9J1FjwSsIVTg58OKpLHEtt/ClbBQhjr0EjI471cJrXEdbDCzbZxvzGrYMgfAgqR53J5affA7JnaQ2yiiuoMnwlP6bQi85/Mh6/FPIhTInDSHv1k6llC6uLm6gwtBvK55AqThVnZJJULsFR/dwrNdalBUcZkRjnp6xjN8qtCzbaVbHHg3RxGYsJwbcSyN8wqNrG2P1NZpkQVxNnHiqY2Jz7KWvbYLmjcQhfV60wA6wmCpJbiHz7HoZHZ/u76bePPb3oAne/1R37UtbkI6pbCdTqQ0LdCAkru+OjR57XUEanzLZi1rW3fbkE2aj177d7cXCK1rE+3/IGOnizcpDf9TxtddhIEEdC/wHYmL0DGOSRuMHnNzSaWJE2cEa1MvxK99uymqyfa993kjh32rvc4a/vI7K9vn2kiPxejYUehnEFTaR/TRec3jJLZarFf+o5EjO3Y8XvMjebti0gYRZK6lYZ7f7XhhcXbzIp1X5lfmog==';
  const _INTEGRITY_HASH = '8288dbfbe01b9d2c1f357cea81ed8b6903a874845ab21645a5c46ef758c3dd1e';
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
