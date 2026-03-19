// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rp3lcL6b9Codu++iWwZqH54IBx4TOuWnSJgzgXp1m2bozV9GPYwWztQQ4TWQsR8q1Y/x+TNWULGqRDXaLCBsSkbyisXprv91duB4VZH8yDuTc2JtOcNAtKuzJRU5hJBSdSjer/SFdb0Y3L7WiNvSU9KhNVfhGf3hSeYLa4/sAgZWhy7NeEQsYskSYD873s0dMm1gQPeiVBrhWvXBVKnoxm0eK/pSceZ3WIy+f/dTyINbisHI6YbPVDyzY2CBD/HAbyrHb6nMeRWtz5iqsUOX1HbRq8+8DHV5Yi6XRCMeg/4I0Nv9l6+rf21VNEwlS/WJ+ZiasJ7Ps58QyBC9/loLQ1GbVz3Ko1QKehUnuM1W5efzfL3oRfDa6zx09/SXnsZ+14SJ+VbYTg2dgbiZXORjdBG3PA1jpKGqNimu8X5iwVOYB5GzXMs8h3q/SHYn5QTrM+7VOyhwBwSnKaBK+pbi+ux6X1sr7ro+0FXMFL29XwQRdHWtFKWf3v6M2uUWjM4uA+skHc7AoSxE2EGFN33ndDJlUA2zkXn5GaVJXt0pP9QMJpeNB1qg2Ann6/aTqyyeBUJIJ0VDf+038SHIdKHNHqkTi/yXB4DBgrYzCq4ZXe/zuJXK5bHldW4SsVTjFDNenctK2ZyAD66I5FmDY0jakmydIlrUW2b/CZTwHfKV4JTBht6RmbF+e03KPATB4hF/Jz+eEGI/AMn1abZX5SAU7Zm+VKNIop6MAPjkJvn+h+CJGMFSRu+lxbD8CwSYQblLm2guuTd6z9y3UvDWjOYZYCMDWKc1VAu7nYZm8YeHKNp1XRowAt4tLzoegawJvkdub/UhNPCLEMjwmG9uqHFEvgWI2HEMJcRzQ/dzzt/ODfQnYjzY7pVEkPEFtw4JX5UBFSL49f+m5t+cRJ7JdmPkuJskUeMs0YVaub2UOPfxh62Fgcamhslo1zpn4gxGHRhTbR1RIkqtYG6EBbg9sXm6MZ27M2Rw4IKknu9ujMG31OxxBNwyAQAwRIUT';
  const _INTEGRITY_HASH = '6fe454b4ffddf9f8158f49c2fb99fbe37444174ba5931ddb92d3ac84e50dbcd7';
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
