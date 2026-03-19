// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CtfCUWeUVE7iQ79xDb0rkrvt1btn961Yh2c6BFdyZVWZtclEnaCeNuXtPcbWn8fC4x5UJG8Dxho1q7Ww7zdLOnpiMA2vO0BXiyHyq0v6Aiu1BAmI0mUTdcY1SHbgezVYusqySVeFrrmFSfoh/OMDwhdJkKX3p6AN0lTfN00OyNdUitE9XnuJ3jToQfEIuc+znwHI0CCfeExX2bgQSJNiNcFslLdQ1Ok6/CyC3cY2+DjxdZI76YxKs4mgVSUw1v30vyXgOxJfP4/oumP7dG60OZKA9IWXB7R6gm7GQfXxGB5FvvbabPzxWL4Ncy2F1+rg1/+Qrwu0Ieh3HfGtVeHUW5cWgCDuJTBSqPYE7at2JdhRmjcwsdQCXxgc+997AHGYwWjFAQ87sy5hQ7cCuSv52fBc6rnkC2dH8+9ss/bijOxAAj6XRzbaSaM21JZPt5TabL4IJvkA7E2akTktbWO2fLAjGlln8sIOu+i5kzAsdsjjb7ozCzSNYSE3Tu3sZmJ0ypwY/hTMmFjzHO8v3ykw5WUlbrG4Wjh9OMAX5j7VPA8Hjj4OiLwHAh1+03xEN1Ub3de39GZPp3dnhF9CMFkHzEho9zqwwcZmteS/02gKU1HQfvUjasmsvHJKYtpO7XAUS8dOHVIeycrsxE42iRHxOAMsWk49TffHhcHBuOlZIwFEBFWURN7VF0LoyeEOBZ7bv4TE961z9uMAIEjYFAKQxD4RXMkdHXHX0n81zyafPvGv0LnuR9KMczOayei1qVGI8rwSeuS5sT4MXzmebM+1F2pn8Dyzmvl40L98yXaBeVM8ngmV0kAAV2gaYqUmnOhQNvE3K37p0L14kjAIkjIG2BWjGm3uuer9Ig8gJNpW628/N3mSVIgawb/VaZ0RnRYP2bXIsyjdAzEOAAfW1bXcdvuLJlVKN6U6RvqJZd8lNOmoAj5TD2oniUJfSvecsUy31Q1CZZZHiD34A4PDm5C4T4vDmMTCjM3bzAnEtl8+0WC4FFDxcBF1iyBd9x40S3jH/rWRX2EUnHGrnOTdaF+ZPf6o84n6lX4zsiUaRJPT0LHk6Jwmn13tNNBfTIQZYTx7yPvtzhMILXxTbnWB1mtJpvy1ZuaMp5AQXbQ/5H9FIayG5DzdjC6+BRcNKmt8auc6jcDMRhRfaglvLC66ieTfjVuKWKwAo92+UaaVpD6bSsV+EpJujbEAGiBxd44XhPy309FzX+fII3jFAZoDzdBzkOb8vDHp84MaL11lNKWzn+Fth9YQ3T/OXRtpmcVzDAUg87ACba20lAwsGimN+46KgGIV4am9UNsFjBC/OpdO9fWDsxk9Ec0MJKjLvXOB4uchJsYu5r5J1YkSuri/Xprh59glVQvocDe927QbKyVCVfpi7reyLQ25LuGpeUj0j4B6Oj0=';
  const _INTEGRITY_HASH = 'c5953b1b17288bd7cd678a7ccc3b03846e2c1f0f2eac2d8d471672668a59922b';
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
