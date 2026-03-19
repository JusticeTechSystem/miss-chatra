// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5djvnL4Nr/cO8Oqn32FBnAAJ3/6paeHRrmTjDwwWvl1rVdEW/HqpdjS1Xpv14VyOGy6F15Rual7lAnYUnhZ8ifiTJ4lCnn/zvLP2CcFHSdvYS553pX4xEMoBmtNtyhKmI36q/iIZ4238haDn1fLN1qGobk3NEansKCUOQPkcVH6MVjuzGs+QlcVJK6yfumcEjnnH5O7JkWCB1fjzhn8tJDQ3ZpYHjhzUSli2WTq1A6wz2CXoj5H1bCkV0V+2ksKvqpo4zdwlfl7UoxnV8AG5Tht7SBbQerdi+LKhHnjjSefS2hg0U+3Hzj9UEQLQMZ4irRTcPXpFL3p2yRswymrpXRLoxTN6EPnhKeW26jOmPP3qo2x0AHQBzO+gyxHgtxIoyXaHbt6vmucyOm6W6LAAeV0L6yRQ8TIpsoxLAXvIYKIWbw2uO/9YIwVhGf8sMUCIvwKakHYvuCLNkGp1vLh+6vmRhwV6MaxeKAvk3M44/8mDRJVAnLnGiFx3nIrwh0kjUEBXrU86Y0ORN1EXVgv2whlIZxjeJkm3W+MIQdJ+JYAO+3Ay6aJAjMlniyrfJda2Qna0vlg9vUYUD7fb/uKthDyI7kuS47jc8Qbzx7yV5lcG4QDGalMSClhlraidlfkcx//UahUoh8qsyEi8d54PjerS2qcufAArqeRn53riSJ7NcIP+RP7Ron42335yEFTISd/Zv7O81Q+QCwD/0LX7W0/h/+QMXx7d7+WlqUAPeZIkfLP33x4TTdXyAhjbCNqKo0Tviby1ggO9ENj9c2SzDUoy4H/vmp+cB9ExyU6wa+7VlKOvTODp4JwpSeXbLPEqAeJ2N7aAKO2NwT6XXgXRGvpDPfyenZA4h5VL8pAQLWhBD5JJy/NXqdcE8nkNEOkEvUdAK4jLLHln2bM4BPPr8P82ZM0KFWT0yMNPsqM3Cr5t8UualA+NAFu4jYnGy/np8sxmKnYyu4EQeJKWIMLercqgOSk5Kcg2jNVgvlww8K0rQEEqY5sShxx3M7mRhqA/MGJLkfmNINS/uvXVlqKjDKUxm4vCeBKKi7NgXYMYm1weuUayzUDu4fMqHI1t759at46Po0nja9OYV6EZ+WJ4H6nHovak8v9AkL/Q490SeiOas9EYvsQJYMqzOlcUQh8ugul8TCMYN72hGWkuuF2B2LgR/b5beRTAolek953DF2kfEjnQGyGSY/sjRdz4lJRJuSZdf/qocHUXrMV39fJdcnh689tweEKBnsDG5lpgJYRSjYTYeUYazNjOvlqcrWMWAQkqNOoi31AaJRKCmoppgtir02cIOHR7Zy800W/wEPYIXfyQf0E4g9jON19E66YcabYmGJ8sFBn628esAfCeBMYH/0zRPkiDt14bQ04vdr3OFDolFIoq66q0Q7AF4a8KKNnQFklWm2L5ixVMj3F0u6nSdzvAm63tkBAx/LNEiHzZao8mSwXVkMJAY5lgOxGgwa4EAudsLvQA/OtIXBc+pIAeZvmpFxnyzQps7jqNr+mrxvhtlGl322V2rLVMgb8QPhk0o22tbGaM1Tp7S5LIKrpirpnDvpugie7HkHxq3leQn4rhG7zr6ENLMIk3V/PNrD6Mt+TBUnxBjtPAu1c5z8Ojfw+knx1K97LInikXm3kIcBQMEXa1S0UT1aUPGwE5RbFAg+2cDbFofgyn6e2mNEuMLu6s0lwbgzo9EuMfCD+fkYhUq0RnQIsrJ/2jKnWVbIW7BTNncWOCPf0dhC/WiE5Ls4T2';
  const _INTEGRITY_HASH = '88448b209d49ad2939c005d1920ad87301ddc546eebe15e4014eff8283652fd9';
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
