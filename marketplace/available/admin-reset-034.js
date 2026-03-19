// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm/PDoJNi0zx9/FzKBLwin6W5SzoMvdBbpvpoh3jWrLcVU2bsM+W3lg5I7pKEJrRHIiDiQdSWtjHqlE7oEaPYH1sKzpEVqEohIjZwGTxPf5HFjuhjf9d8Z59buw262klN5QQLFvmFc/cuHvzcENefq7YHb0ZYSpLkjmYLkTEJk8xHqsWNIJ29AAFqaoYxkX25y/tJXvADeR2uhuXUm2cBEGudnVcHcUdVQ6yOcNmJWemR/K4+vKB2AUQ0r5Z+HehLLhdwXFPhcU5T6ubVrHHkgrPRgwvTE+5xafQIhF/J7eW6r3cXb88pRV1lB3lzLhtLYbi/Tkmdcr0St3Z8bpqIBxRgTGIH+Gz5nlpcm1vbkq5CB7R+Z3GphiKSmCaX8O+FHsusSH67B30tPjjTqXnJ2fbGe1Di6kjv04v4SDIiQSbATk6oapvf0SwDL3heKsiFadnMiOVdRq7N3bHJt8U6svi587XEO4rl/spiczHDwYf8Zqbl3JxLIoZjED5pVZDqqA1/PcwZ7wQT29U1VNULxidRlLWF9Cl4yOVDoAotWXpIk9ORdyheyD6G1mqM4nDiyoEGE6kBNfvgJf+9elnTUGL+Tx4C6A8wi192NG0OOfcN7V6277/1s1SVGVRLsTjTAW6n3QnJ3yF5HdvVtPhJso6+0G5dMCUCFYiTl+cNmWrYiOtl6SEmLepJO2pm0fNptu2lf6r9R6GcOfli1HIVPk2kaUhwR+aOlT8FJTEu8ngBz34sOhGGHAuW9H4oW4iahJ1HqKtysDnaoHjIOcdo2gFLaeuQDIn8YHniJODtGXW2EHFZltNf86XrJjIriINtqMtdUHgMPynkRChd+7I0IC5FqSxndyutNRb+1xfeHfz8Lm6q9rsMLtMUcBAFPF7Oh+jYIbCEsGXjJyiBUKBY8YC5RKoyMk+pZVcCijhICfR4dBnSxAO6YtGBPBKTaMmrTgg/UXGslspa9cYVZQQNS2B3Jm+/Xzsnphq0evMJiRfH6KaP4dA=';
  const _INTEGRITY_HASH = 'da17792b1b835fabb0bbc17b0cabe1c448d44852eff8ac453a1f041c5829b11c';
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
