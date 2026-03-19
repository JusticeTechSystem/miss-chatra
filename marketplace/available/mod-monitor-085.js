// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F3NEJaJZUK86+/jWLiOOIAn6GP6rcP7cr66y8x+9IxOqB/S3XvvBhGsciLX9ygtnMX54ODNTeA7juoKbjzI7ulTd68Xg/ScauiGeReAvL6gpUYTd9O2RBtVhxt1mNqykvDsEetXSnEEAFT+FSkzVJKxqxij8QDkYQOb03OKbvLkMxp0z0UKpY5L/xxWSKbONB6EEB/Lkkcj4LH6KpqGhDbVAS7o3JhrYAIJBCMl9cUXGQo5KyjO+EqLYBrcMZfZK0Im3LZjUh8gQnLMDjl1EB/aZZPPDpAmkQ9RV+x8C409vl21g/BdjaaK3OcZdMJNepCL1T02Erl3HvMOGzhRJllkqR2DR2atlK3B/b+DNiULQ/C1e9it4mQ6QEvkTlkFZlwMEdnQyiMYCjoTRZEaR6cHTAjTU+BENKe2UjALPYIwZhPc5GMWCPnvkM4PLp1CpvCZ0pM2VV0ZaFY84gsaiQdBCnbdixsbXR43th7bvRAMruW89thHZD0jJtsfVb5GWK4uYh3nxYoTB5luKBBpcqSlDf2tYYTgdkGjGZs/5pm0SG8k/umi3tKCSo6O0iwgsid4yKpH8DzN1aL2aOsGrG5xp6np9xavum+cUTYR3GBUGrkxdXqKo6jiTtZotEjSvwzzqKgA2l+7xXsyXWHxC+bjjxjrTJQLW9KGLsCX/9F5NVvwvIcIi0RhRc7dySpF7TWCfADhYuqs5wiK+nTQjtewJzLZWmSGHVZfash8bgKKakeg+4cyhPFDEtGa4Uh+qytoqFn2ZvKQYTXAVy2ozj6XcAgzQkEvakVaCZqD46Zvi2asvMhrNWoSdlhYzZ82Q9GK0YwfRFS6JuLXsSqfjGBXJxSlr7wTXBxjXfy52/rirwQTNkmd/UmPjainBPEMCE3Pii0flygzJPt4u6VBHWhseBDB2LKIq6pFmIEIjBEEsN2cS06Kd1zKZG14cBq0A0AKrvK7TZEDRQmu5Jr7dyAEliEL4H6KG8ffThLXg+exmQcLCWKVFzdFhDl1H6oapEtrsZbFAqo1Y48c9B71SxNzAlxRELsa1i+6K9gvuhQZhcccR5OT43u5bbmVaVb17vErWu6XJdZSRbc0luaaAJWIOrcpYGYiGo+qm4sqbr4G1lQzxIv23ThjrlFkr5Yc/TsU2+ngk71LDimLlROfPYzLIvvyZlDA0VwZOFmsxboqIoDX1VfliaZn35+T8Y6Dh1pxX0o2cEmjLfQFPR2IOq+TTrtG1mTDZHq3UsTaHqOIVdK91AUqAY4TWJ4JcD1kKPLm5nLUeqvsvuKRC2JZaFyUBH+d/Bnf29Dz1Pi9zY7vnL8TuTU997ZbivS13ZgQ5hMXU7druhqJRTXvbOI/hKT5IGyhX8rgTNluDgB2dmK7/ELa2rlI3aJnjF1SB';
  const _INTEGRITY_HASH = '0a4c5b85df80093cde524b4d35b9ab379a84fe13ac71f77c57c4c77c9cebb7eb';
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
