// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u7NiRMfy3HG6TI7ff80NwYkSS8cEz9SQR53SmyeSaILdVswfAmZwEQKdf78WTYxPuFckMLIz8OyCXd+vNc5s7Ntf6Rz7i/vgnxCjCQXz8Pn9Ox5d8AQCivyMvXGbj0YtnclsU6o4rZCtVCenaU7oxXlUqu20LqITeBVQI/XUNZund/ciYw1NCf03o2WplYc54ewjVJQkXApZjR3wznwN2yYuT3mwfGObZbs5hZgiQxHCIs8Aos3zH5WKNtTOvELG4+x25z7RemK6YrkkGlAkVczRqthkM8rJyDGPdIDK3CFfZPgTy2K+MUVmyz90xKqiBSuroZ2szvZwqu1aHxQ6Jl3XWXT7sbw/PbRcR/1LRSGIlxrqGuLA2czVXQSMyN5dOxA8jyNc7eAoQilnnSaHfRoEygxySZR0S3UqUUG0Ezvt/U/lTy8G+jZRRrqPr7A+X7Z38BTH2u9/eiRPdNdc6HdtEwFc0YdG9BQukaAhg9UpV/npjZyY3yBtZAWTyO7RG2kEuc7qgSR8IphpN1X3LGVPIcyNxU3rhCtQaQoeHKnSqq1xHFl3bEjjP26ifm61qpqCzw1qEUroX3u5h7v8juHuI2GjfI0Q3XbIE++RB9sb9ZJDTzyA4i8jP64FTY26IPsNrQ8nWLwsMv1dkusUKF+ZHfu9R0etlPkCwf1Q8unXC/dO26vOsGx98uxD4nM4+WOJxV7tGXBL1zoAkJB7yvtUVPqwo9HrgI/3t+Gfmg==';
  const _INTEGRITY_HASH = 'b6a28d1697c553469c582aa7f81aaa81255fea00433b6b961415df4268faa843';
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
