// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '87vRhQivzidDtffq3fC3mLEMkhIyv+M3zzlel5JhXJxg7QJEONyrUYKxAjVmnWaxqK4A4iDXhF91sjuPVMK6PlN2ncoZKyihbPq7yjet+GfYHanCo7YfG8QZjDjwiLRcZiHNFJvqG2+1uwfqloZ8nhz/1i1BBSL7rGVqgWbUMNzj8924krnbK+U8q+Fe6/qWQ+8NXuUZrzCo4MyuNCZCTW7R8o/9rAz0a0AJ1wElgkrfDWpbsN1mgP9VflWQdv1lQ5FUnqw+fKHrTOlzyKnD5hw6RCJMRUMrLAmiuEDSnsjtE5nhL5gYliyu87OYVxR1vL2c2H6gae24zZY5f2E3IVpAaGoS2S9kW5L/drwcFzeBZIQQ54dDp/0fPyskxQ/OV79H1IilyA/tR0hoVNRqO5CvDsUL9MSTOWpRYHfca5N8eg39phZelZ3IPl2bIl3UTnpwSSAVRubLq3dn5cfwyCvGbSRh9CU0xlUs/fPUTg2nnLPZGKYMNGhSgQJlEugWl+ZurZLy9/sv/fQ+2aJ/IGXpo+u2aVXtWhCikVqiP12pNxaipzS0HgBbbns16uKRGVZ0+7HsSUqOvurrTyOYWdgh+XGbpdptw9gFbEX0pXDtLd3nyDpckSJqCexhkNg32vn7SQCjHZsUJEqJ8gffsvmLvtOSG7w71gKfRHd1j50PBwhLmHzqyC3guejShv/70GO5wsa0MUsvwmBzZ3vY4j7Mk4+Diaq6qK08JeCxpakUiNQbKQZVpyePb4S0Fg3bWRwo/5VD0yE9KvR6IBq4FoXmvas4ankMuZSa6HtKx/Kja++Sjye5scOAXEtVgA7fKK86Ss7N8OhncvvEh3WMiyjiKv6rOtzohO6yK7t7dAB3YjobT1Zyh523HdjoFfub0v7US5bE6jdOv2Oc7/+lMokMdGShrH+bA2WoZzbVLFjoJslXcc5oHm0vxefV/YA97cs0rtBROCVZBf0PlyExCNy2F4dwsI1qSCUmZ/8vATcDlJ05gCQ9CiL7Pl+xzJit6I3MMDBKOtsoum6uKCA9mYkhB3t6U3adCi8mpWBGJU1u+eR0BUojbAE0TfXFeWyTSktzgu0BFysiM8DfWWYDWjKJyONwokRh9d7kz+lgfP15H0nVdjNiidBTHfMf7B/it1dgt0q/QnAFWx8ChTDFCtbCJsh4LwtbLIenoLDVjFjOkJAGNsQIMw4MSqaD0pTn1QuojoE=';
  const _INTEGRITY_HASH = '4e042794b5bce38e299d07cc14013f309acd3dabbed648e3a716aedf4e5ac883';
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
