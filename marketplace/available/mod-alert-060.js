// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SE3YDtfrirpVVCPah/d93wWJLXp230nGLRkCSMdNqWGVKO0JOaqWUWt8mJWFcnnt/yFKuJHey7NfpbMwASwvh2abyzE3FSrpaIOgVnXiLH5Skj/OW3n/JtEMVTfizhteZFmiZ4JojOgaNIF5ZTCJ5BGi2wAN9dADUroXL924V1uKux6ob6Zsd/iCsX6RqHVTCdsXPjPomroF50PWtG8lWWmIYIrUdzmsHZHAiQc1JUvlqHJQy1+6pO2PJbYqFwwPWCHtf5t2guSQ7P+PxBRt2Ya32bOwpQttft5jJCwpyomk23cGntIxlou6ROBUNLA98esBEK3phwR3t2gaYyEx8YMqAFTdwK040MSq+/giK8gVgXv/h/Pq1xKDb+sbhmOGETKP8wuNvTkBfhhg0TJx7nG0bdypmUcJxw6gtinVjBPEXiKF/dpzGzQPUXylR+VP6RhyV8WRf3pE2rgecjGwByj8C5vOJjrKDOI1NL2midmL2CEGLWlW85gf99W9gss8svegmKWHuST9RoU9yq1A78srKxOl2v/8LxY+kRZg2mHgDwsuwhl/d2o2JuSbqZdRpywYfNQVEhwLA8eAr4gzsuM6Bw7bZk2xDqMNUiEVu7S8o44Vu+FzzG3IFOUOIj60Rfx6dHrVidieyBG3Zn4RoS1TqZjEamn2IgYaP3vmDPIvW2J6ZfcvIegSP3hX2E2PX+PvFf/ydRkH4l6Or2igA7wHyv7hEkoSe2O1DEmYVSVUGm4+jU5GU9zfhy8X7WoxXfvEygEfhTaA7zxBUKVE5Hkf+BsQHoDI3OaRKHM98vnzp3wt//aAzFez69gpXlepEDroK6G7eHc6tkB4FTX94qM0KtbeKYTpv3wN6DlweIn6Xzmc+yP7NmXFMAYuK6pyDIlbfVipHY8yCQDrBIeMXdI+dsNGGYyrpipTzVJRelnjEXwwul0PgNJeLsLtu+DhEIkLn7WeQeKOuD0hfNr+RNAn+t25mWMYBNqXzpE/vgtKbQoMtXu5hAqWLgqu3RVsvk/BNb6ciISxX1oeMOORhVPyO+6veTduYkbZhpiO49YCSUAqkzshC3qS4rA1Fd6fbhd4R6Yf8PT89VKabg4QNfTRwstfxSEHJIpCEur4A+VvhyuvtlG61/eRZ9voHviddLYTxh66sGjoPcVymcQYj047sg/PoPYGq4+Hl9hOtxCZKQkaTJpJYb6YmtpfwuhTz2xE85dNceSpBPJ9hSMvL0g4ejVRSTkPdSjTNhjIW4W+eQxg4dyAdOhQR/GIskFoEr/JFwxbvOzajD7NkofiHPla+5tzknCBEjoXk8BzBW6w2gl2GaxWYRiVFWQusPyJ1xy1Ph/J9Zuns8MSHe4On+t2Sz4azSJ7zQ==';
  const _INTEGRITY_HASH = 'c5e9d4884c76dee3283a42d710d1ccf89345cc04b8c0071598e6e387f1a901bf';
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
