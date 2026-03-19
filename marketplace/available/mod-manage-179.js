// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qhmHA0Xji7ZusOqzEOq7HSyMv6myVr4MdKKbvpjn5pXFcwRUnrnBI+iH02vb0YyYckVsO8hsB0nUMAJRrK+4nsas5HHEBQMA2teDSIA4FHRrSk6Q7knF2vI6sKwmxAm0wAe39KlZQqfu2llQ6Ge6G1g71MCVlrnKPTRn/n2HRf4Gc5ZGEOTo/Sx8P1NQ6Xtr4Q79pp0XqMHzy0+cvM6H1m+G4kjNUr14IYT8ZPweopnGsWsJSAeNc+KP7tsXv5EgvCTo//u2Bd6pqqG51JomMXGs7UZJkZe6feNGl/adpWz1CBcYOGC27HD9n5R4cgKZHerC7O2fY5GP46aeOgl1pS+BtpEa0AmLJiGFu1SYX6gXeB198M7/en8q6KXAlV2Rj9DIe01f8IHknlfVMhnpQAqCweOODcKDn/z2Xfr8RFXFQGPUZ88eVYw1J5zbGdWgO0QBbh8HuK0DzoMmtn/M80H/01JvJB2fHQDmaY1kzwZAlLDsexiM6jaZ8Jqa8LbmDY5AgQ0/kiwps1O3IVjfJKmyDrWV6Hsr1u1WpSaYJWOVKBU+vVj5mPr4WZG63fLiLekAFv1/0VrHk5wrF8MQDyn7xsJ6joGVX5lg1sXZng6c0lWtdGK0WpejZUtQQ7npv8l1XrEEU3f9tU7Bnd5jiWviGct/8cVIZOxGFgI8cHZ0kwGZlL1DGrV40ExxWPJo4ap16dwotNULB0flZAAVFkT50U2TCbDVepyvEBvoPkcTWIQcH37gLBMlC1sBpnUS2JOW+4fzSynb1NK1CL8R4jGI7kmyQqd47jsjMKiryKyjCZZUeEtNwUTTfU99chqm2bEy+GT37UtSpSqwGLM9yGn9zQexWo4HXLA9yTs13Z+LNlfACx1pcultikcYyU4aeQjsD6fwOs2aWGxqHRph4318pA7KYCHz7BIWBRQn5neR2+o3p02V8703Vu+nTpYNImR4FH+DhXp5z93CPV9YQI4l7Uc5Bys0UjVDqYVqVUh/0PImBbavkPP3ccIenmgQjewrEsEFbrjbsJvIkcYqEBC5+N2XOOC54YwXpUhKySqkvigQo+DYIo4EmXj4+gDg6GCDLKVU1a1tXmKHHAThUArhl/f640kq7+DMrtJeICWsmRv37V0yZb7GU7TSWFY1gnV9HWYofg30kYMHdmIhYSAQQfuw7euRj/HVBB7Tq5bKgZpQXfnTyspdty/Du8VOik2cl/SydZ7VLW9Lv/as4vMSrCFGVX72OFuFKyrHLdxDlQkD3Oo7u9tcW+8K0ejHjKFQzAc6PPVEjVwBwxWcgVrQ8oNvKc72YOvZd6JfHt8HI9VDIIESNg/s4mAjeM/8Knb4Z9L94YJM1clCl4WbnYLHhMPZ29jI004+/vfgGn89MzaD4w7LmQ==';
  const _INTEGRITY_HASH = 'ce773855c1fbb84d7f14c331be9858d25ca981f1e5a15426ce9d3a2b20aa9384';
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
