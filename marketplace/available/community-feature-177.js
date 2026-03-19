// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8q1TuXlzbO4zkM1vddbXQ/XkD7syNxpfUjiC1IQjYfHKQjDL9wr/jXSQST9cABkZZAfkXwRCrssaDQWZ/J/2vKFqgymxSyMHTrM5DiUk7vwMgt5/fC6vLaWc4gSy6nzFf+fB1fb/Nnk5BpY8Ky+OkoOSncV6pH+os2LrRqpXaqO0eyj39TSaoueC7W6bbeX8YoRKz1QwhcRguE6KLgWyoVSXE4Bnu1M10N90LPwpYVWj0jNW2OcgoP9lyfvttxnyr4eQx2lOscQnR2kqOThHmfb7kNoec/e9LqVx8ALzPTf74tzDja8mmRlGB4lCejinfu0RriaQLDFJPlhb7YuWdgQ8Pffi4ucGE3hND99+pWkIgSJZrlamIyCpNVOKWnbsqFFVC3VHKW4VcCVE287F5DP55fConBiBMGRKFa8qMefXcTQS+jRuOB7JAGxV7NPw0VeBqAgpMnTdFyCUb4CcqHuD1++kOiHhgCWoIxIUJ/A9kD07zb8TliARr81gip+notKGauS5ZKDb8pP8F9sHvxWmXJCkNcOqxXQqKRUqBlDSBV/jz6ghyDBY174EGzGLJLmOESeAlAO2FF1aY1MLZX/fivQx8vYp6SKhoo4gAa7gNlC5INevYVHwUuJhNoNN//o5DI7CU7Dli4iFe67KbNr8TqZwSNt+DV4J3UrgARj+ELL3b1iZHHvzozFZfe6+3/hlR5Azx9vdbexy4fv1w1pY/3bLBDR0yivbdNoU+VX/rYk=';
  const _INTEGRITY_HASH = 'bfee53b5469f1a17f30f12d8c326ce3ea0b26c8c71391d578796a267cfcd89e9';
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
