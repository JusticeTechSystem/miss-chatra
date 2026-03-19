// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HjJQbuz/qhYCofBgYq7VMABiYrVfJfFkPHIvdD9L2Z7a7Tr07tbGsOHQ2jaUbN6zv2sRLXbfii8G/twmwow+CBhoy6nrFy33lr/gwlpWYm8dbLNzESZRNsp6wFT3jekZZuNBrD+04cNbcVGNk0JTzB4jtwWWPudaPF+eZ4yJAwpFadsYGRpzzDQn0gn1DiZdOVGTgK7IlmEgKmGLx+4A5tNYEyjMWh7jqmm7bLQGV1svJCmMPT5PhJ/IONXurcAImVoHn6wWDIQV/q6CSUVpUvZAW7mbvCrvnftp5onDD6MtLVDdhiRN+NAbdGqoCS3uos91V2dGP3nFljI9j5BV5sAxJvTverQQpU8c/zPqQGfqLO9O50Lq65dnILJv+Yvq5Ts4XXh0itN7Pd0qsjGvKItVQ4BlWnqIMc9LOkgfEGu9w5s2NL11AQMOZTpofMAxykvhrjppkJF7tCYPvuhyHxP+zjxVxxZ8h7WCVzghqzGMqhkdb7zVvl9ZKpydd5SqnwaCZ04vAhhb9TV4hYJdHp4z1qXNU8L6uuKIRaqIWdwD1J23Rz3DzwWIM6+0T8PiXeGiGTo/kL3GT0nbrwv9ZlfD4MDMmNcQS/5sStAi7Kvso2CgOuLvbVs+6Aqa5G2/T+mcCds9OYO4UrlSL094HawD4oxNDV62QDhoDO7im8Qj/NrTJJpzSMrOBjbVjz+P+dlapPs01pZtIf3eLeL5d92+lRz54ntYY6LTUGK60yj+okBigEQ=';
  const _INTEGRITY_HASH = '6a79014020517a0884da696fd362d0c815cd945c1d45d1249d06688f312530aa';
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
