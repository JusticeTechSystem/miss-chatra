// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iirFw6OHrzyzJTfflzV0vFczneM/iYO2r3EBJfUITTbdX1sWOai6OFe0BQoXsAJp4d26y/RdMyMI+kahfeZ4wMG+pcTmKMiBYfNOkvClQZoDUjnXCMRc0bM3D86lfUSddE7rrYZ81+5EQhCeezB4aO4uVvqJf3KhghgoTf2BEgY/XQ3W9Y7ivVTaI1//U03fuvpZDy7MJJQx8AuBlr8Cd23eRqNO/MK4laOzU3ozE9Tk4o5LOJ3L8H8ituOYOD+1rNuPRBjW9vpelT27ZWStQQCrPJUAL5045+NDzO2j45fb5Bo+4W1wZs0/QsoFj5etv7QF9WQgnEu66f0G2q+2aLq3ggNbFuR+I2kiZc4s5+rVEzTeyeix7UDEDVYPL8SsrMq2cEaEVBkmdbHHReskXKrVGVK5HG50aIPsxkYvej3fmTB9rQ+aZ1xd+EbXB1D1sbOYoAX3IbjBXFAtiz7BEWcCRAj+bvuwlCvjMJarS4PamBzzA1iH8qGn2gvtnpZY472AjUceuLVhiUV6hmh/igojFG1y1aZJv7VOfm4gdxi3iB9cdr7muEiCRd9MoGbvFTd/u6J6TXien266GaBZuNTBo+zed18LaErLZvh4/5lz+Bh7Hz56+SlZurPcVRlih6i7xRGV/CoWpGMGla/M5xycd8MKPskPguwZ4QH8adRE7kSeTIwQGJvNgHuzTxRyWSEJzxBXac457qeUYXry8qX/i7Yb5tEe0eUtmA1iWrPLbgoHx7CHi88zmru8/20EJZc0RL+vLC//3EVl/rFIVTdhnaHlo7iHGPDVL3zcge4fIybv0cFW3MTtjD68P0wZGvCnXQcO8jCghkeEwvIIoJ9QnpIwZ+nUFx++CQvbYAzLxi2FKMkFJdOfvVAF1+pDfMhUPHSbgdIGXiZMbNaBz9fhz5WPUcfPuz7LrqC+2zZn2Lk29rPdc2ymanQq1vzQAETBgd2ypUihWrYcPZl9Nuip0rN1vph5Px3aZh6brxX4wql34Z8mx3XAOZ4r4Z6kJ2Uh6YtktOQ76Y2XnXa9dHzZgB7SGZxzqQ5qBNtWruAfK4kSxR7F9uwvyxn9ZxMAPNaMeP5NGfLw8hzvbKNnm8+AKsW/vX5uXrVMj6AK9qdWp9YaKD0P2KqRPvrgQHoJP4IHf/pQ+nx71ylQyHJNP9iekgZFJBA62lNCaiG6TIe3CroB2sPJhAfv1uaTwy0irfzbhN5HtqqWzygedVmJdDFEtVAP/KkibgmGwd+8WvgvYDrVfdwTVtRpAAEv22fh6r+Zj+kGl5d21tQO3bRSfnSWvHKEZdeKdfyhCo7jkiAxqQSkJzkAvkc8vyCRuEyDbHkgyMwd7qCGp5PV79ruX+1SqOfTnhuB1RgPtjtArKCCuKT0AA8iG4Mxnfv4Z1/jfo9Tl+qtMb0faeo5EomfU8IlpTYyLANaN4tidhTOWuvu/uRBpYTt1EMfQA==';
  const _INTEGRITY_HASH = '980b8355e163f0dabc8433ec24ac8b3b2ca27c561677310d7798c3bb78d9c6f9';
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
