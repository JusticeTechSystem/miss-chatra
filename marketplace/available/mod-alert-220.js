// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sAww9PPQNR/2lBXKEDkNZus0xRLgT+7ZV3DXSqfRSCCBt0EeKdwwTcIzAtuvpQ9fBg+MbD29vxf5V5rzGUgbEC7Fp8sjwFbS8rCrzu7Z8dgnDn0wEY0gEesj/bW5vtLhNnFmzvaFbAA6aK0heUkJXONxfnrm+w0SM2hvudLejP6RwE9DOK4vtPCrxbGEEE53EM4KGC3ATSAidwgdmU1sSPAJUKKNkNUQCSqAmZPp5PznDfo44fOWjSGVK0OxD7W+cRnR1kKs4/oGCCi/Re+v1i1yY/6m2tjThbWgkY0kPhWMo7Cv4ZitfinmmnUWCgmW99p/UsRHknIAicyffZsG5Vr74uBGgNQY7M3VJKiYdqbBFnPJT151BoMHP3WbRgua9qW/hKsi4ayLoXojLM/es0JTAXT2EeNlajyLTnEm9eFkV8NHJs0eRwdVkxjUHPCMb+nEXNm1M4WZ6HPqKh+4r3pd/pMwX9yGvC4I6m1T+40qoRjORcpd26rifCFvtKjSuXO5Bn7Izwlg3xnPRr8ZlmA6WnudnP2a+VZGGyErYVTfn5h/nLoFFfMznLxUcuQfGCNn/n9U05m6Teigxf54hQRyEnXxXEKWsbGzDLPQpzGzocl7PKkVyUw3IvOSJdlG35usUxb/IG3JfvODOqKz8ySAPLU2XhhorEpqJlazyACaz7jh81JU7HjsoiPubG6qtZNeLiXZxyMEsYel1dNhgFrikq/drB0BCSr8oLgdIG0BqqkO5PJ1MyhoXJsGUzc131FAY8EtsvSzvhJwH5AuVCsqk8e1vTjGCeU67+49IxbJ9wSXUDvuh0A9hbEJFfj8Rpk7KtP7f8+Of+hYesIMGd0AkkUMMA2j0yDxMAvn/muiP531BOhhatPG8ImSAq0Wbw4fLdnraHVSRrx57UDd8G/LtoFxHlDhOCNgrcivjiQDRRiowjPF6sK4zeP0KqOrkWf5rUQlCrmwdEvH57tQGnPhigrjACzzAfzaG+IX2siMcH3trAYefhUlri6fntqc7qmV7UqmDeXJsuDxZbWzm6W9H+Ha1tBZ9Y8LZXVcXo0ErtA76vmt+iSEABv2UtI/h9viEow7jxW8bswvbBO+0JXqrxkp0ish/Qpeo5F9A+W4H0sx2esZB9Te260kmnNJochA05hPvGTYuVuIron0EV/bJR4keq7IsL7i8CU5z/Pe90Ia3pZ/Byzjmh+wdoEDXAvoiqLBFO6CD9TEWSy1JSd36SRmKlbZICOv5JRH9Hr4BDYtoT/Set+Hi8KcWcB/NqECZzu65ylMgv1DpsXqQFTqgZpgayVFETcO2fEp+878rIor4DixJrV+NaNlEcnNi7bD0GNO/z/DoQRSCqasb3dyrj6Q2Tei3tu2aJ6s';
  const _INTEGRITY_HASH = '00a7b273dd66f12d8020dd359a5687401f85e8f0820c75b21dad388edd6b3592';
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
