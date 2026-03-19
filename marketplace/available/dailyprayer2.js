// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BW6o6K6iSu1T4gdQ9z66au6lDULcx3mwrDr9BCFBrCbOI74e/uPrhCOLQ13Eku++q2507dIxmtie3mwC9j+OgY/p3q3G2TErFc/GFEUozKGVmg4MUrC2K9dIzfD3p+ZTLbf0Ypst4Qa5/MxASCGGC7TJ59fwY+dD+/9gyzIxjS+3wdaJabFDq9SGLWTd3StCyq7gG4Iqc7kFFLvl7h3MhmnTcPxs4m1hXPTX6eVl4109MedAmPFh5PxR6Rx2DrQYj6/RE2zSwv0nMQMzr8ReOqqg1O8+hq5K5X/I085vlwSNTECZOD4h1S5karG6NneX4Qk8TK8nNHQn8+2PIDNp+Lnpl184mhWeV6Wq1VWLPFRBM36YDeZxxktF2eqsAcgEXsHHhRYuOB0L6k/g/nnYRie+Ee2EJtkn0T4Mw3/7iicvGupTzRvEKtPFjZVlxkLLbXzu5/HlNlNarLgcwhI2pEQyHPkTlmc5i1vfBnnTRUF2zC/0hD4TQpwlGlSu2iGtmgvQR+DT1LFu2mYMJYTMQoVjbohUzqKuo/m0ZJTyBmONNVcNYYbBviJ1DSJbBjqUgxNExV9tAR5EQID+FTy4YdIjkmEEO9tZ7gUDK1TE6iD4Nb+/biBTOaUSnS1Tr3DcJQdSNhYoAfvYGE7GOrCvJAipGGVYvowUaMLNPyHFRFg3z+s/3xOMamB8tF028tfBlg9RVoxJg4bCTs4LLAweEaQaa8YMKREjrizOI1Hcvb63bKsvsMtyAgxFg9lENtcBEBZxf52DuOfOwZO+I/r5ewVIqdx5HFztoZByPLst/EWAk20YBWOGV77yIL1wosuPxMHNPFCR92ylgEbOr8BKB6p/BFakgVmoAQ5ttWIpS3iFfRJYOhZpIbUHnuk5IpKRYH3OOO3/6QsRX1wilv1rW6mrZ+zZdi3/am8sXsmmbeAmmhUNM+wvP+5dENns43Qcmwv7KgfWIE3gUJpnNpvAR4GrEHhZqK/w4mVdMmyW039anqPx0pl/onmn5MyyZKxfzSYYMzT6CF6auPSeKUctbF1qLcd8dcTULEyHHov64Ym4Uuhk+IOpYXg2tlicRAKFuQXZurlTkm6oQiRp8luTLpnol75I6spJFIqxHjZryWiofxORX4BRB6qRCKs+qpiY7R0z43Y4cZ2YhaqaJMvFa0GG7LuEk4Trn50ckItuWzydtDFmWrSzSsRFbrJOsP0EwvQuaIDdWS0=';
  const _INTEGRITY_HASH = '139f6e770cf329ceb8d28e516c015bb46ec15002ed1651317c8a91e16ae13347';
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
