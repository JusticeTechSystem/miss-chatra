// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rmjP+Ji1GNd8dtK65B2n6TDGuCH8C3RRTzoGQQN+VK7W7ti8Uui4LOKQaT8A2UGIfszmOzbykNnYbe+S40pGiknDzkY17w1snMClJvaBaU8bfVmXsyXizQceDO2ET8lARdZg3mUUtEz1zv4hi1oBIj8Yp1eY4smQoc+x+ShOMWpsP9JgT50yg2M12g39EX30j5g/H66UBJTp2Ppc0y239HwpjIdoFvAoXOaRM+Buw96p9N0Za2e+K5PBDtyqKBR3zXHJYr7snZSg4bIdQUg2jqPmGJWjDmX06NfNZnJ/hzmmlxGZ8psDp0Yv5C6VMiz4UPdJU5bbpFCS4lFiNq/N7jPGyixNoOqjR3utNZVjpVByFjHxiAMdc6CHxokbck6RmIYJ/YxHzT7JgBHiVbm1hPQ1dxu+MYoPscJycyiNMKRxoJbn12Z6KzjxwaSrsEdVICdUjdKHUOAGqg6Y7+XRmz1Wtisi3uFS5q1y9xael0BnO94sgnOMsqFvIXd1jefmrZoEG4rRzPaXr7RztrcsLnCccYe2xZJgmrVOBMaXE2/vynfHW4IQZVblvtbizrRaFjnFxTjPnA0/BmqhTURV8xE/Jlvyl5rWjZuAvhWnf9vRsbUpGJ2OKMfvIkV34oKyZ82F2gAFQ018Q+HNZL+siKnZeMZBZXilT9N8ZP73InTm4q8R3Wjdo/SmfZRacnTyJfzHIFJtH16P6c+F7c5kW+b+HTzqCrrjjzbp3IZV67OIPz+QZeCF5+z+jW8hXdMWJiyrOp91wsNil1/QiIsjPlFrc7tG8HYy2G1sH47ivXsLlmHWwQrUj+kW40obbMpDyEW+gHXYfiO6LkG7EByys1j5rARkEapdyIDxBjeERZ/bTwFP0gB5qvDQmWYmHYKR/uCvEyCOtb6FObZt5wkuDlNenHPbPeNyzWFViLqkjqI3hwo+BMqU4dIWzJcwWF1rBxTBs6Qz7kQhU7zW5aYf6dKSheCKRqyAEgXBCDRk+UxPMsNAGrzkIY649kxwqD1ELFS1IHOWXHA=';
  const _INTEGRITY_HASH = 'c12ab60385b24dad89a1b386ae6c9b0e15e5247dfc12d900228f2acff899ed15';
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
