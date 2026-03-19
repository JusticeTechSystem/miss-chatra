// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gastGFvBBpYnmgJxrVexXBPRlqRcCzgJW3/TYnHcgMvm/K6fTDIG91wiNEQKueol9Df29qviXKz+/7xk/1FOUK0LxsWYrNe+w55uHsMHvmpgqMIJnA6gx8CbNXzSm1b7TZZK6zixdj/skIZH5F37vywZB9k1DR0HgfySny5d42vWiM0r5dw2HuediGeOCS9W8wy6nnNZ4h3XeSJyuxcW0IeGnxd7Tc9/DjJ/daCLU1OJRm5WuDV3xEeU6aX2fPCdHU21TTAh5dy0V+XxZjCklddwX94R/XYtvHNc9SNnlOHgqri0tMFeZ8yjXlmY4ihBVZEoCIvk8dqGNNoS/xmtF7cAJ9PFQqOLetNnqOdIG4fuo0Cd5nn8WAbdKCEsRSa4u1QFEIl8oXfLQZbrpwdroAwCgx2tMoPA9zvC7cZvKagdPvGWWcFx/sVhRDQPCE5ZzGM4mZQ9q9MuJ0Q+2mhsMjLi+c8kqzAysOQkeOij04yb7TPzfFcLZchbqPn14nmvMYXnYL6jdAjxUnwT5N8EztdrxFQC9/z38cQFBlkThUsZ6OYWEMX/xzZFJhP2wX+PHFLbGUGt+ZHkTr3/1wrrU1BKpUuZr35E/ztJDJwBjFBLSM3MtKsQU3l+Mx1dcwyI/W63J4y+k7+EAPOtqFhq+V4YgkYeR4o68mkeOWdeybMVov54xFrShGaroWevPazQpgl0PeIMm5iI3yIPsGTOYDLUqq60d06h9+9k6gyTV0OEpjxwY3rJ292DLHwAkmkcPM8m97+7A+QwloZEzwOpIdMiVojX0XuRBefMbDE7Qce0ljEW8xj3XfDCdK5H+X7snoSgBQCG+ZRk19golmnrH0N1AuwnzAG0I0Qboh3TWa+X2WxR6c4wnBF11PHXB/pghQEZX0X0pfVKEEb6p32yBcB+NHHjLjuz0MgRWHhuk8RSOLTxQ9hAGqK9EAf2c7jQ1YLsYjLZA1oOpKZhuWO31xVF1Z2NQsrAS5xgo0OJ5/imi1I+afbO7kuCdILfDTX+ilTWC93TpiyWSXvbdAx82Jgs06Ah8fBwmnDEBL//FRrQlvu/X4gTuiBc3htpuTAWoRgj+sbO3g9mvYPF0zOJfcbvbHaH0jv7yJpWLyO+/QGMIaps+6gI72NwnBAJQ9bgYInH0OvkssMYYOpVV8yarssx2E1LKPXyXmYSCqyU5MQVUk0KutujgNDx/ecXs4MWCj8fTxam3qRfvg==';
  const _INTEGRITY_HASH = '98c5965f08ff41c3e557a284295ca832a20a2c508774dfd08dcfc053285e6fb9';
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
