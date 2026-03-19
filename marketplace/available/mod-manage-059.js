// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YQA6DasTOnYYPzYFxTSQMewAga+A/nWe9bKjOJPbq4Tt2rsIfaB9OhiUEhZuOwf9eyC+yN3eGOCx2lg32dABM1+MRofItaUB9Vf+BB7QbDeZQrmiSJt9mHlqzqkM5TlyokgSomNB5Dzw2al2FxcYHdxPXBEl1iptKCQ0uLRKVdEdenStGUHqFKhQYjM4WjUdLpeU+4awtorgZbtWyZ6EV54oNvmBwl37YUUlO0OwDF6yv3IJdly80GQck55d0m9aLCnU5WVRFXSSqs4pzOh5APYgbgH0YI3Ok0oAEPmuE2NooUS1RiqGSUXs8KQaTslM+/HNYZ/QVazC3vUmGvBPWCvVYwTHHRjpNg/UffTmjL2mJslC+dvgKvdaa4oJyGSUEJSHLC0754YGffvpQzSdThe/bIfgToN8vTCgVzdWhLy95aL3P9cI8uDr0VJvYhFP152HwN42YAIw9OKq3vV/HyePPejyfKPj+kF6nMxf1tF0ASiohmfxl46IY81QucolYYE3IPuOiBO+foBsTyGquj1HnjGE6iU1LDoFjb3BZ5G4i+yHK4VMJH5+2Gty1NIFVF3hd9lx1WtVI63+pKyNE+z6p2OSRGmTH4GA7Ef7Uc6xQD6ixLQlQvhDMJNfTxA9Dk9rSTdFbF8IkcLDOCo8CR87dQ7RV6Jk5/OO2UFRwa4Gs+bNVD9YvJt4UyE+j6vhF1P4PVur1doz5l/cSOOQDIYjzABWB0SY+f8+KITMSZ74x2ZS8jNr++bYZBe3uNAPyZ/Lh/qrfSTCXJiSoBVGalC2D/dpnEFEyRr5aZYsmP0E1jKW6uzVnjPlr+ychS4Clqg0OtIQmCh7QRJYiNukoT6Sq0gHGUk3YnUEZpI4AiNP47pBlOEoUZNXxbryROeVwFMxGi4bpj/2AuFvA12UQ86VI4shNin6X4QfVP5ZBNzcph3QPzoeeCCvGbBcuPPk2xKANcPYz0/rmaiqQ8nL6B63FzDVvqIGWj5qTQYO5GnSznmb44fNToLudSMJR6I1MBov8HAHdo7TuEJI0blygBzKs56NjF9FkwGa1Du6gXYgUuntkeP7XbrWTwEOLQ4F+Ve5GpSmeEnD3sGgnfYMI5UhredUtWCY5GYUopMjF62us/KF9+d+QrVJgee9MR9IAuk4xfPUs+xTrNY+yXzeL8j9SljN26FuRuuDEHMwnezTIT0h0MHxZfVqcXMfIC2ZngJiqCNL1cfYq+iv2DK5eF+VAUJgwCK2qKGyrknPfoDiYrE1GpHu7nIdbjnaZOELul6NiL0WzXWPmzSbb7U4TKTk/11X45ec7gouVAKJoBNRv5IA6pVksoI/mCkUBS4EbUHkbcbpMhwlmd448mbkWeF3epqdJaQMccVcTfObtna9gtU=';
  const _INTEGRITY_HASH = '30876fbb6f35af629f856fd1ad2e0184aacc289ef23034c3c46453561fa932f5';
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
