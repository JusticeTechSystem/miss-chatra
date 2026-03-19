// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8qGxva3EFiBgnkWSEtRia2GO8ksQWd0uW5zpSEyiXC0sijHPZvC3sdvp+/s2YO/ELuB9DQHq4xndQA4V2plVH22ziUScUBd0IaiSsvebNCQEQbts/HWG5WwFQ3DKuazqT+UldLDiFPE+tPqEV2YVA3ozounraRzOHRYWLcgBK7frcbsWXvNr6sjuvTykZFf4L/75gsQmMZsFbnIHf9hpCSbL77NlM94Z6y2ZJrQrbTAuoz+pQRJfE8NbKnx5eVU3+1Y7WhVnuN2+lar+SutXFh2S2aT07SxzqWz2ES2tjH5PSHMBlWHsdhjeQopIA2YXbWHu6bsFw8eo0znsJdEkszpDmr+svMHgeMd1ItZfqI6i+incrr7ovTBCdP27BxEwoWfuWczLqtn6Bav+L98DUt/FWab4KcousLw1wiclqND6brJ1sH2v0qPVCTgYrjf4lr2D+bWWX5iKLegbjX5L2RH6dvhnyOsFiXlJ1GM0NnZibIhN/CWablBczGLDqivv2seltYb+Qcv1hBxuimkZQhZ/qxKq9Pw21t7HnC7a7Qq4k+kJruneiL+HhZVnI8EjYOV10pvadPOGAePG3IwDGH1kFjR5fQA0mhIbtzCbMq6m+8g1znMv7c8JI8k9Ry5oByLcb1jNAQedG2bxEF6YPzLzkW13h254xLk+/ep7c8DCvs7omgjLvewJ+q4O7h0oe0x+Dk8Pn0vl4auAfyquN9PF/PEcKccz+aptg7bmjSwJoOB6T9TugkLtfWpNf/cNonCbttbZqhXl6qCFNaAEaBa8uGMOTSyEwN6O0UgU03ExfuvgbULlLqVDJfJxEDQOYE4iJXlc7fy36wXpoUBfn2rI4v5j3c9Vptye6aJaLcyEE8gqh71z5ik452NIQsff+eqCixwqxXqCOGaSVG87J5zM8zB2k6YvQzZuK6ItCC/xUz6Sw4cqf3NeCXeRwGgTQ9gKJJu8UoR+YvXeEwPMUP543fhpzQ94Ah5eeOuiUNcVqrlpLePO/7AK';
  const _INTEGRITY_HASH = '1289c5ccb581c341fc47b7a2d4495271d0b4b5e9e3333046ab47489dd2423f57';
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
