// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H++OwDxskhH+J5SctW7Q3ZHuiyc13AzDiPexYIzSbZazfeBOwMvqxLopff1r+bn6EeIoyu7Pyz7hod/LVT3JOnOnqrypKlVmBc/JU6eaytcvOicFaBgnlPZ+k8ghhELxKShQ2pRY1Ur6EWg4vBTvF3tLj4yqj+gwyH7Ui99yNQ2xiZ1/lhl1A+KgfFysROkQU/IzrncTsZJbpkFbGJrjJiEVQAz+oAmwKMN9dluMPvyVmzIWV63UeBDDHv366j/ZNSLU5e/8wh9EH95tSCku8kAoEE9Ba8Qui8kuDUmybcY9W90jughSUrMfR8wlKHHuwpfEbzC8df2VwHDzVaT55/e2LVkGZVbTq99UtmaKT2tPNFt+Agi7xxu7MahYcgodT6IIjZb9da68haueLIW6x8hU8ejSw9spy1WeXeVNQPhkqyHtz5fR4qLe7z6gDqBNYi49/xZ5PmLehrAEziCni+rcV4jNxQzRIGeJ3qygc/om99xDI+sfQAdS9FQgilIdkopbgVXz4hx+XRpSqFgdaZoEjRKyIHcXIbE3FW4rf1rsgQn0+5MgOrQdYwQ9XGeuEAjeaEhwi6eqmca6b/1zFdq3oCRlzxfZAnEuUF/CIieY0rUR/sNPi1pX+pjvji3yAKpIfvIqk83S29R01r//p7UP6EyV/i7MqoUlHGY67G562Q/MBNAhSqOKvu2nb4QkgrQ+p6CIYJDSY22/EGEgqcQYUBqKqysxdr8yjwBYWOpxFM/I7j1/rlIMI8EWBU4VHdXNjBAM385LB9Kib7TNUNzgoAlEipoLNaD7SKQGbGWrMhSjbwPb1iP3pFeGoanjGF4I4ebRHwQDeua9H7Ef7rUPmcwHGIQoSma/0wZ+Jrfy1/YpJk8jMbXVUkbk3+byelykC9h3akIFwleA29qb+Dsg+zwtjKuclomMGKD1df+FlkQGFXgJ/elpL5jf61M/WwYixPAHnJE0jyT+yLgCVfWVwb0SJd2StguMrRtfBPIHkRdxgyr66ZNLenqGNH22cjj8S2qnj9IzDGv5ZUmpg6GLYGhOH0litlzDmTOli5uZLSdwT4DjE+VEnN0/Z5+STfAkQiXTzl6l1K/OdmpcO72domI+jGD5hZF3LHVeMUlD286e6WEdJYJ8352WUXJL+hXs2DInQtr+/vr3IBOfch2cJrgfvctTj0kNIwNUZ//qu76HArIjAx7vrQ7X7u53xj+c';
  const _INTEGRITY_HASH = '0696832371b5f22c9cd5d8aa52bd9c6dd4b8d0e8ca291b8e1b4e2cddbd5bce91';
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
