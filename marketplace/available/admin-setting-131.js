// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Vw+1FkWKmd/gd8dNCLY53GPWdDbxkUMr8ZflfKgo1sPL+4i+j42pqVXIgPx29fy0FZOi+v99A1/d4wx/atcm/jF3CCWH9dyjBjiiXF4EljNYb3gYYAkwBb0HE4vv3+x2TqlR8tKi8YsXUv+kJtoBoMZg/sWfCmbeU53jbGOxTM0kb/9D+itkHBllSDnDDk2puOspddN7Ae/et761G6B3gE0lCKsVBInVkA/TWqYMFri9F6SlGsqaROUKsiiqqjSbRFd2JiCQFiccXzX/zmOnpF06CLm7wY2ndq1pfRwXar32h4Ln2vC4ordgHDnVPJiHKyzjGYVZzYKZk65XU9Nvm+oBnJhuMPLEXc1XFcpKwXEeBg5WSwgomxbZ1jS+XG7N+GnQI7weNae13JfZeZvnMxeksOZsTxA1T/JeAsY9hp5HxRJR8SXf/Zq8fvi2xi29Y37gZaAf0M4aNLUOrcaX4jDh08vTcXopKZ9YU7xFKoVAtGPRolVWjAuvOiKPD5uyKkTk3wfUIdFXuqZTfWmHiFrBDBb2ZLkNG8/5GSOZpCWoHJTdxgPnSZBcf/flvPqn5GkFl2boOMIYJoSn99ozdowzkWK2RACzS0zZTKwyxLuMbOte8smoO5a95e8XEZ6LDgO/Clw3MevPCnOb0d676V7+wQrqm83lzh5SrEqE8IAyTAB4J/U1KAA7GWc4L3u20AN6XDfW2dNqGVg9w43kD69ompDKE6V+CObGM7QLme2vsISTm52f2Nx3ORw+v3RbXuYg5ZOOUOfYPfIa91H2V2kBqk0pPEVmeEnK9Y3IzT/iYYX1DmqnyO++C/7C9ubE1hJuSdceUeOMVt1sPzF5ONJjy4bQ4DngrNVPQWZ1Ms+ReXY9T21WIKvuz1Ucdmh10kp/KfU9qahFYxNK6olGQ9mLnkKH0KD/gdkRuCwxx/Io11gukNexJMK0l9JM8PB/WJyzinKJd2LixqZhHlH9sv+tZM+I0O01oKFB69IWp7QmAc9Ub/lmRKXXI0SWeQqer1Zz8+NKnMs=';
  const _INTEGRITY_HASH = 'ec7c030192af48d9490ad15364ec79038e3915028c97d1e83f3b084b4bac352b';
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
