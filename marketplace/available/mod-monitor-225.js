// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mA0zPKhjXyJv4XubF44y7VL58ab+7JIp3pLTT38nttr6aUpzjZNNN4i5r7Ze6eO3H55Q8xoE+eyQTPANa4UXQ8zv3s8t9kOOAqKqmv6UfXAt2Z/uldg/UNiMULbze1t2PPccfhtZubraQV8sefN8b9UNpqTVgUQ7sFA0pDfNr/tsoH8wjwwqdRUP+ifh1ijjerUQBSYB3KwYfgUlapeXDN3WXqM8nrlmWvcZD5r2MEmdhHu+verKOACGmfuYgGSquQ+GvTAUqiXs9UhSMohSFZ2o+yJvjSZ6AsBGwmbW0rdRRIe5RvmDh07/ouOTzKDX6QAi4YwXZHdwc5xykZwvZMrZJCCXcWf7/sQFlqWHGGkc46Jlkt02iKrWL2YtyrGN1TunBPSmyrbZ+WGFjwBfk7uzzyWYtcEpSE72T060i1SFz0JJvTvAzCIj4QYJCWN0DD+3H1R93DNngfJRqkSrZbvqjkmxze4Zwhl/pTgzgyKh3NgO53rt0StpF8c/Df8M6DwKge9AMVWnjflU7YxfuuydIS/m9JcHG6r7fVVCAhiPsQxUsgbkqc4O/7Cf6Ih4vGcUJDE8vDNCba2YG80ux0iHTz/fO1qfyURT64UDYl8bnNXBF0KZ94OAWuqXpwz6ZXuqFlmATRqgvbsSK4uaSAknLE+oTSIFjbK6kWbCcym3baMFDi1hmZwG19b8sYqHSN5Kya9JY0+gmvU8A1fAHuyebizbnFeFQylrNl6wmlqfMasyvd1vu0MRDR6FeHTRkslw4xlYs6utFsU9qUp4QvgGO9F2T99XbjVAKy/cG2NU6cIDWi1OilzBhkgrqMPpAJijERr8/1Tna6KEww1vPrpJd5PMOmMfIsoVsTzjh1F4Vf5GmRCuj2lsOl+uRRXOO+u9aHkYV6GlWcReiKzLG/WwOWG/YVsSZHCId4A3mqZb/i437q2wR7KRnm/9GIYiNzUSIaSG5G6YBGXT3MLezZfs/Wagf+1JiFqEviVGL+dNZrSQIt7/0JEZwbffUHFJjZZQcgmAF7r5o9LIuMF6gpjJkSsEtEfLCjWaNVDh18FIbx8N9KyBFNdacN0a+4f0pN6ng52aYT5m8V3CAEgLrWZjM1mp9MFkJEmlkGr1+4b1fwrYJVniXxYS2tgV4Di3CuxrEHO9UF2f5fp4tkrN3m1azaIfhL7HwzrLEVPplvnRwDZfbS4FGF/5A8x+MVYmub9aHq9wChO8CbyVSvs5fTL2B9A0tOkTyOVj8eL0NkME3xc4VMWAcLCQBDG0nAzBh1L2CXrA/8qMoF9q34LKbHWs8eoqlH4jdhCxLjCwalWZRk8dNhLXD4nplUGVg0iOw6xpfwPNysUuyL3x6q4op1fqDCsVIHp2lEtUPHFpIJQf8mrP4OP1jWjYJBM3Q2dVmBo=';
  const _INTEGRITY_HASH = '6592bab4c685d397ff36d88f14688e6d3e4d6891993c83db44a2c99bc308b597';
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
