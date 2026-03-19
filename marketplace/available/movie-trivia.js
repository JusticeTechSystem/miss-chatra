// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7pvx49N3uQLAhi+xTWEErchS00/pWgka0cSWKLNkMMIjs5P7OCrcXbwYy5N2JKTpUcTQpwwvQq9TWvkL+9Lc1YNXzNfB6UzcLq+xAIQ9eG6ZoAuKj6Di28YrZFmgjXU3hqZ9kHgMSl9CBBT+1PM8tOchww/loIuDxrfGSagJpZei5wvRWJBHKmmu8uBMQQiTnvidLl0w8z0N8gsDE8jDG61fY2aC0Ihi+Ybt6j5KhFmHNt2txsm0imsuKZb/gM9T8VI6gfeQE5E/x/uITBmVy4ASIeQVofqzw7c8L/XILcix52G1Kz+2jKlPvSFiXfux1OWiqvWIvl0OFA/mOSRS7TwB+77rjEzTYpUN96F9g+EtoaRE7o/wcopzq1o8WPjf3d3vAtSyWta7yfUV83KRYj6CwDQKe68GhQomja9INK8Ue25iKkel0cZirEg2I57RUTUIRE0Rch8Qoze8TPgwZm/6rFlaSVIARlwOKUwNLwjbrzwQczhINPvSeoqple/ZEkFdxmonLPWO3cyFAC9Om/Ji4hHQuqhJ0zPZjuvMe4VLEcI7SrGQRhkBq/kCQwadwGcwniZXX6RD2WuNklQl+DY15lHPqGlibcoaVQyYemE95OjJo8EWD6WrPgaQcstnJ7kr/LjNo4PR7QHLiGoFRT8ySq3JD9KC+U5swELoKq8kAJ9eLwuHAoZHa6PQjTR7t1XPvyZBwqW+wav8PzsU3ay2GuagN/DQMV8rxZ9YeZ21XXWm+H30T3EIOFoZWoVAWiuooJTBuY6DXrkdC+OFB7IGjuZBTUWpcvNisP4BDQWzH7LoT+F812ihglvepU3vwcKIqnPmtZH2QTWqOEOIrAukIF1Hf0Pnvbzd2XTQtGFf/uwPU2tQj3VnZ7L1Dv11O/zpFaLhqZKgNeyTWfaQ27Q4HlQ7jvA6A/474WOW7asDoUTRJeh7Wr0E1OUY843HJrM1mmm0m5SIcBOG6MNI+u+Bdkfc/KoCCygwwtr3cQEL/gQEXq3PMopUm3Z7XpBqE+QYlNcBIF906y00T4iPETl1hQX+ReuDoMxwzn16u2jT/SCUJd/+UMB4NAvZl4U5H6cCGvjQjADWoQtEn7TevOS+0JOFCSNk8sW8sXtrn71jg5wLLNfjgtKvWcyOuh97Q0Nf/pDW3pqA70dX/0PLX+C2ueAkAQQ4JS69b9+nzVEw5xeogpv6fyHDY5mUzJECnRtWA0+cra4xhmPrml6/YhRelhQad4uYp+X8ziAe8o02zWVYIdKMlj6Ot75P4vzFWfUEvvvKaKXqimxDuCSN25HLSbIqMu/5kxvvviuDC2S7DQo8bhob11aRd4QBKocE940+gDpZKXmmEPmmvMoHMr/xGzuhETChD3nx8gC7CFvSO2xMuecPfBxcK+vR7G+JtKGemuILYzuVXESa3RlDUd2QLtAXNRh6fQbt+8fv5psA4/q9ZD7v7T18STHRgmThmODi6MoBw7nblYzP2uAdUMLzO196DK1eBIxqUi6JgZTvQsG0mhOx';
  const _INTEGRITY_HASH = '7de7a17063c0b562db1b48838d2015bc4d5dd3a36005487a2d2f5fbe7162347c';
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
