// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kn26Jtd44zdu8xhS2TrZ3dQP8sGCxtox33TlavRCj/Qqp2ATyj6VcGYuLeRWWLNW42UHUciJGq040GnEDGr6cTcdHZvLZSUU0jX4h11efHZ/WxEkr7DWu/9pxAEx6UEHP7QQUtmUsiBgZmrG+kINUE539Bvjrtskkx/iRjZokyOm9o7QsuaKWMSA7JOCsUGw7vopxwwigfqD8wYWFRNjWF21j43PAVI2KuGQwXB7eOuR70U7Ablo4kJ6LXErh/MmJpbzlbDYl0K47oED/4qlYpCw7wAc6wfPBQgh+/jMX7B43zdFxqrYQH+jiQS4Q8+20lsecXk8kCXCqWf17On2t0m1ThCeQk4Lcylh1JYefzMkQpAe03cylRe6fJHTh8FBtBp8/pFcs2lyUGK5B4E+kJMYopLQVap0xbpyCvnSgZZWYd5O/s9Cw7pQleZTdkm8eBA83+nRSlS/djFXrCdzv+3tuVRAT36cmnLXj9qaujLPK+LPs7AuWCvKd83wlR7jj60f3H5Mcjjhp6vs13GpWWCuUBjlAQvAisryGbq+MKRDjzINgHsXgWP7o97yRfwQfQSOCaVrUhkxIOVSdCaa1JTXLRRRn6JYCRC/lzTLIpfXlv8lTYiEtMH+bNC88pY0mgZvK3PNjIOsgiqjKiykhXLwXfFtbxLSQRtt+6w17jzpFxRE8sPUqCh05BYztFN+vMo8yQZPtsZ/x5dT+EOif14yJTXvI7ZG8VbSe592jaB7kN5zW9aNn2ZvBHmmLt4lLTegztJxZokdqPU6kJ2mQ/peO2u5p7fMTdVFHhFKSg8nfqF86dO1+ksPdoulYyEvuJxr2V7bSeI+UGD2ToVrYUTdOe+HEx6nHszSmdLkT2FXolK824xQ6jbR0Uc1I4VWDEGg1WKSsHZQwSaXgTrTnOQYJBIcOFSvde31AkzkdG0ACHThEs8MCwqip0mFnf8u7FmNChwBBU/QUJVFCFqApsYYhn/xIgry7vIrHrq/Zi3SIqw327AQH6nXsGqA';
  const _INTEGRITY_HASH = '73b9ea284122fcc64e3e5e3ab7d52cbacc0e458d92b87e9af62a33c216ab7640';
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
