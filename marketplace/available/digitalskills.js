// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G8HTo72krMsuZylojGemLcJOnZ0A5HtPpCb7tKPVt9bPYvKkz9Y07Gd76uOLHoZsH/ifiJyx5jWaAfk8plniW1O7Yw9I5plb3rbBl9f8Lm+6XSinYPcVBTeO3AffDMQ316FUkRqw1Nxg/XWOt0PvIAo77Qghcx2NUtYncq3l/SySMi1qQZz56ZfgBkvFkSOrWbM6eMUz2ZI3jkh2Z6emJfaK8xq9aSsLce5FjVG7ZFVpSDdFedcDpktrDjgqO1vNkaaTdyzufuEVAtqiAWIbQJXzzWreaBSBLV/Ba6Ba9lNgbofPJ7hAMdJU3Owegavb1GTxgbaMpoOghKTBsRYzZCkJLSc7zHKDjYCcZU9jedZto4nydbkBSLzy6xkl1zbDZPoPl98RGY3k4nZ0hymbWuvwutbse5Gi4W/KBW/vY+8qiyfiWiSxbtxyLJZRkTn9gwlvXIwA/ncMLoVm9VpJawmhNYnEj+bn7QiX5FPyIMgUc5+4XX04FnG12qJIUdxfB4FGNtoKFLtezoFqhOUYjd84cXYmq+rlACkTIL6whAMmRwhCrtvXlMJzol+1Wqp/g1LMKlB+S59JwAATsmzScX8d8KTSVb+PSPmOKaqJWOH3NOIZqpB42hb7+5+UtFAt31d6j8XDImtzKVAuG672HWxeyBwqZHwm5NVK8Zf9N49UDzruQVFyDjyOVKkVKjcyxbtYg8lV9YhBerdHHeh9EsU3eLKw6NQoqYp3l7+7KjrGCv3vpHD89RtKFslSSsiV1O2dcifjHIohDqoSJ5rWhk380j3zvbfdc4+UN+4Ih2HucFVmkUaXjfB3HkyTx7ra4R4MyyCywy70FIaT8gIp/EFUyoZL28GxJPA8LGTR4cMCCzUF78GNMKm8UgRkjrQw7G84kgwNBD+NlFF53N5gsKUjhHjCEgmdHly+78Jme+H0T8lfd9YN2yBZjES37ldwQtRcs9tvr0bHKKYSDhZ5sn2O4fXneKeueLwjFf3OmjV4qZio/IetsXBMlchHiBhx+HSL9HpeLWiMn6b/6WsT71ZoMaJRRXlOoS69TX4Iwf+b32t0DyZYEDskFuI/FDuGCm5t1VKAvuO9cut2mVEZxtKhjTKl3IJIBy5B5uBkKepT1J0vWnbwZ730or1AooWLyT3Bdz1Do+yyz1gMd0+sLFv8M8bEuMwEQ8tR5bxwEAm0zKZfAzwJ1NMPxDO5GFi7VmRfF9kOlFtJnHmJT+4=';
  const _INTEGRITY_HASH = '6e2bd71ef3ada0fd6bd3733fc94ff451f409488bbdc889c23d26025204233e7a';
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
