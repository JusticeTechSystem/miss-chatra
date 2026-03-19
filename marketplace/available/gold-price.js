// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L3eJm3zLq1yKQixS2Asg+IbnMV4jMuLKZo3B8DZeGMKW/gD7ExnFcim39ylcxk1EALt9aTPcLRuNwUFIIxCBZrFNCZyBpBoo7qYwibmQPfwbPIjBSCPTugTUPdxa4Ua5L81aFJwUZca974NjpCmbkxmMA+x7KBjeTgWDPkUAL5xnYx2JTgfzbFputEiN0PERFcJPJfMViwAt+SiOxIrHZ9eTNTRJug4E+m5Vu4V+TlwlPR2PCGEoCh5AHNYrQ9AmsexoexAA60hS6NcmGp8aPw/YfYX5nZ8k6NjHdmLPL0QJ0GliwiPWC98SlNNcou3iWZVQy4OVQOQsxqy4vK0QmKdRuKJWb5/q87Oa/+EWJo299TtZkrteIIkKKzjzcrmR5cARDZMB+x5ziW6HXpTds6XW6PsLBX7lK/7o5hephRgjqovoWaflSpmQ++e0cA9csQPa/6tsLmcxk16kPF/3zQjRVt5K16BBq863KBRk45fLymFy8wtvBn2UMhWGuuRAyJ+7NF95n/+wQO6hOVupYDKPslJO8jtzFfIGzIdhc2hmL/+AwuyR2xHI0iOWvY/zTvI=';
  const _INTEGRITY_HASH = '0a02532f2ebec555bc5a69dbb3ffa4735d2e10541ddcb296f3592dee1a22eb07';
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
