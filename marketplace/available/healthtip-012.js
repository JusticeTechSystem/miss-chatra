// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7JuAvBJU4Y+AC35iHuF0dNGS0+ktZxzzeIXUUSNXIK+Xb+WdHIapgICPqYb9rTfHUwSbQn6s2hKo8nQifLz43Hcj/zy4tatsA5qMxNTzIu5630DrojoQN3spn6sMer8of8u5Wo2iXmSZsC48b6P+1K0p3Bhiasjje5AA976t+RU8Ne+Qx0xUDxcPsFSLIcnIms7xZN7L+ruVdUufdnI+AMr+9UDx8+8URF0En4YNC4uIaKyUMoVBMYMV1vZcm36fKzAAp/e5FYhMJNAcopnaWUSI+sAaEjrnAf30QtyGqAwF+qgwn1jHcRMFV/+bnmgd2O0ZwK5ePUT1VIXTzIYwkUMx/WiK/cIdnAOpEzJ5tWDyye607ayklWeWKgItiteXfo0cpNzgRvghxWeX52TgsAihVIL3W5+Maxch2/IEWgd8kXK+nEaxmGsQ7zSBp0VVtnUk3MtA8m6jtpljzI5Gu7J78LRxitCxaComB5JdbgDEJenS3gUUW4+1ixAw7clyCC3Ebaq43pljMS6nfZQCR9iqln0EvmqU6OyxFFEWODMmEefDhO2FiLoSiTutEr2IduFPam2Gvs2nhtOqdDUqWf447KYbV7/XVhshS4kcxlN8h3XQQRH6ivLV+PqQDG7gQTXYBGv5i9oMOvfq3LkivEw73Qu4Y1iWnFS+VCrHwG8LHsHzFwmGME1ZOo2m6z6RoFRocfqtGAeTkp2q0UP34WVTSntKCB4gVoYMkbYdfFHOWXvbBJjV4B2xd7qKB0rY/y25m1JcOK2yqVCTK+o5ZjQRqndWKIMbZjhQgpi1CGhZuYiVUQ5twFFFeamgjaziepWKa7VUlNtA5OOvSLDmhuJCMbIv6UwNLjgxYsLyP07azkXzx1v4HKbt0J7k2Qo2qOxbzHhwwUXVJ5PTKpy/xhPqzCE8iRrubAE7sF7K9DIN07TSGg8D5AvoU0I=';
  const _INTEGRITY_HASH = '21d8356e4229d3212fcab6b845951cdf9096e0200c286dc688b7628423d09f6b';
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
