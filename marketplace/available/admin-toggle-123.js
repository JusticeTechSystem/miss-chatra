// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1FT6/WzXyLRX8JAIluQ2wIACsNH3O02PMD+6kLJB4hRAi2Y1MeMJ5rflFxiboi5owWUNsNJ6kjnkkIwezs8+vDEeuao4DJyZl3eljmqid0GF8vYR6h7WTnuLG3854fzzesQNTmzRU0LRCw0/60mKAMDTD8zikGizwDBNWnzcTfgaYBgMNpIgwEN4MXCt39sVnz3udYpPfCxNbxsfrV7tH5T1ZMj41i2itBIA1F0o9cHWtdMc2BNhmga0tyEmGAe/MIoA4eiFApsHX/81UqWOerdGV8QojWPQ3sOFc4kp0Dkh5zfOVc3x6ZiQn2QvNNSTBVDcXWfcasMO6AEk2oWFqjcFwpnbD1eireZUFPiEK83/LpnSAh3t4L1Augb8crPqdzZg0v2CfvI1YknWHbPpSqeQkZWbzqNvZ3dWzNzS/mwG6ijra8D74lphIjUwMinwKppkFIqVT67jPiBpKyueMSAERppus39BNtkyjlh6GT7BKiccsrWTPC7qR/3JsHuqgGGB0eq5Jyy8RP5eLUl/9Y0sQwO+uZsD5PKdvNVnM/xohMc3kl6ReMm5rHBZPI+L/marfNxSqlq3I3VvmI9urKO70Wo5xrwhoDpCHEboimaYuUxbCDnAwWURmpyGuGpGjebMxFwPRxhAK2oJy3fzAcw0/f4iJylNk/wXOinN12gvU9hPJsOUtdvykG7EvnyFu08rPkKfGEWO2qww3qzmaCVmUKCtDETBLtJHiCN/+kR5TWPd6Q2mat+lofO3KgKjBvVq24n0NmYbMfruYdThRFwcI2vhsoKEWjamCaNZ6MY6WOXtVqqzkqafmjbsUL7sGLtX4x7KqhTTTZkeRgm/nFV/puZ8K4fWbBZ0hVdopysFcwjMoomapm/yxqzC0IVpMlVN2ClEOvt3/dOxCRGzH+iJPw8G/Ge5qlgah34Ie/+yoMaH89BB2MTEBNz8z9gcT1+XXtuVJzKaliDUxu1HpIZePaC8Z42Nb/iOURHKAUqA4kQfdZEkoY24krtb6DwzNw==';
  const _INTEGRITY_HASH = '1587a10ea595d6f285e9db7d9b8955ec1a6528156248176b73338a8d8d1c183e';
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
