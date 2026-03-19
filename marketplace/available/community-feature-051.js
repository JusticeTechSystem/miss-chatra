// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '42nPG5WWxd1gTnwzfJ9SUJEn2zR/TLLsnvxPX7Gaity23il6SbmqGulKH3iQavXgO8s/3ms8m9TkKt72Exh92xd4Z5BsXaH2lXXWrC5P5ww56TaUWC24wZWhLM3SCUhleyB83x27znIGXtgyPTM85g+0JAJGrI+4vyaFiD8DV3l5+HTB/v4LKBszdhOabn7nscyt+Pw27JbZ+kT0ajlsnKhU74IDyPWGEOtv97/yXHDevbq9hTqaztCxkC2zVZJAP6tmWOowQAAYm7mT7kjvXWi17xW3BKIqMzr+zCOnEWWp0khmYjP7IC3xgTd530/1BgplDJIGqzPfq4kBPUfO7afoO1bMATCWw9ynFsxhJFx19+qzuo0pOZesG6oMSSFsGHNm729NXZk4Cw+PZkqu7mlwr24aU7we+qeySLGUQzZiOdNd/NBIxRpE87MKEz7gdLqjjDSoAZpm8q8IHDg+KJGol5/6He9WuJesSoKBLeRKC5Ww5mzLCv1k48EMvY6vPmX4vYAe5eSvskE8aCSwiuBGIlpujYZ26dzel0/bJWhpYFX6jw8Tl496mHW9OEZm5hV+3OKJ3+2f3jxm2z+X2UZwKJ9dmZz1VI2hS+QCxaPq/syksyWDyxhFQ7SZb47zz2QI5rcAngsu21n73gJPoyHvQ7K7izgZgNIOQ01E8yRtjwZKyx7DQJNB/lD6uTYePb2jdLeMu7wYn5IIxwgpTHRbq+w=';
  const _INTEGRITY_HASH = '05f620a670caff0f000fb018234bdb0e94a9ff2ce05fcc9cdbc0ca89ebeda069';
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
