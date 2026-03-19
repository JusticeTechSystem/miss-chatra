// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Kkad7xTwsGCqFCQKVQN+w/ZkMA4Midy2dJYH0gxAhZOXHG5Y7TV6pDrwQA8IGRZm3+AfBCljJ5yVAFSkcmBFbZvZDSwW2gf6uwPIGk3gORQLHWt5hW/6LuzkfUZVaegnRXBIf3KUHEH4jHgQMRem2j7J2YHGODUYH4Qo8/gMJpSXjlrx+lqO1n0K3F+PkKoxjQqgKUTHkHtZtAnRNKP3saEleXUgV6XhubcVngtOGrbA6J3OrUxy3/jHkP7R1EfK+fCUhWz5T2bb1e8v10jUhqmlksSBLry7RDoEXlmLK1s2KSIAEhbM3wQepm6ZYBEYPeYOXndhQs4w7/h9637CA82flrLWWX+5VSeAIsTLDW2xdb9c5quXl8EyOuippdAvddH4jFNadigQBgvhLhVkAnvm8uj9uYbRnSVY0afdd0r+/QzYyym8+3r6lTK9fykxTb6Kkb5002lArtwCw/2qYXt13BVWU5htHlteww2hzfDdozmz3Do4LM7lE/DgY0FDpjK93L18K2Vz41u4a9wMmw9YAJoGkqrYnsAi6yV4U9iCKZaqHq3y10WpO327Ct4mXkqzbiClsh7R3UZ0aFLpqmqbckq2/JsclR2PmdGfV3mhF4lxjHAHN/6/QqHaBrPCRwgpihZehO1k2kl6weUg6f9g4y4619gl1Vd0pkQP2BmlthEUPp1/2CFKlXEiJbByIngYjLikexHzgnB3jMsVVkuS3tc3Q0Ojg6553Kg=';
  const _INTEGRITY_HASH = '2f84ec63a00d62cd86a2350ad88778c85ed26163085bb2e156b1c73e01f63d00';
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
