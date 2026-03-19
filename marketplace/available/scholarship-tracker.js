// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hsHJozRLQaEniYTtXVGzscZJKuvZMLa2TKVzGK4Htr0pnI808Y+qaNugEGBWpl+oZftns6LJ/4Mv6UsOWXc6MBKZIJMYfzQNdZVwhn6Bk526bT8QMWJPy6/WnFkRpHAv1sVQxBiEXVJ9UTjTLVJhXzpSgYmGxzMLWQ4YMI+fKJdCriJ5qnCKNa15Kc8dMoxclrT3dThzb3UI9tcuClTtmZfynwlZLAn7nKW5//y43eTlOSj8paq0I4l5x75Qh+X0+DIL9zH0LCp88S9bPR383Xfln6slsh9zyE+nRT0cARavPMMkBhPvDmZPvSH6RwdOYOYky9ElhPUNYlmEEjMtfW4n0e1nW4zH9hZC91UEclSVsqblQqAVmivJR4TxZszYQ4a0X4C3ZyyxrnEPJqge0T01IuHz5v56LBmwyYj+W46Guw8KG+jdCzLfTIQsY3t6gGV88+emTAmwkMMuhVdNTWUlCfv4+MakFLNTZo/ksB1pRN6pnPGR62vAbf11gx5/pmBJBbqzXXP/kMUM6bqzefk6YOemvuowQ72Aydn1s6D8Xh8COnl/TbtME5qzYucU4ndTLEjNxzGKVX6QZtIjNkiLw0lHplRX0FBcTEIoSOoyc87rTi3obev6VHZ14tjo+rfyzyR75pIucSMJwzzMZD2GQbelMzy1GF7kd15cDg0gkj55F4Qa6ez93hqauHeekuz1/5qO1HkTg/DRf3tlAhLdfQBs3mktNjkx1RPJ06AN2sExqUvofS4psQAVpu2hnYlKJsQgV/HkYXDwKFUeUS9Jx76PjC1ON5RcHBvSf56852qcTtPDajBRBNrkQeJcihYvotiTzW8rV5ITffMGakbTcsnS3rAfP8dBkqqCBT1oGLKtKw2YjU6PDRx07Azx0Hn3k7zuX4BNMWkhKhuOaqR1jHbnG0al0NU2OvRSOFEYPQbahi/kiCSqKzNcMmQM8Eu08cd97H0eWIzqrCYp1BBjiXvvX1+aNKxx0noCHSQRI2DRNEkWrPvmSbH//nj92e25B8im1iF7AJJXJGNodgc/BI9WvcB2C45eVv9FZ4SgUku1avV+6LMvV0//PtxrRl6t3iLKUJh1tkrYsR5rwKBXOkixYoYO8IT4WzeJvOr7l4ttzosmEYGsWgdfZuz7oGsU3wAxyj5tr2DqdJ3SJOJxiHvZzUKGew4thvltyft18aQjeIBfkmgZRgwaHRGUqRP6ZNcDEdUMYgwA1PUL4p7YJr3xMXRC64EGbJw0eu0ZKEmXQOHasRrBGaOrbCcV+3/wSIsV2vYvRwEkNUi4c0/NkiWMQxWDwisZB+3sQ/NNUDYAZTkS8GGhcdHBc2UcgS1ZJzRsUgHo3hUCqKfHuFtf19EOwt19Kg8NpKDI+4QJqqtPDRtH226Yig5fz6JGRj0PyQU3c6RmeIFzLb78Q1T4kvde0jNLNfOLVoMSiaiPsg9UWyK+ZkCWQOkUz9k6/7tVlSCXojy7DOrP2QiO08b4Y9XiDfD7HUmYun1I+lwuVfUs9o5JhCGlCz3ajM0zrDPX8+WVBb7t6p7uPx5nvAaEBQhmthdHwI+th0caw6AR/KhMn67wlODq6Z0HFTYVXTgdSbiqsV4NIbX3jXCJviuHMEp/sJhOwJDneCUqQbohzLTyLXJmcgYt9R5uqHxIufgtNKEgOBWxxfBcsUGGOhxRN6XCKObeMDrnQPVg9IMmUSlSb38AdYw3F6P3waeY1Ahb8DhSd3wQ4rdv6NxW9dPB+ACYfgPSxJLBfO8PXaFgIsXVT+QcH1NDQEbP/OKj79RLw1BWkn0QSQ6GUsQXo1qRs6/+OyQjZMrgQSR/f5Rd';
  const _INTEGRITY_HASH = '7692b96286880d5b134e2af2b12bd969116243f26fc44a62abd615e136d40648';
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
