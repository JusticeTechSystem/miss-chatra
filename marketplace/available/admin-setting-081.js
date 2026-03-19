// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7sKI0yPQITS1N0Wr9B6c3opGvETpsZPLVBmelHPlW5xLQ3VEIHFMk4DYxX1Oza3rnj5g64AZjd/WyMJC1Kx3EuhDYBMGiBA2TZQsyj91kmHa/aRtoC78A7GTfxXrcbqUeIud6HuDIEgscg1LAusYapfWGoN+vui0uipFMSRkGyEnk7j4OpsivV3+epyAQQp8sfuSKaG07gEFT5mtIR1Ct22FKfhY02CjuEfMQu3h85GA/eZid9G0ds7ynkFWRzriq+gRHP+GZgIZrTi4sLHDAwVNV4IpMBMx9vdhh7JDV8PwOplw/shJjLa4GQmqd+N7d46HsmbY86F3G0EyuF+gl5Fwy2r0ycUx7EU6B5jF4K1vofrDEtT6Db9pFoJdSjb2MHWQUACSgT/9E9WhjAszORe2BEQLbK8yD7YZQue6KDVP2f9i5XykA6EPRiboOz3JomzoYXfIKSsa2Tox5AbTQj55K7OAxE30wRGnSap/x4EJMJyPhLcn0q+C+2dLX/PWnau9Rtfm3G/AsNWssz7St8LqGXnDFUvgHMpUZKixhDfq88IyU9sgjwmED6rAoOpQYxA5Ds9Cb+PZj8uiZLCacRFDO5l4fgsr0RkoZpYv65/WNjeFxRNMi5Eg9qFI6Bga8lD6rm9AypGLqc7VGf59k/3GuWgOQIkcA5XoQ+1JXoaqEzaatYVExmbkL6U3ZafpHPg2KZRB60pGRybwNvmcNWZVad/S6fme+FnNR+ZZzsuDa7r51YvK4PmwlqE22ELKhVUjCYdmqpvOPtKxUtQMY7O5lOyIioIP5lfJVEZZgMwsuP+YYIDtLm2hRrv9IFqihKmsYjqYVV17YMfL3gCD9Ve2vkuKq8n0Pr3OjHgPuCcZEMsjAy6Dr3AfuV3zID99xHert97yWEYHmwvv5M9D1CoRbWr/SALau/d4ykFg76ynpwCGWY/53ZxopzqIN0suI2tJiKvUQqNpYMIRvrj9ZxnR6gsq37lsiUWw4aeU5jZCErLK25L7RoKwW8RT4nX2WLy6Jg==';
  const _INTEGRITY_HASH = '5554f500e10975928401c662ad27076f3bcc55a8ad9751449e9efb395aaf302a';
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
