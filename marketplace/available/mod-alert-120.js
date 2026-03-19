// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rqf7GJ1H6t2VQDhDnozLe00u2TfWF6OIXZlVfv7EA8vKd0wjcACPsHyt4X0DMo1onuaTotzYht0VIkjdqMIxxqMa2AkqAHk9PW3e+sAyH2YBCoRc3mPVVNEt0Up4O8TGrfrXy1R1bq9YLBJYwKpC72/KK7Ulm9zdH0oBTl1fAbPBtwQY1O/aRzEPSC33Y9NxRBzSmAlJIz8MgiQP3iy5d5FmveYu1f4IY+CwhdPfuj2Kw2ofZ8p7AbwgX04w4JLxHTyQvbUhCb3Zm+GaNXTaFupRjfVPkrfUyakFNKxUEqrKU7PpsnlIH0ZhhPhnRbZHmVEN7i+kZpD7toTt6RHKdAD85gd1cDbgowFBN7kQ3Dkh3vPHtrniDxquiUT075zsXeJlgKp422rs/AwYCNYl08/TItyxjz6HOpAM7umMxcsyaaogBIcCN7vstp3T+EGcckOjzFHxn6EFkoqwwv99RKC4UFS9bSiRVRppIoYiuvVBKSuAJGkRk8ca6dQqPqgVxP7KFlUg0zXPNlCyEt2oUR6sT71AXw6ESfNIe2fwqbtxXVL27AXxrA2lbHKjh4vn7WQLN6FSCybP41R+LRrhBr4egsnPqdYRbiiQgJNb22Tx6c5lnKq8Yz+OcaY0xai9lMh0H7lURbIrBD4aKDFYnYUwNCuAZ2iGgrQkXmwvsBYAC5QOKhpJTS0IGo0xDH+19DdXI2anPp42I4wenzCk+FSY3INA2km8evKyLg7/kggEp0UNkK75CKCbbBft/UE/LcRsi8djtGCHJYRz56tiy7kr+p4PTMnu4PDeNCzxbm3pKfKMs7RSTt9eU0WUyjXKe1LFtBjY/5fnGWSrbl7S+BH24Xvx7W0p0TfuBqbnCzQbbeYPmc+FzOHQ/RWfXxxhUV2MOYTcfjXlNSzFVc/0STluTcHdlI4BF3JdJAMJjxFFkPf/Ra6s2Dc/T55CYxlSk8AElXtxWwEBWEsxN54fX1DsxV6whfbYrm5mb9Rlaov/7dbq1LPjFmEzWXk9RZ2hJMxModOTS2sp+2g1GyJ1rzQ/lQzbLoRTTuVLG5VvllVyTTuo2JHuz17VO8SaeI1i5zSIzcqCydqn2xKkmY6I5aTwxK88LgKsIvPB8rPoFYrwLbpbA54vgV8mr4iiKRRnJWIXNMGUmdAalYThMnn7iygMRZ7qJvnCFBa3FqFPBgNS/87fWZq7PqcUS/xymxzb6xOn+F/WsYhLPoiLfgxzSQXJmlKJZGpIAmcG1WmpOIKADiqvv935LRsQTaHDsxxbVWkrZwHaZU9FZho42q6wDQf5IYCzn2FAQWBqESiiB/BPkPQpzxwoJf7dqCMjc3V3421u1b2fDzDe8koP3njZ02e6e60iHx7pMjAVYbxn';
  const _INTEGRITY_HASH = '3e30abdf7ccf40ab72b2190d1b8474ee14a9ac005b2cae8d60c40825ee6da6c3';
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
