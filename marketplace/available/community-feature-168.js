// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u+Ozcfnb6aua28pnI5gf7+3mVqhNqBK330pPoi3DL3YUqwcjKgaNAEeESjLEEabdTeNKJoBfk7LG91QQv9HPWz20qXtOd4GysVMOEO7GXhkina8zI8kNbC1TwN+BzpNqp7X5NYDKAbSdm1qruwyZ9Jf45RNhTU+Yv2w6LOBegVRdkfGTsdi5T6gQKusqPELWYjpYRIYFNR6iSPc2y1OQznIPVsx+Y6rdkB2yVCMi2SuO4aOF8SR8CdwtOLJ3E46kNfEnO07xZdNsI1cshA8b2f1/ott/4+fvTJxs36UXRu+03KAEB7rrvCaimZ5IfFy6uA5EtvGDCXu6EEmTb+KWdrXPtT3s8BJNozgAWpwvTOHV6DSZGvNX86/LR/xBHtaesdEquTjzS8hktTpDJgAN62SOpYxQTe1OFYIpJZps5xTXgFnBR8TFDm7BnYMHPygbdkrHQ/FOcNADDKI6LLpvGMQgRNpzA3PBjsMNZEcFuwZ6UVp6DyUT3nSdXvS8BiFrVv6U7UJ/d8cIRax9Hg6LRX8hoz0NLT+QYBECQgOqSCMzXCjnMxCV1TcreK9HiFMkouUc3oHQ3ZFSONw7A9dtMxm/ym3GDYDV/eJ+k7R6tY82hFiIy4oZUejWUez/H2PYfveMhFRIt6k6shFpMVm232N3NTsejFw+2R3+4PRDJVqxpgl27uH5f9TNPwtYiaC0qJMxqExJa5RhYNAzREdAcL0B2nmOj7Jh0ViA7hE=';
  const _INTEGRITY_HASH = '10e0cc5c9bd7bd08033c45ae5ddb93244df346b1bd005d8abb5f7093c517e3fe';
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
