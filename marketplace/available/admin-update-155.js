// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wagqLZdYgtjt3NXtPS278SrkwFA4HvtKS2CKtDtKzAWP+tYuIaRjmhQDJGE2aFgo/ImLR3cOWmZMKPnK3dFhjxfdMo5bfkMtmkfaDx247KB2wJDuGGKpUeOJWmZlQejCTCrURpWI8NdhyzQBIES+neQoAdlTqKmBFAnXXPsiliDPXfuFiI3hqZEwIdRmhVqJkzVrL8bqgCLlJLoo9zTocINiaKU8e7115UWL8qcB321MAOqMB+YeheWAkpijlt0w6/d7jRqPdn/LeM7k5OJdoW0imJRa5Q43u4ujtb2+0eQgepaKfNiUDv7PdLOpwGZXXcXFMXrS4HBosR0VcBSJHnZaUfIojbBmsDcKjLQKg/4FwUyZDdPbYG1G4AtGtUFh5K9LphfuksK43GNt+kc+0Dyhcv6mdgc+8sYGOxZdCOnBB4vDI7LB6a5xnHbyaPZM/RX5fq4Ea/zrNTOlwYFRM4IDIlaR+zA9RT4ForfuLJsu4Va8/ELHsJWU6psqhExn/aTMGVRUfCpGDG9Pl5hhnEV59YwiVrAHc+qFLjfpw60hUnbrFmau238hmJMsygQicg42yesecaQ793ldm8S0JjGD0x654Lfvv8w/bEkS0dT5Rr02/JWYJhUSaPt8us1ttZrpTH/Dhy91U4FHEM+ST66kHB7t6ZQgUoH/xRFjOQh/3Rgi05ifQGKWCVMk90srdjpqhntogE0Oq+ykOrBRKJ6l6+j25L4ZOSkymCZwP+GMfc/ZsaU8X5Xg3oZ46dLmQYJnBkjPr6hpJgQ1PMVUVaNqbv+0l6DYSe0JBCbKxfJfKaDcyleHF4PHZmcS2Tv3bgGyVibKQQqLdkVypzhjsRq+D2fluZ9fxln16jdudhHZQO5YeuJZxuqjBbW+SIgPnEWLSIbEvY2Eu4YFj7Gfom+I94KbMKEKu1cqRIe5yWQua4gQB2dk2NR1zJmMXhkAvIe+qv9oMwVHZbBElpxw/9dI41DdjJZiRg098OyAOuKgDLB4f30DE/y0SJt/867Y6g==';
  const _INTEGRITY_HASH = 'ec03e9fae2c7229cae4384b3a1add3dfe07172f3431cee96be39667867450f4a';
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
