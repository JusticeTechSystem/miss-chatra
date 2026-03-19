// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LtvuyjQ9z/CZgpnVsyHMAnfdT4SodWjTgI7pvXuzVL8+9nCYcPUoBkVpRkPHynmSbM2QT8xRD5gr9rZzUL5EbIc1i7fVWZq9/7CGxR3ZkZbb16P1jdovATNTm6qiwoNXqvVCoKi0QBkQkJt90Ri/nSwtOXTlsLrrGWqG+C2jMClVtZId068ShqEraj8mx8WkoDOMZ7NXjJP/sOox44AOIYppaexcb23TYLBnPVaDkgDBaJGvGEjkjWyjKIMJwnZkBgGUhrDVY6XjAVjCF8z5Wo0cTLJpOD+j6qmqFcG6DQz0DD7h04fhWS9dEWa4083vri41iVlZLOZA4TGIhOdpjI4cPbkHYUkKkGhgcf9/gwKby2QdMG83i0Ypv4C811+AeuPdCwex/WkXKDU4Y71Pg4H6Ahp9YIetgA6XtW9HXTe0SYQlkdawNpu0ibYfzK8SpPAFR7j7qgFhxPzLCsRtfg8rNl4JYja0h1XfME3fDmN59hIVyrAxRmtgJOtpoPAm+rb8xlZuCP6/DRHibYbWb1RY3q8ovkVhiM0GspCbi2rRmCDom1E7mdriNfh3sXNvlD/6YosUE4scPTPQfr0uajCxGHQs9UMwUDTeKwP3D9DJPuaF8qCwKNTHC0phaFDD147fdCf2szuMO2r9UgLNaubJ1zpbcVZ1+XiYoBqk2xpgYN0m2WwrDgyZ5s0Tt4QxYI5VOlbKLUA2sRZXL9goNjnWx11V4UK4Vjn8gurbhbsR5e5LtsiGb6U7QJWNV32qy2UoxXf2udwGQ+M+oypEqNmI9p0MOWcTaIHAV8sCiVJVg6gohYtsVKMnqkAgp58PX6G+leTAZt8EEKXwIVUHg4+vR4RWC8zMI+GKCHiaVRfM/S1BRRNQCu1HoOjoIzFhXDeh9J809wWmuUQvPCyqjwVDepgbYmTD4obthGk+QtmV2rBajZkAzWrR+vHII3YQoRADzTz1WKZNFUdfToBotyF9HhuOd2VrE3w2aMFXYbS8fNV3cul+wdXQpY+zWG0mkqtEz7ty3Wcq4tNKC1idbDg6FJX0OW0Qs8eNIRVJT8tFm3FNDQz5mWS+4jxipfoTulFnob4GaUblssDfZoOkrq7u5R7yWLCrF2gZD5uDZt/WuKAbo9f24WMJH3qC9lCp+IRDw6xs+zXSh3Ql5FYlcegMYeRuZ1T7f+Wqb13KfmCE/rRnfKqE2gxYTpCrytSxeFN65TpLZ2eHbKaC8qF7kQL331gsdHQJj8Ci8Jm2UzUaa0juEH/OJsd0Dg9jVah4bmyWCQH1mB08WIzlbthY8KDhw3TvpJ8sJ08fgV8jXozrKA0OReGc+kA4MpJkkyyO1Vy1gEdkOogp/yRUd34WqzHpEcrzSsa2VYrKGPAwzoS+Zl1o1DO6VPpiYQKXXuH3I71b3/0Qk1YDqXSekTGLWwdaB/uwPnCSC4SURz+zOvluxTmWV0LqxgERpfihEhgero24es/jxqzHRKQKdr+SdS0hPazCB9oXlW6+WudiSBJqj6ca+r4Wa4/IBgAARxslHu8hPRUbe5NJ0PfIu74EaYeBVhlAulpZjTXas+ZTbpC02aV94GpUVi57sP99su4HUVuc+jLV7V5vtpIdqc3ny1IPMgrEjvMVAdF+gubAk7KqT8ntPxI9UJossWcmhf8W5KCIh+TY4l/HPQ==';
  const _INTEGRITY_HASH = 'b1c3eb20410ae4d4cd25c2a36cc40e7cbbe1d062da9d01221fd8c477ef7ed145';
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
