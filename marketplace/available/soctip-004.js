// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V7Puz5Xk6BQ7crvmZ0zUc+tXwQ8TcfjXkUNQVvAtV/YxAQK/2UK80o7aF0LosbWlC6U/TjhPSHde+2FSGy3o3P/MC65UE1ZTE27eEGyO7g+OjeEDszND51Y9v1ZeqcGyA5vuKO58ul1SqKfVl/ufEhiffyaLOAhc86CWcl1BsBOAZRIeu9zZMY+T4XJ5/ucXVCeYl0h2NIjy0JFY8akEcEGkYff79O8XSJXbVDmt3VhopZuDRUFgnrqQMybDlCkTlZrg9d7OFbA2cEQv1a+aZpT7MknHarewzQPaq1R8MYqyExtXNb4cnNHhGwN5m4CdC0+Tw+GVyalI5nMztZZkmlyu0e+qTSFuwu//TxMk/5P8QyW7HHvrfnFBdEjbdEPDkFfB3omxsg0bUd3oSrW0FJX6Qt+hUG+tcxiHoZaCkqSIA3V2bkMcRygnZdS+kaor3pHFwczj4LVbB7HCfp9N1u5HMHC6uI18EvYZPyz3f3ASJu0SFzDiNUiia2BfB1eTbhxUKq06V5TgQJn+BIPq8utX5V9CrKtxZPts1uninGbH3CcJ+gY8qS8BKl1dVjHhXkjnLtcTq/y4efgVPPT0plbUNnZoPOqLnGYwA2b8swb08bDuk/OrmlAtdM6n7nB7kGZuWQWCkBIgbfpLkKO9fVTC1uNH1Xw1nRQhK/H4I8KqI00NqywDrldxOoeeJ3NWnrOVrI4mWSlXLQs8jJeE0jdrbV9NIeRsV/+RN4KB3Xo9FFaP3IJ2BjYvN6bESe5hBQJgjU74+ExtIVaKRWQP3FnYJj21lHg9WPjion0Ox/9SGFzmHBM4Zl0CV+Thyl12IxBrXuHEgRtHOc3+YCCme9z1z07vriPJurngx0AHCtnQ2mx/whvNf420l9koH/yViR20BsMltsAUXpCRKUCXNL3HYxvzU8wx2fOqDolp8k2V7K5Okerh8jRn3HNcMZY1ubVr7cvU3X4E4hPFsbSH36f987rWRkga//Ia8UY3HNLRSZAN+8Mwr2wuo7fubi1ypab7Q1rX0mHUKAN6knLpN0lCqYXQjlxB5n4vDMfEHKPHHu1DQKS5pwIRuYaLJk6nZEsgiQMt2h4bsRs=';
  const _INTEGRITY_HASH = 'f039b732a214e8ee7e300fc047e37d4ab1181cf6bc397ece652b0216b48756bc';
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
