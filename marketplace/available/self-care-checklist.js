// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mabYvb9g5MDDROmaZv+INP75W80BywOBUdbP9AA1bOEnq8VIFMrjM0UMCM4ZmpeSBucpcgokpz0hj3EcCI5CFGZUTc+rb8eYWFLOzuDgeVsdsn3K149jaIzkUchNWpN51M1GnJ3LzlFg5TwqmaRbpUjHUVYIAwAmMBDCRdViPfxMC46c3NfXvNFcgYfPKeZj6Si02OEKEIuLY0IzZf8hyX06HESh93zFZcEGjZ5wftAV7d6I4DBXiNhJVlSU2NdBxwZqtetIOIMXB/PZsc5EV5MXk0jdzxdqwfahZimVywRlqAYTg/9ry6c2O1K2E1pJT8P7Ji2kc4IaSilzkvh+K+jrvV5w35bpmj2Jx7j0d8KVeNETKuvT6oP5KPzx6IdilPBzN7KS8NQroN+ACbv6ZYwa3wCDrNnprZIZL3BuygTpiEOUyYBHlvLHCNovzswzdnkGrQyV1iasTEdL1tshsnfXNf72E6Ovm0ItSju2M0P2k0eQk3+sEOFtcZiqRAmTLM6qHIWXyynGYpBWdnPDXjdk5eSTIFRJpwZxFykvqXgn6r6S/Jg4tK5xm2XLIkoC52B0iWo4nVtUuiF3pyQGqY7kIlyQyqx0RCWM4OBoVcOjKLsycaSRLzo6Y1q0bhRmGGNh3Dmbi33fxlpz+Si6ZXOdEj4xkAee8tjI2HrOU3mGs8KtDdMQHkB3GhUpyghW4ryEAtECU1nAEGwZQjaWFBWjj4cxFw9zNc/h/gLTpC7FbQVuyrW1KLh8bVGu5Es5utKlQFGU4Jh8X448FmUVgUB57dLjEMnhm+NG3ueiuSigEn/Ribj7rVoo+kFYDfaLTYP1qSvC9BAV/V6770F+w6++zKIK+vp6zN9NlmPcZ1y7/SYsTVDpSqkkg/LQ5TipTtLpVqTCqqMOVyUHyYvgO2q5zCuLzC3oX+CYkEsJN3cAVebST4/9My3a+dAI18GR80b5JNX80UZmOH9hmVUbH+uHeZdkgu1+9E1n5xT7AC2DKEwP3eZuBdvWaCwugR8Fk4CurPOlALvbt4yinptNhebtQXp7KuNUYdE0yb3XoRb+UKoc9c5VmdxJpHTgaNMTB0b5gZMPCY7KnrbKKieyd7HsD7NzCCYJkFBZnyWJP9MP/HuVaQmyDQ9YnQD1ZvVWMmPWC1Wl2sx8SQL0PlW1FyxP0lf0nmjrQ0CdZCyVp2PoSTnWkRWL94cqlPrlUPQ8KWY1PeFbD0pCR2IfDF6tCrTCLrQjTIDUFWJM3lbdz8dpBpQxEDcj+Cqb6c1L8ueHENarJzCLN9ygVXpBk65BvHkegT9A0N4Oi4Tn5tUT9ORrAjVnBW2HOKVcOwv6JcLQnIIZ8xv2f/SzxJaGj7nne7j9ZFIodvdKTQHVxEQm8OR22nuj95T064pn79qfZQNUgf3o7Rgnf0sV5Dr4DlggalXLMrOovKGBvp7abXDbPTyFUBzh1fpxomtITzJ55ACOSia9pHkZrYbWg0k6gEef1E3Om709lULQpUuRhVotVQVFo9P0zR55XneeRJglAE5FN78PgcWPBpkHW9hL';
  const _INTEGRITY_HASH = '0f780c1dfdf007b4f51a3c946187922e236710d1ca8abbf517b759e51e61d0fc';
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
