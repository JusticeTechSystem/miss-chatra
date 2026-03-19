// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1ac4ZaxFqoalsNAKwYXoxMVn+8i/QbCC3OJWScOq2vrJUkZJJF5knqC5jTxJFtKD/csnXCHjW1qJWVRhbqdDL+6nwb5xYP/0luclgBoc9DMEuEt7PlCpDb+aSd+Rz1BrpSs3yJpJwUklnCkYG3AHB5RxGWF7SFPbiNx2uxXJ+MCHmkcUEXF5bEe3CbWHQr7XmpuYzc0pF34yMYBVmKCBvm5bwg1/PDiLRP6DFhyFblRTXCQLjhSjoOI45MsnttV5CqMVtXiKfrFCwU2x9uCuWMoTJifyAskAwoDDUmfKj5OHt4g+QvpabmNqpSig6MUQOPdi6FO2v5ONDdker+ZbaBGtSj2lBH9aksvDE3iGCAEOTI3lqcTsYxnZibCfd7cav/kPoDiAksOG0JXFAwfPSuiGMzZWMPbBqg1yEHck7AJiwKWUVzPLu0kIM0d3UUoUKuJMoXf8nk4qjKJQJIdOUnvnbTsfavr/z5/SKVaomgjoDAPmLaS/Z3mR5kiynHWyplY2wSAjdGyFDT7U4BAtJPm//KvoGjSJguDW1lyMrWuV1OxfjXh9ycpwHjg5EZFOdHU1dc19cJJTVDOlqUD1OhABxGuuTO/FimpyXDsiLW6bwVwe';
  const _INTEGRITY_HASH = 'b2dd589f5a785cb66d14bf122e6ef6a8df690dead96c5f072df6d2e6be6fbcc4';
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
