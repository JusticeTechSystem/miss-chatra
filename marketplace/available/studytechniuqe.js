// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vHCiAaDCEyvpvHHs4XnSCwUso+hwWn1tOtTsxFTl8U3B15gjA2COwopgV0jB1mIU0KL11CSo9QBCFpnaV0XEcNWbQBDHNjvTw+I73Ocu4nCiR2SO3CfJT1rjDrl98CFDfN0cPpeznICjzn0rxZGnWEgeb+IHAPEzOOatYuvVnXKtzz6+3dvDd38xvxtnJuELFi6by7fQJplKwKG7ykwxno0nru4yORnJvtQ1JuKzc76RNTm+S657chG/iAPqXHkzAJdLOPQTKj0w5R1w18TmWD9nZvCkgi/Bx/JGl5UWepZ2lgPyODToFzpll/pYIa2y/m5EiISUqxWz80jX6ysC+8dwCjJtcpK2lZ5kanG9CW1ci1T4d6Q/ym1rU8vTCcST9YP1AP/SlRVvxFr8gqRK8KUXb96fj6MhHiIos3qipoI/3QazO8NoBfO4frv6v5y1jc2qC4Y0FkcmgaiLEfNXCrS7lRH/dBxX+D1fddWw0LzD73KVuHOOKdV9NCwJa9EWsTYTitTY6fDDf0LaeP8T+RSG0ZEi1ECIv9TAbFLUI6vzRLBfsNb/YWVGpVbNnC4PHhx9f+mFC53KesdniIAd2L7L0s0h3TJKE4oF7UHYQsH/Srvys4Aoi7G73uwsSUNhKGuWCu0QfpnQ3IdGgX9ALYujBw/u9eyGpaGeF2EYncnmqxNuHkVxBQVJH2lfW+2sCpwJropa45kW9Vte68lGeRhKGhkQ5rZPQtOPK/YE0YJE/0n5TgkgOh2DvVzVLXsGTiRrF8kn/kWWw6diZnkbLaG2j6YIgiqI8SBkM23OCmxNhU9RcPMowYJZBaHoijhPUI0KEHbvNgOCogit0gfL6P0NAMVeGZA/+oO/MKmNfrPqeTSOr8bkqO1D78n04YqRs1j1xqaHt9LPdROBugb0QLGpGFhj0nrSsuydhQGAlqWovYmuXqs6G9cvQrGIBb0PeM4TbdbuQJ3aH1gKVuPaUxeqYszuEK+bQtYO2aVzfTxAbS2UIriqrJPsmKOEJtE6L7syktCXJ4OLbBbCifi1o3G3BhEkru0WjJGAIB0Vd5ggj2Y59sJbNnwL6yuZWsRAN54dKnd56awKBZPeXtF+YZdIHu64XRqioiCuZlLeByrkaaP1ff6g55g13pYz6Gl4wKF0sS/ByplY5k9L0JpuR2KWaFxzfF5iCJ7oFKAZ/wVSCBVXdf3GLNgwUuWmc3SSmJNxcpSEbWbrSl9S';
  const _INTEGRITY_HASH = '28c450646e3374dc9479290b0daca3de29da204102a5e836aca8e969f221549e';
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
