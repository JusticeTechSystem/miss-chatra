// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y2YYE1olwwww2/aOFQVlJpQ929p2HI6GiWsxS1uSALihB0yhRokwkMbPuFpJ2PNMXoTOjbADFkcS18XZIw1LFbSa/zdkWyvQXddHfdQpvGcYsE560HbHFTBEQoTSEDJrcRjxmqFCi39YUyXHct7xDVOrSKL+mffZFC2pgUyZaSKKim9fzg741pNKhlaYE1v8DNG9KqpPB/N5FZkx85lb8U3qvN554ZkMCC8TbWvs9o2ndAkhWIK7aVkhTXu3SSs0VtNEjWhidyC/qyCWsGB6UPJ523zHEyf5zCCUv63GDlvYgJfMRb8pRHcuLxsmjUhyKcWNCYw/c4j3icmibyAt/VfaYIniuuHTqnItj6PynzWVyn6sUYgjd74RvDEsdVKt28MnRQsfu8IVM/67ktgDcGZ90zm4IqU5vgXvzATSxMn4RulhZVHkfbnbcYTuJFPWXcKb2DVX/MKKdygSqPLfIvl+3WZz8f9oLSvhPCC2Tg5QSP2m/U7tD8FseMCSYUfDFCbpUR/Z3UY2HDOx+VhmLebRm3qMTVdGRnPQNnGHFq+e+mWbtLxFqpclmBrtZu6D4KGjq8bP97bxHZobjhVa6/d2cWmUwW6Ue13TKIMlRD+aio3DQuBPuBLUDYCDr3eHEc/1pYaKHSkdoQITFhT7s87gzLAn/4Y2EwbiiHgh3pki7l0x0XWK4chHQB016yL2KANjhBlID1eEG5IYG/AHxv3rnmurY8RcOUfkKo1pPamUkLNmw+/b4Fjlo+bjaSIUOc5L4MAa/eYSJPdpOJxvsPlqhAL/gx/+EjCSo1hkPJILt3B3zavHO7/MN9eEhoiBFj+dDCTe+X+ritsKuVfM79tcU/FnN+12NIyw74zM+T+mZEyHbtRbhKmdOm1VOs6Ib+l2c0nIqyb6AdMFu6Hh5q1CA++2ZCuP3uh/6B4IKbQYhpcL+evOAAIuUTn11g22wC9EmyqHKiadFl0VK1Ja0d7L/2SGuybSQV+7PU93wcwHUs5VK0hCkJY6sijbIRx4KEA5Z6TrcCgyc8YgyVViSjVUBBse8UArcxNco/LMekU5mMAfMCRw65AQ2Nswh3bIDO1kb3rWSM2SmKAYWsY5bYBdmfZ2kq2Yp1eJDHg4NkThtOGM1nvHdasOtKlOlkCqdl34Q2pkgFIQtQGQKBAYi3BOC/8WhLSLrkuOaXKtbF4Pe6kT0gq3Wr+ZbrdUBOcREddAy/2y/EEe';
  const _INTEGRITY_HASH = 'e4148af4c8f6587edd75674f4ae371a424485fefd3d4dfe1e1b7be7c4ca812df';
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
