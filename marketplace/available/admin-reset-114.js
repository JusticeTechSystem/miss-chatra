// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'p7R8OVB91TxfxwrlingGJVJTdjKgS+2yTJVJUDpH9DlpCS+UW+mT+6KKy0KvRXa95ifnl/teb/hmy4LIJklp4q5nh5VHS24Guw7GhJZV/+uoo0X4PgwEatVY27Lg9qrKkbE0Ki/bSY2Mq+YdCIYp0no8RT5/ro0ulw4Ivh6UoI+HhHflt2QHaE2SwnT5x5qOXXbprZSEt8nQMbSOQEbh/HtUKfEIuarWgn2+/PmBDW2sad1lp3jU/KIcq2zGZoBV29kYwePn+X6/zSl5sbT14I4oJQSfxR3/6Q4msHqPdqzANtEltsdqck1wa5t9rCJW3fqKokvpQRl9Ig+uor7u+yOo6qkeMd//nKh0GcLTO8Q2txyR5gcQQmuM2t5hq7e5VRoAUGm64Dg8MCa7wpdONRW5sOYBR/3XaLdk/C8DrRU7RZNehtwvXILnmTPg5ysEDS8rR1ksAAt77juXzctBAmGTBPEnYO0IITwdVdpHHHYJh6npcZLMTZwDB6P3LL7LY3nz3gMqwF4fKFv5jiZ+Tcnx/7QhgPi2yrK+HyBN0hjqu/pImzQJv/aXmzq0B6gsjE80oyOH+4VMjLVBSugtMw0yfpKkDGHD/Xm6BSiTA5nf5cwryrG0eC0dQopHcj6kzbgqqXBEFc4IDJSP/v6+R84JyjDzzmlFngVx8O8o+j+KIy17fHbJnNMUkB1vBwmKinE1GhCwdx30w13LQvaSOjCKHABgh7vAZvzURgnbCanl5Bln4qP4ZTtjEVQElvQ3gwZTb+Jmxvi86tOo9NpVhGFCRbppfLuguWQhCQcFzoaw3P0pvPW9Ctegy6q+wAYrDrD53VtZedUrrN3f9vp6XJzDYOqTYGDvNUUEhx5tHo1HSPfyxQWO2otAt93juvInINenpRdqYNF75fcKBQgWVGtFloqvNGP4Tea22KlAa+qIWXo3rOKitiiz5BfxvA+CqJlGppTBTZ66CczOXRZlBUSmXkWdrYPfl+ApofRKqDAHK+QWKCDzuJGK';
  const _INTEGRITY_HASH = '60b9d78c0136c9a4a571d77cfe1639daabcf2f39ada8bbf5816dd39a83b7013d';
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
