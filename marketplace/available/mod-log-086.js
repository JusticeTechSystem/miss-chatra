// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fYkhsxei6AQsUSnxz4W3ZapfC5FVSFZLiL7N9dRqRKgPsgBemp8HXwpD5HrhPkts8hLi1nthtufWWJRX/SPUNJOlNY4TB8pciBWcdttggk9rPWXFe1LPc7xtK9QYlp7Zgy9aNx+UHN+teltoNBi75lheCEruhBvVtXodS/tf13tFc+IEGM3wfG0IyLJyZPSjAgA7dLwejZZl4HC2Xnd7nQdxoQmr20Jjt790YNGRZgErzVtTb5lZ1b20MBYgaciPtSpMdhWS5U7Ru3jA2EDDvectuJUBJCUABeAG5FPVxQUB+3GHejgdifO0yFnRRHpNQ0QiJf5pjDqt8K7w6Wm9Mq/FvamusBmzrH8JYa3L6uebodrSpCLQ8bJCjjolNZ77Q6NDNXWP5Ch5NZKIBdOUZsFL528ShJ7oCbV9zCEWrrJq4GFfnA75pqYxcNRaX3YSTIWpFlmo8U2rxk8HlDdjaApD8ak0q3OzfxA9pebdlmydoF91YY1fJn00P0WZOmOMhbfyaSDQkuAjyu1Z9EVtmCSHQtpFUp4QTOeb0KkAgQAIzeiEjFsHgSfoBfbRb/yByWFYlhL6h6pKK3H4ikmfhsXQS04ohfPhaS2dc/mhPqsjcndwKBOEWaB5VXOUCfXPPw3X4JsGZDkIL5bOPhCbIrNSuRFl4kyDLRONcbXxBHKAXEcqnAGwk9iL1r9x3JjBoDpuSbryUWqywRMcEQ51zzEJ65yJB/Qe6dFe0B0Ezv9Z19pCk4tjo/e4KT+Vh5THWDBU8wMdWDahsvZY4MxPjBwQ6AxclVWXMSBV6vKYfb92U1ScZFkcB9Qg9BBVd4yE3sfEYjuuz+vkQtR2ssYSMi//xqQ/I6k8Z0V9z6e5NEc3vNzbN1icGTreWuNo4syMSMxBRlmTC3aKsEwdT5SwJv/y2P/RBNPMyDsadM9Veq/4r4EYsVGHF3R0a3nOJvJnaZt/aQtYK4j+rSmaprFoLaGNzmV2Xvpk263BAwUB3WbfMTfxy5BUFjr88tDrv3g9ecqCscQt4gIA88CjW8lwYh5dsAOdm5XcxkZ0xD9pjvXxpBP8UgvmVEmA1egsQQgR7+e6p+Be/7Pk1RzgPMcXUoUFnJxfANxipDEK+WtQv2f2nGX0AxwMrJ806lU6qvm9ig/hW7HWj4AoCAEcsYkmxfUTbPHVJgU7kpvqdNiUEMGEwN9KK3CloRndPwU2GzZJ2zQksIzqn+GZSKFVQ8Y25Kg9/dfaAinY9Lng1Xez6AmB9pP4zlCfhVOb299JFoiUGB1h7qhEGJ/XWesKqvbu0u24E4ydqPPL9s3qEV8HE/mWYoCviG8ZolWGB2spS3mR7lQLnBs=';
  const _INTEGRITY_HASH = 'ea3556315802f105e6b8e102e18c9b4101b7f616e9e9438dbaacd74ccac6afa0';
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
