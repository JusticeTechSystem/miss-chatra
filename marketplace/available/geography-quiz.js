// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n4OHZ18cq5llE6+Ww8G2DhCI7nHrG7W4aYpGJfIgoWYPKR36hIQKDz0vrLG7shiIPRTyBk0LUxibK5cbx47lZy7XVKN6ppGTKCPb+GyPNRPHiacqeOX/8HTvFdhQBg3JjRZDH6n8IJHLkjmv65b0dEc2MNafqJo/jVVR3wPw5rxP9pZTciBIwX3hk0mbH/2ljKAvml4djhXfHnkf5djIocg8vFBF/9EIVuRhDbBEC6ieh7xIoTOiTC8wyTWV8tCyC38P0aMYOuJjnfYeqg3ZYSp6TelcYVfvvy04ZysKNjde3OhDGJggtQxXSaDM0N2mj/byaXkNNy5wZJpg5hnGGU8N9HTmD5rbJZp6JCNUhQrrEpVN3CYfIcFm08NgQUcyczFq14c2GzhGSniaxhMARamZzvNhtwKZPSEV5j48vIWFQ2iVYxcCv36z3CkrJmR9K/K88Ao9f6hcZjtFIdxmYjTBPwM/UNxMJRUOGSWpV69sHharRdW9vN9lZ4X2Dzsm/yf5+gyq7LZRD6+DsEB4scifw1mqnuIxvn3OKT6mI9TK2k25wO5K0xJYOZAkqTyAYOWywuMulwiba4/eTo9jrRuYbocn/f3GFvdWlYRo4MD2WNnBZuVhzBpfegjZ/hrmFh5poRblvStdyJLq5CYYiQGx5Y/kZAiWcndKGIi/aGvhLarEPt/oTwMbwnklTq7dGqAKLv4AZotCKAzY6kKZFlrXLzIq3AaEMzJQ8gv4JXwO4hXwFX8kkhD30fOMUp8EEXEATgE5OfryaySmbgPHei0HkXzn5shinkD7hh4h/qFQWt/C/zZorxyFjlSIBGxtnXa6YtPYytu5tssP0is9hwVAlO1Qe4+/BigSFdhVcmTlKn2OhPTtBFsYzgoL+KaD/FJArpDStnpE/arDormOLdppW6kixtw38KVk17tPKzv2qzoC2wyE+AwEL8PEgp63+rjoMnhxer8opVlL2ULCQF7U4DNIo6d7t1MIw57PWsT8vf2J8ihp3x7qLo0Qr/bMy+8wztDYev20PRBU6sKyY9UM5R8NgGT4iL6AFd1HX0UGmtoAd0QrcfoR1uYVI3V1zAzf6rV4CI4u4TxOXSHst6lgEObpKcVJK2LfZg3LPBZ3Z3wuOIqOhi2xNHgYw7UzAShMQLcF76ZMUicwPlp/+5nVmFrS99mbfetanX4LPstIZA8Msb8Xxv07cygrpwph/eqyKfZJSffrHp4xP0uEf2EqQK4Txxq5UAET00Go25IUu6vqoi8MXVtAucgkoj87bsPLAppJP3DRbcYpQPJLaQbbXsA220gHvK0isk+JDpwYZJY/YGpdBBybFtnCcxHhrz7LRLuCFfxjSb3klooDzBviKZuw+tIgOUlH/NRW4Pw9+5Ui2JwhXMyMEljxZwd35Urw8b5ClMg4O6bnWs705gczR6Ykp/vs8ZogWki7aakxxrcoAb+7h2vRQDf8X7dHjtYvM+ZARU25tza++1AiY5gJn2sE8xFKoh5WKbA/gskXcmYlQsff0UgLm1Ta3DqhRGU8rg8I+MZ0uyQoQFoI1AVhbP8CI1UQSD2c8A4UddoICTPLNO6Uoy3K0RyKU8tww8dKpCU=';
  const _INTEGRITY_HASH = 'd3d00d02776b8987d111c61eaddaa2c32a604fe08c00aa2714da11ccc664048d';
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
