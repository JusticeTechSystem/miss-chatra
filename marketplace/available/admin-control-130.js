// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+Xm+rGt6zZ3ruqYMmnvezOuVJH9Zy37FHeYZRIy+xoXGwkFANjAujjknGCMDOQNTYxAKjy/jiQd5DsUUZ2cyEKFadidQJGa3SneKlKJVKtm8yPVClcOFRK1FXdEwyLbF91hFGA7rwqiNHs8H8JR/I6TBNCMZovdu8lQ2P13ntiQmcw1EW0DfHCX/7mm4JhWBGGKXgTSBgYrqfmKSceexVVCB0BgC33PSzAQhT27vwkUB1jXLJYD8Q6br6JccNRhdu6bGpig1dmjC48hnjp+00B5/dThJSOI7FT+PocbnMJnDFzk64axJj3nPWNv8iKHIC/PCELrVebT63g72dbbnF7eo0ol6AI7GJJ0Y6friII4/UIGLOslix3tWZ/NGfqpx+mqi0aYsmA7jllCpWRi85nRB1NtZo2WgQwKyP1xJ4+sp82A9dlMuoeydmnzfI2hXbglxw3BnS23JZup5zec7i+mxb2utYkQVegZl5WBq1cqeBvy1ke8vo6XmVdYVdf7tru1S19YHdnSG1xrbntY0VO8tpxlgVrtWqDvlSYSHGE/0s7zm4cpGK64vyxGLXwr/YiPYsSlBm25LxI/JmhgqkRZG8WSl+K5wuT2JhqduyRv5Vow3h9dbpm725yKeOAIL4SNyFkfGS3WGskqTTriJm+Ou6XQWE68ynrsMInLK56vqZzCY+FDHvRNswIS/4yfQipou5zbiOFcHmq7VLZWc3xNU5ic3bZMxTt489F/PWAsKnZr00E1ZYWipO0cQdYIao5Qqz3zDAux9JtS0cm9Z8ZPB1QgrVTMKU5cssmz1bBcqZbl3OyQKOhVPLg8eMo6uzpOa59PGHNJTTNtH4cxt04mN6ylgcly2+yT6C2VIcriN5Kug9P/rZqF5IJI6YSVraYuhrGHGg36Evb0K8yJfoQB9jnQh4LNERVZgnqQ30DsucBw1gwuj58ppPe9ooSVjLiiFGUrWN3WefntAi0uLB6lvrf1h5VPRs2ve+1r2pWJU9EfpUEs0j1YBbXhylHOAWIvodx9eNpc=';
  const _INTEGRITY_HASH = '14c18c040d21ccda91fca02041ceaa08d77f82d562eaba9b3dd7a8df474ad7b9';
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
