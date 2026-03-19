// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ICddpSAcdp8NDFjkeB5tXXA+5r3iDg3B1Fks05yUHxdyc+jNFwR1d3JuWg2BTz7rs/HwP3P2XlFtrQvHl5q71yd3GNvp4B35jnv6+cFSXHwjgZR2CqCKBbDkqAmC1J0FxYwh+ZrCWzAWUVZVcTnaqgVASN5O7CSTd96sFjdxMidbnGmKluAXMred/vABzZAL9gc2xABvaD8qrP8qEbQB/rTERuTRYf2aNwayEYdDWbipvsrkkodMSg2sWhh4IscNiiMXrcGaaKPcCd8ymnjEVefwsRzY0L4y7lZZxfwOF3+k79mmidhHBrp7+HQbVAxEF/wMSRZLnKDR1au40dels8yfsBXymrLJYovyFlK6g/0wvu6oCeCyQYbe/eqvwX2ssk4FY0qNd8KA88j9u7OrJUEyaYhQKJRs1vIyxPSgbT3w3k6+7f+HPXpYGcJZozpkHwCJXH8ONUvAFkYHK+9uoosPujZc3EIpH06Hs5j8ePpEFluqQne6+GFV/9qcg9OZAjrbbea3mwVEcum0cSDPGzCQJDPljNzXD5FMd/h/iaQjpWEWC+xprppQQup6TfxB3OcHuH42MMIYa7kYMZRkLvtTI9Igq2bMR0I2Yh/UeNQA57ld7KPRtn/tSgV4y2NNJxZGsfqWe81HvQp+ss4qHH3HJDS+1aV/0m8lGOC0xeCVBNp207MGNwDrTZQxLj3qVEYDV6Pz9F5sr7iBIGPs56eZI+yY/PRnLhF793x3aCcUjefS7ZRH4P8LIxZNHdRHdevBhc3dRa9iryeXS3P3cVBZ1uEpLKVzKOb0y0VfYva364uxgPMoCHrHGopai/l8m9LcUmgkLUEQVn8mj3NNTX5qzTI1uZwKZOflcvV4/z6MkngFBfI0wIbhhCKTXRknj/tMazpfpZpVBSSamuh+oS5StjHXU0Us6npYFH3vA81f4a1+Y48CWK5oNq0gfi3aDwamAcITbzCwNQQSjwOi/l6+4YbSEiN0CcHW2uuTqct2IB8=';
  const _INTEGRITY_HASH = '8b6b673e8c65ee9633f6f6f19b5078bc5527e02fc56284f26f885e4802f3d3ea';
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
