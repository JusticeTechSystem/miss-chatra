// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TH0fTw1vHe1fM1xsjkWCs+ht0f5odi9VrIqWXQSw9x2L7vtzqIq+Bjnr1Y2fGOK8m5U0OyFjsKIJWTZLF70Ld5swnFwgMUurNhuZgfLRMH6TVAR6a9mBA4JryjCn/n5oihz3MULdVa5RBuLpIvMiTR8H6iXY/02zxQw3jtoeMFm9dnFQPFpNd8GCf6i0l9SUQ/JW3epWhlF13DQ7AVKnTGI7dOWsFfbOsMpqHA65ZDcTXXB2Si8XSK5yqo7PtCVnMAn2X9rPW/xFUEEZ6ZzKCL0X1VEz/3MnVOqd8a7AAqwvtG1W8hwKS8cfqB6ZoygXsYEiUjQ/u8d4BCzYTkIz+5cJF/RnzoiMnPRTLbjHlC+s51m4n3ic3vEeSRDboFHmZzzZLxkZcsiD8S7EiM+5Cf0/8jPEIrUokEzL9KzKb2GcmRQp8pYK0fUqCpXKKa2ncuvgCr52sS38yijkj3Z2E7+vKzcmaKSg1pjBgGDxQShWJ72yVxyUL1iREr6Y2Q/EDDVu4DtKx+D4J/m1/ptWXHW4uqNWmVA1WMuqHMA/ZXGY4mng0WAEUAMaSgKRpclcfNBscj+LfueZTmxb3ShF5Zhwrl1v7ZTlD8ycjNtRYTUY4DSn/+Us7DevE4Ouu8ZW9sRHT1reTHss/+ypdfbAlgKX4o4eNajBH31wFuFelSJGOsZS/Ufgk1KD6rbNGNLrQ9RtxydDfkPICIDnFk5d2VXhTZcOWfJyyhji3oWpRikjkeXNVzyTdU1XxE6Tn08fUPub3ixPejxTwFAD0fB7zWVTyj0IIrBwR39ai15aQaIUzWERaOo7Q6d6/x2C9dUrdjuswQA66GUG0LSf9QK1OWd+msk+xuBNJ4o1x69Cyger2vy5qzvQ17/XIdHmvCYljM37Dq0x1Q+3rl5DuXxQQ8ZeYBHFrddIYFFEWtfBu9TIy/y2glb2pdcKMsIkKFp/jpESUMDtcvEcgMnyjt1z93e71qsb06p/VnoBvrmexw==';
  const _INTEGRITY_HASH = '90495e87eb288d0718aa4f607ef615c26e1b179894f76a74b3a39435187a2ac2';
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
