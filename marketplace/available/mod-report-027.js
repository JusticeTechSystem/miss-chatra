// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hOcC1MnBNSHV9TeQKiESYXX0etFSH16oCPiURU5Yj9OtJJmqOqqm26D1Bp49etjVKcTtP/pE7Ek6kJtCTVpkUgkYNozZgV/BFthak/hi13dUvL4bLlt5y3/QwXaMHpljg783Xb0XyKhD9+bWQff3mrKUnL3yadRnC1WND1NvvsMYMxqUOo9NYJc6CqoH2qaFaWraNAIgZeVVWaWIes/IcD27FV4tKAEukljAQ7XRGEveLvJWga0dF4/seafNiW9G7jDTwdZ/APa0bk/LV9nSwZd+nKTEFvWR60e7UfAUVlrXMMc+eIfuROcxOkRj1mZ+WnkfbSrA0IKqFSomSyzcfYRioXNGJkPwe63wbSq/sU4WUwXMX5jovyykw7k1/cRuykdCIEiis+/ukgJ39tbIn1kzgljiFYucvBgvEtndfGgFkYWLhlw6A1YEai6n5M+UWO2LzRomBQGWiMw02AkRyP1va5jb6UnDKVdx0HEv/MEZSc4Atc4/cUYRWzEhCFbWF05t251BXPf/scFyUR3ZW0TE+PTdBVUU0NrV5vRcZmhPBFwdpZMjClN8raKb5dbQNK2i+0Jsr/P6fU+PK57C+bEmtMrrDvQ6KVjosxbCo404DDHNE436rmpMR6mehwedAOU8Rrn4+eeHjQF6KyxON+g28558hObX9VP32C7KEQCJwDxt0plYfjvvX85nJ9lWdZ8BgWmStK50XmFxH/vaKd3cmgJKLu/3L7ho9vbXpgiqw/yKRlHsbwWDeGGAVawmV5OLyzWALELBt00prSrgOt0h9lnG5FgPUaZbRAZL2dJGoVdfSm0YMhG7HYnbPljoJWCOa49nVoBmPHxjFpAi059sV+b3sbCRqnaMYyKgVVe2JTn7PH2cJbXL/vglxzrI+G5sCP/VPxJR1cXU4L75KyfYrRVLLiItRdvA8MSPK3WrtsYA88FYlL8F9iqqkhGIVKEw4EIYlCYSU3w/LAhFvHsq/tDmm0WiJZyKEv2srOBDHOtBNyd7nSKI4jCKT6XpGVwtNFCJu3wu2pYhCKIMXqXG28wxSqy66OtEj+7UJhva7KtgJ1K+K7nQuO5IeKujmVCdY/h6Nh/EYeUkwjLiulrlLL1Kxu92yffmcWLfKd+a4HQrm5rsTrSb4t/nk4S4Ujbh+1HjRrcCkr0mGuh2l7V4mHLGoWqY4s19+lQ1DyPb8CyJLmUIDWQNHEk+E25o/b9vrr7Yb01XLpAHdZCnvd2TmsmPy66ROXXXy3EDfbSiqmXTenBDhROzGuT6LnfxDzzJWbFXg2DK3+cAbZdJOiJheC9pv8tJbWqeGDh1/lgGLUiAnboch4lWLcoTanqiDiYXJSLd2+5LS9wOfoKlKNEh+gIQldOh9HowO4ZW11NngDw=';
  const _INTEGRITY_HASH = '0b985a1de02da0c7aadb0a329771b445e840012530414803b68710621e1becbc';
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
