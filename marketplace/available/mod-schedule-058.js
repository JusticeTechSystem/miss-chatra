// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/JQI6K4jg4Bm+qnR5eYhNxzSNeT/V7KBQZxDL697zHcdeWZ8E/ek7RigdHnIVAWkBtsS0kzcaD4PtCEFLSGMxEk6A7ib/XJ1LSkvZuNL3B49j2/McLlbneie9mkpAu03yj+AO0bdOvrgttJ7boEk3b4CYzfefZMIuFubf8VDTbYEjcTK8/fB6YP3Pqt0Zxn3Pw9YMUDeiBKzetb5dCmLG8VYg4fW/CXeBQotq0bemCVrtsVGCA9mfT9KgxqItN/2pssMc4+viM/82p8RkcPT0ljh191ZYC8PNSgwXXFh1OlN06OmjTjzsQFHzmnk2WmcNKlO0bWlOvPlhdSdZAjjG4xJUYNaynqFsW5hdnjpluEbiskGWKcN7DftEup0iYOQo+l0nq1kT2RF9rpO/W3G4nj0seYc/ltp3tujAlq4hiHS/An1wP2STUP8hXuo3hgJKYUeKQsD4vCRwHe9yrJfsrwS7mlEI+WzO3z6wQ7Dr/EWTt8q6vdDKq+zCDonlAC0QtGCHbn3xjRjp9Jc5j+Xnt9ay8D5zx6PAdD2vgjlgDcYoordv7aATPebpL0xuHtcyTwyWsLvYxtX6BefO8fwpSl4nX2YnVA3lw7lVLZpXCfW3SYK5ErbjXYwhXFGfh1SWWzJXnD+Ju2ckC/hZ4antE1ontVyYdCezdhn5ZOM7xH/614WaXXpb5dcYbk0SxCHRBBN6JCF0sol9J1wkyyBnsWEGylO4T5pqS7/baG0sAcyFiRqktsjamj56yFgYZIgt9Sk6OtfwoZp3GP1m+0WhaG9/dhXQHFyq6mBa8TP/hyKY86E7BzEKcJ/9A7MQd9uIN1tYHQ8xjl/KOhEGC3mVciK+M1G1hdDH5OtYuNGS850p9VtTpMjOb9V8T+NQo4Ilhk3iH+2Q2Ssk5Or6qQW3B92HNt+LjJfZ9IkBOClchnqkKFjO4LCq0vQdE8JnWS8116WY/ltUXf9BP2CnTYJNcs5APlWW1WO5qqzo9po+6nqPapDL3M7VSzKZF5QhTJ0QRi70XAvpnZ7MpGaUcciARYHMKhxFehNk/7Yohb9EBd3QD6w8MkIPlQsElNGDc8+u3GSUbng3WGwqB/AmeqDLZ2d+kgyaqhjKUGgO05XU35RObaJI1LKd2snhhWB3ap5wvINA62GUWYWjFzu/IYUrg5yMPJx6OaQ4vfiWaQtdN6KWuxqP8gFStF9PIv2PM74xJYIjBSkC9hjb8+r0ZbNYBQwBM5MxfnNjAN0extWfdDIMuW4V/yg1UIeP01rHZeITLqR020b+CvkiReEDgYhVqMQRw+nJRl+xGy/oI6ag0Pv1ygwRUB2dlZdwx3NiPbD7f7yFxNhQSkx7nV4s7Dl4vDx6zM908wtjexaZgWxsXhLyoaVDJ9u6M/pFkIfxAUB+m/OEl+T+A==';
  const _INTEGRITY_HASH = '297e19c5608cde870ab5f830bbcf6c87111110f5e7c11ec85f7ae4bb2fdad552';
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
