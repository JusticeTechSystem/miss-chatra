// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v1tjs+t836VIivEu8FYTgMpnUFiIxng1GXgUUmSy3NISD2xMvJhs6W81R7XRfsY1HNbIM0yjUNy7GRo5bMbpn6irvNnBKEw+zUDQxlIhUX3htRNyTcA9g6c7ko/tK5MyuB6MlOQT+LCaDy3mnVoYDDM5p4FMtFLqRK8Q4yLkDx6aZPwMGVoe2HYasgSxUK2Usew7ipXysoHtU2YhNDWhHskd8kvez/pG2jFqt6Gq5pcgKUfS6leMcb1JCFBcRCf+96tFtIyuYUR79QP/8VV7OIVQ6+IzmhoBKmw2EurkflbPYN2beCe7Nq/B/UeynHwUI+9bko7KDcclfPBcjpWkqTrX3tW/LBwbC7n079eydQzi5vpYecb4t0wZuB1OYe0IXeOqG2rHK8B6zkg+DYuWkDF5bmFagvSbTr9ZLAwQj7FRDXERQegf21hay31QCZtch8jafY4eNeUgkl6UZhieHYSamcq1wOqeXbU14biF3MfsHYRnmLawXZhHg6qoHfJtwj83mk9cOGEAw51C2JnQK2QkVHoiWuyR3WzY9GiK34lCKMwbLv62VNf8yjq2N1HsDolIkhJ2agW9fMf3K4MSxoBoByDi88YVvfsGeJFVdA3i2Tn4PT0HyQAVCLdOmQxVOgVUfQ2qI4NF8XaJPyKlVeD/raDJ0taTxbMw2Hce+mCMz21N1DD/TVPLqMvK7KHelNQ7lBtN7yd9TvgkZk/+hSRd4C6nVMoCGHbX38yzjILWp654DstuFauGbjG0MqDbxIkIcpswDDnyY0m2eIZgQjzPi6UowSZSM+vi9xQxsYk/5RdMfnm/X49TE6dDVX93EAUmk4pMTAddmoximqeyKSsQS+Fyv0VgLbJSMSB78Lv2bPCpxjoDDGxUhdiLj+zFDrMu7yWSfo834CQXdfEVucAunNte7VyuGk16qY2/3NjiVn8hS4hnEMc9XW1CzEcb/UBQdVeVvLLd1m0/WJkhIACo2ghdCkwZS/b6/6DkCzM8sulwqKaD+jMNqOKsW3T2qKJfWEfuQ3BWwIchfr/BwnIWFaBBa+BWaMkyx8/J/w5FLkSURbrTis0hctV6mC3nCuAoPxMUh7+7OS+TxLISW8SysFUHAAp5Ee1NivW5/KUQAElv9ygXF3DfH0l6xutunOzxY2Bk/+9LYlcqQA9yg4p9zah3W3EK7DXXeit1F5oB5TB4EpVk9vY3G4vw96QqMQorv4IUUH1k2Q==';
  const _INTEGRITY_HASH = '2d8b0eb95f2ad10ed1be25e7a39c59e5eb835600213e349be0298270f166ac6b';
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
