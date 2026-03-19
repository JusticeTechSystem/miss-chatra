// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+HpRqecrn98Fd29jzAgHcVx97nMgXSVR9z4txWx0jk8Np5yu3GGT6c0leNMhBdQHIEYvBb22L/VB9hw6bGTNHQCVD0l9DJ6KIDqm72FMuCh2k6+c8xhPU+pBeajUlIOvZR6tUqNxAOOUIOAdjg3hVtAuUFfi5QUqo53NcW4hfx3iY2o0q4wK5wOgpF2yWWUkeWbLHUHyFUj/7e9Md46gkIc8NMb4murS12CcgRNMiqSKFfXhr6z1OA6Wy+/4q7o9rNJO7BCbVztL1c9rISwotXdCbxiZssqwNmK2wkl5D9FXsYssqOetjAol+sub3koeCadmeqeGvyl4/Wf+0yJCgDOUNApdmCbsWyPguXBnqwjdpIexIej3nd4gCn6x26C4SH1InC3rbTYd5nhC2EWoYC+4vbvqKOcrANSXtWcZLlH0scFcx+i69mJ1ZV9k4SRR0I9qGECDommRLPf4wUVSqtII7yCdayfb00iGSygAuY1VPmqO+DbQI2W0YiAxhEc/Pj6CzO5VFVm/RuuYiebuqMBQ+JOxFo76QcskYS+JBiYOuOcuP8esLQce9ip4I5vGn1ZngUzoya2uLQTODNQBKLR6QRM4f6RtmnCW5G80U6WK5WwnwOTYyQyco2okY3oT7XbOrcHyD6fzLwl6Q7X4fjQf5qxCFOgk6mzftP3Gr/DFQlQly5ceWanezGSZl9i8m8UwfULxbxizw+OApbd/jPr+bcpy9piVs/rLVhb7o1XEqxJMKpIlvNbhZmzkSqdfsouUMYASo/Q3lFQpajgDjIzzHK/QvVYg9K2ylzFV+u4YTrK0zm6U+Y2JElxDtOOcUC2qFYg6DKoGUTrlGoiODPjMxZDcfnHQWNWu68hMTO2VuMhUTLpjXlMWBRqMDeW667F+X7PIaVpIjbK3NodZmGe89L86ERMKUK7TwM6tw55aZIu5rujeFiNvHCwT4b2C3GEXTwS+lN5PKbxRzDM9yzLaVA7h37M1cRHzoD0WHnKQJGaW+dhuRNT3Qw2B';
  const _INTEGRITY_HASH = '46ded8f879e407471a848017d34752d538ab6b79a5f6d9e60e94d3feaf6c949c';
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
