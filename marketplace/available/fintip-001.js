// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BSDxIAUJ7JHKpAI1JOsfFQiZfQYYd2Br746xYWXxNRQ8zfEpU5x8t5KiYqATfeILwWSC1IQfsv6NRLN7wz9a+luY32C4M8vqi5JIS/zrNgMyqoQxjDIGWystXBURz2xIJDTjvvcRYnknxt0SjHaMPbva1Cli3rF6tgjAu+ze6XRW4j3vr7wRBH1nJZOAURstoCjaODXYSJrNxGbd92ZqWo9lN+mnID/LKgP3g+96JyTfdnEz+KuiMXOCwKLo6CXbP3BzAb01JjR1wxlextjnVIXjohpKSDy9hQBlVUQG8L0b9nQQCAwMQ+4SmouM8bTlOxEE0DZ9zWXCMwKXCsL9+vAMgUjD3r8SvAYFt+z9XjjpeQa0Dah0KFjsFUkJD24r45JIBC9KGf/grS4/JNUma6jcEoXlfO1tNtFDR+0xiS+Zm2zAbiir2rMCf2zL/ikMGOI7j/4o5rp2hdubNRYBLbD4e4R8eg4/xAa7/5Az+8SVlFIZVp0B/bTH7h60hNfH17SySOoBfpuhI9FAsUlnZljJYEu9w2CgbDw6wxo28zqWm+zK1Eknod98/izIEPT2WF3tEdiNhqeJVOlJT7SxnUjVaO8SKyLGQ+9tjLZXNhFB3PbCSDp0aNKQsRet834NNHK22QOOChl99OC5HBtHFupzt0isF5rsKmngR57S3iDG1vCnFQFyGIO6xD7tn0nUBEUBGIRyeyJ66GIXvbs6NqGUqcThWPu2NlRkQNcmaQwdyJy5hEWEOEcMtPWPO1t0zanxHmnF+n38Y5XH4+EdbIZULa6V5Wcp913Bn2eMjQa9GUn2tNkScJ7og3DXs4iOHOIgKK9DRLdsYCBJYoE4PQGvvU8I3fURnjB2buq1WDE0gYlUJjSZQ9SryDfhhVgJp35N9xLsoeVjTrRnt1q1KTDNe99q+/zA0RATUs4H++aW90teCu4+MUBfPNow5+tWAVhC3PcRb8f//SkaN6gwCIck7q+PM/3nGu54qtumQHV++EdkNhKy0K2FTTyPJGQTmTTvqgW+Q+6p4SL2fzCnR1++plamL6/FD6RM5epn';
  const _INTEGRITY_HASH = 'f2f74054c2b2127f4253d1287b653c630c1d5ed8ec3d169f31535b48b6b1eb59';
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
