// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PfbWQ20MJBGMdiYGZGKegJTJ5QvfNbNVgtr5RWWp8CWWJ6NormvHiFWKV2zSS5Ul+mKOYhLx0qJftV4O/PVe9paChiJUaAq7SIpMc2XUdICCsDGgu87rn4GrGsVLmteccXi2g8yz7R8U43BvSC/0LVA6wP/DKPZt0125T7smQrRcZuEI5slt6QIpwGywNcOC1yLx9CeB12JjDCQbwj40cKWE2OHvj/XLVzdVtMPWHV6NXubezBPJQCi2yN6R5kADaK+nP5tEYzwGpjC8Fa/E2e/kj+MISFEkXvlDqqYUzWloZ3zQvx7qrOcnWCz6oHE7iu7oD5rgaDFjQHuestMAvFYNpEpFvw7a1WqA3gx+58qpKiQQ3Ty6kBE3HN78dTOTxjK4bWyIxlTfkKWWOYcZdqgFNjKAMea1aHpnLXQdAJzn3MMGObFleJEhkgIIEldm4/trCQu2kDXyyMu2fKf2k94BSVya6PiuHZFID67ZzIW4Nu+Faf72ARMV8HuMZPVGBi+zP2kgtPmoRoBJel57yuIHCGTM5BBLodzQcVWUCMFfn8VRfVxYeuK4RzRoKvQ48KW4xV5pXhfkfxlruUZKuhibYxrqOf1DXQxa3jBSMsFG0yn7P5DY4hx1AnYtDjX1hk8JJm7oYLw17SbsHiDAcD1cNMOBh4wlGTW9w65pa9MPUkDhViBSlgn3xOkCI9o03eJEeLL3a1xSWE7Zn8URYJymFjsipGwGxdJAaMTaAdJCMw2QZ2fCR0sLOeKK2MCkshmtKw7oTDhuVgsMsFzQjInTd6cTnvG0qe0T1tU1DfYMxoDXIVRlezOgtClNFVO8za3Gey04HM8+KhUXVbkbthOGjd0FIPGih5eiryqMaxVhbQJqHwU5PRQijs24v1QbCJ2GOLriDd6s1/PXop2bkSLNCWvp3H+CL8xuhus5Lil6YCFe9J8nJqpyahJwU6e88WmI4GlZaS54U5M8hOt46jUuUT5s0ekaHhF6aaHWK69dXuWKZNll2Sv6ajKs';
  const _INTEGRITY_HASH = 'a18006c2c1b27bba718bc05973e7d982934400b1f64910a198cee45a57f2b9bb';
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
