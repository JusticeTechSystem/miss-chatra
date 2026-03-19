// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pyHs+7tjRzreTK0XS4UWhggdbpD5gw/C+NXgHol2ZUloHvZIB53r4Bz/w66qCrriquKy1CJbsCJUZoxEDJ9gQXBiTSoZb4ecF31WLBRFmoopctUX56JtJFn6kkR7kJe4eU25BgQHGvTH/98gqCr4tv/7LAFQF7NLo4Oueu6UaNk8WA2HBHon7ZZlNKeQPMck+CrihvNsk+n95VG1xEMgZeShqXCk6dct7eRmKxBcre8J3RvKgeLHAWpNuoj50FL47UKkaeIXwF158MFkiGXedxhyMx7Py1+/gjrMiN4Le0MybNanAVf1a+n7pgtfuz4af0TS0G+eEyWdXyYaDptZEpsxOQTIVYAIYB2/yOjli28rC0lV2i8fGRem6rVz3NlXiPK4o16gQvP9LO3tzghJyDiZExSixoPCofV4nlVycoqqtEjK2nSFMFqpXd4q6kas9YPsuDSuDGs8i8KxsvzJuzY5oYROBojfh2NDqGWO8o6OkmUb1wuw/6ldE4DbmRAwA5gtkFllwifjfPsl7X08/jl9yjVgAsJlFh8nrp5AvnX4vdokWJVk/5BB90bSN+GxmWyEoQqOLns7GFZVaKjCI2aj7z9UMIQB+ExvdQ9uD4vx/JYcTZRJrBUSbq1OxgqlHJ5pEf+ONUyoTvP8lPOZoeTpRDRFOqySaHS1/pm27yTCDkfrniVH063KnxR9O07WsSoquE9AzPzOSmTfBoJfLqDR+e12tS2GLzbjs7BFXD8c4TVyBHj5gDtca6N1R2z3uNdz9dc+qLxNpGe4uT32KJmUiJxbcB2sTFE7U/i/v9gCAHBqvSZbL9yZR39bLaAgFFrLoFCzrtR0M1kOe5aCXPHYA1IROO/dIMg7nj/KU2tj2k6Zbc2N0D7Eax+jKkrYfScehEC5eGn9aZkSMspjh2MQIgvxicifcIGKLbNLE/RN7XOzXMLCJBkB3P1UqU5Kg4h9MlmOO92aTTYxkGmW589zNYmboay5Y27uhzXu750lJkxU5MKBgXx9LOajylEAIaXGI7KkGv9G5Ymrem5DFmWZ5FHPlFHkaPD23t0aZrA0iu1uSnTLu+vxC2afk0O7fxRG3LbMTFdJ0yEhFZ9uM9QkaJz9xFfvmPzisbm/2cHUIf7PBP33PG/aKUyu4GF0XV5siEAjLphnWvFHpA6AJCInfT9rCZNpyZJr/pYdCZC46RKQMm6d5kNt2BgNXHJS0Ouh+AbIGHfIqzy1UtiW85OaVa3WMNhUKyrGvpVu8SD1CW4JnAaz5FHRCJBmFCi0a1S0H4fmavmAV2kbnC957ZuWx8P+/hpuRwPZL71DK1/hnxhx4xyTU4P70rYjFoRBvS1lnHt4zhcse3XzpVKjthpX5OKVJqPk2PxEp07lZZ2MZ097sMSjgew8s1nzh+oaLJcTgBqmfjg1foYM0v579oF/BuXKSFEFp/zZN7r9osFOeFndSUxvS4gNrTOMRREpg6iVYVsFRpevRszLxj279egmQlB9Lx8s7neMuU26RBLbTS3+ATHLEE+k3JIbenyf3xk7cFxZxmDqvzQwht6WUwxqZCyOEcgFSl50sWIIMQ30fBA7/LdM7CEfFmTaLDj6cUEaWppkJ33f7oUXXJbEFAPnwJb4CFNOg3OxwMhczpiLHm2e3DnCSazCxhCydTubAsS5DP3A7qhscTK5uuUJFI7nS72PO9NcUnN0DySsvLydNiMWdN0t2bcSeg==';
  const _INTEGRITY_HASH = '22c5376ed957c1b14a67fa587f928b41873d4ff9bc175c18be8be7fb4b5fac8a';
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
