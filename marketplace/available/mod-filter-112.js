// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ujex2jXx601PoCOqFTZfW2O77ZoxZ2xYxpjG8DsD+9GbIDI+fTe4Qwvpr5l8FRT/NP9LeTyEpzjLTxdHciA3shbemvCxg9YQ9YfTYAu1Scq58Nqxcr3P9HMnDV7tiwtX7Cluqf+z5znExf9QmefrbCnC5UG5C0UxP40mIS2lTNBmrTOkuZZcCcqZ0hcel9vu9ixj1Sr38tK8jGzyLvtzZbOEKUXo2Vr/DqO3A4Zergd/VQAHu+bDCr65tB+h3Eru9dkwTlB8kt+95ps9ca01Fzcx1gfEbs6mASPJo+eyZE+wodnnzs1TGP72iaKOn0QRnSBLEY+qax4CHnN3CgWxEuGWNkOgCzi/TINQHlcdtvpznNmUTVIiEdQADCjo0QN+uFPgKLl+GiJ72BB70662ROaGGqOo7/tjYuu7i6LAO8V3fspM5luNmtKr8XG7uy+xcrxjO6ag4c3rXoil18StomiibNjmunbRK+d5YwAq+BvxMagPeYwG/oHuJsROoWNyk8Faii9mp91uOgiZCkSvuCrE3k720DfNc4FDhlRc036crX04ekfbLIQqD3hbQMC9bVCD+Dh+CYkroDENSuSRObMqPY8e2qRCuB1R1cqRoy42uaGHYHPTcx2DMavuravuFwCW0QNl4mfL3uz+riEvgaUAudhHYmXAkQ/G1AU0SqF1VZYAy5aXH/+exw8bORA4KwY8jesN1ShopdRy7SWWWOuZXnV6KnIhLaSogQliWdiUSbqqo1g/HvmPsN9LswsxGxhAstcyGW7V7jYHMsSSf+0IpTwy5y4VTABH04H/E/eOAS6nogPIEnzPanNR4lUxKMaP/FBNM/36j9A0XdaRGAemt2TAflq60N2MmVXk6pleqUntPoWIrdrfw7MlFZjrSiEBBc2d/HpmsZjRxWcGi/sJQSiccANt47gXV1HuPABdm8ArSUPmvMufzBHN/hMFy1uNKF55t38FT+eWRs+6A/EN8bkMKzhA9or8u53jvYe2zSrkU8RVaojjxq81nJPVfhZA3FHGxh6dWn4Ru4jI4YIUgNrGPeeSslYLG53suApyxpBV7fMtFJtV1xLHKD86oBss4ZCq3D1jSaDFH9/65dLXk7/peUwffN82IAoUn/ZooovlbH5OQvfx4SPLCHZoJaUoD4L66VNqDLsg+W90PwAYiLv32EzRRFrlJWTJpzcAkvMsJtYoft5jTF5e3bQnV4m+sxe1c7yJMuga1UvkfVlu9stN/qo8Af3ML4Ukk8qNh7PQwC/ah8TsDl2a6U0v2w5J7EMN4I0LP5Gmz9RIOYy+94+mTG7SQd8EWNtAK6fztNHMPIOCn5IcJRsjQF2IATzsRYW4LFCB48YwxeRe/ygOp5B1wnqe+UgZVCoSFkqaCSWeeF6uVw==';
  const _INTEGRITY_HASH = '5ce585bb563174862dc4db9de65ddd943b07f0ea024878554d175ca815d5c48f';
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
