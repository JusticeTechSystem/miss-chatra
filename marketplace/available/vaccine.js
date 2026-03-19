// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UKNUzrysSLaOhUNEOSWteZHeYqBRM4pWMG2vrnEfGQyXba37qJeJTYr964V4ZSmIPZJfh8qWpdiFK/xZ6dtx59RSYwBw0faz8Rik1r9Lx4b1OAExC+yqxRiBvMM/7Gaa37U9rZlDIDfKHukjdkfCaqefipuXf0Ol7Bv2Uuv2W/S88K2spxkIjWHKN3jTASDu/3uakz5ZZBTb+Er5te5QtS38AOHljuHF2wjR9UQxPjFqiUQktwXaX8Lvp41AGg1LynvIh4kC/1Inw88ylxXhHLoYDYMIuRHdEnXRCv7UIVuTKKsmajYf6yHnTAc21rF4PsALT4vGQKo5T9M3xlrv4ClYLzXtZjTGAyxlGW/U4b38sjt/MuH9rc5JPUcNJKyp28CKn5P15y6MYhAbIhfsLSGVmPJNrEZXtPm8i+tFSbua5xnGJmSIPOZAOf9SBW1wRZ+eSBSnx5vXs+TdtmvG8enSVCuqf/n85+myLMiKuRn4NySzoKd7nHEo9DnhXt3gyoAkbPifiE3SJn5neVRlYAWW8+nhAymdnZvrNk9uZcC/IrPZIMOljSr771unBEQ5ekYQ69dylf6cAEhmg79ATlW12c93jDIG9aKRBRg/1qD11K0uT7kX5FnPVYsA6t31njfZjuAhAmV5rsE2SqBApRsAZ14B5mAW9gjoMQPysXw3UEek9yxYbkhiIvLNa1bJzWyRcqIObS44y339dqjlJPN3y2a5Xngd0Zm1snTLy+6hM2Fh/C8uKMk53oJamiCm1esBzx8sYAc+MI8Ymi8jUYZIxpdgsECZe7yrGMDDzryRwnXirAufujl4KlytGs5z8xt9OQAmaEEWSr75Ni0+t7gq893GpiP5TTVCPa5rTMAEEG95KlHeqL8uztqs4yV5DyK2lbhLf5kDyHrcxUZTbZur2Jya9ilw5rKEssRTg3Ed/qP3pA+Raatym5HMvr7EZmXFhzK6xGr8fhPL6vHV1DVPq2jIViZ0YNqWQmekzo13sLU/wfUT6ZA+GrXT3zS63C5AOyvII45sI+XkQ0tY3LMLcpv+c0FpMZgmrhqpdbivnCujn/sdKLNLidnuQhvhMwLFUfessC0ncRsPVq9oamGnS5Q2uKzQJkfuH7n/BVSp9CI3g36IImFzlipEO+RaRca3dOfTbvGqiE2Z009EFZQX/m2+PRALd6nPKbdUNJRafq3IsgAE2Q9OZvw=';
  const _INTEGRITY_HASH = 'e2a68693adb50f012df2ca3d9f11ad01832cde4e3fc7edc5d2b8da3ba2e2da96';
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
