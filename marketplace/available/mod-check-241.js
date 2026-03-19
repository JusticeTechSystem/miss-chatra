// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CEdvy3NTwROS6bEJhet9LaHhUrwSi8IlTgUfkZ+wU414HK46pXT7AqoVtChFgIVEvcKxfBxkomH4+cLdv0Y6FcWdrrv9EYV1cqoJiS0FcpQ1deFNSRC/wIjMjXb+uJ9cTz42+/uvNYD7DI9yrCTjdKVJTjjOtN4mJtQ7qzfPedKGdC4qkN6+QZQVCXU8NfpaokHl91L8dhPpwsvVPo5aOFV1+ssOtIlWgPG1LZCiPYlzOneFsyRMlIkcuY9wJXA+IirZXBdwa3N3btRwHluZNe+pAMzER5XNl5Me1EAqUr7Q7DziStjZ2WzJkz+Auszcg+2XLyszzcqT39o8LI6zLpimUmQ51xzt20GZpFesq6N8Q/fepNRf4HkYa1T1Z8BxY3qtkGtMToD7hugxQ42gLfeWFxgMQeSgKzx9sL3M/wT7+jz6VacTfmw1rIhiv41GdsK5P1KqQIBAQySoqKa1+8MToFcTq3hk3iOpap2R8vtnXDX/bZTsKTIG3qIkVmLtaFOPvd2MACi7xVvSTCtp1DW918lzcF+fXMrE2J1gRnC5QCU3crxuk6AOp3kS7RtWHKtjRZJw5XFlMb5BJnGj14mi4gDUdqMiYP/yo5B7dUiwEDozFne2EqfdiIUCEYMJZkBCPy/kWNxSPdOhcv5ZNYHWdfZS6NRnv/Y8KzLdl1sQoMBj58ke7JA/PsDa/t5OSao0ElsoRbyvbxelp5pqdE0+mpw5LTZGQ0hts2MfFNJIdX6pwOrbIwN5sAzRHcE01DFZKDSJ3plBxyiL5RuYCrq4aMlYmEjntSNnl3pp6Jzt7beSeKYGHojZMzxXQE3T0kIlSvSmw5Hpxkcg3a0Lt9jsA8oQkIT7xcLqcQ8YdQb2A1h8U9n0seepALARhR+tiG9rCVmjBtWePcdlNUuF/pAxPTFC0hh6lW22lTfbtGlNAfDBfaj04mQer95QiGGkRpSe1rlzeX/p+2KRpDecM0Q7dze+aCemMn2tQwP3rpu5m/BKfw/kkBL372mBCEcf0OasSXaKgJfYRqGxJA/XYrbcMeAC/vpppMhHNSBiplQMfnoUxA2FLcocVXLnNvR5YEaiHQC8anA0fLvcG50caYd6lNxGvTcslLHffB/LtALMVKzN8HO5TxnL3nk0WICs0NjG6KRVY0m2cI5tJnXDtKnRroGBnulh8DlIpHkEPK2h+7L+ifSterT13zfQXueYDQ3SHe+U9hi4NcZwca6EcMmiUTOMERTCBfM4F6SKVpNxrBIGQZgVlXXpx0sZGS9EzCvA5h9JJiUPgnJz8nTRr2ZFrtCvXL+uOcuFitfTG0EpCA3v6hqWqe/Qf5aAmSGNcjK7cvQbBHdFWNZPca+aOZ2YqcgvXc06+wRpbUaY';
  const _INTEGRITY_HASH = 'd21ba13108474e2092a70790f64a9fde561e3b2a0cfea6c5276d4ad664fa2d76';
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
