// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pQRRghPpKoI3IW7kmZE4NS1B7qWINCShe2Vvh6aCaQyKLMl+/nr5Yd5J6SesUbJNthpHso+CTwWBU19N9YRCKZIv4Ge8v+EGRAWxz4BbVT5KME1Hp7SK7/L8/H6nGvAfq6EZX6KeAKHUIez5BQL2wuDd/NyASy9107tGvfbBDrJRBoTqkdHN9UmS0SLNUeag9KeO9htrbvNlPqBFQNZ7j3378f8w8pUuJ0YdI0IaIivf0NaUCLnWdT8t7h4Yx3gFq+VbmtvikwQzBnULIyH/x7RxKmKUJFnl3Kz/bS64tBgAD+3GHG2R96Jad9YuRepHkJ6mur4l5d/OpnwdIozipsm+/6sZZyG9SrtPkrzOHgQP3R0l/AW3fdPC9PF50VRbMp2UF1b2GQhqp2r6a4W0RKWSnIGbRbVBmVEV/Tf7fVV4UR2cA5Z3ZskYcGQuN3pp/yKf1QOezZFnQrgZkkXZDu+7gAoUZU+nUe4XIHPM5JB679FCNbPHIx7Q/0M4AR4D3m0VmW7As/vjtMQ6SENX4TNmtgqhRPpEMgzK/GrrK+cBmE7QUJgxyTSFof5OukxU9UuTQp5bHkzHyYDyBVakHTCwL6eKADYcxUz1HXt/G/HyR6JwmP7H47nqOr07DEER7TCmbJ42pwBfQzuR1F5ySKGbFSgAs0jm2s4lIHK+KQ2kE8u8hVmQ5bnfqwyYZ+e2MsdlgBAx4aUukMUq6vZ5YJz6gubLG12mZEn1OnYXWbQAFMeBPIjD3g1gTr7SoP4hdWKIK7cNwiVJfz79dSrsq4cbw1lXlQOHAIKKsyc6Q50ISE+N5TpYKvGw2QWWssGhr65htCGG1bTXp+Oc4Ud70Z7lHIpPY72FLjzfWtih8PsIBACkywbHc0DfWxWLvICXz+W6o5XO9USBXXgOVh0yOPLgE3hTwJVINExPUgdGxJF3i9GXzTbk0WEUjTptFOEoQWhXOlync8jza/E9jGtcnjH4hNMjIgsMAxmG97qdFfd1PF0VbGZu5wZJ8JJb5ek3OEi0bVF2h2scgHhwFWAzlYgKVLXkl0JnKhxw/1vlEBk3I7TYQg/VxnI2yaBZN0XyyoKwl6MKnN44/7+Xuu/HN9DlFdZMWLVif3IbGp2P4eT3ImDPXD71HsFC2mBUcXKQYS3dySvzLJHVATeCiVwr/yP4UUTWPYr4UwjtAas6qy/T+8w3LLnS1uopCZnaUijxw4bbVoVFeK/xU6KNdn3S+X6dNBVxfU9ZQkja9b+Jl2X/djF/TS9V9nFu6CSL4uN501nUh251bucztmsyk1DsV9IqlopbKTNDQ2Yq/AbJ/w1hMJdsMESzVnAyDbFTNTlpwxVwZHFkyNXToZGtYXprNIXpNZJTl0eafQdK98h8';
  const _INTEGRITY_HASH = '9fd52ca3ba066a735a9666d07ad26687664607dc38617add7650dfab1bbfd92a';
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
