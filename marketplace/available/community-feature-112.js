// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HNKlQr1EzsvC/nh8WOj0ODOw6IAf/Ovd3fRmrX+yJSKKLnMj+yfwcv2UFfysW1AVg9bBgkc94nU4GjtRHRx137yoe1GBmCXr+Ie6L93GRIXU7N/2ShWXpcyYBMiZh8SODFmAUix4QqcptUOVIQOyKaIFPn+2nInIeSVgtidPM1VLHxtdsbb01Ef1K2lSR8DSP4oKKmBlSwi/w3ERc/6r8K5ramU9zh6rXFMss1I/8JcAXQ+88VTeG9Yn/iJNv6s5kPHQkFp6Q+KXx1K+ELlUlWZbWBoa/XPnaXl6yuSadoC/2RiG6y+0vxayu2Bu7J/gAnIaARmbi+OHYIiMCuA8m6Z76IPJmT8ffczxLQ8czn60ASwui3ZaydgQ9OsFW08T9GSAo/TqAjVEhLxJXrYScGrOVh6wisrBRjb8V/7vR8NEKKnKU+/gMLB3iLzD2kTO2b/pCLlARUzzUaZSThNzVvjbSs+9s3BnCKTDoKyhi7j26+GBOIB1JhEPoA020w2+9aRjk5ZTJ/ATtzHKR8IpYGUXbHBTDcYEvdx1IRytakaQIe1OzVpRV+FCFovFivq3e7CQc/pecVhiJ83nbAuD2bjDdLlD6ALKVhUQ4JD3uj5QUMRx8uhyqn9AewR2VRqYx4JpLuu0mvklSbUruLjWUfhaCg6/YS7oxmQKsb36bk4l9zrA9p0tL+DfqRCjGky4GTFwE9HQ0AhjWKoR2IepqZ+Agc37+uPNUIBAMDV+YA2vqow=';
  const _INTEGRITY_HASH = '18272732987f321bafee37e76f2ba3ad2abffb9f925a264374f27e8ecc9d39f0';
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
