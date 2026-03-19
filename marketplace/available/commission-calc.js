// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '96iY23Ridsc7AQQNjjrnP0NCM8qo4l6s4Jmqo8tHZHTAjEeZZFYbMQs0L0lGeJzNtEd4/nsX/MHa6TGQH/BPXbhG38H7XvmBi+mAKc+1g+cTk2JRMnIqScP0Z8lxwsavpGjFau9tcbHKc3qygStwM3anbi3hQ5NkOH8sVrbAwZOQL02FSYugtqW/B0WUtiO3GjdKAUCdGpCvHyLtndikIO4D51beJQTx2yMiel2ouTyPhzSrilAkVrkA1TjfvK1OOmzSOAsWuoPfB1y58gaTlTKzLwZRiH/3iovKNqCSi5pR+1OQSEIm5gIG+4x8hofAJCzmigUU9fSCzOa5/u53K7EaKRxx4iYoiR8s6iaQpBt6h240GSO2it27bekJhfsVcB5i5vSq2Nlvb5v1Al00q9RHqczW9Gi+TiN9riAX2++1qWDeiFY20lUGh9gzqNhWdqAfcmd3MliGI8qgpXLBNwUlPh2JIz1CWQhiUJt679YgBdvbkxrIQT6mCLmpmfZxq01cyq2wIMqpBqm2CppKbsQht1X3IgUkgsGr+k6hChwprDRLxopxlAzuNnn7UJdcqs7L2ctVEVkEEAXDGuz+FHrj7X5qT27RUIw=';
  const _INTEGRITY_HASH = '8ae67901e8ce0ff3045da36f8edec6892cc7a44f5f63060dd595a51018e70cb1';
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
