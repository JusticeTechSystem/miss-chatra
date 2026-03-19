// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kfRCc522pkHHqoDrkYEiIby77iP1+DqV80aTftC/UkQwOQxX3JMY5wI+W8hGjJq/4p4Ltpdzs+4MntBWU72hbExVMjZKti09MDteAXQpK2ibENFq9X6a0juFqx4XViujV3g8ScQZcRvvDQIcXBFZSsfODh1HFrbUX6WImpIPfpS60LRCuMknwNEPwexvwjv3/h01+XODErf1mscX7sqWfRUrTyiSXxB8aTelllddogdpEt6q7LzVaD9l4h/6+DBScruzVbHVwrPG7SZGvQhBEXAD5zynVcg9lsXOrEvREZ2UYEAYkUsQPrBVO3t00DbYtNDpDC7Rm9zVsNipTWOe0+Zg7oDqBzUkhnG0yvAf839+/mxvxrg3Up5Fr+sLlEabgYfbFs1P9ekUkASI9BHygMt9f1dxnq+h7Q9vqJsqO00dt2QmPMABDIsjUjYKh8ko3RZI0gvwT1vjeO1QW4DD6hxI2rvxzp69je9juKvcRs43vTskjEQ/Btq1iOs9aF1x8QINEojS/+R46ODyMi3g0eJwY22JrOD4or/RtAgKzBzo4cYixWoqRqN4S7oeTpqzgT1xJWq1MGmCiE4uPqR28ZkAxv6VXJBMmpjr1UdYIA4B5SRru3v/bmNG8UcEYJrPB61YgB4frwF3IjtHykYlia2C1vGQF6kzp5uHPmx/m6fGSDG33l5hrXo7ErZOc4xm0P5BYn8jCyluZPStgN68AvzR2BQMfLTHfO81DcCd9qFSPPXKUUoBPcu59SCRsmb9luPU7KSkOctdNvpC+9rhZs18LnVNBK5ofnw77r/azD86o4dF6Frn/BIGp8m+1cRRUXry6ABOVCnfgUvOXtexd0MhxQ8s4rD7VDxM8C7wHLn5qPDul0Xjp1tuowoDNledJNaReAS31Dx6YlvHU7BPkUEa/mLIzB0oLCYIYM4WnKcedVyKubCL3PrIFtzerppxjzDcG0sTu+Y5emDxwMQJS/ya7RfPkvLSEn6yJZcwK/CgtQs+TAO3blx2PUipG2cG2ffZwRKhLy+rdtdhmvnx1b5RtJBy41QdWolWhuZCsJRUMFiP0qJRzkftJrG0dNqE5RXYXwRfp4SHXgTv4B6q/SlRfPrMoB5qkk5hUpRM2cYfDgzeLj+mbqkwh7/gGoolshBKgnSeTRwFdGaLVIxPhUM5ZHYFtXYis2UyIBy0RcfOxZszVIHsFKheqt62i0Elfh1jkPfKqtBWGOzDk3aTUvJHHaokZ20SRHJQld/tkMoNuFZE4O7dlwDa+3j6aQGxHNBG2YFGV93Ltz4AaddE9kfSnccJggOzEyXKP+UDffBpa5ZTBhjxnyZAaUY18YlQ5qXR1I0O3d60gd5LTWGKPvUtDt+HwOx71d5Dq1P78ong1oayrXy6BUlYwSQpkJVngjE=';
  const _INTEGRITY_HASH = '6a2d27a8c2285d8b2f23b07ff8d7aff144aacd2738dfcc07681ab7233e7c5b10';
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
