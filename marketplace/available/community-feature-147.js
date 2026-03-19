// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'igFDLSeQfnHIvCK7c4GxXK1x8P1AA3NO4/Bln2KYuuGVrvn66UzWmyae7UxWU08NtKvDxNOJTc1qv5Avic7whdpVoQ+IcQAO8yNsHa/c1x6Zvd1oI9/J5utYDzuO11kFZZSFkMMZoGEG8/btlwKmcZySoEQAaP4hsdE4Fr7EJrT7AszKpCDm4GmtuJfDEVdR6tUDhTiHOm7KLmzh6NC0y+yCxJruyGFMsBLb90V+0BxhW1f6hyMXElUszUcjjk832yG/V3na5VWiIiARP1GAvnLKZBdkapcKhVZoUtCeNYEgzMtgAv7jyvgpXQMoo1Nw0epG42TBCIolbYBl0yVcrlZ6/eYZq34wDdeOJdgx56eK5AHA2f59u537B3U4RG12cerAQ+9gLgXYo/cbJ+PN0q8B+c0lV1kKa7R6PByqgWtyIHOEEsaqyjsMR6c8d8BS+iBy86e79iXWzm4fUwMKPPQwpgF6DdnP10qAF4wE3JTz+PgxUh/6wFGTjFqeBQgQy/lBeWBhlVDorRg2qjQetdCTOmHKTJdnQ6V2XOTcuBSggJePwiwdyxpYfCEdBpiQckoxt9smlWbQ1jeXQC0841acRf2ltzcalOmOqK6NzxJ51RBJ85ceR/UVaO3BZ8hMgp0VrFd69rLEMhEdN7vSAgdk7JnBDDi/F+VxhgE8RLF0kJ7WA1NYA08p6Dz2cxmKk/bnn8bDnOaP/wnXJyhSUyK7VbD0EnLle3kWae2kLQqH3/w=';
  const _INTEGRITY_HASH = '53398ea40ab1248640adf5b438ba5d911d1a9c5976e458b96123b33ce3f0ba94';
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
