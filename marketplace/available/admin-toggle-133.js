// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ISLhw5GadryPRtMmVhIUmxkjBqb8xRDwfGSmkHl6qqZI4v/IblH6Fj5yWqRfGqrEyVqBcUwhpVHRY0fCrjcSy/+A0uunxxIxHCnq0n6l6C+0Pi26RSN+QXLKAPhfevVnyZPzQ3GaNsZV53HsSKEPA67ip5Be5jJbG0TPrFGCicLAbDWDHJMizj1TWHJUzhittorLXfQsvD9D+ejbWWxpqT3YWHRFs4Vks0RA0Xk+dXU3DzkwVYjjgP5lVxDLlfCDiHNBnB+A6Hi8t0l8ibyIWMCFMHKX49uSog/9ambV01d9n0iChJXs2wE2CaygD/3cYA2EEoRKWRdhZ94FgbUoJD84rFIskrcHiZKhctnUYLpDOeFB1ynPfsbxTkyjtAmw8L73V2nKSJVK73ADLwFPgh+b6EwDc1O2OnVqs/JFtS2foyrstUKiNKlh1zEtMAmN6r6kgSrKqNwK4e9f+MS5sLnp3JTnHrQMaBHh+jYXzJA0GuLLVFaxgsT8lBN6zVh0bBLproCEoGBvmRTilJ4Db7tOoMAcpk5TgWQJnl8lpY+rTLYl29ktYAqBjSQy5RRR1gQt2WJb1Qua7LcgGGpjbT1RFmWvvPA3Scd1i1b1vSWCq5t9+3qK/hpqnRDbQVpnu8RVbRwoHlx0RygmRmpmKVJ0e+4NvCHDaP8nGG29W+c8Pm8dHPWTWb09ZbEFfFenkWe28z4XdmtuChYOS5Zk2SjqjhrOa2TcfswwTOfP9SD7EfcHd2BHL33W1thd4FJKkGE6qFi9WDl5sQRC8daiAnXd7+khFf7ir6nhz9/I5wZrzr0ML4jARf+0QhHOnUKY5ETklUrwAsySb4+gO29ybdjIq7eJvn7e47MA8IVf8+n7rTWY7/02lTT7O9XbAN/rESA0FTm3HPc2fBzbfnIsn5WzgJWaUq+cPqgcWZO71c68j6ie030ENOU7nL6bSRH+CjDfR71LIQeE6by2vgWEDTBBEx2lRuiXWoK9RF8fuxko+nk4q1TYmYL8zQdQzwPIbA==';
  const _INTEGRITY_HASH = '6c2b6e9d2181acb74114bf5aec789d0c62aa025f79c5b2ebe52482d68d46c1f5';
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
