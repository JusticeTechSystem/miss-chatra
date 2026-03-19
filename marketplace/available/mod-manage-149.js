// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '496Qa5BhdryDFVQHn297vuM5eWQgfSvN2wXgVdJ9fXegb2lu/D3O3xLzvcrf24yVE/wSMq8JXY70hfK6MXV6TkhXU8CuK5BTk36TTS8of9toiAJicsxJxR/SlSO1W0jJRRPrpn3Hni7LAFK0kGDGrZ4nbrP5MB+epeKbeupj91roQ6ThYNvrfWLs8XZlRZPFxqU2ZsCAbN8MUIv9YgK+O+2n83df0EFlkeS9uCHYma73bFjZRlC7lTXHLfif1gfJNBbm+TqoAuIgXpSKslCZtbYxYKhon7orInzOQ1TlDPjGrnAlt8dZ889NE9pDiE/CQspNQ1Sb6HS+vq0h5YZdGfXPST4y9nSSA5XUAtrcerbL7otViFXw570sUQq+2VBvlOqCwsb4kkfR52+i2/29RPzqo/3+6Ix/7EkzLrikqKaYa2J40z8RGdaAS/YPd9UbhBakyl9I4vPnWNtMez38krMIXfWSQAsBvSBcT3iCMSey03WISMwOQQZRG9sucxjQPI16zRCCmNjOPYUBpOXSP3RtTlh2SJ0p/1miF4HHjiLw1ah6iKf2i/6WuoQ2W56ONte1OncJ35wkwiL2ZUSCsKtPpshjBMMPQbPsTl7rad/kApN4Yk3VlmeVEoRc7T02TqJDTLehJzeaV5Umde1LysYrwzSRas6z5hquT1Pz4nMTamUE8r5NLcAqTGeo/OjM8dQnM84Gl4MckJZjKzmwB96HCAlKRzigSoRA9stUTWPnfIxhs5OsDfygzy8jmXVmycW2sQZxNAhzqgk2hlzIZGNKvVb3WjOCNJcVBY8eZsgDcxOBlrawbhoWLzl+yvyqO46mMODZdFH7/IIOW1mLjFdJRgXS1ziPiMDWDRPkND7GaBxsRJbkVq5743Px7EU464P3z5pX0oxCas3S7nz/CJAGKJ2EywDCPFw6GQrQhhFyTJIYhItH7E8YsiFQDRbqlBppRxh1s3yoJ5eVhQHF804z9iKlVr7zKGwblIQhe8XytQKgJ/RJpBZcnjvatnbBqWN9jKZd8x7mLwo2t6g4aUOIS9rkSA9iHzdjG2Mek02V30h5vJ3IR+k1h8ky4M0bk//V30Gha+wixjyfyDpWuNmEgGFYTCui50yrNlfYgOKJ/mau34qSPNUJJv+L6O3f0fNmg/+fAgHUy2XcAqpFqJUjs9IWhQIdOgE+zbUncAu2E9l4fW3eVRv3OFPKi7TKHWiCUgAGK2yLbeWrcOi0pSw2+V24/mQJxGZseLRi0otCLcpAaXeS+NV6KQysCNdE+PgqaloK7RTVRE2SNDI0sLqm7CuZqP+IpAz5JoxSNFDtfujoaksxVAW1tJ6wGpXAPBJ/THMNikYpkCi5SZYio7QY+Fm6ErxgnLemq5OTdofsj+nFaKSk0Q==';
  const _INTEGRITY_HASH = 'fe14d3c90abd785b76ad29d4259d33dbf7e24b4dd1be169644e9e03015754566';
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
