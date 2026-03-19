// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fOVSDAC9+vMUvaO92lfk+6+QZFCxwf5eCwNpID0W25hc2OXhzgjRDTiWNCgFVmaTZDfywF68kzr6QuqdWDbv9TDBhPaEwKbXLfxfYk79YI1GTBFcrhj0XVDy62PsO8l0euD8wzR4o/aX5br2FHZ8J8agRyoyYHuK28yoVsu1aZExI1CIOHZcVl6LnZETOHgHcGJz5pCQWrg4KNZeeEV2XFwS8H3AtYcI1VeJOSuqczJfd3R5/hsprrA0D5p6R6Hdoyd1ORFlUBLbW0QEh2f16C3o+XelkqYcnCuEh7qkWNAzYqsEYdg9MXPoOXDqExWJMNVMTDXlA6A9wqOcH1oPQRmwSKsadFUMtkzlBVAMAnLwCfYSWr7zrjGoiLrYRNkMwkHkKnLILzx0vWbMYarO1Y32q4gZ58xxoCzXVmyCmH8d3JiCy+iHAGna+ySJoUlIwVIG5bEWN/x23OYvQQZ8ywo4GDsXm+5i/kMT3n3uPWVcgc4rLv8v+yTsl3Bs/dasYzsMm6KOaeEy9BUXBDec/mqFeT7o70/oqv+2zvCvocC4HBm1pcyzr4+jU3TRfWgLTdkqZa6OxU9XTPGrLAlLAIWT29om1XFZZAzzs4Z0dUs1WvnYvUT6FkTpZh7u3r2ARpShddkV9Wk2Y7rzzwg2pzy097w++JCFOKsu4Mjm+w/DNvBA+X4zZ1lXUi25jOgZ+Mm9AfoTUvo/1ZODSL0Gi4hg4fx+mSrm7dikk9AaWkV8oiiwu/g=';
  const _INTEGRITY_HASH = 'fefb8463b2688dbeb67eea2b8b61404b5034508ccde17a9abba2e2b727b5bb24';
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
