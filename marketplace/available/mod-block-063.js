// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vz8ltVcUwwSZYQz6o0FSUw4PYZsZBmMr81XVRWKas61bMxSFaE3xmVDPvbp6QH93Pv6QuORBrIYQGVn9PSmhal7NyOKvY4rCh1m0fZtteUuIU3sgAG4eRBMnDPcXbxVl9Aget/4und2tNxobIWlILwlWyCER4108IneezRUZzCes7oRyRofZ2GQUqiDrTktNZPYjLKFTTS49dle1cZBkYdq87jw5jQdz1cUo5Ztv8Lczo1Tm9s8gYO1cK/3EkHjj1KiljaJJ5PocwG8vpVOf37qRWvBeRm2auUpXGLWjlZZPGM1zsCoFMXGS180jnferxVhFfo9IMSssObZVF7wrRB6dH+VbL7j4cuWLzagrjBfDuVUtyNa+5FV1fUP9zDxb8tBiWG1iJoTY4vV32KPr25IhwEbpor4jr/0K8UCOqJivCGyGLZlAmQtMxFJKQfulrefDbjBGtnn4Vl3cdlLLwkE3uhd6RxzObQyfX4GnTtr65KX6wIQRHG1o7rASzHzzAeVv/bgJyfT/XR5+Fxyr9w3safb5jpmigj3a7EvfvG/3FD5MOUUTQEPqwRzp4S56mphamUDh6NXC5WyLV34fBZR/mxgxL34SxZPCU3etxUrfvqBBTlHZYvBplgSqIe8VRKybygVrif/IlFHY3X19GesYZLDkNbbUXI3pin/KJ+eNdpiFq29kbJkECw+Qk2LSEjL5LrJdba6iKPRLlFjm2dgVTjdDUUTidnQTcws/3LD6nP9n9iPzI2cBPosyZXidUZHuscFJeHDFqsbYZhyyFL/2M6YxN2Il363zB0eAdsNfBV0bweAr2OqkE94LIFWoYaM8MS7t7hbqGMb+qKdE5mBzDf+d6/pymdpwFNTiAO7zBaJ+TOMvId17TwXOAxftY1Z3J7v/zI43XfMwmUUR2wjmhyzXyJX1C4X8Rzosu6wbHBCL03/fymT7DAYOGLbpwN2fYrszfMLfnhEhrUsqsYDFQozV2qnBPIBDEy74zIFJWzOwBctTmOKdrXLV69ye/8b/wtgd1bNrDVBhHoX0MWn9EfTC9HHGr+JIwpKINhQoQ3rR3+K55Uraor2lEdanPpL+Y/5SouAMtVCSCO3IGfHV7p8UDjACKms3tvKUwhTkOLaEPHRLDDf+SOmpdBGKSF4zQu6SvEr+lk1sSM3cf9Z545RImktFODjeaUF1t/1IxGR3V9JdAyt12A6JfO56vEHl+F+VOwDTSE123fMu7KvWwRXXv8NuSqsdaehN3QwtaVDl34021SIiCbwP/Aomku80oP9LNkklfS3RkzfnNL9CsNeAy1/4N2Py5A17xDY2gWG97wRZpnW58TEsuv7B6cAXJRaAaX+jjFZCuuG+R5NuCc+dT7MRnA==';
  const _INTEGRITY_HASH = '6e100b57d93fea6f6cfc8e71b34e08ccae790f0e6eda9a032afa81ed753546ae';
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
