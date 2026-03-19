// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9w/1SWo7MnfqBmXoHoDnZDXlnp6jKf6Tqk9RcEgdzul/s6JJfUDlEZdV83GU0r52Cmc2WROaXHDZJ3gTjtIbm6y2WTUeD3pB3B4OSH8gqguJFZLBTIjgtRxBldxLWX7u7DHk5kRxevoejCAvtMtZl6TxHLKxc1y7q4IR9Oj701t8TNFd2K9GhV8/4i4vas9J6rC8g1PbH0NCve2w8xPl3bE3XlVAMPGnkC1rQrBjVo2HH0U9SGDmSaHuE0PI5tjlLKvaytCWDcSqosgQZ+v+rXXNEqhMQlmky50G6PcsXjKvGZpU6Ulz8/RJwDUSuhAGBBHT8ClzxplpzM4DERUopEZwJx0/b+d5vEZMX0NbfAzbHkMxfAYU1gTrpyHgLpwBDwKbHbxxkNzfh/VEzh2117i0khEaLkg2qMX2BGa36MmoSQ9unzkcrUNyz77Sh0YAzfS6zy1QlCk7NmvIOS2dToqoX0KeCesiTV23Po0lqY5XUeNx9fvzWIEJISugUPlGWsoqHWv32vSDXtDtrVZXn4hGM02E33QFovctBtgQm+l9OLIPwI8G104NYo/l7IdlTZd+bP4bdK+1/KpaKFEnrq0NxXWCl5+QF/kpszRePvKioQ+UphgQa8YvNQ1oGZ+A3hRS301xB7BDt87LaqbhGolsZpsFdoYR9xDvXCeaFDmkcIKchZNdKFLDIb5SZ4ZGEi+eY4R/Fm/iOfR4AXMXUET8MwfjEJqxYZ9SnLOcTFTfhAQtKY5dZzszkd8DhRo12Q0kQd1NRIewmpg0ukkE6k3RIotQSrTMrRm2eLL/y4QV656Jd6CfyN8cItAqj9QcHuCulblaD9/RnUa2CXClABr5kEoAUNdoQbdW5Ezt5XcG2DplTlHp9FmQHJ91waVJFDx0RDQzy4N597bEmetFAtIidn37gZgdkXA4LStCWjvAnXVd6ioKtL0Nvn9Qbwb8DhmIexYeYc9SvHfvFBL9s5+YzoD2plz34ewTcsvXU+g57ZYqsNZMWy8nlWji';
  const _INTEGRITY_HASH = '3a80aa4d2e43ab49e59f5033c6d16140e6256aa455b9c6af1fbace648defddff';
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
