// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sQpQh4g1S95avM1S7scjZvX+3h/NQeByBT0K2ZfL+edJqoyx1v5ORMa3nN9Fgp7zhzemDF9UUGKm09gf8eGt/oWZDElZpFcTedav4rM99YOOCeCCRhZCoCaa7jF9doL7jgC6YOb99J/P1RJiTogquizweI1DGZOcCEkOc05/aIlTM8w1BowisrDlWm/Az5dhklmvFtaVaLqjezdO5SJk3fY00X89HAB5GRrwwtcqpJ2Lwn2Outq8pbJnNUa0HPJ9Jj128klhlXuMh8wDqYoLVz+BVe+v4fu7BoViR+4LVB8X4V5yXbDrK531PBY3zzscn64boMo4ageiY0Y+6g6oU66/Dxkk9jEgt/7uXCt8Dakizti4B5VetkOtCtH0sm8O5AKQxzKXswAQ3bCImAqS3amTxS0lwvspVF4Ija2lbs6EEZwAShXRyAsLpV8fIB+aRh2QQWKhU0f1K/QqwyO0NdJoki8SMXa/KWqmK9KHZ7sqDkkQVGT1cob3b4GBK3eoPvF8sUfZVzXx0L8Z32Z0iSWDaBlMj5buZhIdN+AFL2zbUdhtJPlZqRcrrp1FyemXtD5ibSsPSmP2IfkmjfPo4V5wsy+Iq/KtTcoxCs+RgGGw58eXqFRXqXd/0exXCbOwX78E39T1iDChegi+CqNn+QPLB1hpx3ZStB8YTtr9eAJWtq+dkuQOCqgg41uwIGzyK6rHmz1KkE7zSY3mvHAWdU9zPcogxtipVSL5gcI1fvsRrHNnAIzFmT53+ZozY4mYNGj32MhqNO2Wex17Eb9a0OfrxY4ukNNd37BsBZgPhoTzV75qGip4TT+m2X2cmalf7MK5gzMJ2TORA94mUiEAp9BqOn6eBguLoi9Dc08RAe3Pa5S6QwewzR3OQo8iiUWEwn6ofSimFscyY3nK6nvc1f93EPXOcuZZzRgGSvvMknfoXQGZjV3xXWQv/QM6Elnk7LeZNhLcI9qFznRuvS2zjS+s7EK/53Bi7zUnnCc3O8EdfzOSuEbJAu3CGY4I6D0ZkpXBj8ZuuccP18urKYZH0BDvfB7hFWYoHU3iLC7WKr/k7UM8BWZ2J56ao79xWUs70mBidsHoq7KeSbgT2asvSOEzL+7LzpoLWf7xEih93CmCkFUetb61dY3K2GnPYT+Gktk03oCh7JKHRTK/oHGBDuyZzbbRY7FNc38aZCrgHifxW+hLQDCmyA6q4J6Nl2rNj/vYMPxpf3WN0nwYYtgfB82Xwzf9b02XcBt813osFByxngq6bkqOUM3lfvslU5cz4ANFUCM/V8YOKjxMihjyGHLVICOSb35GP5FuwT74/ePwr2yNVZN4S8JpsEFbkS/tqucZpjmv6hWR/W0yLwHDoENcZNz2yPQGdPlIgbzuFbDvpv8mrgX34w==';
  const _INTEGRITY_HASH = 'd16e1e3e532ac78f53482d545fadbf02f364112e45310b7180b14c349aac6bc0';
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
