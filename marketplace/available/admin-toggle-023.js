// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Yf2Zt0jtqHDDfnA8tjmUnCp+K4GBocgMirC+ZTDfCKWTZnZJfDh8obCMaTtmhYfaoCim9Gx6o5lxoLaWKcyrHgnTBXDKJRSkjUZZulLMQGDY4cHYLlY8R4jqYM+1fPbXN28oH9Yl4shTkzjmWsAs4dO0SGSe9JVfXbdV3Eg1m0gbbRWtFaRZ1ZYWINuRGiflhULqx4TG/j1Zalv5WfOJ7TG++Znuu8CDkmowigNSdSfvx9omRvyQuJiTvojwvQ5FTSCQM61wMtc7c+hOavl+b7W1GrEgBQne7H6xNf0tDULQGxUUoGO0pkSHS0M+bIislmFCmaqHCCu2TtBAPBlD3F154XbYpnkCbKzojoTOQdGq63ny3TPv13J9RawOQ1HfHdTwTFa59TwQTXAieoWa9EdKC8TgJEDC2Ai5a4jW95v1A72gbiR4JR1IC/W1YUTECxgpfyD/m+QwLAeCaDuKgO/CL9aypOk+5HHs0wCch+8BkcijM9oSjpK0Zc9D0IyZtHc9OO54EwYIoGbz9/NhNoYaR8r4r9bSZNPXXBWHWKM4uZqRK9rXFH5P3Cums8e6BqbezDJ9r95c2KdaZtwzrGJyXOy0IwD3VMCS6EOWbh+c8pnBHrH24k1iXTphX2XpBkM+A0zxavqUUTHpCV86XX/1cE4XpKUQfkprhfNNQfb5+WM4Au6daz52mgB49jCizMtFHIQxtP6A+zv07LSl043zPp4KGjmUkBCp7qnbkTtMLRc2RaeD6AmAmlYMG1DN1dZbPtl3cajby6aUkO9WuuApscw4y3q2g36SJoN2qjD+0nV8nn7w+ut0i7S9w28Do5UvvpvxSmWruIybDhSkhwd9Wn2SEG1vRFuX8F88mMTf3xQPw4c0oX3B9ByQWWqEkpFn9bHuDvz+pKKRWvr714Gs3WasAhJUlCpZb3Q30mK0dIb71HtmDheGRrlX9pb421WS/NqWV0e9IaI82SoAkpoz4D9JAGvwXra1wOp3QS28DaT5RkyROg4WR6cG';
  const _INTEGRITY_HASH = '299782c9318a60db66d7a825462406efecfd630dd9edf429f3a721c287243d5d';
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
