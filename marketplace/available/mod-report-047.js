// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VKjR+u1XgwNjU5D/rYLnrFbkiq+cuu7xd0H7WJpwXDu7GZrXvZTGflkGlatDXTpsc5d28opUUwaoxMnCmZIHd/2cl8KvtlRZCiCzvNpaFo5dR4JvKWajWuY6F4bTMa5joajbb0aiSfcY4vhuNJ4R67EFAnVoeZNlmEu+XSgIyprrJf3kjK30uWqGkzAJ3mLhltBcghswVQboZdQGQUslpmUA6XgI9DImuJePmupkwzjpgRGJcUEhPt7Xe2IUx6jq5HElEOXCODZK5i0MpKktztzqUbcU8m47ZPYMoylcHqgrjcBTL1QWt8mELXqSQziKcMwgW3Fq2olKYc0GqB+d1RnxBMDIpNDk159hKtOP9j+i9oY3iayN0Ms8TpPVCmRtRNxs+9i1WaWLjqG1kuKn95HcvGR9GPeDrwvGz5H+bHQr2nJFXn8VsXRVdWiHljP+zTe/d6FJ8k44pCEBWc7L04QQNXInCAxX/7kn+Y2+EpsU/iX+NaN3gD8CtcpbhybNGmoiLyMiLaBP2ceSc7Y7BHRxiHK73Jwu/eKRovtzwn0mgZUnPwwYcbPPKr9RaR6ootWP+MX9KB3bLJn7eXx7ckJgs6xrtcAjTv3/1Tt1XGw35xiztB90ByfxkQF7YPifrpbhVhHzdTv/rOLUbE5RqD/wnfRoSCbMxtxkqfyQHe1nKXIXi+oYoI7PYv8L+h40LQ9VSBi9nPADIZbv8ETPcIGAV4uTg+R74ZCJqPBtVJnvDXcaick4dw4pgvNBvudg5Y4fL2pCRWNTz9/Ut9mydyKaQrx9k6nz+jG/jL1DuSN7We0kOdcr3odpPUWtECGcyZMOsQPFxN1EbQVT6bNWi8Zv/3tPpcpi3bxViuzgeZwo5ncIY8YVQ1ib9pILXwiupRVcynz4i3fo70ZjaaY50OTMTri4+esV4n/t4Er8DV0Hv0L9zB0BazSWA5gJEMUGI4FNBmgslwi93Yxuh/ax0wsrV9VWBIcdt/BmUpVfM8OWdk3ZIAJLwHAdvmjrZTLMEW42d2YMl+92JuoAo23heodq4QAI2i18YFArl0bZBvnBRi2VEUR5pKMKFC9E2sO60cqB3Jfk5O3yp38Y6VzVdJ3aQ0077Lw0YTSwQ18B10FKaFMosoNrLuDGwZo8VeZsfZ8XZizrCJasrCPBBAEMQaBJTtNa7KgLBBgbI4zedQFRX1OzuR3HQvAsBNacHX88dm2uCr6+Ygnq2Htj7TBEUt79E5kfLpAUYNTSuqPvx8SOgZaezjH3PKYCsLKShzwSSIO1ZeZ5v9M5NWfAY4RtdOvbvoCqz6KHdCQCVUhBob620uhp4EFqYNRdImA33BnRQ8VGwWO64WkEBZs1ZXBNuMWKyCtqralQNkMB2ThUtJM5Scg=';
  const _INTEGRITY_HASH = 'a871c5bb6f48f2c0705d9685ef5816d849ba769960e66d61e7616a631b4750c6';
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
