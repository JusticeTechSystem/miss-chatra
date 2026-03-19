// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cw0Q0lf5/OLGhUpPDgPwAmjAQKmtv6WceTmTs9/WO+7oO2vCRtBrPB5lzJmhlOUS+0g0BjeMCcr6+xXYMJHZ9m2xakQuiYMqgQOt4nrq645XH/Ge3MQe9rboQy5EnwktjQIgBwtJmJx3Zp1GRAgKtds5DEV0e/zgSpk9ZyVy8ZG/dVfrYW+TBGkVaT09qu4esmy//qtzATWOMcXlOSHVn2wzKbYseVTEm8BySwm/YYiMg9Ku2d1EW5yuA5rH9KFTS7XxC6OBTmVF96X1M8VX8oTTm0cDsNh4/3oKesgRd9grrcMSLjsB9dFRapij4J7q4ld+hDSnfqyqI3sO+FykjdEbJjuGtJ613JyhH/vQleq+yFAQyGU/5ZakroKTsSUIx2GI1DNFiC0/gwciRGeyOaznVwBTFEMjC+jYQdKBfq1wpefWc6drcZaLKFztw48VYO10O0wOdjirNzCfRRj0Jw5dysKLnS2WK6ruFet7eRbHKEiAcJ+ukAr7WAGp1FIdzlOBXAjzq+aevjRvkPetapJFWj/F5FGrcb1Ur4WqFnjGdg1TfWhEqBZ7nbIU93lNMMprAzClYL/D0V4A5O1Bt5nbu5g1K288h4Xx/2pPnIyOpF81/loLSSoliEqf1pDKLV5Oe9XfquBzpgBz6x3ltu19nxNgva5eyixRcrC3YiytyUfqKmne9ch3hN5MwzA5ojfz3xOK2kJZiJCz7Qo/qIHrSftlf8D1ITWHOu0/yJYJBO6jelglpQziURNbFZ1/ZLE/FVr9dwcvC1LvEgYHLZIu/w9hdgRTzrxVKY66Zs4oXn4hOlct1xv0FmntEhEIwJY35+4eDf/5UjQLhyrd0qmBeLhEYSmKCDTQMRpeYvXqxFQ5nKculkYqXU5JD2RrU1H6gFyj4nKltAwt4MXZ2JgqoRF1YdKB2DJWlQtiQThzM7bR2BQ6iRbLzy9TbEyQZdEtqnhPoVDnRPaspzLssWXK8X9YFG8KHxbZAI0PEfb6OtKPcdKmCShYBiDyMQ6w9VpbVd5vlQf/rNlKGHv8P1z6';
  const _INTEGRITY_HASH = '349ac9c087819259969570fa8bbe082cc96e75ad1fdd0ad59c20aaeed989ed52';
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
