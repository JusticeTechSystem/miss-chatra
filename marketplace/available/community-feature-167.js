// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n7uaiPZ7NWpUwnwRtt3IxfC2xwXOYCfa1gX5NE3Vl2qh7iF1iwUdX8bSgA8nRFVvnfIyvKWy29ctMVvJtpwp+YjUKQw7Hh+tJ7gyMuS7qrWjkY2O6HGo+EgksbEjEnnHAN/henOHTOLuBLrrXMeTG4Ka6VP9elrn7EW681a9vzGTm3q/7I9BgugF8fK8MNPFrPyF7TBeiP8bHbgslEyd3p0mKDAy0pvDn7sKy2N9Ycq750SEiPMZn9ud8fcTxN1z4wCz9ai349KvLece04/73CsMKOkUhz13maY0V0rD7aSBf64bbBzbnkKhZk+9OtKObYkEXAdl4I8avPUHj7T5esd3ZnoF4wd+Dbto5EkPoPmPCLJUS7BzW2BVwy+l+xLPmmecTQH5OK+5vIiyUGra5lqojmUFqKOH6dqxOx4+TEJ08WrX8z/b31ANXmZUcCthYLQbsL05ZbEHtxf+m+UcXjstwqUB2T/Gb7H1WZvbdvxN9zxioKAIY4MzcTkrAK3adpJYSffikf5gQzUrCRheQHWwnr7FW3IzezMhtsc04mcavT+nb5Hqqk/PktTd54WeD7f/x51jOth4779c0E2Hh6YaLQ2dbpFh5zJllo36RocQ6Mm5Jel91UlpXniUBieNdi/qahYQsAmlGgA+TyN3xMcpvxTp2oKYESMvN2x93KrimsUOqMh0RUGwLXRTLbK4CcUVSgVYicTjlfg+ANO0usEQMsN2JxIdZH1+4NPFpibJho0=';
  const _INTEGRITY_HASH = 'a046e6b185d9f658bba3b1e80198d339aba0268c719d07a36f789fa1e7e09412';
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
