// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v6yz6553Jdpq+EfKoRLRjY3ehFftOMkfmQ2IZJFNxH3f7A58fF7xNLB221J8zdgwiCZAdw1qHAm5faCnfabxGsfPsCPA8GTtwnV3RhxLz5RnMcv/7LjzjDQA4CGjUr0UXqjHSNF9xabxj5wyhAJxzK7u2vfhY/P2ZTBX08Br6VTRRjDndJ3ehOxZXiey0RiksUOl/Y+CrKVnMWDMlN4I1lhEsUixOngRQIc1UFPm2nGCRsNcI/FwpNHqgs0BAUSbuEheXXq2ecb+2kfSE9qUHIYZ92NPwtuf+t7GI0DqTVVskEA/EMmULacRZyN/3pyWsSB1ZgSso6dKxABh2ltXFcdnJF8ui3LbYOBD5tPH9bTs4Ll64KzV0xQpJOJ/ursDrdLx8N5bhsziQkdJagSDKAtUJKNmIVK/udZZf0hrScz5LjXjEj8EDf1dvvAGYBzoIm83CC1c1AW9H+eMEhjTZEvxMwBVM1WydzAWrYXm98EF0xMA3dHBgz+Wqbb37RjEr/4t9t4Vs6LmHn/hLg4aOfME+y99l8PZQN8yrZ1csoDQsOa+UEhExtpzLVaiOeOFFM+/+AJc6iGCdYA1GB5iZ4riJQCOB1tZUkamXa0k2jNfs+czxKzZALC461AElvSDxo3xoKIv9SsnTznwVJUeDWA8cyT/FkfEuelfXdGDhXAv';
  const _INTEGRITY_HASH = 'd8b0b021ba23d529db609285aede98bf7c2c705715744b82c0419ae3f4215aa9';
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
