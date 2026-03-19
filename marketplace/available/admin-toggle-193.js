// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vKw7D/IA6679B6sP0c1G9/bj4sJpe2Z6GDwchuJMWhdiJHcdfYLtdI6w2dugvDR6xFkf6BA+FgBPorK6qewCSKEwsu177A2H0DEH8awHvYVwtiW2fIv/tlhdm2wUFbqdNjYf0abFYnkEMeZVDDngSEosA0LWLq2C5YcErPUlg5F0DVtC5kaqCkYBY05EPwTHWbrON9wQcs1hILJJ3mJ9krA00Fek9y7KeCb151v8cVWQ5uFyOWU5oPX2fwCrnxgoeCM7taqkAFZkJmLJbYaOP33kLk7fh8lqrasO+Brl14LxpZiCVuHxb9kvvnmQtN+nrWM82+2y/Wajci6thr25tx8gHs1XNl/4e0bvjv2oyYLqlt49VMrlx1OSZWsvDhatss3SahbO7raTS8ruOXJVG920hYVkmbAB0mWdQnfb3Gi3wY+VabwkloKaPlThpDs5b4FJORPByQDflhD97dK4/FA7VYyXCF6xBkfRvu9q+l08X68eZ4WbAI3WZJhlMEp6geec4DQvFQNEbY65SjbSGcozHqs4Kz850bAK0ezZmbizUVxDigQ7coIx7qepqj7Pc3DR+g/4W1xhRkSa5nabPIfdFk9uqiwUuxzoCQCnAfITs1NjWf8N+G0ygiGRfnmRsSJ29nQpcJ+1xvaym/HNEJoCMELIF1bxoV9y3kMSz4qWRLsSLu4v+wUV2WCWtUkilamSl42rY9DiQXw+jSGf5gR2oVeyk0Y3GNnjjUbF2oBsCxruYbKuRegBwXuFs1DPnmH15ogSb69yhVPFYSCGAXqGCk+N/L763d+D7O58XzSp1QsCrrSKaMqvaQOLleT3P9lMim53UwmxAwLAMJldkABDXwGdsGUzVY6pU9zJLsrqgbmYKl8dZTCJTxBOr5vXaBW4mqrDo1kbsjnGA61UyWgHB3vzPC4FqVUf/NbD4JDmXlTfeRB+6rcotucFjnRLayINLc+zZRhdPnpE1pRsl3vHNpGZ8StnV+aVVvAkJWB1LMPjLNMrpszdJ6XiZ/722Q==';
  const _INTEGRITY_HASH = '81c50289a74d22fb006fc05d93d838a072d2c5e1d4e20c3405cac0c1dee74660';
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
