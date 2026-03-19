// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm05os23LjnsLw5WE8KCxLVt5UO1cavJ7tl0UYMqHfJF+L5kmmEWe3VBGbLL7tJrolAxhpsdjc4x7pVW8qOjupWtqRbXIWepN/TCuN9Q/f3XjxuSbwenFPRNSAEy/3WxgmdoKAIu66dyhDXtTpUupPDQZSwyTxqQ5+2Yv6xnKR7QQrUU8DeLKteLfTvZuwOH12g2LgSgBIgu1GWXzoDAlC03HyTu+EScEfeoFJokde9d6GJehTWh+NATtoDagxZOcOExu/mstLq5cGujPvEKH1ASudonwLUi5znLw9lKUJWVf98L6veKiwj3GQT2H8fm5y+Uj1SetVLnHk5LXevEFza0NRggXdJoREkIbsN5CzABHn8tNnI+zRXwQ3FSimseTKFB7cP8Oz4BodM8XL9cJnXGh1ge2dAKOhPzwS5L21+HT0nH3QowUJycCMswzvu1G6nK3zL8DeXRPJtNto/qOFEl1AUxltrvzYx/5TvqCStFaidrNree2EwaO0I00fv0C0t/FZBnZ/o70rY7nY7ZN5fOXFOUqzpdupWE0mZDFnPDQYw7i+t9KEdrE+S6cfkfXN6aAxvLaqC2+YKdQueKGLDCqmw+nwZG7dM78+pHvPsiknTqlCccRPP2+A0CYtlF7GPMqUtns3CFPwYBVhsyR4WeWRJ1O7yNWP0D6e+L3csQmHjDDjL7DMWQDdC94ot5AjajMnnbfaZfPtkaF6Lhjodkh8XxpCrBGibtHd8UDyD2i1DTNypjkNzMs5dtmCgJCBo6I/2qf0DZQjeA+a7OCraquMG3j+QWd3B2eebOtBxhQHW7Iem6D0R4KPxsJeuhawCA5L3yMDMdKR8dY4NPcqPyFvhjsD/E3sSpda9mx52mpzXhHEQlKArP83iJpyVNDO9quUVrln2GkS93pXUgKqVRzKIW/MHVKOpYbXwG6sMc/2AcPgIwGXRdZPSvZq86agdragx7J3x240vzzuHtOyXZoznkeKk2bFA7nNB1UEbbCnxsmdNEVRHxFcRSGQVOCLJowQRu/r817fx6tH/dwqy+HbRAWAyAXee6UopTzW8/Hg8l3Jd8lc7gOw96zhvFnf21MZBPJgMYaI5yi9Zxn/9+2yyov9zSkGxkOKRugK7Ztn/8Q15oV6XTQeums699Da+8CP6OwT3TSWUeasu79XRhFcrRb6LxligJnKbxGdTios3fwFF4xdFkfSZd5KB2F+gNRWvyebhEPD3CmzlEWBCbP9ki5i3Of2iN+R6qGMI2bBSNge5ZBAcFSa3OQiOdKflUfTJyaBAxAiuTOUMrJdr2lTdaIGeXzDIOvUpTIr8yejEUynDTpihqM69qykOLnetiFGo40kHI8EACL2WQGiAUZeKvAxqIFazIr350PWqE4QeOyta0ndw==';
  const _INTEGRITY_HASH = 'de6eae996bba5bc3283e686990dfb3ae6b49d476a7adbcb03fc01b058385ebd2';
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
