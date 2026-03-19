// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MC5Hp25Lzylqe52u6Cmm5kzHPz36ppis+2baHX9+9sym4CrA79H/seKAgUjvvLPVTLjkPaWWjIjymitaG9b37r6OrSKmUuzvt3rjdFfJWhGHvOJXQXHL6iu6YCB7xA3WIbyRrc/Rzt2KunkIK/fPwwbjHdVcKCcRUBATqOwS6ER9QlX9Xr5WwaGzhOQWliehPYNM0s5zBRUTzkieEbNOEbijJNSYjhypGRScgf7r4fwjHZZ05aQdiYBQbf//eZp+RqaP+7P4JRuAUGrs5f5JNTUnTv1jH+rKqADeGpUvdFJcr8sbhAS+NSW65Xe9d69YgtL9hXjatc1Tv13FSZRK54ZENtq5w/YUz4Hv4F2FGRE/S50UZHhTVGatwdvY8T2I0JM+Z48rIecNqYb8gg7kG8He0Py1LjO9ozJNyAvI5NQB1xV9H9g3FQ0x8IGq09xwJbxDqXBQnLnfyy7wp45wEIad7OCipCv7vsj0hUEaMjqtHpTupj6wmRQ7bVs5mFJfJ5SQjvrWC/apL5QmQfKQDFczcyqSrGlDGhrB3Nq8bOVczVRCepfXiErSEWfn3ddHDQBbcJLO/25ZE43R+lGkzMUdTH1I0345RzLUDse2gIeLttuy8vGo7IGuSrezQuK4KZQ3ms3CaVzMGBEnsHYjR3gXtCYEG/TAvIPQ8Qe+2hFgvT9vjxi6ZjQt4mCME1MtftkuzG5wRVRqSw3h3jllOTQ7QhOiXTjrqOFL9WGoWs4ivkLyxu3OtItp5rlpYtoX6QWnpmVz8pPwFqFGC7QMj+rxYKE3DvdFHRTe47E8gAi9R9VvT5aRr5wj5IlUAbYrNsOLkamRo6wLNnpE/8oymoD9D4QSelTghLfq0mLZkN3TmfbvWx2mia77uhlCTBeTF6WSwC/3oFZsOEDL7ro5F1Lg/IXQHj2NWojaClSmpaEcq1SCGxYTN8vci5qB4Y3EBcHUF0WYNFxlkh1MleqITkQbzYgDQdidWIxbIRAzfJE+moJayT2ZfXUBBm2noWJUplOb+ZXFsbj3JAv5mDmlBLS4FNvdVwJFLbvXOriQX3/Lf6Qolx/qGYH29ARXqBVZM98oAuIFX0Fx3hjdm+lKooG/tZrRi0/wVCKxy0plqL4swMV07bc4dHaAddq2epurtmHPGqsgC65JyyFssibxHa7KDuxjsK+Eocwzxi8VePOBf5C8uL2t7FD1D7HqA3EVFGBwDbvco06qmO8N6S4pvmMUBEr0v56+u8dUPmQ/rphYZSOQcFNrlMtzpRzZY2tF849hDyVmXkwYAS6vrpjQqVSqE9RcRU60qMVLb+Wgvg5HRXEsELvhP/3Y3s1IX3R/SzuOfnP5Ez0RFh6HYaGJ7wfMYjCeEevf+0DHoLIZ';
  const _INTEGRITY_HASH = '2840f3541f4aa9c18e4c2c410716362df3c3433ff2f358f0c1d4566af620433d';
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
