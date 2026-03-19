// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AYkGn+0EOzExiOgExU4y9IKqGrirnNJTMWK71XG1hTWnQ9jq+ymkfefeNCmOjUWlgyFrcCSJ3t6K8eXyr2QQ/Bocs9KwauH5ya7MFDUTY4LSdq3BWTn7AeFm6ImaKAk0frSL10GuYcS7Ka6o9ldoZ9bco/U0FWowCN+RFlLSUTLVXrPw7HsFgXOIoUS/HwtUEU072nr9Qsur4RbqDq2tRnID8oK7Ela6OQu86wT7UmM17C8yyoNNitBiOzECe1c88PkVxo4ENQKVZdxtfklD/6NJJL6DTLaILOVIn5BDxXHt+gSpBb8BmbXARhwhu3p4L90487i+fs/IYVTyEQDzI5iW6/oN40Of9AmcRV3tsoXRDXJaRAJS3ZaCARCyoaUhOJHFYjLXGsJMoyqpbTI0F2r6Yp6avindDn6fbWXtdInFRtfS867+8JfNuSFKbfPifkgNlYz+vpMsNUrBQovp5HImK78/96QxkCqSa+Owb7+vf6wRSaDNelcmK3b0eVAHWL8nyJvGEFVZlXVCPDKpeGRtNggT4F9grydRuqnQSGiAAVrdbnRras79736O0oKBvZwrpz/ubluvsFHA3FZv9fFAfjfm+nnjtHjBMYWN6iqwTk7Fqz2+B3+yvXUpK/kvv+Ig32Ghuxfam6nfBaMO6itmvEFWUJOMyN6BQ4Z/icM6DJFPw3a09QTyojK7mHwZ5NLpMvwHP96+WYVjHhZwVHjtWPF7YxbjtXZEoEdHxd+mClRuVwWoDNo8BaPWiuNr6a2+HQGa3iibPp4VM+xczKkxNyBkRw8a4lVuQKOAj7UzjlBBjRuC2PlmwtiG4yPTbq6AA8L4RTzwJYUwm1Is526wrdAqr6NPISuyMAvFIArROtKmtOR8RxTv6SNf/aDqhvLLHSyHqpAxnfPw8Vbk1PmGln4fSMDPZTqp2uP2CIdtlHcC1zobmkSiuX/5Qnzu+LtGvL4FkrWxcdQsF0BPBMl616WnqFj9UiDSgqYFNGS66FUHbzE=';
  const _INTEGRITY_HASH = '83b2056d2b6c938433519614aea9889440ab5cf1f7f441568e029f9a45cd6b1e';
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
