// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Atf+9PwOO8pgYFOTtczJX+Nml1kliyYaUXgDOsRL+xEUaWqnJHoRcq8S0wCjtBO74245ArPimXjgFHqI7BhMfZiQkTXByt2fOyShFM8meS5NahqXF/gtaej71rtPsi03sQemfEPnns9PM5aRV+9YzvZEyWMA6FPAz8DykbJ41OpcxvEqNgAHhBmGpRRxb0U0wuLBrt4vrRRnsCoeGYoOlbXGwP6VQhh9qrlfp0hPd/4J/S//ABzDmDo8ihjb6ke7kI8JKB+auiw7eq0GaQe1F9wCbukowG5ij0xhUFITZkGxfabuwclJFV3WpPt7FkglfX/M7hhqL5Z5DAg6R1Jsm3RIKPuJXI2SIz33maiZRhbYhlKMfCmNgNjgolVEkt0v7Qo3Fz6mXkrSEyGdpHuX9Wx9e7OY8zDz6OltsYPMpJVRbz+twxS2MhyLx0eqOtOTd0FBE3vf2kLms9/IUydgEcy0ZJO356d77Pn8kopbuVB/btbngS+AfzPA6EWMOKoCTRD0ugdBzQwSSzQvKH32wh2yx0oVzLCvWyXz5YbvJITe2+xbnLtK2Ke7UwIwraYWWRNPf/SPUo8i3Fq9cj7ivI2BN2EKS+Pywes9jkiWVAWSPaEsJqDQQifAIwFnv1aQyeQA70AeyfY/aypLatRPgv9SM2OwFG0Ke6PbXV0/9D6F76/qjtQWFjingQrvzY7RR+66cQG1datK2whe7NjcTHBaKF7V9rajkfHfnfzK3ZCuIPUDHv4CN8w3CCAlyVwoL5FMg6I4pkPr8xQlt5gzlv8AxbHURlavO1UcB+ABuq04NRivIPnELQSF4pidJSZG4vTnQZthn2Un90SAQePmCuzHhL15Useey43NkhHjzF/gUjAlcU1LJQGfBBTWuImIO2qkRWyybhpv9j28x3IPVpTkTDg6VMnmEKZk1RMNWYEqDkKwzoapcOeAfTAxJ/OvpsP7Qy+WVwoCeBu9DG2/UbZ6dtbfM9225VvTiAGYYgojQn3+1J8nz1aNg91RdeMikiFdOE/E2mw=';
  const _INTEGRITY_HASH = 'ec6d90e91624dd5bcedef7f02de5d7631ebc43dc1b5a1079eb1e7554de2b4ae1';
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
