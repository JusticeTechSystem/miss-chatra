// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GjvRPstb3coR16y+ZUJi6AcMh+CoGsiQUzg0otgB7Xf3QPtnIs3AjnhCCtGrDlALtXIrbJnCkLUa4fRU811wO9gUI4PWQPZ97zf4sK7igtYcUTEU+6wITv5QMaaLvFvOSZ3hwUcxiLFeoU15xEqTG54oG1S0WvE5pkcbFJE7YmuuezcmXxx4fRgGNuIvro4NLCIoMb04M969KSEXF7uGKeLQSXUJuXvuFp6/PhC/tgivXbclAv46BbA4P8Fk4OuptQ5hx2TAkVeX4hJJrbOmc8/m/0E/g4QEVdKyye+tNI6fRtCyrsuIhBbjgviIwaCSCX51i2ef7bKqp7ltvMxI0FLNU5vKhe1vawEP1C/O5fCt9Eb0c5TDFxHtlGi6nPQ0l8lOno/UwyGBiH+hySjgP2VchwWxWvfHQtXxlkbH1KlpeCslSMRRIWU8JUan7niaLGA9jz8seSJqky6ICFczS7Ahs6jrcB2hsxlsi5m4NLy7ykujuQSA7AenIqXdInILUEWF4dXEukrELxRSMsPF/AAR8XU0S6dleAXFFRxzHvL6hss5M6h54bY99DRGQWulJMb/zWuOfrY5ZnZ+v1eONg0oAuRm7+PTIkohF+dZHg/0qow6IvkDipGjPwwjIKH018nIMhKAs+eUzMI5Cbnh6bK0nwL6v/btAIYis5PDKAIs8OSquk7ZKWMaojGjd1dNpwfUtYxzpkFejnwQCVjrKZTrm0ijeIE8XCazHfa3ipGXbBNk4gUxMU/fWObQYpqL2hrW9DiMHbUhGmg3mya3OGEzmo8Y0lTfpkyCWEx3BWYsMb8uSqMdSsJs7CFFewfp2Uam6oBXg4jKKW35EcHt21zLCI2k8mDWhHPMPpFvHrxT9E7+QIx4cgKz2vCzxTmyP781Rlxp0gkXFpRriUCZMlfXHSP4HOHiTdhvXHcUGH8hE/xvzLyo5tp1PaoV7i6l2Plpa5CY1LQp0MSKZY2CrH/TxnYf7+RgV41d004HLrc/tI2kM8TsQgeNoGQGb0U4jE+PW264O/6cK93Is9pvt/dtYPzfK48YTY1ua4OqtQ2crb+FGS0LWiQBLUQmu+qMM0Bm+VrE+mrzqWlgiRd/oSgLRW5pBqpvrrzOjQEJjIbb1PYc02ImTs7BAnt13JEBRgqUHcOExM99VYWCp8aL/25TZTJrDNdJvPMDeZa7Mc4qQYqVJQY/WcmqFCoMiqlAAds5uoU=';
  const _INTEGRITY_HASH = 'e6cbadf99425907502415c616f558b3b4a03c948fc325192ee4fd76f076ef54f';
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
