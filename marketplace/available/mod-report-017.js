// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'laD4PMpKi0L7d0Cxaq4rZOP5j9xrCqS57XR1rnW+EMGuCfnEbv+oP09E0sIOi58f22jav1mNZ5bocGsA5E2LsSZf2INCXfQevEbSre4o9Zvr9StAeVceS7WI7hdBPH+D5N/SB67qrX9t8DGmzb4YxBSbpOZR51jkMx9uBF56SAqXT0R0Qk07p0RrOl0DicNTTgHGxbJU11dluCSJOpmJp7cDGs4/Cr5cn4j87jGqEoQYf1NQxugTzSznqxX9KVVQ79to48sR7KOCpJzzuEo28yO9MfrU08BXhV1uaxAFwlsbcfmPtuzyL+rHYrGJT+v7Rb9JvZZjpLeAQdE35ptlQAasX7pXb4OPHpEZeY5nXp77KMxI2Ou+sfQKqsrsICvs+iBNrZaoSp0yDVwxnrYQQXW4oyxBSUnqezLdMS1IAJRBj5PnBIkIeyaW0ZLBcihFz2WYDEGcE6wXOX9Ik7mD2dSwrToIj1XnD5TvjBGtter3Sl0iCi9R8BHuqS0E/QGndwKZ8Xl950yxaI9RbRqyEeljPcgE0v3ru+RhDkdL2X6JBzt03le8y7tkWqcatUIHKjS2XUVca2uQUFK6pMx1ppPmKMuQOt/z3uE3RrU/knYGt2K49Nva4IhExancPtPkDOxvqKU+4dSFWAIiQDmqREI8AQmCQ15qtnpzPSmYqx3VmYLsiSzyIf8D5IYRxdmyGjxD3i71YeTtA1Zn15i6nXZL+LUviv0aZapPP6+YunAOSMIbfPOPGE7s84E+YEMJbaoxmBvehOQrkzqJPDSlwPj7uMsWv5aeDbFPstZlr76GOCGh7r2W1xAWPsptiCHIpHyGiTZ7DZW/2foJngE1n0T7lh8yd2GOKu5zMfD1UKgf3gxghnzrPEg9Mz+ewp9ZIkyJkdntQp44ScR7ObudYD921JuN/ycajKtsET71iy4xTPV/LurFy9+HE71pIsi9Za69Wli4RkZciMvZ0gA9k/9s2pkDfbllr2CFA5lY9AJFUyhd2GW5bnVzHVvIGVTqPN87Lv9wDrD3Ex2CDPe2fGsGuJ9g5HSGqeZbdnz253OaqDkMws7THbnnOJeKZKBzHET81HnU8FJ7GJqCPX8VTcIHRRMU7clKaIs864ZsXd7KqwW+oPHfF5/IBdAE04KjKV/T2XOEhxu6p+qfMZETyCBdw61RFkNWdIiPCrKDAXrK3UARmRzKW2koSivCJOo9JWPUdnp1XiT5FkTTnTpcVROA2g9wk9De4vowU9oa73VGetKD7ykQjgGpDjCiwg4WJZGmaOW9gyn5ejizOhToZkESCOUkORkxkrkv6ZMQnD02MRevXOIsSetgYOhd1FiRgbTZ9nK6ySQAlEiJidySMwO6eQOxVrRgpVaXWvIOvt/TN1M=';
  const _INTEGRITY_HASH = '6f4c2477f747454ba520ba823bebeb875087bde2737baf2e1ae2e10ede459efd';
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
