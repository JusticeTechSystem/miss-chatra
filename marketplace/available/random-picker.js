// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WHQOFkhWY8N+dFci3kd04ajyIen59uoC88UTDynZ09wenWqc8vSSjk+iHzhk1eQEEAhMYc/Ls0APVB+CPCQJHpUOFjUXpp6eVgnQU9h9dEUoyJ3fr2VlU3lHHhs6sZWitRVX8xDQlJ/qLATru1gtw+DhazvSOQxANk/Ug3xZWoZoQsnIZc0cjDiXGEHCngvfPDwLxoxhSn7GxZCX6QvWGZfkM31G4xi7+Z5WyM+sb7tJ1eFlGjv+UsWPjmp/iPhq81DphFjJ2SaD87BS89eWEqRC2WCGQbMSjcwYC3gDEk+fqFSvgrSDUe1ELJzS6969oe2+OYuxxNXb9nUMK1RnO5fy6B4C+NTkGY+C3jvfKrwGTg3BRu1JjvIaSAFUV+yZRdVc/+Z60UERQLnbGAiviz1xMzZJvuvsWx9Blmo3eZ3T4TVsCIQGAy0yz4x9hM1wFFGA079LvEvORqfUtE9LJ3I5dOvVg+50sdNAQmtC33YepBRoNy3gr6eE/hVW6R8mD5pv+L5QkjNWdH/rCp9Wlts/ZaIl/iNzKLQqJlmTs8duCsLwe+5A+DbZd5dMOQjc2PbphFVVlJyrD60bVHidp3argmoJl+u/Lo0UowjOmyugjZUdUYXaoxJhiTZe4bUvZ7hO3pRTCaPMZlldbdbZOmVPbBOBRkh49cAMiNCkgxd1uOqD0/WXk1jrspO6bA/s11WM0q6r+tJiMHQzFSht631jhKCZKJ3w5RMfMGuopzUGzXIT02GMAgposPmjuupk4khjPSJEaUQ2BIT8il50WDqwwdsPcNLhn+0oV5F6eiFudcD2nDJJAOv1jkCMuSaAGiXsZGxUmBRGj9qTHdgYir/sernoM7Qodj9LgON2JFzsH/TZ00e768md/0BTcwJkGEgAn82ST+iZlq+h7DhndZAvdwCZax8E++as3oVYBhadcM2npxey8Ll+nJQ13NOvrNdkmpArghUq1sh0LPX5UjER7UlZTfYwcSX16FtmPGlyuFF8BPavl82rZcIVDyZ4JbE7DbcuiyJ+mmm4YrnTMrS38o/1V+DKQxk3T/LTa+jdJXZBt1y8Fk2pLWf+75gVmpDzN2GbBVrMmWVRwVi5KQywkjCFKQjDPlunexsLoYWdDy46VlCXNLJizJssaSYcYsU6oeinaoi01QIzD61oJ71uDq8odtBchSBfPdFngW9khyRKPGkp4tXnBDhTnvTKlJTnFeSTSTI/uM/4qLEqKAdQ7B4wZPmvMOUCiAEtDehXvu/xQtzThK+Kmoe8HPyyq7qwjzyWcZxLV+fYqgE+gZSxRhbC3MwDuqixjrEaH/3Bu9XV7cPTrm/q3XXMZKjfaBhI3ESzJ0KIkYeB1mtUO5pKgQmDs58+G9f3yB1mpOwNQxlQOIFogryQz+Sp2ZafPfUnbmpcWM+s90tnorDz1+cO+iNJbYhMNpBjJ59RlnXMFdYPVvoA9fGjWPW4RspYJEIkH6JmYMbDTQxZ/DU4n/KQxWjA8M1G4bRrPlamNyAyoibqF9Nj0hAenvCDtzZlviQHeFX8mXoVbLKBEdPAbc59BcK0dnP2vIWVLr2k0VHyemcTA1CQ8YmYmAYBKbD4/oUl06nq3GeGHrCZ5BvoW9rRVmWBAaByA4PYAsKTsEZnZF3ujPqvx8ypkAseI+VUTxbC9JgO3pBVU6vcPf1GfspA1UIQIeKm+RHUoDEWKbhOzSp/MA==';
  const _INTEGRITY_HASH = '98ffe8c66d21967a0563ebc2881ad68a4d94acba7a8e47a811610cda0be87dfd';
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
