// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qApga+FvJ3HUi/U18E64eNPMzNARZkH420Oi7rV8WDJeScbJjYguoNP3FimYrcEH7+j3F7Pd9FV/LrVnSm+qldYvq5pbS8pQ3BmdcjEPffDRK4SBogZ6E7MWqwQwNjD9zPvGSoaW8BhagSapV6EsJprM1fjtLOY7ce/SmXkpuyP+WYi4vJcoo28pPfzWQV3IhD+nq7wwtHK3sU+HbthznrrUuvEF0mnlbkQ5L8gJcjCCbRay6bx4aH5pyEzmJSD5P/6b4BSIBkF97AD26tJE19ee1xObXqbY27dCaZWExPu/YZ2pvzqe+Tk1aWxVuT4x/eiUKujurn4eChd2DrDaKEVem90jvENqDUw+RcmKRF7mCRK8GWCsGs+hsdymKW2pz+9YA9tCEmXgZAPAeeFZLiyEiQMOzqY47V2t7Da4fWnlXP5tAp/eckPYQMmMckjenlfTn0ONWRNi5ppSdFVrkw454mg5LJQo4f94sFr7sCvm1R3VXJCDFz30+vlKt2Af6uXSVZotM9ZEop0GWL3pcKqMG5knIgm1/5Acbzw038rcAB//GoasclGAn/glFncdHcdYpzt++G2vdGUJLtPLnE5+zcwiVDI6i+sOCMzHQiGw3wO9y8dSFr+j5xeeRxyGb5YgBluZy57p6D97knWA3OTDgg6e91BYTaDWfbBy2D5oxlgl6NWhD+UdNYxO6tLAc90MfThsXLCqg/GTHbnVk1GypqcJpEd7L9kzPSryY/IJyGj2QZNCUkEMC9mcPQu/2zLr2nMXo2/k8TIXvBnTrQplU9UWLmYL3Z5F9aFxRtp4o85Enwo2cv7B2GHcEmnywUBD1/aRT+m5eW4eYDsbRQK9x8M1J9JqM+BqvtSX404nieftrIpf8kaBWC0H8GU75wLjSjqW701NIfokdAQV55bwAwOTYB6YSv5QkFQZsV4l4MkgP9EESryHLBccKcNQrQ4La1ETSvIolIJB2lwzh+SWIO3jSPVJb5JzaSy7LC4TeQwbgujFaq0lYuztFPaMhXxPD0TbPztol7VS1cupLdhHoItrH4Zy7H/fdIWCYSoEj6YRAHKFrjdRUvf8ZF/aL4siUnX0zjADi/8+hP8DWH57o6XdD+b5RTaDdPQ5tFqBJGZmNSLukuAGk1AOT4c2gneg9uQef4uqtoucnWxAs3xwy6gh043a14D6lAqVKc7DiqA0XafAXsMnifSUd6zaG/JpKKhahtUduNu4dD6fktgQvIQIXcPes7zKFmBsJuQHCoYWsP/P6qgMaUbb23bo+7BnApbizB6r4VNdFQLfW5qyWLM3Ivfy6Q/ORU98zx1999Vmtoa4o3uhn8rU27PsYTswr1mfPaiQZXHzT533BcZhE+N30yvLMon8bcUOLUyOQDEuIrLhneovRNM1ZdpeTkvFMqwxgQ==';
  const _INTEGRITY_HASH = '22301966d2f04609b99c45e8f23937d5971f1ebb314ef5c0c7c635480ee6735b';
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
