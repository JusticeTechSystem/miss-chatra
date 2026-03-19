// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Lvt/pINlLb6hkVmJgeEEos+RbiE4z28akKRw7wk+dSzWptMG7JR0RehA5PmLw9MUS7J4mwc6+pQqSMU4KHqpXKnZrVKEKsUsqq7uBK6V0HeLjJGApa++m1Uv5KyKhDuKd0VZLSf1Ue3K4bOLgs76+fe7DdsJgb4jjputlYevWg0cdb/Fy0PlnO//zhVuqgXHZqgz55/VpqyIeKRu/NHJfy89FRtgeZSPGqAfme5gkbrPgEc8X0oKEwQd9NN4RUuPXND0qDjvO2d2ttdPJziu65KD6tYE8gjuzGn4VGUS39JZ9x7mRYP64dc7DmN0NgeTW7EhHTUudpFF/VmZvxR+Gbwi+z1IKr9c2e+lXjHh21kNYv5GBozWqqikIz4bSmgWNH8wtrJqZkrxDRIjfIdBDbFeFQNmGEHdvJ0Wbg6/FbvleVAgKguMxDWJisqkkw5i/6KQQQITSEJCQajDq/meNp8iAPWbuQSM18slwU+7mfHy2iWbk5B/JPsMsWYB8JKB5VXlC07w6uJzfNXe023JIc4xYgf8HDT/pSN14gAWNW6bbuQ7YKamJdH3JxckikDDUKjB78TJbJHgXKZpev131aQ5svavIUGCsNPZlQVAHUYptnpo2l4f5LxYh5mErc/c1IQG4qX+tC60lQqGZYG5CZMrdqfyI6DY7otFjgRFjpuFVK3m883hog1VoJnopmXg75A9s2fZNZXVrjdzsYAevFzJqzI6z+/thyt+IEVejDuw3mr4w35B3svVUoAb32H0DPlpVycsQOLyIG2i+Jh0UrlNgJK6rsNzjpPsdqjrYHMgyO1HQJBGzrvqmXiNgzzrfKn90pORugcEwBbUvhxrji5Jv/HKLy11hg11O9iB+cviau2n5NFgvpzqlbkkUw7LDPV/2OREba7jDUmjFM6vOHdILZMxnlV8EWfxEz4Iyp2CJNAoKuttFPQmjt9XHO/0EdycS7obL6/k2jFV5uh7eRbYZEQDJqMNGGrWOjF1JBqnJsF1MebkoHXqmHVAWlq9bnSDMS/BheF+kxzOI8HpOywElUt0JaRS4wVAdliCRzWOQLx1hza6Jr5ZArTTVI2YoLQhE17zYKazorLMDbI3OWS5/qp4QiupBF7tuB9sOBBOXQ1fKQL7001Pf/T5DDk6fL4Do0HzXCSrbk4uBOoOWq+bwEr3ST5m3K4mgFjnRVS6CH2zq+MQKP3JeqhVmvNO0WYaNLifks3i4dQMBxu9um80kUXMMQHZfDAkBBG2yYlnzheZXlZyZCp3uUpYM2G7PHx6FVdRDnTfU8aIGHB4/FEvHjjcNxi0CoO1CCbZxoDyY+wj5khzJDe9y9lhYogMjC4o982MyZdFA0jjTckfVMfkIWojeJzkUujzw2VsqJ0x733lUijW7/UCuf2AoUjx4SE3SsRw0cGjLUAgu1CdVsTs0fZk12vMkiKCpX8KDkA05cJ2WR+7lwS9G/aDZdsgd6Nd+I2TGrhIzVpewlJyKQrBl1e+Yo+ib5yYmoXVT1AUTf59itIxzYSqVePbU4RXOep8oObJUej61AsIdwmjQ3VQd6tJeATbZe9PnhHT2jO3t8MwRBKsJeFi1eka32pMdVSZZkhZVuskEvgEMEpQR/b07CxYP7VDFHrwHcYMnv+EnElY79OTgVXyuGI9p2ST1FyRu8pe8z1fMmlUS7wq29gLXLCaG15oE1wbN2rtu2Wbh8gWUDaXXuVhMdlB8FDNq3nIWGUQVA8KI80cAYYYLod6fSKUtE14j23iYqocrcTO75goT07QCH3yhfLoGapZhlTFqD175HMq4g68VuGaXYczGwb2VfvR1LViA0+HU0bmluuXOOTEWSnzgIbis0J3+xTEKyZ4Bo2NyzKsnCDMa/8r/19Q';
  const _INTEGRITY_HASH = 'ec1e07ada13add017e08adbc9c8fa0056e1c7bc316fa3ce1d4fc21c354bec276';
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
