// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ATvxA2gGVHBJ6dHHCAk7jVqYOAbGdZGeJhKbv4RAJUW+BHRPGvyDU7FNdM+6QTIUEnPlCF+fCmkAEugxiPpjUDsZzDCHxlZ6LWNmnvvKIECxCOe04NDB7MWXZ0jf+uMUUxFgkvGcP1s7jtn+1FjO51U0dwysFM5EHhWy0T2Smj8Un+eWphOTjiCzvwV4eguBfTjym/ks8SR/00O6b1zGatTSpaeHxezQCKLXKm3VygtjyDpNVUXEFzYfUn3p4kiyzqz6rNJy+rNxA5pOpw5ZKJI+ZYVpKO3R0cNSf8DRwW0DCoRAHF/NKD0AESjg8Ltb8mqIxgFuNMSwHh4uxhqWbQN7aKp42VIil8sS0qkpwNiEFxSLqL1SEA+gih5xQON1beINQNodR8oTNdhVPpLW3C4nlTCxWQVra24f4FCL1Y26yHC3HaLe0GCIJkY/h2dsVbKXnmIRnY+CSXIOseJr5JKTPimX4nZC7cLfhqLlQnJ/iLpMzXRrnXcX9+ZYUW6bwivLcQPihd875mZ+BghQpS8cgcb7lRbGCcxCE9xRQ5ZE9EX6UhN/0X0wndt+aC32jYvTh0FHWJckCRoFUexRuPPRBEMiG0eCIDPTgz0KHgRiLv2/xw42KpxN4DIBXTdhthfR+jZOmW8ZRPAuBxFLTSqgdb+pjSHuNVqLY3nNFGs240iroskvU4PDUmaLoCktz40WIWu+rhCoKIiA7u8xIK0DMJgsjMBRnEI+9TJ+4g==';
  const _INTEGRITY_HASH = 'a8d58d81eaa6109d77a72b4928ed8d0607e484d68ee030900eaec3559f1923f4';
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
