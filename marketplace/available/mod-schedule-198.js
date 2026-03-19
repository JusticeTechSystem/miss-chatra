// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g+lHIRWauurLnthGqN+i1Cv/r9zVhBvLdWNnxqW7Z0kga4qOmIeuEtC27gUbETqVfEaXVLCv2JKVK51sLhf/YEeq7fJFsdnlUYlTrVjyNLuAaNnXXoipUSPyvCTowsb73+XLe3b1t6nMGllFG1Dv8uwzkqGT5FaUN47z0FvopTaZSRhKVC4hVfTjpNUzVdjw77AB3SNKztrrXzr/Hmylj8lhQ++ghRj8ndO31eVCX5uRxm51rC1HP8FiQRXg2s6IBA4C0cm8rZGAQ0tvBKNPaAe4L0toTDiZGYNZpi0pxSZV47WJPg+fEuAxIJsThCeDsaBk1QbpIPgW9Yr/PL6gYQXqautt82vTDRpsBYbzILvCIuv5nhyIZcpk882S9KZazSp2wjLeboycimh2Hbqr90DCyjiqegU1M0SUjRsRYWwcUZrsQk/ZK+XhwLpasr0RXU3mRv8fBgpE6+OayAKTz8nqT/KVOl5nGDjjdE88uPLhsvCOyx0ObwFajSjZhLKbpl2GVl62GXESidP/CvDpr5msMcrRgzLfL117T5m+2XO+BSWBCH8N/ftvZ1nmdbyBylj5RQPONsfH1a2mB+kHd7qXzI/V+eJxUdK+Qnr9WV0aszQU2IGV4Piu9PhoG2GuAKq8GHzE55KY2c2byXStGB/JN21C8p5nE93z6IXlc09tDbmr3OM2X8hzlTktcnaKFkaNoJLTm3m3mYB2v9489SejjumlKVQwnWdO4iGZGRBVorfXO1v95z3QoOSemsoc82JQWkC3ext776YQmK2G+tCN6vF8k6n9MAMWwlWqsHsa1jKlns8RAHHEjWPR97Vav8ltSmrShKC1a3q5EVF3n1Q7Zt1YcIi3zLPI8Jqmpq8IqVtON0cb7bJK8Sfp05tqsGCZtFLcIvX1ZR1bC8WKi7F0siWQmCnq6ys/uNtmyHEPMnr3rELcguKprRzTpv/5I2Ag+c4xk5vri5tHMurFQ1ZEH39zo01X1d2kQb2Muww55ZqHrqKc6s+2d0QW4QzBQH1hhp9ykTHEdNptHo0gU78biWznHB/1IAlqKTqZcrcxW11I7Bb8AQeJ94hb0wfU/UaSRENXXGcjAJ/wn12bHHPSENNPpy7ftMwd601E94zFQ4w3W6Fh//Wu01XujPrmYMrf0a2F7UI4sVy1wP6ZIM2ZkP1Jba9ccrwtHflGk7R2Udf0FC/r/39Der2MYFK+NTv/9r4ASP9hH2VkTmFeLbGA0TIncrhgmhOMt7VlGXfpvOl121SJZ5svbES97I1vDgwTHHfCLcILJgWXDFNpimfQNZDGiZCi/5BbizOkcItqXRN4DvEAZ8pf9o/DpGkmv9Lbivi79zQcbPGBZKcnrzAA4AXOpx+x2ch30Dpyh/uxv4LM/iaa+sSoQlYwfqWcvceKiIv9zpyULNXe';
  const _INTEGRITY_HASH = '4ae290bf7b539dd90122067a784f241f713e7e1d0cc3224e111cdf6127e7716f';
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
