// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vLMGgrDus1jhNq7fGm8STyyFRui3lbPhfT8uC65pcm5JfTWbMM5VrJyKS9zEpVdGLvkymH+AxO9f0Cfz2dJ+gZ3taMMNFyQZJC2UK5FntI7D1e2lt6ysqfvPPPNHi9sTI1YkgFU3N8EAM0C8XBlCISAIj8PwiK/JKZto7xjd37Rn56Lwair3X7EQ9TsYSTzZTYaMMQjCsq/FRMeuMM+a8ewlzS919inPVvskaTQRJ+jTbVeJRNaPtEuk89t/04IiBkjycjHjW4wIHKUKQFcFcAdA92E9hHNDHydMWOFaMiSwwLeT7sMy2SUwju2eDiPpi27/VkU+H04MA3PuWW601XvwSRGaXEKx9FNIGIv4QcBDhd5x+IorYCHWBBUHr1v6u3rYSiZhWnI6v+lzwpXbkF19VRp2oUIRJ0tcJtGCJ+dKsRGQzgKzWqksH5ugYZMhU8znAxvTFlbFe3A/cISz5OOFZU4R6/ST2zdQ/+/Ty9dnnZyDSTJwetfvm1o8wjOKVgWgtJ6pWRNOFr2ZAFkBbQG96VERdvSvsfxZz0DlmT6Ghobi9zKbR3jIsiuwoSfRoc07sBkCWKLJ9IDixAS9471GwHcVx8wyXOE4++ui3yi7RpYS5kAh2RPjWaS8nlTKFNugYwdGA85rLTKGwtYuPbTHzuY9MHVx8x8puLhr3hd2KpFv7FvPCKvDdYS7ltv5nrh6dY/F/G6eXO8OurEmIhLCkySNakfzmNhP8qCsJA==';
  const _INTEGRITY_HASH = '483be290d8710bf8b9f62fa0a1b227773f9a4e5d662f839d134258e457a01b71';
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
