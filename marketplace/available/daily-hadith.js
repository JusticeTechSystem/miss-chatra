// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GrldVtvm1QUyKkxjJcCjIHBxRPGmHYB6CmswTwL96NVBRh1yjjKi5G3pQ7sUlQZjXIofCti+IrwwxxyqCc4xleOfUsh6ajS8Wdo/3OQ4c2x4YXpQhpNHWW1LBW9EqHUK53gr+jzRu4g28yXNq4GX05PAeL2x1S1KVekGng/nuVaShWZD7n8PrnIfKfNg6r7Am50UqdnN+o0d4J5ptlQbQT+RWXbxdbicDjFmEJfA2krvaCFHbmjKCc1weY27WzM9ny6RVGIlqk0sjPjYn58ex5R5arWMzsx3F0owpS42pP/L97Xfs20q/OWSI2IQXRueiKA/S90diYyGQTHdiguRYTUv4rMkDDS3fBjbAxEidz/apruzYpsrJ9qceWRgPSi7riULWfiA5lZ0a7jdxUQus8u5YLFxKV6mEHo8d/sUxl70rs7oLAvTqBSROE3QTdheNfEHpdqAwYteBfWM696YQIbYUKSbdVZ5IXSplQxELGru0qv8wUsqMQN3e5Y0cuhBbVqmIWDWsQr4IwCRsTbujeKS0v6QOkqpThaueGB4CZiZbtcTzdteIoUGPQlKAMFDlkvc64lM2RrzgZbLryWC4H9h28twlBYnvtug1E7TcpDIvaHvqeBE+GLXJvGUHRAdwnr+0/YXgEglDkTd2GYwHsIY3rynEfX9K07BhD1l75tedCeNKZdwMwVyPcXzXo4J3o/1IRmGI6PK/wjWXEO9S7MP51JUIneVG6UzZ6Qium2jeNyVHBM2ws0u2dUtQXiZ0d5F09KVsi/7oK2ahNPXRaLpYT9IhFYkGMV0QqMiKpr+n4WODGimpHnePgSsEgiFTuF5NMpu0O/NvnhNoWd/AZpNReFgkitpikz+VYtF1BEoQEFFV14q1GRLgOZXbwmkfhjb7ULciDxoDzZtmWpyLQlscJaO/l0zMOlvKnKPcxRUHaHeUDkFXdMjzd3hqNkrhlovb42ivqn5uhbEeS6toHlhFuhc112Hr5tMQ9GKipeyYJPlIDEg2HK1zEhw1LTH+T0WImJNq8e+8A4zSoNjX19eF/sECLznYbHqKcoiObEzDAMGnZer9U2oeaPWfiw/aJpE4f2y6YT/UoWnsw6wtWcXmqoKmLuSisC5SDn39vKViPPC74crR4tiLPvrt4PNDzS1Np8N5so/V7zQiTGC75j3l8a58fnxuBXkk8xPrcYpmZWsEKBQKxJRR4xtjK4bnD01pQR9HRdN5YDZbcYPvG0mljBjKnXBnvqTEkTLcCewW8HhA0CgPO6Z5i+XOzTU0JNv4aj2gz30z2ioBJOlNQTstIEDb0wAbLYQ7n7xtTobaaqEMBgYGMCE8sTJVQS11XU65idItPkNnrFietbiIi07x7t/SpKlxNlqQ0cPxse4Z7xyGdX0/Kr8dcc0m7yxJn75vV5cMND274BfRfcxhdmEN+00L9F+13vpvYUtrRfZYXJQyCcr8Hbp4vMyYDHL+6p7gtvmhpBZY9jFT65O17U/FqC6vYVyrMh7VjHpec7yZaeYhmqlXfX+VBjrrdpCyYK0SI/zQFASZ+8uEriA7Uk/crA4+Synh20BqxWHoiLh1Y8zm8m/Rb2j2KVBzkHbFJfxvaTk5LvGQLK2OP7atK8Oxw6Cy7UBK/3q0OAKSIoz/gUGLJewgNBgcDe5UaDsUyApCk/x/iEvJQ//OSmU/6LWrvOTxkTJfs3AQCOCRyEVOtgcyu6HfQ+wVVovoIqKITWrP2nKlxMUgVtrcNMaf6Z0yk5xEMi5wyLYvPLfz8Qw5b6NQjjBwP/sVaebdHeKkoWA3/QE40JrMnlInCKUhcbeY3H5xE23MWkM+Ml/HrHm4+aqdXFr0YnQUA3jifAnSrRtQrqHWmVDJcrJQSZqfikXRiuTB5gnRhFAwrHQG1jojlMy7LPE';
  const _INTEGRITY_HASH = 'e3ff3bfd9300996605bc2fc182b5be68c91838ae347fac7689fa5c21677a6331';
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
