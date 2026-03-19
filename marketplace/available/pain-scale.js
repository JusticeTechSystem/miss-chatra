// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ueGeQRENDD1pevGjnKyRUl3tcB0h5lCwozFI+dtl1exdLCqA/uoYPSJ76apd/vePri799YKvurbVQgHvAv+poiqTImHT6q/pyZpCDgCP86EOaee562kpGzSCDIIftqCAOI2ybPU90F8/iLJycP547vZVOuirsO+IFmOXkE5vS9Q5YoCnMQo5M4MoxhcmRcFp75qxfl1F9Z6vXQEn45ayZ5JKUMemvomsQfM+U1TJf9J5TMC8VTdb5wAp3Ie4BIrgKoJsKIIRgXivC+KpiQkExT4qNjfYnBjBySrSyorZjS9rVGy7aV3Q0im1kOwQ5X37jAUtHFjhYVKrbaYw+Z6Etgp3LZA/CGBHMc/zk1S6zPSlJO1PoUt49KgFmpwSclfQ5AX2wUdT0ZVfJmmvXxMYP5r/CDPeG75sXMiy6se1G4j9cdocex7m7Koqlfj41W07kX93iR+cFuZHnjwz8rVSRKCG8FdAHv730HvsshByqwtmlAoEh9zNMiamBQCBp/QAUudN1SP4nLOkXzHRi6Wf4Y+g3jcbcD5By16/ji6/7oMektstSHObO2wAk6HLXiKrv2lSKWz2vbkJg4ArXU8eB51QQeJTz3lT4a+yuhioJAwdSQk1piwbK6rntTbPIHsXzPzP4K7nCkpRsDWGy1IIdSnulic+D6Gefzg+oM7EwEiYGuFpUnyirNVAhgedo0hE8xsrmwR3RBn+erPVLPFK+7QFkDPHjMgINOvJsw5uoUz2EaRgvZM7aDjDrInGlpMlFlRvcfaBxJYFs9CbENSRtdnPf5ydQ6T031HAdHAD0V7cZohmkMM5vdyqjwHuGD3DRFZn515HfL69l4uHzEdz11jCI1b+0YsVzIR+hfoU6wXB0G+nanf7U4ekP+5syBfiOBidmq4gnNi6m2tuDH2KEsRFCseI18/uSnIGgq0o4Wrd9UwPmRQ7uRe4l2+HiqfS4dW19mgABrOYj/RrQVMBR3M7E80ARIm/ZlW8SMTZKtXhdfnNh6LyEyqfUmiqPMWYUM6Fkorgjz6DreLIrOm4/4llae8eoTFX/EDagRpgGpC9ogYZcx+GxNzWomkadVgV7Z0WRL8HbY7OppAugVlb02oQ9BKFr8LRm6xNKBMElb4Zw5fBSGGY5z+zb9JOZcFTaHkYLd73jvFXcCteLYI9LurysxT3t6E+I+E4ixMAVxANDfMkuzF1tmHe+O35bUpS4dld+kRPAQjTzlqFPCgs13wtw0p/lP11FCT7E2Bm+M7Fl0TF+gnL48b60LfIXXKsCf2mr9YsWrVq2+rqarXYtuMPz2ZEwBi+QzkXjvAb+aaS0dauexl8C5W6/4dEKf+RbM5VeItFv+G35YBBG4tRE4q3wf7a1/Sd7p8oVHSF2rfTy83apyeNABvbUh9xHEIa7aal2FMWF1PnbyHLvKIX184a6maPbaeQa6IEdD0jNFkPers9ZTy5UOMs4RGrdtHtIMjL4Ke20CkCZ6K7RN1LVAxryt4BjXxOh5RlzwNDMjbffEz/l6lPJ6vHYKLBF1OwiL0zm2Hpje32mrE1yqyZcHkpcETDMzi0bgTL1z8+17XGtY7Xz2BE5MHA+obhSxS1kiwsgVs7vE5lj/UtFihbAOp7o4BzCtrUc4b2UA8sTeATDwvKdFQ8bvUDx1CxCUybpikIBHB38M3ptw1ryU5nCpvEsq5K2cw0s0m0eAHG5y/SjJ8=';
  const _INTEGRITY_HASH = '7aacb7dcc3de29d935c5cef71ca0ddc808235e000377fc42cf19f634ca44ca6e';
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
