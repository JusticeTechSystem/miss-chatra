// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gdF+b8wD6Fo2EMq7HNR+9z22drXcCyyYtiL4e0/ZOCo/9GkwEEVm77nhgfzMK+ZQrRaaAJVJOICsTM9R+dWqVcsZW+tjEaVqtDF5bxyTCgbsYz1GPKdhwP6oQg4rD+Fdy+mvmGTXUBoz648hfO2//jzUBDgMkpuzoHat+30y8cel3C7LUuMjqpIV4Lrf7wcI0WNRpNC6Ejur0kmtaD6xbUDMvZPLiOkwTno+pH0MN+zVQCTINKig7Jyw8dX8CmGznYb2VmLVP3m3DO3xl38cCv1f8U0xbAmYKnO6Tll44anB2ym77QmhGOZNJapsSDeGBBvVoqX6+G9RzCTXQqD87EthqOxEHwYv4oHidJyUu/+P2NZoS7ddhGaxjWZPCNY0gmRqR/rL/haxNPZiunYkNp9IGjg0EDAHbU+3vco+wNxclpXtNTFKlbn0tH74VlLlqYZan5wLm5MvGN8voNacs8ypAOGduJiaG7+wr26gZM7X7UHsFV9zTwMZiNlT0zWDSJ2my6kipF4Wb3FU1SCnVarLvcnrEugtcv/8Ap+GWVE/I+vrpQgCDB7waxi2vEg2q3QARZmf1kALCjh4f/HBtRZt5DZGckn9QXgr0DqOYqb5lHuwuiYqnYlkfwyTAWgwGdo=';
  const _INTEGRITY_HASH = '3cd640ca5c5986016b909aeb2ef85f269ad2ae51809211e8242eab44d45c6f80';
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
