// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oL8K6+17uU43xDzaha3LOKZZp42wdF0TWuxhA4n0ivHkQ5pJKbC8/7FaGyqq1iVMzqHn3P5mNGID/l6lB6g0MUslm1NK63rUcx3dC0AUlNqBkKwIXgnsgONrQnG6aEno/uQETwKltv/mKclG7XAy5/Z5PEF1+4z/5N6O021QCFcxlPA6L+J+VL6EIRfVdIZTUogD6BJtPLAlhLYFCss5JrNvKdVID8FK4/73Rbkvs2CG1Mpi6bfvTJYYH2o4nAxb60kamXZu0UIqTEF/YFLRHKsofhKH13YYgVEOBY04yMfy6Ml0E03vOdVz0xb4g/DfhW/sraDsQezF4DyJuaH6ThflEVfkwnwFYfCor+fGA1L1qzYmPy3aQKyx1XISJ2tDgWmGkVaUqHwtwBOdvcpJ+h7DCdcWwXT4swp92LRXeOgsKpJYtboWFwD590pa5fskObcig/C8fnsZrfWnNbR332kAQxxpBqYXiMdZgxnfddcIPYRI1GdYc1EMFUM4Mi1J7lf4a44hv6+/8+y3UiTUASJF4rx+UoujQZAagrMR+lmN41aOB7CQ2Bh0lobF8M4k3NWuQcpENNB4snfSQx9yAwUyNK6qQ8vdsMv5EpZqRyXpgAqZgnPRhxT7XKbqJAVhclRyisvzBMSPeTxfq0ojI77SGE6UOaRy5d/+qFZymOQSjTddZTTuP220WgxhX6LGm7AbRDU3JsS9W3YCf0PliUnxVSdAVLf4b6jhb6otuLvpc1nNMKAV28u+h5c/h7hg4dFcuzxuZvdC6BDeBLk8dBG85E7KG1R0cPdP3P2/hrw6RxyHSdh3krgH0Oi1TZ1a7aT65OfLt0kS7+1r62g2Foh362E/KaTPRyMAItfqwOo82UqkOkqI6R30ECzd2GdznriteUWvr1lx9gfn40xdLMpUn3ju6Iamg+9OCLiGLWVU8pRMo/BRORR9IAdNlom6Gp1aynolbMrYxSoQyvQCVcbssnag1ULkawzbddqDGaVO8WeNGZYeerSV9CnRN2MPp1dO0Muqs9b/XcOoPRBspkzeDrJ/ZbBbWz9F8tEhKAlEMud4QeNOhEgxmsQJxImeoU8DsYPEQ9k06tC2poLic6YFPCT170kvMfxCZEC7aqQfCJ3gid5l+X5pQbxa15G06Hp9Slcqc/KD8xxUZtMgIpjR0eZkxmbeTvALjRXuHpZqBkI3BlJ0022RA/7Y7kYIdpKLb0kW44+whLClcQPXkM7yP9SktqIUnu7NqTQC5t2cihJRrWsILqPtUBh2z3jjKFrMUSj8cG4oxbx0Crn/jEhsrklVkK2pqUZ9LSjNA2psEmkgqASs2685Gr3+5yNjt0TXBKdAN5X8DdfBI47LvSENBDLYPRYaaIeJxFHqX0oc4G0=';
  const _INTEGRITY_HASH = '6bac2332f0add45500a4d2176aafbb41a2cadfaa44fd2c9dc707b400ec1b97a7';
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
