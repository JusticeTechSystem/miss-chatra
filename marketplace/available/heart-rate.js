// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9iQHWR9s2Fc1Mz//3h+zMm5CfM2MrXLo6ToQ7Q/Ki/ILdrltEUWlkOVCgtmybBTydjqgA7V0fJ/lf8NyIuxiwIfN9bfGVP7heQikRHS5ChPLmGHXPBWWl9Pu3xgODVgu4RgQB+guPgcBv/ROV3jgJUnjuG9/5VjOyEUw+mJLc5hpdVVPulMVVt6jzYA4na5UwT8wjPcQsdi8siDF/6WyZbcPGskPa7ZnBzBM1hUlCOtcn1KZHKYMPdRtM7+b6ASJYt/se5f4wWx1NrVLdZo0/UKd0R6lf/UJcWlq+P0RbRwcg5cONRmFeyhM48U0b2mMirNqrsa1S1rNrd5YLpJv9bpxghY4LDKlXr/ktEjqYoNdcxs9ylQsnrbbvcP/ylZlGYOPVjw9tLryWifoMuTnaHpfvLJeN8/EpOg8rVlYiwc/pma3koH8WQuyOSKKovQ7lsPW3zSxrBVBHNO0Pu6a1kEDl0aLqnz5XZdusq/2HG6c33xO5MQS62vF//7TR2wIa0zYsTTwn4p5D7yZrkNpPYRnCN18rWX/DCM4UtqV0bB4AuezlJjs/u4QuqXVU79snhqeBRjEioSKPxJ+Wunr6dNduDNBFw6bBJ7GekeRfDDBPhSjI58g9urP97HhA8i4h6t1d6EjfCPqs6ENq6yLvluL43baOudOM/l6aSFzzgPhU515QdGsAat+CBbeqExQxe0/d5IqW330TdHyXKzhmyQhi0LOAQHDfBdeQvZLrV9mvZ4fudZpuoRdUicRhrQDWgRM4FRFMBspMkhIQCsQP6+XsRPRiLswUapCtWJ45ov7CS5SyuInWj+pJhZUxM4EE1EozdM/0c3wSimobDyibj9yfJVSfZHrDKaYc+Zcf9yt14fQxEhu1QcLSIystbRvpdc4fmto7billkDBGj5rZjN9mVt4SRbL8pJ3zJmmWikV9tAE40fWC4vIE3uk70GCPrugivcLeUDJi0yhk+/PRLDd7XC3hXDOVBe0BE9qlTXOAEJ8rFZMBTi7SZuU65cF7pe3JIhjNjvkqH/uimN5pOK5RhnUinD1IN/hy0KHUOLT11ZS2MEOh0AdZ4LE6+SUabw1aHbdOQHMgx1SUgo5zcQ1MVyj4IS1xVs7LQu/9Xf88zJL5h9omS0tw/SvxK9EWsmaQk4qHFupnb2kUk6Zwcy4KIOYrhZE8ohaOAaqBZBPT3aQd8jSxY0WsGj8r1OtjCBJNanboEKsqc1V00aV7uugBf3Hdaj9HzYGvRT7Qk8UGu2qnfT+zHgXeHxnnI7u72g19TsfW94K1vD+zC/0RaLmjy7iEVCjKwf44nX1G773C8s5rdhAaS5EoEET0Ic2OQrZvFe49OdC4hlyrjCGyw==';
  const _INTEGRITY_HASH = '754ad3814eb1e0051efe9081e6dbd624b253b7a75b03a0c5ea7cbb6b7040e33c';
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
