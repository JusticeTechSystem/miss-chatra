// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JWIHywXKa3e40kPx2OpbPdN8vHu+qYoGfpHxqvqK1hCaxiu6odV2cwdOVfVQ02Tke3LtSe1QxNUx8W4UF2LDVwaYy2NzvxLLNt9z8wFdmAwGLcGy0nInc6ExqPhyyUeG4rFGhEHPmmQmOMRd/2XmeeYh3cYFuilbpHd/cbbiYCrFkxQkLDjWFL1n6T27z8YvLb97kDdDM4JehEuysU2vuKpFserjqMTPHHA8IzSYon6T+/KbRrAbKXBr+lQpCUxO2ZiBuw1FID+8y36FMXzUlmvmYPvSjOPVgR1ok6zMSy/N2XFTXwAQZkoGhDAjQ98OQ7dLSU9M4GKjvkO6uSB/uW2SqzvHXq6tiRMxy9C4mVJi7D7UG6FJGVpIk6wuinuhbM4TYMo+B2ed0eR+ihdg/JXQYmzCMvApF7OPXbT/7iQ+KGe1KzCmtIq4zKyYfLZjJGh+gzxz8FHPKcMWl9X0JCzAEaiIhGdT6qp+92/Hf282y0GxSr+MD2k3cNjKa97UkE3bIBnzDcHJjhS7EC6E0mXI7VH1AMl/Or3yQ98ZxtxGfqaPurEtkWjbSKW83cryy7pxV2zxQy82U6KZVgroHAoioTv9YzwVjFV57dNC2b7LSTcXaX3vbtqvZO1V1AGumrcrc9ZubJysu+L/rGwR37j0rZ8nZ1nmaKb3r6q3Nlc6Vi1WH8DYP88eSIcX4DnKqCnDF8A5FtA1SBNpFctefn9WP+HxTNbfhAJNObBRnpVJqmgcT9R/djGwcU4YZDEA2znEFwdmkv8N1/DnDXInKfq2D316UaA0nKID3ywp2u/cXhuzEwL/92SsoBbyHaSXlArv2jX2KSipC3V+GUbesBaZ/gt6DHvHfkXIoeUwFqJ/h9wPqjIHmIYnpbVZtFF8znJG5ZL4kRbC9G8UTQyhkbxxZ2+BBggJVWXHRvuxnX33NhT4zFdKJg8PB3KX9D9LzWtoq6nxbeKRehW/2NAMgpxP9m9eY3DWxGHP1r+lRXQUP8FzdPaxjD2sDErf+nLX0yaFLPvtiE8gJEbFFRPWJ66J2Ol2LlaRdJ/HnfKmbeNPwFMqQkoPC5rygeX51gLqXByAlf/8Grh2xoSaeWqJLXwqWfczUI23TwMSMLKEYw+exnJGXLr99pnqgca1PEqccS9IPkgWCNe4SU9JzdOVYujxHLKGKFzK2lUExfBvia2r0aEnBFI6ZS9E2aDNZ5JFk3gLdbGSu1jcbaWRCw==';
  const _INTEGRITY_HASH = '2d1e7194e10e01955112de11aa7e8932d603a4a4963b94b5540b420e3eda39e5';
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
