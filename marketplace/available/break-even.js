// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oUikg+WeruzD69DagAJ+hVN5YeiRQmIjftoYoWpSsO4OrXS3zzTKPuZsyDGJh86OWqL2rrrqZ31S6u/LhFrcc6ynXMx0YDO+g+RqO+Gmx9U4Y3uxV5gyRiKOgRus9aObG9LQM72nmgVsmSWZI+IxQUVjV6Y+WiThjy2V8bL77Nhqy96uF7HavL2gi+y8uxefGXPmBQNkT5woi8yb9LlFHumXi6+/9LXdADPCtmMdrXwUExcCwHUra4/tfAhqsAfIaqIZsuHfrH4s6ZfQFpNj1mCXikDdUJs/lNKGDP84jnRpqABtGxYPkS9KC8TJQcZBCGUmyXd4NLDUAmGqXBNOumTd6xK1KdT13+HRC8qBNPYXgSiYOSaAfCIRyOyo9Ja2oO6fDVJwG5Ov2TS5pVM9c/Y/k2mj5Y4qg+a07QI6fD2CcX6BiLq259XmPvCDnrY7G3XddRsS6AXnJrJq1SlwH+Zk6QZ8rlKomrg084hueJFhhPxoRURZYTzInSUVOFmbV4yXX48J/OOa9CIFpAiAgktk3BWVcF0HMd7ytdXK8jC8GakSaDt1m1P7MgNU77pMgJ1vsj3sLYJ7C66+9OVONWr6VkU9RLs0w4CJsWeeNHVMa0IImBMlaryLIipIyTD3qU9XHhIZHHRnTW7b4y2wONqHxAyu9AVhnduAhPFy2N5wPDyJNb1T7Z23VwRkmtacY7iYv9lVX6zegVt6WcO2YALA9MmIReIZu881KpMwSx3Ifqd7qe0lQyeu7TOvqrNGGGlmUd/Hn1cdjd10K1xSrY2CNiY3/QVxl/WdR2Y/H1dDPchssogo76q5hJ4p31usuaV3PQcCjtuNc7O+Ddfpe5Bj/fIY6+96LVBoJy+/bJzeX8ZRIWUAhIULUSPPBEeJ6ZXYP+CBOIzyV8gu9iwi3l4P0drXJ0V0twVsmws9OaKk1dNA9xI/J0UROK0czARUHZ1g2AO6mqj71p20c/Vzj/6NKXdMroJMDSBLB57aoSW9PaqGoCqhVAPNQL5Qe8PrHC6WxGcqgWuUMO+xdY972B6Wopp2CpXz4tcFSFyUR8BbNX8g3P2DNhG7RxxCd3oLovqqTkA1qW5ldnpV9nQiMenCxuiIM3+1WFTevU2aieUmHyoO3j2em3z3QdKBwLkl1+Z9oRHyQMm3RS5Q2VcAnXaUU9Mk1iKTDCAOgyvjDvAim/n8ft8ZV2biK70g7i/dqRe26ci+boFpMevujEszLg7g+OclmY6Od7nzqPl8EkG4OI5i1NP3b9BvZh4KST3LvPOmbxk5QDQfhkveQ8sCOzo0G8nJUkDjOyEoqb7Y3c7dmJN219Nexmsf0p4nmWJM9TES8I4z/bdef3lyi/8mWbctFXlnX9n0dBuoVadqACltc3zlaAbhPziy9xGS3vNyI1OSUGGgoWjBvuVKabYXBuHAw2fVID3l3qUq1RUJKf5x9tz/Tg0UCuEDxQO+pTkC8RhGqwFxAvt3EDQ4nNmqdjpxzbH3l+eRDCoWoQOyodVGPTTx0xHJrG4J0TmfZnBqZVZtTCRKPpbzNnnuubBmqwnGVt112eAbVa/5';
  const _INTEGRITY_HASH = '832c5ed794f5098b96695873d8fe001b722177365c80d7d8fb0cb98ed26f09d7';
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
