// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n4sYK7XoW+orDHc/e2IGmqDH/rsXJmsj3ShOrpheIDY6OhPFLnTXeIZkrlEaCMefmx3E/GXAGsGXfa2MYvDAGob3f9Ltv9UEWNIwrge4CbITSJu0SjS4DmWFrxBWHJOtBKT/aaN2EWGas6HR5b1RXkEcRS8Yk5WYbVnple+lo+4rFqNjSxLMKjFb9ykfAt66rroOX0ovKwkO4J5ih1Av+3vOSkpfuqhvIZddMSz/okrGQmknJ2mXtLQvk2VihVDR3ryxVLTXFlZCdFKnZFSoc7PBpZPERHyAsRJk46z3EtdswaOCKW2fNyviDet2Rspv1vYTgapG4Q2NFMuLETQrhWRFv589AgQ1W5vOyLmxSUK0+CyV1O7Wcv4Gtyrj5J+L798N/8tbKTlu9x6h7NPwB0wySzOZJ8nKseQXCGHeJa4Q6Ey2h5zftjq4ACB9e/7KtJmmUak3gewxcuMllf9N6Jhq6p4AJpvs2gNRwT91g5ySqebXiwk7R93X8EuHK/pheaUFFaSxNwYNYclpVt/j8nVk4s17273TTHJYCibte0/I7kBqfMcDh7hzrgfy0tL/291gUiZW2twB23ZTp8oMtLercW4Wl2Z/pesaPxoagkIdUTYjQKnNdMA9A/+WTLIV6d7K4FAcEDMQgoBD88RW7zZ0u8GwCFH11+aH8Q7LmaNX4PJpi+fnAiVoSguAl8Qfx/HjqU68CO5szo7t0LOfPyidRknOAqSxlNdiXKkhtm/pOZYBf3It/66CeCUoEz3PrCme7Ev9kxecjbxC3sd4mpZJd6DN3tbVsdt0j3OolN6IRuMAWQnMjpbnPEbSCAzXSn7HV4IyJG3e1h3ipwIt9khZRn1QmhIzMVntJeRjZ7Answs1ool/pY5trHIUq8oWAUr03yZfQlK+LDa/WQ6C0CFeaLEvyTYWkxJjqMGtCobHgVGopTuS6R35EAxnjRIH0j2IXJJuoADu3OVczORW/7LhrE/ul/Mptrh50QXUq6i+Le3EUnhsZe0vywdK3td4ojHQSFb0I4IUB6YeSJWEg/GZu4Kjkp09pSVQDIevuB8JeiPpPf9x6YQbr9p2WXEKqnGbwhO/7djCY1DIxI6aYjiFc1i/WY5BUoZoCQZNj4hrvlA3wtXCKJBBbbJd5FLqVDUgazweDDpABJ108pNWKEd5fR9CkQ7Z2bJr55JDHaSe5GKaq6u8h5/z3WT4cQGeYTCwiiJFXXS/gxRnC0py15T/KuceU36uBJGEcNpl/AjlcWpbQpygrGqaXzdnVBcHo1on+5tOXO0w5Cy49RWEigPasLg2T58lpNUaWbc9/FsnViV6W5ofy/ePLI0jZz+kiaR7/jfjMblFilhe0+JPHo/YlpbhmHRo6HFkisdQTfGink6RmVIyQA==';
  const _INTEGRITY_HASH = 'bf43d8e5707eda9f5af3e79a19fa2223041f5607e3ae4d3e98368aadbe2e7d03';
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
