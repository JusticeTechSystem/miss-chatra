// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fdKWTG2zYK9JA4wT2/ZROwvJBEmwSnmw+h3flLULIAUua4DPJzxICBBcmyJUNqKXruQdzGrSto4DLmoJ3D4T13hFmW8vfsuX4DJ94kR78QvesS5e9Jfi52y2HLqIvEQKrWWM7NDb7S5Rly5z3tB3kry8mjxD/JvvPh2qusoFVtJwDdIgt1c+bKBWxs8UF576VO8IuqCzQhtwK4Eb8n9L9xrgPSIFR/gFtBTccSWuFk13CE/5LAiXf9GCEWvtO6q46BTaAwpG3tHaTRhODMGWWokguU7c5IrlUr9Jop6Z49IswMVG4zeLB3+b53tce5Ir7WBr3Wem/zP08aIVYKBaUnbdh/CWaBjb0JDAB6IS5ifBLl8t4yK2HMd7XA8b9rbGTCi0U/sX516MzfML8/jJcIofgNSW5U20WcZlm+6qKlas+JgbPNU392rSrOqhflTlE0GNgopTfbW+uGNqb65ju/GCP5gOWuuBMPz40y9t2Tmb6dAAU6ANjnzWy0Kkr6nELctaeadvAwVjAm94Bln5M2e7zSJLcUda8tiqs6f3PHv9bXuWO6kIthX+hvTJZ9BWpAbPqsYKjpmpYeQowYMB5GXRU+310O2UOUZ1Rfv1/MvOwNsO+iTuT4zBNUmLxQKqpIKvYrHILvQpZnySSo+UMRWNo7sx1hnEjDg4wbR22EbWabI74xKCEUNc06Gqj01GDPE7jUj74Vak85cFRiY+ok6KZ3GDqRG2hbdWccHfKaoPhp2aYTuMVrIOsSjYxorVPTKNvAXOK5hhO+OikX1IWU/JPftsVtY/9+gW1sM/0i90IzkhRoK7llCO7iuFtSPrQcwBYsK5oeKxUzERyj3q133psbBuBCdbDNOkKPUJHahdSnuo/LX2mRB1MG33eeQ0b599VOXr/ENWBcM+eXNnwIKzIj0ltqYhTEBKMYVhfNFhtPoE6HPlwYoVVtnoDq19MVZVzsKThiEmvtkq0xP2v0H/lk/+kOkA3z7dqmvA6zdAynE/si32KRYwnpbnwrDLkMbkNxOF5fM1JCV9tusVuNoOby8rRtTKHNC7Rrsp3wnmZkNTu7nS9somhf2hXLukdiIISpgwgNRKieePNfDUrS7ryf+jUef69/Uw6sX64IuTAH6mIUYAOIlS+SzuANq64hbur3OMvlbJey2YZ1LigD+7UoXYPdWvE1nL6rHqxt+MvGpmrSXMQceVgnf4jThFt61dXNndKIIVuNsLYDi9mAJiSlBrXdtoV4IIIMTcb+PvEse6cdFACVP8C/l/cLWhzh0V1bXxtjLdmtcLjYUUJoVPD3PWnrKV2cIdt7GU27dQA6RXlg/weZfo2vTIJwEX2uzGgieq+UEbYMdPU2DROc+JiDUQ6ddBy5v6irq2Z/qpgiSluocdAYhI5P4jdhNI00s=';
  const _INTEGRITY_HASH = '2d254c6ea0a346f44d14941e8aaa9eec088512cc582f35944bc719112cb5f05c';
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
