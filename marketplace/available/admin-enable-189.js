// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NIj7v3p+kpuOMLnMx0TdQmUrZo1wyv9NUFGcxMdFtst7Ipr08rrk7SjkyX3y61l08errdru1CMnCuBoIrEnUJEGd+awACdVh+lb1NsHjLhyLcRC6gWsYC388oF0oedaXqcM1awFKIIK/fQkHo+ZL+RGnr57ompMLsLoc5RFw/hbzDbI1End8C2BBSFEB6OW+pShNExyKRzQGKrr4LJPXqyLCTqWNPNEBmJOTQAUJkB3hfFqhAhzkb1vGx7cWUmu/kvIO9ZYyv8KfrIHYbQjYvc3WssM5fRPrbVOb5Wn9IxH3F77Yhct4dfij7F62rOSURoC8EROE7LuaFOdj9BdFPxUZ01w1bfQyXAbY5F3Z/nmYxSvFCQ3+Ugrc9YzhYJgC1jIr6HoQYXK7HMNVkT0vhGgxD+EqXkAKGSbOoT6gQEYrZwfdMg4aLw5rnzRyLZz2h0oeCo6AUSBxUt2YN55BypKwZJyO+5HWLVxQfU1Ki3H72KS1OpEmsJAEXnFodhaVapqPU+BPb+2KrKbMQZFSarfXIh4hO8rJzBDvlI12h3cmUvpjRsueHSMkLLxjGKDdZ2tKFW1xxfMOydOII99fec5yP9goWQZDDO84iRnbanEvoEMKnKaGkcmhgJRHwV6Ab1W2qHL8wx7nT6lKpkfXDVlzOmV4EnbeUYXO8ZvmPYtW4gJnCIYQw5yr1tnuuwhF3DCLfavK24USiTzq5qO1ahQfPsnaNGTXZ6XJ4+ylooH4C9nYMAohebBCxWvM8VWBcF0f+sOmbP4aEcP2eMR8knaSDc7Idfs/00zJeZGX36ftJ6dkPNA92rGDsO6G/CqK2TNymOrUo1g4dVWoU6t5H3l9rzqIJiyy20RsaLWcLIWUc4WGJnCvoLtmzVTMxtzVlZX0estyD4oQgP+i3f3FXXnZs74ZXLdkmGtXg3pelxKJm5A9t6MsoJGsbKvhUQlCT5nFtxBMDNUx20icRsoVtedXGvUCyeWdH6aviC0UkITFuADokGkfp8c6/apXg0/hQg==';
  const _INTEGRITY_HASH = '28ca258d7c52d0833d809d736b1dd01c73eced88bd1a59dc5e2b3cfb8fd82a49';
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
