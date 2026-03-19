// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UsQLn6sWCKwleIOYffoEn2TxsnRguIyPFl52KF1f659tBJ17PR98ZgKAE9hn8/D6CZDQe5TnxUT2XaqXEuzmmbfbd6aoWTUfG4oqWmoXqsfIG2tyh9gzUtvHVV691/5s1k5nG7F9xSB8pLia5Hpgm9b8HXtTehKkSwnrFHm2J7LyH2tmuqkYFzWIsSZxdVIP6VEn2vNe2ccN9bcOs4ppJK5VgZCSBXMf7R4ogcWWAcUoYl5aKfs+OlWemBFbRpjkPDD9LoeY6pTbj8RFAR6XmGayPnNSFhpVEVTOZgCeJBXAliK5m5m09L/YyYzS7z6drNJkubzNNzqPhzGk/q9w/6jJWhz478xofj6M074/LQ8H8X2//iaROZVJsrxV/qb6AofH3uJOBy+2ZPkRTPcZQtHQkc+S/h45y4S9QZjWdchHzxcnXDbF6AkAbc8rlqzZeW4c98iRomMu5y2SQW8DJ2qR9ubUB45nhnIG/4BsrUUg7tqgjFOSi9qaSMQqjI6VFJA5QV1uJ+9zHKox99NQPLbP2pcmI23Z1yjLmSciITSNs8Gsv9XCKNsz9wrXY+DmW88JZA31iOVUTqjfPVSGcSzgkGC2IYmJgwhyzkV69Goia+08dYrYHKB21/6HUc7X7OJvB8nBbpjkqkV6TTBuQTqG2flx26f2Qh9CFE0OBpKdH7rWhX1GEleXWTJiza6FMe1gF+heuazIV3Mtf5sNjgi46XP/TlJq2O6DmJSG2ejiQqWynaUN1fGoRyYV4AEbyqIOpwgtcDYD++pdGSUKh4DBayvRGyc4EHC1+2kOeMqPllvXukQg1kh6OdUuz+oWYPRQJtIlxd7IjAWyR9oOHlQzulJqPXFr3UaAnXZDetrz3e/Too8WnaB5HKTqDECWp78J/vaoeGS/rwPsDU0N37awPT0S3TrA5LtJ9j9kkc/rWkK3OW9cv1xw6xV+FjaTb2vvliBYPgd5Vs6MMV99gsvWKy2O1V2h4LcNw+ZKM60uEnLMDsdA+dQ+0kXn7NWjqbb72ohCpH5PO9C+QM79XfbZXF/E8MoH5ZOQRTf3tDOGDR+77WkhAvoDSFoKT3OBxnhMb3AaylN+RITPtv7WJk1UmvMn2ObbowtZdV+d6N+/E7jC6aHaM2D0pskIZlYhf4Np5n3wbBm2uuR9LoMCNs9Kbea1/f3hb93BB+AUjNqMypox+IKwEIbNX2g/qBHZuWCgPdZuIYbxEcd4lKurTaOLy2vL5vwRdv98+Ti75EuUBXCcqPW5RZPYKWkxqwQb4nQ3UNt1/jHft/gDqL1l127KASc0e2yIulIqTIaooooKKZOGy6GNjekd1XSRCVbOwuFahAJTgfFGDMFdbLu/KcwI0aQh+yYRFnZs8EJQLhm+JU0avwddnDoWgG+lJcTUs+6Ht3/LARF6p2yMbuMz1/PEET8//qpjbkTlNKk6kAAI86Q5y8VrY0riRw==';
  const _INTEGRITY_HASH = '6bdac28915d0841ebc3c37a9d745dd0afd48338d80fbfcf7dd0788a795adbc77';
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
