// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0rbuzJpJwS2kBGaP28W7VDiWZRddlGcCHeAQRomX0OjES2MLB5I3lkYbG9s2fbBJp1wIahz7VhFCP4u1Xmrt+VV3dWedXlLcjFynqDvBk+CBx0WoLj8McEtQJu3vzLbj2ak7QMzSk1Fk8sHGsMRYlM8wjoHcjmkTFV+np8+I2PR1Pk5BGIPBBLOQ0gAZ6uTxyY9PEI083FuezYEHFn4UKQLz3+IUhf69vlMglv0x4X18gVDkDmzK2stn0KPeALMQsaT6AzvQLlpmvR3sftw2UcMgFmUaf9AUnf+JXPua9QMtsliIvs4zn5pniCmaqNEfJPd+xgOqKuymh7yinXvowZYwm08txbdo4E8vime6asXQFGe3BqQ8GU51upB1UBG4cyfu03NzDAmWl+IOBFsAQLR21ejYXiRnvR5Q7hMrcx2ERI61eZ224BIflIxlun8HXNqoKf1kZ6SWROzyhqbYE6F+fqafUqmkJUbZcO+18KCfXQEL0/gQA5AD8BXYQIz9jQmRDWAbuPDC+zH2qvl00NDLcUBCAHONG6eiJQ+BWFHC89RUnRfN7g17S9m1B6zfspsLsMbAsEta3+MzTBeXYvoOecm84K+LFSN4S02m/V4byhwM/7lZVvp7AjIQGu60xHvdZffOrxH3G+HvgpLS7jWbqS7cmCasNUHt0Em65hy2tvGFKWl542O3NGOPwKqQi62+OCevp9rauEREpAN9gq3t/RVcJ/c3v4MmJiiFu4sL2J3Qu7lmiWbteAVHZYMHtB1bj6+Vv0eLxfNwcNcspQU7v4etJsuqqULKQW2QhqTuZbDO2Gu0hnT/suQRl9yFdD6BD6eTZjyDbg016Gie2hgb4sRKM9SzolQJ5Z4aZhg6+3Sm5kX2e6C1JL7JR2f1mrIeX4mLlUEoAXDwwklSh/h56uo2Y9EgsAtjKbQOU5S+aNy/kwzcxaGku+rusyyPp4MhFYqUf4y70/Kw8TlY3j6CdEWzeJpNT9IenrZ+678ppkE/DpoBIjh/2MoolEE6258VTayn5q4hjtc1R3DOEaZn3waIeTAzQzN4i+EzKecarVD/pzI5ljFmUMGndliYaPlz33nnufbIgw2UJhqpIL84v2SBfK2LMCPy24uHIoHHdcdtKBMUGc4wyQaZ+1kU+iPlXwMsp94CESGO6gpm3IDU7/KyuLBoj1XiV2T4UuehM2aeaZQtUbTaFBUZu10mGqYgGnG6gA==';
  const _INTEGRITY_HASH = 'bfdec97805f72e4f012a4e6fb9c7e1626059409a82519a5af994396f2034b98c';
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
